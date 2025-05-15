# CT_Open_Trivia_Database_Quiz_App

## Coding Temple Assignment - Open Trivia Database Quiz App

This assignment is to help reinforce using React with calls to outside API to make a working app that also uses useState, useEffect and, props.

## How to use the App

Download and extract the repository, or clone the repository to your desired location.

Open your preferred terminal and navigate to where you extracted/cloned the repository then enter the ecom-product-app folder and run `npm install` to download all dependencies needed to run the app.

At this point, you can use either the command `npm run dev` to run the app in developer mode. Or, you can build the app for deployment using the command `npm run build` and then using `npm run preview` to preview the build and ensure proper functioning.

## Basic operations of the App

### Welcome screen

The app will load to a welcome screen asking the user to type in their name and choose a question category and difficulty setting then press a button to retrieve a question from the [Open Trivia Database](https://opentdb.com).

Once the user has input their name and made their selections, pressing the button to submit their information will lead to the question screen.

### Question screen

Upon initial switch over from the welcome screen, a loading message will be displayed while the question is requested from and sent from the [Open Trivia Database](https://opentdb.com).

Once the question is recieved and the answer choices randomized, the screen will change to display the question and the answer choices will be displayed in a select box to choose the user's answer from. Submitting the user's answer then loads the results screen.

### Results screen

Now that the user's answer has been recorded a message telling the user the outcome of their choice and a button, to restart from the beginning to request a new question, will be displayed.
