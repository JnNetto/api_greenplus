
var admin = require("firebase-admin");

var serviceAccount = require("../../../../../plusgreenapp1-firebase-adminsdk-75h4v-88923cfefd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://plusgreenapp1-default-rtdb.firebaseio.com"
});

module.exports = admin.database();