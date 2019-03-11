//conected to google firebase


var config = {
  apiKey: "AIzaSyDo_7QtEKnbuuq6jBSejiSAYCsUTcbvjqg",
  authDomain: "atlnewlisting.firebaseapp.com",
  databaseURL: "https://atlnewlisting.firebaseio.com",
  projectId: "atlnewlisting",
  storageBucket: "atlnewlisting.appspot.com",
  messagingSenderId: "13925709967"
};

firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

//write the firebase data into mysql newlisting
database.ref('/newListing').on("child_added", function(snapshot) {
  var updateListing = snapshot.val()
  console.log(updateListing)       
})


// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function(){
  $(".homeSection").on("click","button",function(event) {
    event.preventDefault();
    var thisId = $(this).attr("data-id");
       console.log("Button has been clicked")
     // Send the GET request.
     $.ajax("/subjectFinds/comps/" + thisId, {
       type: "GET"
     }).then(()=>{
         console.log(`${thisId} has been clicked`)
         window.location.href='/subjectFinds/comps/'+thisId;
     })
   })
})


  