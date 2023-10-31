# Hombase Assignment

## Express API

### Location
`/express-app`

### Prerequisite
- Node >= 18
- NPM >= 8

### Setup Dependencies
```
npm install
```

### Start API Server
```
npm start
```
Server will be running on `http://localhost:3000`

### CRUD Operations

#### Get user list
```
curl --location 'http://localhost:3000/api/users'
```
Example response:
```json
[
    {
        "name": "Randy",
        "email": "randy123@gmail.com",
        "phone": "0123456789",
        "id": 2
    }
]
```

#### Get user details
```
curl --location 'http://localhost:3000/api/user/<id>'
```
Example response:
```json
{
    "name": "Quang Tran",
    "email": "quang123@gmail.com",
    "phone": "0123456789",
    "id": 3
}
```

#### Create user
```
curl --location 'http://localhost:3000/api/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Quang",
    "email": "quang@gmail.com",
    "phone": "0123456789"
}'
```
Example response:
```json
{
    "name": "Quang Tran",
    "email": "quang@gmail.com",
    "phone": "0123456789",
    "id": 3
}
```

#### Update user
```
curl --location --request PATCH 'http://localhost:3000/api/user/<id>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Quang Tran",
    "email": "quang123@gmail.com",
    "phone": "0123456789"
}'
```
Example response:
```json
{
    "name": "Quang Tran",
    "email": "quang123@gmail.com",
    "phone": "0123456789",
    "id": 3
}
```

#### Delete user
```
curl --location --request DELETE 'http://localhost:3000/api/user/<id>'
```
Example response:
```json
"success"
```

## Django Web App

### Location
`/django-app`

### Prerequisite
- Python >=3.11
- Poetry >= 1.6.1

### Setup Dependencies
Install packages:
```
poetry install
```
Run Migration:
```
python app/manage.py migrate
```
Create super user:
```
python app/manage.py createsuperuser
```
### Start Web Server
```
python app/manage.py runserver;
```
Server will be running on `http://127.0.0.1:8000`


### Admin - Product Management
Go to `http://127.0.0.1:8000/admin` and login with super user credentials.

### Fetch Users From Express API
Go to `http://127.0.0.1:8000/external-user`

## Proxy

### Location
`/proxy`

### Prerequisite
- Python >=3.11
- Poetry >= 1.6.1

### Setup Dependencies
Install packages:
```
poetry install
```

### Start Proxy Server
```
python server.py
```
Proxy server will be running on `http://127.0.0.1:5000`