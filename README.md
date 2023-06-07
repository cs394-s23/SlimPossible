
# SlimPossible
Slim possible is a user-friendly application designed to help individuals log their meals and keep track of their calorie intake. This app allows users to maintain a record of the foods they consume throughout the day, helping them make informed decisions about their diet and achieve their health and fitness goals.


## Features
1. **User Registration and Authentication** <br>
New users can create an account by signing in with Google. 


2. **Meal Logging** <br>
Users can log their meals by adding information about each food item consumed. Each meal entry includes the food name, quantity, and serving size. Users can add details such as meal time and any additional notes. The app provides a comprehensive database of food items and their corresponding nutritional information, enabling users to quickly search and select their meals.

3. **Calorie Tracking** <br>
The app calculates and displays the total calorie intake based on the logged meals. Users can set a daily calorie goal to monitor their progress towards maintaining a balanced diet. Visual representations - pie charts - help users visualize their calorie consumption.

4. **Nutritional Information** <br>
The app provides nutritional information for each logged meal, including calories, macronutrients (protein, carbohydrates, and fat). Users can review their daily, weekly, or monthly nutritional breakdown to identify any imbalances or deficiencies in their diet.

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
4. **Start the development server:**  <br>
Once the dependencies are installed, you can start the development server by running the following command:
```
npm start
```

In addition, you will need to create a Firebase collection to store some common meal options for initial meal recommendations when there are not enough meals in the database (right now the initial meals are stored in a collection called “AlamData”.) 


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




# React Vitest Template

A starter template for building React apps with Vite. Includes Vitest for unit testing and
a hefty .gitignore file.

## Usage

```
mkdir your-app-name
cd your-app-name
npx degit criesbeck/react-vitest
npm install
```

## Test

Verify that the initial app works. Run

```
npm start
```

and open the URL displayed.

Verify that the unit tests work with

```
npm test
```

Two tests should run and pass. 

## Scripts

**package.json** defines the following scripts:

| Script         | Description                                         |
| -------------- | --------------------------------------------------- |
| npm start      | Runs the app in the development mode.               |
| npm run dev    | Runs the app in the development mode.               |
| npm run build  | Builds the app for production to the `dist` folder. |
| npm run serve  | Serves the production build from the `dist` folder. |
| npm test       | Starts a Jest-like test loop                        |


## Git

If everything is working, set up [your local and remote repositories](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git).

## Folder Structure

```
your-app-name
├── node_modules
├── public
│   ├── favicon.svg
│   └── robots.txt
└── src
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── index.jsx
    └── logo.svg
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

## Credits

React-Vitest built and maintained by [Chris Riesbeck](https://github.com/criesbeck).

Inspired by [SafdarJamal/vite-template-react](https://github.com/SafdarJamal/vite-template-react).
Expanded to include Vitest and some sample tests.

Thanks to Rich Harris for [degit](https://www.npmjs.com/package/degit).

Gitignore file created with [the Toptal tool](https://www.toptal.com/developers/gitignore/api/react,firebase,visualstudiocode,macos,windows).


## License

This project is licensed under the terms of the [MIT license](./LICENSE).
