<h1 align="center">🍳🧑‍🍳 WHAT'S COOKIN' 🧑‍🍳🍳</h1>

Turing 2103 FE Mod 2 ~ Week 2 Paired Project  
## Table of Contents
* [Introduction](#introduction)
* [Links](#Links)
* [Setup](#Setup)
* [Features](#Features )
* [Future Additions](#Future-Additions)
* [Contributors](#contributors)
* [Languages](#Languages)

## Introduction 
What’s Cookin’ is an interactive website similar to NYTimes cooking or Allrecipes, where a user can browse recipes and save their favorites for later. Users can browse recipes by course or search for recipes by name or ingredient. If a photo or name catches their eye they can click on the recipe card and see more details about the recipe, such as ingredients, quantities, instructions and even an estimate of cost to make! On that full recipe page they also have the option to add it to their favorites and/or to their cooking queue. This app has TONS of search functionality built in— all of the search functionality available on the main page is also available on the users’ favorites page (search by tag, name, or ingredient).   
## Links  
- [Project Spec](https://frontend.turing.edu/projects/whats-cookin.html)
- [Project Board](https://github.com/clairefields15/whats-cookin/projects)
- [DTR](https://gist.github.com/darlaevans2000/c36ea0a52b83dd920fe9aac3b1dc861b)
- [WireFrame](https://excalidraw.com/#room=ac2f2419814abdc84f15,BepFKlxAW6H_VwWhZDcOGg)
## Setup
1. This project fetches data from an API so you will need to begin by cloning down the API and running it.
2. Clone the API by running `git clone git@github.com:turingschool/What-s-cookin--starter-kit-API.git`
3. CD into that directory, run npm install and then npm start. You should see “What's cookin-starter-kit API is now running on http://localhost:3001 !”
4. Open a NEW terminal tab and cd somewhere *outside* of the API repo you just cloned. Do not close the tab that is running the API.
5. Clone a copy of this repo to your machine by running `git clone git@github.com:clairefields15/whats-cookin.git`
6. CD into the directory
7. Run `npm install`
8. Run `npm start`
9. A link will appear in the terminal similar to http://localhost:8080/ (you might see 8081). Open that link in your browser.
10. Enjoy!
## Features
* User can view all recipes on main page and sort them by course tags:  
![Main Page w/ Tag Search](https://media.giphy.com/media/fG1UYam9SSRYT0Mk6p/giphy.gif)  
* User can view the recipe information, add recipe to favorites, and add recipe to cooking queue:
![View Recipe and add to queue and favorite recipe page](https://media.giphy.com/media/bhDgBGM1dfe3nFepCK/giphy.gif)  
* User can view recipes added to favorites and cooking queue:  
![Cooking queue and favorites page](https://media.giphy.com/media/drtN7mmtb5i2E0dSYL/giphy.gif)   
* User can sort their favorites by tags:  
![Sort Favs by Tags](https://media.giphy.com/media/Ypm6gCmqlubhzDTqYl/giphy.gif)    
* User can search favorites by ingredient or recipe name:    
![Search Favorites by Ingredient or name](https://media.giphy.com/media/HdADTQb65drThJverd/giphy.gif)    
* User can search ALL RECIPES BY ingredient or recipe name:    
![Search by Ingredient or name](https://media.giphy.com/media/0JnyYbvA8qoBJN8pqN/giphy.gif)  
* User can use webpage on mobile screen:  
![Mobile Phone Visibility](https://media.giphy.com/media/6442O9nD2jbMKJBvuv/giphy.gif) 

### Future Additions
* Add a log-in screen.
* Add a grocery list and populate it with all the ingredients a user will need once they have added a recipe to their cooking queue.
* Add a seven day calendar to the cooking queue page and use InteractJS to allow users to drag and drop recipe cards onto the days of the week and plan their mealsipes. Using InteractJS.