# to do

model for user
{
name
id
email
password (hash password)
}
model for userSession
{
userID
timestamp
}

set up express session

- api routes for
    signup ( get ) {
      check for token
      redirect
    }
    signup ( post ) {
      save data user data to database
      verify data check against existing data
    }
    login ( get ) {
      check for token
      redirect
    }
    login ( post ) {

    }
    verify ( post ) {
      get token
    verify token
    }
    signout ( post ) {
      kill session
     }