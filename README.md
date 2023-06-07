
# SlimPossible
*SlimPossible* is a user-friendly application designed to help individuals log their meals and keep track of their calorie intake. This app allows users to maintain a record of the foods they consume throughout the day, helping them make informed decisions about their diet and achieve their health and fitness goals.

## Table of Contents
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#features">Features</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#setting-up-firebase">Setting Up Firebase</a></li>
    <li><a href="#src-and-components-file-structure">SRC and Components File Structure</a></li>
  </ol>
</details> <br>


## Features
1. **User Registration and Authentication** <br>
New users can create an account by signing in with Google. 


2. **Meal Logging** <br>
Users can log their meals by adding information about each food item consumed. Each meal entry includes the food name, quantity, and serving size. Users can add details such as meal time and any additional notes. The app provides a comprehensive database of food items and their corresponding nutritional information, enabling users to quickly search and select their meals.

3. **Calorie Tracking** <br>
The app calculates and displays the total calorie intake based on the logged meals. Users can set a daily calorie goal to monitor their progress towards maintaining a balanced diet. We use pie charts to help users visualize their calorie consumption.

4. **Nutritional Information** <br>
The app provides nutritional information for each logged meal, including calories, macronutrients (protein, carbohydrates, and fat). Users can review their daily, weekly, or monthly nutritional breakdown to identify any imbalances or deficiencies in their diet.

5. **Meal Recommendations** <br>
Based on the user’s daily calorie goal, the app provides meal recommendations to help users meet their daily calorie intake. Users can view the recommended meals on their homepage, test how it will impact their daily macros and calories, and add them to their meal log.

6. **Dynamic Calories and Macros** <br>
This features enables the user to test out how the addition of a meal or an ingredient impacts their daily goal, granting them more information and allowing the users to choose how they want to meet their daily goal.
<br>

## Getting Started

SlimPossible is developed with React. To install and run this React app, you can follow these steps:

1. **Clone the repository:**  <br>
Start by cloning the repository from GitHub onto your local machine using the following command:
```
git clone https://github.com/cs394-s23/SlimPossible.git
```
2. **Navigate to the project directory:**  <br>
Move into the project directory using the following command:
```
cd SlimPossible
```
3. **Install dependencies:**  <br>
Make sure you have Node.js and npm (Node Package Manager) installed on your machine. Run the following command to install the project dependencies:
```
npm install
```
4. **Setting up Firebase** <br>
Please ensure you follow the steps in the section titled *“Setting Up Firebase”* to set up Firebase Cloud Firestore for this app. After you have set up firebase, please copy the corresponding app credentials into the file *“firebase.js”*. Fill in the variable **firebaseConfig** with the credentials from your Firebase project to ensure your client is able to connect to the Firebase database.

5. **Setting up the API** <br>
Please ensure to insert your USDA API into Form.jsx for the state variable **apiKey** to ensure the ingredient search function works.

5. **Start the development server:**  <br>
Once the dependencies are installed, you can start the development server by running the following command:
```
npm start
```

In addition, you will need to create a Firebase collection to store some common meal options for initial meal recommendations when there are not enough meals in the database (right now the initial meals are stored in a collection called “AlamData”.) 
<br>

## Setting Up Firebase
To set up Firebase Cloud Firestore for this app, follow these steps:
1. **Create a Firebase account:** <br>
Go to the Firebase website and sign in with your Google account.
Click "Add project" and give it a unique name.
2. **Create a Firebase project:** <br>
After signing in, click "Add project" and enter a project name.
Optionally, enable Google Analytics.
Click "Create project." 
3. **Set up Firebase Cloud Firestore:** <br>
On the Firebase project dashboard, select "Firestore Database."
Click "Create database" and choose a location.
Set security rules and click "Enable."
4. **Add configuration data:** <br>
Go to project settings.
Under "Your apps," click "Add app" for your target platform.
Follow the instructions to register your app.
Copy the provided configuration data.
5. **Use Firebase configuration data in your project:** <br>
Replace placeholder values in your project's JavaScript file (web), google-services.json (Android), or GoogleService-Info.plist (iOS) with the copied configuration data.

Firebase Cloud Firestore is now set up for your project. Refer to the official Firebase documentation for more details.

<br>

## SRC and Components File Structure
The src folder contains all react components, and has the following structure:
```
├── App.css
├── App.jsx
├── App.test.jsx
├── components
│   ├── Authentication
│   │   ├── Login.css
│   │   ├── Login.jsx
│   │   ├── Login.test.jsx
│   │   └── logo.png
│   ├── form
│   │   ├── 25694.png
│   │   ├── Form-Rui.test.jsx
│   │   ├── Form.css
│   │   ├── Form.jsx
│   │   ├── Form.test.jsx
│   │   ├── Form_fetch.test.jsx
│   │   ├── bg.jpg
│   │   └── home.png
│   └── homepage
│       ├── B_select.css
│       ├── B_select.jsx
│       ├── B_select.test.jsx
│       ├── Block.css
│       ├── Block.jsx
│       ├── Homepage-Rui.test.jsx
│       ├── Homepage-victoria.test.jsx
│       ├── Homepage-victoria2.test.jsx
│       ├── Homepage.css
│       ├── Homepage.jsx
│       ├── Homepage.test.jsx
│       ├── Ingredient.css
│       ├── Ingredient.jsx
│       ├── add 2.png
│       ├── add.png
│       ├── bg.jpg
│       └── exit.png
├── index.css
├── index.jsx
└── testing_related
    └── add_data.py
    ```