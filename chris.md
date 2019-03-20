# What should it do

landing page should have two links to log in or sign-up
after log in or sign up it should send you to the homepage
if you try and sign up an existing email you should be redirected to login
homepage will not be assessible to unauthorized users
if user is logged in the signup and log in pages shoild redirect to home

## ToDo

on client side i need to check for verication and conditionally render
make an api module to call for sign in sign up and log out
make a log in component
make a sign up component

use this++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

axios.post('/api/stripe', toPost)
.then( (response) => {
  if (response.ok && window){
    window.location.href="/thankyou";
    // or `<Redrect to="/thankyou" />` if you are using react-router
  }
})

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

need to figure out a way to set a life span on the local storage auth thinking i can put the  check in the verify function

There's no built-in way to expire values in storage. One solution is to store a timestamp, then in each visit compare the stored time (if there is one) against the local time to determine if the value has expired. Example:

const expirationDuration = 1000 * 60 * 60 * 12; // 12 hours

const prevAccepted = localStorage.getItem("accepted");
const currentTime = new Date().getTime();

const notAccepted = prevAccepted == undefined;
const prevAcceptedExpired = prevAccepted != undefined && currentTime - prevAccepted > expirationDuration
if (notAccepted || prevAcceptedExpired) {
  alert("Disclaimer: ...");
  localStorage.setItem("accepted", currentTime);
}

============================================================
create model for saved properties(keep in mind that they have to match with the user)

many to many relation
?????????????
db.users.hasMany(db.subject_otlists)
db.subject_otlists.hasMany(users)
==========================================================

api function for saving property, getting saved properties, deleting properties
express routes for CRUD operations.