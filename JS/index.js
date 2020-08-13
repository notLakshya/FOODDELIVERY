var firebaseConfig = {
    apiKey: "AIzaSyBHXjSHNOxO5-pw6CgXroKO3dLBxLXJ5dA",
    authDomain: "innovation-ef3ef.firebaseapp.com",
    databaseURL: "https://innovation-ef3ef.firebaseio.com",
    projectId: "innovation-ef3ef",
    storageBucket: "innovation-ef3ef.appspot.com",
    messagingSenderId: "934741543864",
    appId: "1:934741543864:web:4fca26fcaf67b35f399d4d",
    measurementId: "G-PE6PVPMVHD"
  };
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  firebase.auth.Auth.Persistence.LOCAL;
  
$("#signup").click(function SignIn(){		
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
     var token = result.credential.accessToken;
     var user = result.user;
        console.log(result);
    });
    }	)		

 $("#bye").click(function Signout(){
   firebase.auth().signOut();

 })   
 $("#setting").click(function setup(){
   var name = $("#name").val();
   var phone = $("#phone").val();
 
   var rootref = firebase.database().ref().child("Users");
   var Userid = firebase.auth().currentUser.uid;
   var userRef = rootref.child(Userid);

   if(name!="" && phone!=""){
 
     var userData = {
       "name": name,
       "phone": phone
     }      
     userRef.set(userData, function(error){
       if(error){
         var errorCode = error.code;
         var errorMessage = error.message;
         console.log(errorCode);
         console.log(errorMessage);

         window.alert("Message:" + errorMessage );
       }else{
         window.location.href("Main.html");
       }
     })
   }else{
     console.log("Please fill the complete form");
   }

 })

 const restraunt = document.querySelector("#restraunt");
  db.collection("Outlet").onSnapshot(function(querySnapshot){
    querySnapshot.forEach(function(doc) {
      restraunt.innerHTML += "<div class='col-12 col-md-6 d-flex justify-content-center' style='padding-top:5%'><div class='card' style='width: 50%;'><div class='card-body'><img class='card-img-top' src='"+ doc.data().image + "' /> <h5 class='card-title'>" + doc.data().name +"</h5><p>Free Delivery on orders above<span>"+ doc.data().MinimumOrder +"</span></p> <a href='Shop.html' class='btn btn-primary' style='width:100% ;'>Order Now</a></div></div>";
  
    });
  })

  const Shop = document.querySelectorAll('#please');
  db.collection("Outlet").onSnapshot(function(snapshot){
    snapshot.forEach(function(doc){
      Shop.innerHTML += "<div><h1>"+ doc.data().name +"</h1></div>"
    })
   
  })