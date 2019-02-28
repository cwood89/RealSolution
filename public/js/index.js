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


  