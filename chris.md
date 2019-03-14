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
    // or <Redrect to="/thankyou" /> if you are using react-router
  }
})

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++