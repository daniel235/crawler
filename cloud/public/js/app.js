const express = require('express');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = express();

admin.initializeApp();


const authenticate = async (req, res, next) => {
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




