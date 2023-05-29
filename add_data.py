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
  "name": "Malabar Parantha with Beef Roast",
  "ingredients": [
    {
      "name": "Beef Chuck Roast",
      "macros": {
        "protein": 26,
        "fat": 3,
        "carbs": 0
      },
      "oz": 3,
      "calories": 106
    },
    {
      "name": "Malabar Paratha",
      "macros": {
        "protein": 6,
        "fat": 30,
        "carbs": 6
      },
      "oz": 2.12,
      "calories": 196
    }
  ],
  "totalcalories": 302,
  "totalmacros": {
    "totalprotein": 32,
    "totalfat": 33,
    "totalcarbs": 6
  },
  "favmeal": False,
  "datestamp": "2023-05-25"
}


meal2 = {
  "name": "Moong Dal with Fish and Jasmine Rice",
  "ingredients": [
    {
      "name": "Vegetable Oil",
      "macros": {
        "protein": 0,
        "fat": 4,
        "carbs": 0
      },
      "oz": 0.25,
      "calories": 30
    },
    {
      "name": "Moong (Green Lentil Curry)",
      "macros": {
        "protein": 2,
        "fat": 0,
        "carbs": 1
      },
      "oz": 0.1,
      "calories": 20
    },
    {
      "name": "Jasmine Rice",
      "macros": {
        "protein": 6,
        "fat": 0,
        "carbs": 3
      },
      "oz": 2.5,
      "calories": 360
    },
    {
      "name": "White Fish Sashimi",
      "macros": {
        "protein": 3,
        "fat": 11,
        "carbs": 0
      },
      "oz": 2,
      "calories": 42
    }
  ],
  "totalcalories": 452,
  "totalmacros": {
    "totalprotein": 11,
    "totalfat": 15,
    "totalcarbs": 4
  },
  "favmeal": True,
  "datestamp": "2023-05-25"
}


meal3 = {
  "name": "PF Chang's Chicken Chow Mein with Vegetables",
  "ingredients": [
    {
      "name": "Vegetables Steamed",
      "macros": {
        "protein": 13,
        "fat": 2,
        "carbs": 7
      },
      "oz": 3,
      "calories": 95
    },
    {
      "name": "Kids Chicken Chow Mein",
      "macros": {
        "protein": 54,
        "fat": 20,
        "carbs": 2
      },
      "oz": 9,
      "calories": 509
    }
  ],
  "totalcalories": 604,
  "totalmacros": {
    "totalprotein": 67,
    "totalfat": 22,
    "totalcarbs": 9
  },
  "favmeal": False,
  "datestamp": "2023-05-25"
}

meal12 = {
  "name": "Chicken Leg (Plain)",
  "ingredients": [
    {
      "name": "Chicken Leg",
      "macros": {
        "protein": 9,
        "fat": 47,
        "carbs": 0
      },
      "oz": 3,
      "calories": 281
    }
  ],
  "totalcalories": 281,
  "totalmacros": {
    "totalprotein": 9,
    "totalfat": 47,
    "totalcarbs": 0
  },
  "favmeal": False,
  "datestamp": "2023-05-09"
}

meal13 = {
  "name": "Hamburger with Avocado and Sweet Potato Tater Tots",
  "ingredients": [
    {
      "name": "Sweet Potato Tots",
      "macros": {
        "protein": 1,
        "fat": 8,
        "carbs": 3
      },
      "oz": 1,
      "calories": 47
    },
    {
      "name": "Avocado",
      "macros": {
        "protein": 4,
        "fat": 4,
        "carbs": 2
      },
      "oz": 0.2,
      "calories": 48
    },
    {
      "name": "Pepperjack Cheese",
      "macros": {
        "protein": 6,
        "fat": 5,
        "carbs": 2
      },
      "oz": 1,
      "calories": 80
    },
    {
      "name": "Hamburger with Bun",
      "macros": {
        "protein": 39,
        "fat": 26,
        "carbs": 10
      },
      "oz": 7.6,
      "calories": 480
    }
  ],
  "totalcalories": 655,
  "totalmacros": {
    "totalprotein": 50,
    "totalfat": 43,
    "totalcarbs": 17
  },
  "favmeal": False,
  "datestamp": "2023-05-25"
}

meal14 = {
  "name": "Egg & Cheese Croissant",
  "ingredients": [
    {
      "name": "Egg & Cheese Croissant",
      "macros": {
        "protein": 44,
        "fat": 26,
        "carbs": 21
      },
      "oz": 8,
      "calories": 490
    }
  ],
  "totalcalories": 490,
  "totalmacros": {
    "totalprotein": 44,
    "totalfat": 26,
    "totalcarbs": 21
  },
  "favmeal": False,
  "datestamp": "2023-05-25"
}

meal15 = {
  "name": "Crispy Chicken Sandwich with Fries",
  "ingredients": [
    {
      "name": "French Fries (Large Order)",
      "macros": {
        "protein": 4,
        "fat": 17,
        "carbs": 51
      },
      "oz": 5,
      "calories": 371
    },
    {
      "name": "Crispy Chicken Sandwich (No Pickles)",
      "macros": {
        "protein": 67,
        "fat": 20,
        "carbs": 22
      },
      "oz": 8,
      "calories": 536
    }
  ],
  "totalcalories": 907,
  "totalmacros": {
    "totalprotein": 71,
    "totalfat": 37,
    "totalcarbs": 73
  },
  "favmeal": True,
  "datestamp": "2023-05-25"
}

meal16 = {
  "name": "Angus 1/2 Pound Steakburger",
  "ingredients": [
    {
      "name": "Black Angus Steak Burger - 1/2 Pound Hamburger Patty",
      "macros": {
        "protein": 0,
        "fat": 90,
        "carbs": 78
      },
      "oz": 16,
      "calories": 1160
    },
    {
      "name": "Burger Buns (White)",
      "macros": {
        "protein": 3,
        "fat": 8,
        "carbs": 11
      },
      "oz": 4.25,
      "calories": 165
    }
  ],
  "totalcalories": 1325,
  "totalmacros": {
    "totalprotein": 3,
    "totalfat": 98,
    "totalcarbs": 89
  },
  "favmeal": False,
  "datestamp": "2023-05-09"
}

meal17 = {
  "name": "Footlong Tuna (Italian Herbs and Cheese)",
  "ingredients": [
    {
      "name": "Footlong Tuna on Italian Herb and Cheese With Provolone",
      "macros": {
        "protein": 88,
        "fat": 60,
        "carbs": 42
      },
      "oz": 15,
      "calories": 1060
    }
  ],
  "totalcalories": 1060,
  "totalmacros": {
    "totalprotein": 88,
    "totalfat": 60,
    "totalcarbs": 42
  },
  "favmeal": False,
  "datestamp": "2023-05-09"
}

meal18 = {
  "name": "Steak Fajitas with Corn on the Cob",
  "ingredients": [
    {
      "name": "Corn on the Cob",
      "macros": {
        "protein": 4,
        "fat": 3,
        "carbs": 16
      },
      "oz": 1.6,
      "calories": 100
    },
    {
      "name": "Steak Fajitas W/ Condiments and Tortilla",
      "macros": {
        "protein": 77,
        "fat": 40,
        "carbs": 54
      },
      "oz": 10,
      "calories": 880
    }
  ],
  "totalcalories": 980,
  "totalmacros": {
    "totalprotein": 81,
    "totalfat": 43,
    "totalcarbs": 70
  },
  "favmeal": False,
  "datestamp": "2023-05-09"
}

meal19 = {
  "name": "Halibut Burger with Fries",
  "ingredients": [
    {
      "name": "Small French Fry",
      "macros": {
        "protein": 2,
        "fat": 8,
        "carbs": 26
      },
      "oz": 1.75,
      "calories": 177
    },
    {
      "name": "Halibut Fillet Sandwich",
      "macros": {
        "protein": 42,
        "fat": 27,
        "carbs": 20
      },
      "oz": 5,
      "calories": 480
    }
  ],
  "totalcalories": 657,
  "totalmacros": {
    "totalprotein": 44,
    "totalfat": 35,
    "totalcarbs": 46
  },
  "favmeal": False,
  "datestamp": "2023-05-09"
}

meal21 = {
  "name": "Chicken and Rice",
  "ingredients": [
    {
      "name": "Chicken Leg",
      "macros": {
        "protein": 24,
        "fat": 4,
        "carbs": 0
      },
      "oz": 3.75,
      "calories": 140
    },
    {
      "name": "Steamed Jasmine Rice",
      "macros": {
        "protein": 0,
        "fat": 0,
        "carbs": 7
      },
      "oz": 2.5,
      "calories": 384
    }
  ],
  "totalcalories": 524,
  "totalmacros": {
    "totalprotein": 24,
    "totalfat": 4,
    "totalcarbs": 7
  },
  "favmeal": False,
  "datestamp": "2023-05-09"
}

meal22 = {
  "name": "Ribeye with Mashed Potatoes",
  "ingredients": [
    {
      "name": "Salted Whipped Butter",
      "macros": {
        "protein": 0,
        "fat": 3,
        "carbs": 0
      },
      "oz": 0.25,
      "calories": 25
    },
    {
      "name": "Garlic Mashed Potatoes",
      "macros": {
        "protein": 6,
        "fat": 17,
        "carbs": 7
      },
      "oz": 6,
      "calories": 305
    },
    {
      "name": "Ribeye Steak",
      "macros": {
        "protein": 74,
        "fat": 50,
        "carbs": 0
      },
      "oz": 10,
      "calories": 882
    }
  ],
  "totalcalories": 1212,
  "totalmacros": {
    "totalprotein": 80,
    "totalfat": 70,
    "totalcarbs": 7
  },
  "favmeal": False,
  "datestamp": "2023-05-09"
}

meal23 = {
  "name": "Ribeye with Grilled Asparagus and Rolls",
  "ingredients": [
    {
      "name": "Salted Whipped Butter",
      "macros": {
        "protein": 0,
        "fat": 3,
        "carbs": 0
      },
      "oz": 0.25,
      "calories": 25
    },
    {
      "name": "Honey Wheat Bread",
      "macros": {
        "protein": 8,
        "fat": 4,
        "carbs": 15
      },
      "oz": 16,
      "calories": 277
    },
    {
      "name": "Grilled Asparagus",
      "macros": {
        "protein": 3,
        "fat": 4,
        "carbs": 2
      },
      "oz": 4,
      "calories": 52
    },
    {
      "name": "Ribeye Steak",
      "macros": {
        "protein": 74,
        "fat": 50,
        "carbs": 0
      },
      "oz": 10,
      "calories": 882
    }
  ],
  "totalcalories": 1236,
  "totalmacros": {
    "totalprotein": 85,
    "totalfat": 61,
    "totalcarbs": 17
  },
  "favmeal": False,
  "datestamp": "2023-05-09"
}

meal24 = {
  "name": "Personal Pizza with Beef and Mushrooms",
  "ingredients": [
    {
      "name": "Personal Pan Pizza Beef and Mushroom",
      "macros": {
        "protein": 69,
        "fat": 29,
        "carbs": 30
      },
      "oz": 11,
      "calories": 660
    }
  ],
  "totalcalories": 660,
  "totalmacros": {
    "totalprotein": 69,
    "totalfat": 29,
    "totalcarbs": 30
  },
  "favmeal": False,
  "datestamp": "2023-05-09"
}

meal25 = {
  "name": "Shrimp with Vegetables and Rice",
  "ingredients": [
    {
      "name": "Shrimp, Raw, Tail on",
      "macros": {
        "protein": 0,
        "fat": 0,
        "carbs": 6
      },
      "oz": 1.5,
      "calories": 26
    },
    {
      "name": "100% Pure Vegetable Oil",
      "macros": {
        "protein": 0,
        "fat": 6,
        "carbs": 0
      },
      "oz": 0.2,
      "calories": 48
    },
    {
      "name": "Extra Long Grain Enriched Rice",
      "macros": {
        "protein": 7,
        "fat": 0,
        "carbs": 1
      },
      "oz": 0.4,
      "calories": 32
    },
    {
      "name": "Iceberg Lettuce",
      "macros": {
        "protein": 0,
        "fat": 0,
        "carbs": 0
      },
      "oz": 0.8,
      "calories": 1
    },
    {
      "name": "Sweet Red Peppers",
      "macros": {
        "protein": 0,
        "fat": 0,
        "carbs": 0
      },
      "oz": 0.4,
      "calories": 2
    }
  ],
  "totalcalories": 109,
  "totalmacros": {
    "totalprotein": 7,
    "totalfat": 6,
    "totalcarbs": 7
  },
  "favmeal": False,
  "datestamp": "2023-05-09"
}


# Define user ID
user_id = "ruiwen2024@u.northwestern.edu"  # Replace with the actual user ID
user_id2 = "user2"

all_meals = [meal1, meal2, meal3]

logged_meals = [meal1, meal2, meal3]

user_ref = db.collection("users").document(user_id)

for meal in all_meals:
    user_ref.collection("all_meals").add(meal)

# for meal in logged_meals:
#     user_ref.collection("logged_meals").add(meal)


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


# for record in weights:
#     db.collection(u'weights').add(record)