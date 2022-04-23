# inSlice Application
 inSlice is an Application use to share files over the internet.
 - Download Links expires in 24 hrs.
 - Automatate script that remove files from the server which are older than 24 hrs.
 - Upload File Size :  100 MB

## Setup 
```bash
Step 1 : npm install
```

```bash
Step 2 : touch .env
```
```bash
Step 3 : setup APP_BASE_URL and MONGO_URI 
```

## Usage
```bash
npm start
```

## API Endpoints :
HTTP route prefix : http://localhost:3000/api/v1/
|   Route     |     Method  | Description|
| ----------- | ----------- | ---------- |
| /files/upload      | POST       | upload a file |
| /files/upload/:uuid   | GET       | download a file |

## Upload a file :
##### HTTP route : http://localhost:3000/api/v1/files/upload

##### form-data Payload :
![MarineGEO circle logo](/uploads/form-data.png "form-data keys and values")


## Download a file :
##### HTTP route : http://localhost:3000/api/v1/files/download/:uuid


##### Response :

```bash
{
    "success": "Success",
    "link": "http://localhost:3000/uploads/1650655217010-446692701.jpeg"
}
```


## View a file :
##### HTTP route : http://localhost:3000/uploads/1650655217010-446692701.jpeg

##### Chnage app.js file with following :

```bash
...
app.use('/uploads', express.static('uploads'));
...
app.listen(...)
...
```

## Contact me :
* LinkedIn : [Connect me on LinkedIn](https://www.linkedin.com/in/aman-singh-elysian12/)
* Twitter : [Follow me](https://twitter.com/Amanofficial32)
* Instagram : [Follow me](https://www.instagram.com/amanasr7071/)