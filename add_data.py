import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime
import json

# Replace 'path/to/your-service-account-key.json' with the path to the JSON file you downloaded
cred = credentials.Certificate('slimpossible-34902-firebase-adminsdk-sf61v-316e179821.json')

# Initialize the Firebase app
app = firebase_admin.initialize_app(cred)

# Create a Firestore client
db = firestore.client()

meal1 = {
    "name": "Costco Cheese Pizza Slice",
    "ingredients": [
        {
            "name": "Pizza Slice",
            "macros": {
                "protein": 40,
                "fat": 30,
                "carbs": 80
            },
            "calories": 760
        }
    ],
    "totalcalories": 760,
    "totalmacros": {
        "totalprotein": 40,
        "totalfat": 30,
        "totalcarbs": 80
    },
    "favmeal": True
}

meal2 = {
    "name": "Rice w/ Chicken and Broccoli",
    "ingredients": [
        {
            "name": "Jasmine Rice",
            "macros": {
                "protein": 4.3,
                "fat": 0.4,
                "carbs": 45
            },
            "calories": 205
        },
        {
            "name": "Chicken",
            "macros": {
                "protein": 37,
                "fat": 4.3,
                "carbs": 0
            },
            "calories": 198
        },
        {
            "name": "Broccoli",
            "macros": {
                "protein": 2.4,
                "fat": 7.2,
                "carbs": 80
            },
            "calories": 35
        }
    ],
    "totalcalories": 438,
    "totalmacros": {
        "totalprotein": 43.7,
        "totalfat": 11.9,
        "totalcarbs": 125
    },
    "favmeal": False
}

meal3 = {
    "name": "Salmon and Asparagus",
    "ingredients": [
        {
            "name": "Salmon Fillet",
            "macros": {
                "protein": 30,
                "fat": 15,
                "carbs": 0
            },
            "calories": 300
        },
        {
            "name": "Asparagus",
            "macros": {
                "protein": 2,
                "fat": 0,
                "carbs": 4
            },
            "calories": 20
        },
        {
            "name": "Lemon",
            "macros": {
                "protein": 0,
                "fat": 0,
                "carbs": 2
            },
            "calories": 10
        },
        {
            "name": "Olive Oil",
            "macros": {
                "protein": 0,
                "fat": 14,
                "carbs": 0
            },
            "calories": 120
        }
    ],
    "totalcalories": 450,
    "totalmacros": {
        "totalprotein": 32,
        "totalfat": 29,
        "totalcarbs": 6
    },
    "favmeal": True
}


meals = [meal1, meal2, meal3]

for meal in meals:
    db.collection(u'meals').add(meal)


# for record in meals:
#     db.collection(u'meals').add(record)


# Personal weight data
# dictionary → line graph on the app
# {date, weight, user_populated (boolean)}

obj1 = {"weights": [
    {"date": "2023-04-24", "weight": 142, "flag": False},
    {"date": "2023-04-25", "weight": 141, "flag": False},
    {"date": "2023-04-26", "weight": 144, "flag": False},
    {"date": "2023-04-27", "weight": 143, "flag": False},
    {"date": "2023-04-28", "weight": 145, "flag": False},
    {"date": "2023-04-29", "weight": 146, "flag": False},
    {"date": "2023-04-30", "weight": 145, "flag": False},
    {"date": "2023-05-01", "weight": 144, "flag": False}
]}

obj2 = {"weights": [
    {"date": "2023-05-02", "weight": 150, "flag": False},
    {"date": "2023-05-03", "weight": 152, "flag": False},
    {"date": "2023-05-04", "weight": 149, "flag": False},
    {"date": "2023-05-05", "weight": 148, "flag": False},
    {"date": "2023-05-06", "weight": 151, "flag": False},
    {"date": "2023-05-07", "weight": 153, "flag": False},
    {"date": "2023-05-08", "weight": 147, "flag": False},
    {"date": "2023-05-09", "weight": 146, "flag": False}
]}

obj3 = {"weights": [
    {"date": "2023-06-01", "weight": 155, "flag": False},
    {"date": "2023-06-02", "weight": 153, "flag": False},
    {"date": "2023-06-03", "weight": 152, "flag": False},
    {"date": "2023-06-04", "weight": 150, "flag": False},
    {"date": "2023-06-05", "weight": 149, "flag": False},
    {"date": "2023-06-06", "weight": 148, "flag": False},
    {"date": "2023-06-07", "weight": 146, "flag": False}
]}

weights = [obj1, obj2, obj3]


for record in weights:
    db.collection(u'weights').add(record)