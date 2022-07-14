var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

admin.initializeApp();

const db = admin.firestore();
const auth = admin.auth();

module.exports = {
    db,
    auth
};