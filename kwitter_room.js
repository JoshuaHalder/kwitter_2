
const firebaseConfig = {
      apiKey: "AIzaSyBEx_iJY6U7Z5v6vnWdARQhBLJdFS1a08Y",
      authDomain: "kwitter-e9df7.firebaseapp.com",
      databaseURL: "https://kwitter-e9df7-default-rtdb.firebaseio.com",
      projectId: "kwitter-e9df7",
      storageBucket: "kwitter-e9df7.appspot.com",
      messagingSenderId: "1080013258544",
      appId: "1:1080013258544:web:1ecf1203a498735a2312f5"
    };
    
    
    firebase.initializeApp(firebaseConfig);

var user=localStorage.getItem("username1");
document.getElementById("username2").innerHTML="Welcome " + user;

function add_room(){
      var addroom=document.getElementById("room_name").value;
      localStorage.setItem("roomname",addroom);
      firebase.database().ref("/").child(addroom).update({
            purpose:"ABC"
      });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function logout(){

}

