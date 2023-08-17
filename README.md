### Friends API


A simple friends biodata API to perform CRUD operations on a collection of users. 

---


**Environments**

- Node version - v16.13.0

**This application uses the following technologies:**
- NodeJS
- ExpressJS

---
note: `run all commands in the applications root directory`


### To run the app manually

**Install all dependencies**

```
yarn
```

**Database setup**

```
- get a mongodb uri
- create a '.env' file on the root directory, or simply rename the '.env.example'
- set the connection uri  in the .env file (i.e TEST_DB=<connection uri> and PROD_DB=<connection uri>)
```

**Start the application**

```
source .env

yarn start
```




---
### Add Friend
---

**Endpoint** `/api/v1/friends/add` - method (POST)

- Adds a new friend

**Payload**

```json
{
    "name": "Raluchukwu Ugochukwu",
    "email": "ralu@ugochuckwu.com",
    "phone": "8069594450"
}
```

**Response format**

```json
{
    "success": true,
    "message": "Friend successfully added",
    "data": {
        "name": "Raluchukwu Ugochukwu",
        "phone": "8069594450",
        "isDeleted": false,
        "createdAt": "2022-08-16T23:24:23.761Z"
    }
}
```

---
### GET all friends
---

**Endpoint** `/api/v1/friends/` - method (GET)

- Fetches all friends

**Response format**

```json
{
    "success": true,
    "message": "Friends successfully retrieved",
    "data": [
        {
            "name": "Raluchukwu Ugochukwu",
            "phone": "8069594450",
            "isDeleted": false,
            "createdAt": "2022-08-16T23:24:23.761Z"
        },
        {
            "name": "Giwa Jossy",
            "phone": "8069594450",
            "isDeleted": false,
            "createdAt": "2022-08-16T23:24:23.761Z"
        }
    ]
}
```
