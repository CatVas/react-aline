# Installation - Server side

Install the server part:
```
  > cd server
  > npm i
```

Install the MongoDB (choose the appropriate manual): https://docs.mongodb.com/manual/installation/.

Start a MongoDB instance (in a separate tab):
```
  > cd server
  > sudo service mongod start
```

Start a server part (in a separate tab):
```
  > npm run dev
```

The server should start listening on http://localhost:3090.
If you go there and see "Unauthorized" - it is OK.


# Installation - Client side
```
  > cd client
  > npm i
  > npm start
```

The client should start listening on http://localhost:8080.

To run tests (separate tab, "client" folder):
```
  > npm run test:watch
```


# How to use

To sign in ("/signin" page) you may use default credentials:
```
  email: john@doe.com
  password: any symbols
```
or register new users ("/signup" page).

Enjoy ;-)
