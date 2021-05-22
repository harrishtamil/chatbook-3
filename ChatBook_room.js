//firebace link attchmant
var firebaseConfig = {
    apiKey: "AIzaSyBYnUQmquuomyzmIyfyFMbIJuZ48_lmZaw",
    authDomain: "chatbook-de9e4.firebaseapp.com",
    projectId: "chatbook-de9e4",
    storageBucket: "chatbook-de9e4.appspot.com",
    messagingSenderId: "162734868899",
    appId: "1:162734868899:web:caac2f22fed298425cb216",
    measurementId: "G-HNCG47NRNZ"
  };
  //end of firebace link attchment

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        });});}
  getData();

  function addRoom(){
    Room_name=document.getElementById("room_name").Value;
    firebase.database().ref("/").child(Room_name).update({
          purpose:"adding room name"
    });
    
    localStorage.setItem("room_name",Room_name);
    window.location="ChatBook_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code
console.log("room name -"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redrectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

//End code
});});}
getData();

function redrectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="ChatBook_room.html";
}
