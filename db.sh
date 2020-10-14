use IBSAServer
db.dropDatabase()
use IBSAServer
db.createCollection("Users")

db.Users.insertMany([
    {
        "firstName": "bryan",
        "lastName": "simca",
        "password": "$2a$10$2DGJ96C77f/WwIwClPwSNuQRqjoSnDFj9GDKjg6X/PePgFdXoE4W6",
        "email": "bryansimca20@gmail.com",
        "phone": "2063979838",
        "classes": [
            {
                "courseTitle": "Software Construction Laboratory"
            }
        ],
        "isAdmin": false
    }
])
