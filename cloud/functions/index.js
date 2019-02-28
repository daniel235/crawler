

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express');
const app = express();


const authenticate = async(req, res, next) => {
    if(!req.headers.authorization || !req.headers.startsWith('Bearer')){
        res.status(403).send('Unauthorized');
        return;
    }
    const idToken = req.headers.authorization.split('Bearer ')[1];
    try {
        const decodeIdToken = await admin.auth().verifyIdToken(idToken);
        req.user = decodeIdToken;
        next();
        return;
    }
    catch(e) {
        res.status(403).send('Unauthorized');
        return;
    }
}

app.use(authenticate);

app.get('/', function(req, res){
    res.send('Hello world!')
})


exports.api = functions.https.onRequest(app)


