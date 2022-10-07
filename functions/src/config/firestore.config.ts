
import * as admin from "firebase-admin";

var serviceAccount = require("C:/Users/akostic/Desktop/Serverless1/functions/serviceAccount.json");

admin.initializeApp({

  credential: admin.credential.cert(serviceAccount)

});

const db=admin.firestore();

export default db;