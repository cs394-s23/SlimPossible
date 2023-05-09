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
            "oz": 10.9,
            "calories": 760
        }
    ],
    "totalcalories": 760,
    "totalmacros": {
        "totalprotein": 40,
        "totalfat": 30,
        "totalcarbs": 80
    },
    "favmeal": True,
    "date": "2023-05-09T00:00:00Z"
}

meal2 = {
    "name": "Pesto Pasta with Roasted Tomatoes",
    "ingredients": [
        {
            "name": "Pasta",
            "macros": {
                "protein": 8,
                "fat": 2,
                "carbs": 45
            },
            "oz": 3.0,
            "calories": 220
        },
        {
            "name": "Basil Pesto",
            "macros": {
                "protein": 2,
                "fat": 12,
                "carbs": 4
            },
            "oz": 1.0,
            "calories": 140
        },
        {
            "name": "Cherry Tomatoes",
            "macros": {
                "protein": 1,
                "fat": 0,
                "carbs": 3
            },
            "oz": 3.0,
            "calories": 20
        },
        {
            "name": "Parmesan Cheese",
            "macros": {
                "protein": 5,
                "fat": 4,
                "carbs": 1
            },
            "oz": 0.5,
            "calories": 50
        },
        {
            "name": "Olive Oil",
            "macros": {
                "protein": 0,
                "fat": 14,
                "carbs": 0
            },
            "oz": 1.0,
            "calories": 120
        }
    ],
    "totalcalories": 550,
    "totalmacros": {
        "totalprotein": 16,
        "totalfat": 32,
        "totalcarbs": 53
    },
    "favmeal": True,
    "date": "2023-05-09T00:00:00Z"
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
    "favmeal": True,
    "date": "2023-05-09T00:00:00Z"
}

meal4 = {
    "name": "Big Mac Combo Meal",
    "ingredients": [
        {
            "name": "Big Mac",
            "macros": {
                "protein": 25,
                "fat": 34,
                "carbs": 46
            },
            "oz": 7.6,
            "calories": 590
        },
        {
            "name": "Medium Fries",
            "macros": {
                "protein": 5,
                "fat": 15,
                "carbs": 43
            },
            "oz": 4.1,
            "calories": 320
        },
        {
            "name": "Medium Coke",
            "macros": {
                "protein": 0,
                "fat": 0,
                "carbs": 56
            },
            "calories": 210
        }
    ],
    "totalcalories": 1120,
    "totalmacros": {
        "totalprotein": 30,
        "totalfat": 49,
        "totalcarbs": 145
    },
    "favmeal": True,
    "date": "2023-05-09T00:00:00Z"
}

meal5 = {
    "name": "Grilled Chicken with Sweet Potato and Broccoli",
    "ingredients": [
        {
            "name": "Grilled Chicken",
            "macros": {
                "protein": 28,
                "fat": 7,
                "carbs": 0
            },
            "oz": 5.0,
            "calories": 140
        },
        {
            "name": "Roasted Sweet Potato",
            "macros": {
                "protein": 2,
                "fat": 0,
                "carbs": 22
            },
            "oz": 4.0,
            "calories": 90
        },
        {
            "name": "Steamed Broccoli",
            "macros": {
                "protein": 4,
                "fat": 0,
                "carbs": 6
            },
            "oz": 4.0,
            "calories": 50
        }
    ],
    "totalcalories": 280,
    "totalmacros": {
        "totalprotein": 34,
        "totalfat": 7,
        "totalcarbs": 28
    },
    "favmeal": True,
    "date": "2023-05-09T00:00:00Z"
}


meal6 = {
  "name": "Chicken Caesar Salad",
  "ingredients": [
    {
      "name": "Grilled Chicken Breast",
      "macros": {
        "protein": 25,
        "fat": 4,
        "carbs": 0
      },
      "oz": 4.5,
      "calories": 140
    },
    {
      "name": "Romaine Lettuce",
      "macros": {
        "protein": 1,
        "fat": 0,
        "carbs": 2
      },
      "oz": 2.5,
      "calories": 15
    },
    {
      "name": "Caesar Dressing",
      "macros": {
        "protein": 1,
        "fat": 6,
        "carbs": 2
      },
      "oz": 1.5,
      "calories": 70
    },
    {
      "name": "Parmesan Cheese",
      "macros": {
        "protein": 5,
        "fat": 3,
        "carbs": 1
      },
      "oz": 1,
      "calories": 45
    },
    {
      "name": "Croutons",
      "macros": {
        "protein": 2,
        "fat": 1,
        "carbs": 7
      },
      "oz": 1.2,
      "calories": 60
    }
  ],
  "totalcalories": 330,
  "totalmacros": {
    "totalprotein": 34,
    "totalfat": 14,
    "totalcarbs": 12
  },
  "favmeal": False,
  "date": "2023-05-08T00:00:00Z"
}


meal7 = {
  "name": "Pasta Bolognese",
  "ingredients": [
    {
      "name": "Ground Beef",
      "macros": {
        "protein": 26,
        "fat": 18,
        "carbs": 0
      },
      "oz": 5.5,
      "calories": 240
    },
    {
      "name": "Pasta",
      "macros": {
        "protein": 8,
        "fat": 1,
        "carbs": 41
      },
      "oz": 4,
      "calories": 200
    },
    {
      "name": "Tomato Sauce",
      "macros": {
        "protein": 2,
        "fat": 1,
        "carbs": 8
      },
      "oz": 6,
      "calories": 60
    },
    {
      "name": "Parmesan Cheese",
      "macros": {
        "protein": 5,
        "fat": 3,
        "carbs": 1
      },
      "oz": 1,
      "calories": 45
    },
    {
      "name": "Garlic",
      "macros": {
        "protein": 0,
        "fat": 0,
        "carbs": 1
      },
      "oz": 0.2,
      "calories": 10
    },
    {
      "name": "Olive Oil",
      "macros": {
        "protein": 0,
        "fat": 14,
        "carbs": 0
      },
      "oz": 0.5,
      "calories": 120
    }
  ],
  "totalcalories": 675,
  "totalmacros": {
    "totalprotein": 41,
    "totalfat": 37,
    "totalcarbs": 51
  },
  "favmeal": True,
  "date": "2023-05-07T00:00:00Z"
}


meal8 = {
    "name": "Pesto Pasta with Roasted Tomatoes",
    "ingredients": [
        {
            "name": "Pasta",
            "macros": {
                "protein": 8,
                "fat": 2,
                "carbs": 45
            },
            "oz": 3.0,
            "calories": 220
        },
        {
            "name": "Basil Pesto",
            "macros": {
                "protein": 2,
                "fat": 12,
                "carbs": 4
            },
            "oz": 1.0,
            "calories": 140
        },
        {
            "name": "Cherry Tomatoes",
            "macros": {
                "protein": 1,
                "fat": 0,
                "carbs": 3
            },
            "oz": 3.0,
            "calories": 20
        },
        {
            "name": "Parmesan Cheese",
            "macros": {
                "protein": 5,
                "fat": 4,
                "carbs": 1
            },
            "oz": 0.5,
            "calories": 50
        },
        {
            "name": "Olive Oil",
            "macros": {
                "protein": 0,
                "fat": 14,
                "carbs": 0
            },
            "oz": 1.0,
            "calories": 120
        }
    ],
    "totalcalories": 550,
    "totalmacros": {
        "totalprotein": 16,
        "totalfat": 32,
        "totalcarbs": 53
    },
    "favmeal": True,
    "date": "2023-05-09T00:00:00Z"
}

# Define user ID
user_id = "user1"  # Replace with the actual user ID
user_id2 = "user2"

all_meals = [meal1, meal2, meal3, meal4, meal5, meal6, meal7, meal8]

logged_meals = [meal4, meal5, meal8]

user_ref = db.collection("users").document(user_id)

for meal in all_meals:
    user_ref.collection("all_meals").add(meal)

for meal in logged_meals:
    user_ref.collection("logged_meals").add(meal)


user_ref = db.collection("users").document(user_id2)

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