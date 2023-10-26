
var admin = require("firebase-admin");

var serviceAccount = require("../../../../../condhome-app-firebase-adminsdk-s2kmi-447bb81faa.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: ""
});

module.exports = admin.database();