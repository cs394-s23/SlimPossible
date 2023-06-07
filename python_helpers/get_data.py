import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime
import json

# Replace 'path/to/your-service-account-key.json' with the path to the JSON file you downloaded
cred = credentials.Certificate('slimpossible-34902-7e719d100cb1.json')

# Initialize the Firebase app
app = firebase_admin.initialize_app(cred)

# Create a Firestore client
db = firestore.client()

docs = db.collection('AlamData').stream()

i = 0

for doc in docs:
    doc = doc.to_dict()
    
    # Now save the documetn to a file
    json_data = json.dumps(doc)
    
    with open(f'../AlamData/data_{i}.json', 'w') as f:
        f.write(json_data)
        
    i += 1
