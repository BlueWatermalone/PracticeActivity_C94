// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCO2ONB6Ir3H2E2O9Xz3lk8dmE_b_ottu0",
    authDomain: "classkwitter.firebaseapp.com",
    databaseURL: "https://classkwitter-default-rtdb.firebaseio.com",
    projectId: "classkwitter",
    storageBucket: "classkwitter.appspot.com",
    messagingSenderId: "502319638260",
    appId: "1:502319638260:web:08bf1f9e71d767aabe60a1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "addingUser"
    });
}
