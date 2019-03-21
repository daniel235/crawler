const functions = require('firebase-functions');
const admin = require('firebase-admin');
var path = require('path');
const express = require('express');
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const axios = require('axios');

const app = express();

const url = "https://jsonplaceholder.typicode.com/posts/1";

const firebaseApp = admin.initializeApp(
    functions.config().admin
);


const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

const TOKEN_PATH = 'token.json';


/*create an Oauth2 client with the given credentials and then execute the given 
callback function
*/
function authorize(credentials, callback){
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    //check if we have previously stored a token
    fs.readFile(TOKEN_PATH, (err, token) => {
        if(err) return getNewToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });
}

const getData = async url => {
    try {
        console.log("in try");
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
    } catch(error){
        console.log(error);
    }
}

/*get and store new token after prompting for user authorization
and then execute the given callback with the authorized OAuth2 client
*/
function getNewToken(oAuth2Client, callback){
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });

    console.log('Authorize this app by visiting this url:', authUrl);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if(err) return console.error('Error retrieving access token', err);
            console.log('Token stored to', TOKEN_PATH);
        });
        callback(oAuth2Client)
    });

}

function listLabels(auth){
    const gmail = google.gmail({version: 'v1', auth});
    gmail.users.labels.list({
        userId: 'me',
    }, (err, res) => {
        if(err) return console.log('The Api returned an error: ' + err);
        const labels = res.data.labels;
        if(labels.length) {
            console.log('Labels:');
            labels.forEach((label) => {
                console.log(`- ${label.name}`);
            });
        } else {
            console.log('No labels found.');
        }
    });
}

//set static path 
app.use(express.static(path.join(__dirname, 'public')));

const authenticate = async(req, res, next) => {
    if(!req.headers.authorization || !req.headers.startsWith('Bearer')){
        res.status(403).send('Unauthorized');
        return;
    }
    const idToken = await req.headers.authorization.split('Bearer ')[1];
    try { 
        const decodeIdToken = admin.auth().verifyIdToken(idToken);
        req.user = decodeIdToken;
        next();
        return;
    }
    catch(e) {
        res.status(403).send('Unauthorized');
        return;
    }
}

//app.use(authenticate);

app.get('/api', function(req, res){
    //load client secrets from a local file
    /*fs.readFile('credentials.json', (err, content) => {
        if(err) return console.log('Error loading client secret file:', err);

        //Authorize a client with credentials then call the gmail api
        authorize(JSON.parse(content), listLabels);
    });*/
    getData(url);
    res.send("check");
});

app.get('/messages', function(req, res) {
    res.send('Hello world!');
});



exports.api = functions.https.onRequest(app);


