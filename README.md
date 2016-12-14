# Server side

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


# Client side
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

Enjoy ;-)
