user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome!! "+ user_name;
//ADD YOUR FIREBASE LINKS HERE
      var firebaseConfig = {
            apiKey: "AIzaSyBLhlyIjd5ChOuG2659JwTuteG4RSR5uF8",
            authDomain: "kwitter-5f712.firebaseapp.com",
            databaseURL: "https://kwitter-5f712-default-rtdb.firebaseio.com",
            projectId: "kwitter-5f712",
            storageBucket: "kwitter-5f712.appspot.com",
            messagingSenderId: "941668389859",
            appId: "1:941668389859:web:9fc0317477b630694e46d6",
            measurementId: "G-99SGP0NFK5"
          };
          
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("anmol");
      console.log("Room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML=document.getElementById("output").innerHTML+row;




      //End code
      });});}

getData();

function redirectToRoomName(name) {
//console.log("anmol"+name);
//document.getElementById("debug").innerHTML="anmol"+name;
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
//doubt

 

 function addRoom(){
      room_name= document.getElementById("room_name").value;
      console.log("I AM HERE 1")
      console.log(room_name)
      localStorage.setItem("room_name", room_name);
      
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room "
      })
      window.location="kwitter_page.html";
 }
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}