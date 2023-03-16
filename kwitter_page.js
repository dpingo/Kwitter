//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    

    function send_btn(){
      msg=document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
       message: msg,
      user: user_name,
      like:0
      });
      document.getElementById("msg").value="";
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

message= message_data["message"];
user= message_data['user'];
like= message_data['like'];

//doubt in line 39, 40, 41 why are we creating the variables and getting the value from the firebase.
//why can't we get it from the html page only
name_tag="<h4>"+user+"<img src='tick.png' class='user_tick'></h4>";
msg_tag="<h4>"+message+"</h4>";

like_tag="<br><button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='count_function(this.id)'>";
//doubt why are we giving the value as like can't we put it inside the button only.
span_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+ like +"</span></button><hr>";
row= name_tag+msg_tag+like_tag+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function count_function(message_id){
console.log("my message id is "+message_id);
likes=document.getElementById(message_id).value;

if (likes==0){
  Updated_likes=Number(likes)+1;
  //why are we getting the like count can't we extract it directly by creating a count variable.
}
else{
  Updated_likes=0;
}
console.log(Updated_likes);
firebase.database().ref(room_name).child(message_id).update({
  like:Updated_likes
});
}

function logout(){
  
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
 window.location.replace("index.html");
}