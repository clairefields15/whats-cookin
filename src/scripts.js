import RecipeRepository from './classes/RecipeRepository';
import Recipe from './classes/Recipe';
import User from './classes/User';
import Ingredient from './classes/Ingredient';
import apiCalls from './data/api-calls';

//////////////// query selectors //////////////
const homePage = document.getElementById('homePage');
const queuePage = document.getElementById('queuePage');
const favoritesPage = document.getElementById('favoritesPage');
const recipeDetailPage = document.getElementById('recipeDetailPage');
const searchResultsPage = document.getElementById('searchResultsPage');
const welcomeUser = document.getElementById('welcomeUser');
const courseChooser = document.getElementById('courseChooser');
//header qs
const userFavoritesHeader = document.getElementById('userFavorites');
const sortByCourseHeader = document.getElementById('sortByCourseHeader');
const browseHeader = document.getElementById('browseHeader');
//button qs
const homeButton = document.getElementById('homeButton');
const favoriteButton = document.getElementById('favoriteButton');
const queueButton = document.getElementById('queueButton');
const addToQueueButton = document.getElementById('addToQueueButton');
const showAllButton = document.getElementById('showAll');
//grid qs
const recipeCardGrid = document.getElementById('recipeCardGrid');
const searchResultGrid = document.getElementById('searchResultRecipes');
const favoritesGrid = document.getElementById('favoritesPageGrid');
const queuePageGrid = document.getElementById('queuePageGrid');
const browseRecipesSection = document.getElementById('browseRecipesSection');
//qs for recipe pg
const recipeName = document.getElementById('recipeName');
const recipeImage = document.getElementById('recipeImage');
const recipeTags = document.getElementById('recipeTags');
const ingredientRow = document.getElementById('ingredientRow');
const ingredientTotal = document.getElementById('ingredientTotal');
const recipeInstructions = document.getElementById('recipeInstructions');
const recipePageImageContainer = document.getElementById('recipePageImageContainer');
//qs search bars
const searchBar = document.getElementById('searchBar');
const favoritesSearchBar = document.getElementById('favoritesSearchBar');
//qs hearts
const emptyHeart = document.getElementById('emptyHeart');
const filledHeart = document.getElementById('filledHeart');
//fav filter qs
const filterFavorites = document.getElementById('filterFavorites');

//////////////// variables //////////////
let newRepository, user, usersData, recipeData, ingredientData;
let currentTags = [];

const tags = {
  appetizers: [
    'antipasti',
    'salad',
    'antipasto',
    "hor d'oeuvre",
    'starter',
    'appetizer',
    'snack'
  ],
  breakfast: ['breakfast', 'morning meal', 'brunch'],
  lunch: ['salad', 'lunch', 'brunch'],
  dinner: ['main course', 'dinner', 'main dish'],
  sides: ['salad', 'side dish', 'snack'],
  condiments: ['condiment', 'dip', 'spread', 'sauce']
};

////////////// event listeners //////////////
window.addEventListener('load', getDataFromAPI);

const allCourseButtons = document.querySelectorAll('button').forEach(button =>
  button.addEventListener('click', () => filterByTags(button))
);

showAllButton.addEventListener('click', showAllRecipes);
homeButton.addEventListener('click', goHome);
favoriteButton.addEventListener('click', displayFavorites);
queueButton.addEventListener('click', displayQueue);
emptyHeart.addEventListener('click', favoriteRecipe);
filledHeart.addEventListener('click', unFavoriteRecipe);
addToQueueButton.addEventListener('click', addToQueue);
window.addEventListener('click', () => clickRecipeCard(event));

searchBar.addEventListener('keypress', () => {
  if (event.keyCode === 13) {
    filterSearchResults(event);
  }
});

favoritesSearchBar.addEventListener('keypress', () => {
  if (event.keyCode === 13) {
    filterFavoritesViaSearchBar(event);
  }
});
////////////// functions and event handlers //////////////

//page load functions
export function assignVariables(data) {
  usersData = data[0];
  recipeData = data[1];
  ingredientData = data[2];
}

export function getDataFromAPI() {
  apiCalls.getData()
}

export function pageLoad() {
  const recipeDataArray = makeRecipeInstances();
  newRepository = addRecipesToRepository(recipeDataArray);
  populateMainPage(newRepository.recipesData);
  let userIndex = getRandomIndex(usersData.usersData);
  user = new User(usersData.usersData[userIndex].name, usersData.usersData[userIndex].id);
  welcomeUser.innerText = user.name;
}

function changeHeaderText(id) {
  if (id.charAt(id.length - 1) === 's') {
    browseHeader.innerText = `Browse ${id}`;
    userFavoritesHeader.innerText = `Your favorite ${id}`;
  } else {
    browseHeader.innerText = `Browse ${id} recipes`;
    userFavoritesHeader.innerText = `Your favorite ${id} recipes`;
  }
}


function makeRecipeInstances() {
  const recipeDataArray = [];
  recipeData.recipeData.forEach((recipe, index) => {
    let recipe1 = new Recipe(recipe, ingredientData);
    recipeDataArray.push(recipe1);
  });
  return recipeDataArray;
}

function addRecipesToRepository(recipeDataArray) {
  return (newRepository = new RecipeRepository(recipeDataArray));
}

function populateMainPage(someRepository) {
  recipeCardGrid.innerHTML = '';
  someRepository.forEach(recipe => {
    recipeCardGrid.innerHTML += `
    <article id="${recipe.id}" class="mini-recipe-card recipe-target">
          <img class="mini-recipe-img" alt="Picture of ${recipe.name}" src="${recipe.image}">
          <h1 class="recipe-name-mini">${recipe.name}</h1>
      </article>
    `;
  });
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//view recipe card functions


function populateFavoritesPage(someFavorites) {
  favoritesGrid.innerHTML = '';
  someFavorites.forEach(recipe => {
    favoritesGrid.innerHTML += `
      <article id="${recipe.id}" class="mini-recipe-card recipe-target">
        <img class="mini-recipe-img" alt="Picture of ${recipe.name}" src="${recipe.image}">
        <h1 class="recipe-name-mini">${recipe.name}</h1>
      </article>
    `;
  });
}

function populateFavoritesPageAfterSearch() {
  favoritesGrid.innerHTML = '';
  const filteredFavs = user.favsByNameOrIngredient;
  filteredFavs.forEach(recipe => {
    favoritesGrid.innerHTML += `
        <article id="${recipe.id}" class="mini-recipe-card recipe-target">
          <img class="mini-recipe-img" alt="Picture of ${recipe.name}" src="${recipe.image}">
          <h1 class="recipe-name-mini">${recipe.name}</h1>
        </article>
      `;
  });
}

function populateSearchPage(someRepository) {
  searchResultGrid.innerHTML = '';
  const filteredRecipes = someRepository.filteredByNameOrIngredient;
  filteredRecipes.forEach(recipe => {
    searchResultGrid.innerHTML += `
        <article id="${recipe.id}" class="mini-recipe-card recipe-target">
          <img class="mini-recipe-img" alt="Picture of ${recipe.name}" src="${recipe.image}">
          <h1 class="recipe-name-mini">${recipe.name}</h1>
        </article>  
      `;
  });
}


//hide and show DOM functions
function hide(elements) {
  elements.forEach(element => element.classList.add('hidden'));
}

function show(elements) {
  elements.forEach(element => element.classList.remove('hidden'))
}

function goHome() {
  show([homePage, browseRecipesSection, sortByCourseHeader, courseChooser]);
  hide([recipeDetailPage, favoritesPage, searchResultsPage, queuePage]);
  showAllRecipes();
  sortByCourseHeader.innerHTML = '';
  sortByCourseHeader.innerHTML += `
  <h1 class="sort-by-course-header" id="sortByCourseHeader">Sort by Course</h1>
  `;
}

function displayQueue() {
  show([queuePage]);
  hide([
    homePage,
    recipeDetailPage,
    favoritesPage,
    searchResultsPage,
    browseRecipesSection,
    sortByCourseHeader,
    courseChooser
  ]);
}

function displayFavorites() {
  show([favoritesPage, courseChooser, sortByCourseHeader]);
  hide([
    homePage,
    searchResultsPage,
    recipeDetailPage,
    browseRecipesSection,
    queuePage
  ]);
  sortByCourseHeader.innerHTML = '';
  sortByCourseHeader.innerHTML += `
  <h1 class="sort-by-course-header" id="sortByCourseHeader">Filter your favorites by course</h1>
  `;
  populateFavoritesPage(user.favoriteRecipes);
}

function showRecipeView() {
  show([recipeDetailPage]);
  hide([
    homePage,
    sortByCourseHeader,
    searchResultsPage,
    browseRecipesSection,
    queuePage,
    favoritesPage,
    courseChooser
  ]);
}

function showHeart(foundRecipe) {
  if (user.favoriteRecipes.includes(foundRecipe)) {
    show([filledHeart]);
    hide([emptyHeart]);
  } else if (!user.favoriteRecipes.includes(foundRecipe)) {
    hide([filledHeart]);
    show([emptyHeart]);
  }
}

function filterByTags(button) {
  changeHeaderText(button.id);
  if (button.id === 'appetizers') {
    currentTags = tags.appetizers;
  }
  if (button.id === 'breakfast') {
    currentTags = tags.breakfast;
  }
  if (button.id === 'lunch') {
    currentTags = tags.lunch;
  }
  if (button.id === 'dinner') {
    currentTags = tags.dinner;
  }
  if (button.id === 'sides') {
    currentTags = tags.sides;
  }
  if (button.id === 'condiments') {
    currentTags = tags.condiments;
  }
  checkWhatPageImOn();
}

function showAllRecipes() {
  changeHeaderText('');
  currentTags = [];
  populateMainPage(newRepository.recipesData);
  populateFavoritesPage(user.favoriteRecipes);
}

function checkWhatPageImOn() {
  if (sortByCourseHeader.innerText === 'Sort by Course') {
    newRepository.filterByTag(currentTags);
    populateMainPage(newRepository.filteredByTag);
  } else if (
    sortByCourseHeader.innerText === 'Filter your favorites by course'
  ) {
    user.filterByTag(currentTags);
    populateFavoritesPage(user.favsByTag);
  }
}

//recipe page
function recipeDetails(recipe) {
  recipePageImageContainer.id = `${recipe.id}`;
  recipeName.innerText = `${recipe.name}`;
  recipeImage.src = `${recipe.image}`;
  let totalCost = recipe.getRecipeCost();
  ingredientTotal.innerText = `${totalCost}`;
  displayTags(recipe);
  displayInstructions(recipe);
  displayMeasurements(recipe);
}

function displayTags(recipe) {
  recipeTags.innerHTML = '';
  recipe.tags.forEach(tag => {
    recipeTags.innerHTML += `
    <li class="recipe-tag">${tag}</li>
    `;
  });
}

function displayMeasurements(recipe) {
  ingredientRow.innerHTML = '';
  let allIngredientInfo = recipe.getIngredients();
  allIngredientInfo.forEach(ingredient => {
    let ingredientPrice =
      (ingredient.amount * ingredient.estimatedCostInCents) / 100;
    let roundedPrice = ingredientPrice.toFixed(2);
    return (ingredientRow.innerHTML += `
    <div class="ingredient-row-spacing">
      <p class="ingredient-row-text">${ingredient.amount} ${ingredient.unit} ${ingredient.name}</p>
      <p id="ingredientRowText"class="ingredient-row-price">$${roundedPrice}</p>
    </div>
    `);
  });
}

function displayInstructions(recipe) {
  recipeInstructions.innerHTML = '';
  recipe.instructions.forEach(step => {
    recipeInstructions.innerHTML += `
      <section class="recipe-instructions-numbered">
        <p class="recipe-step-number">${step.number}.</p>
        <p>${step.instruction}</p>
      </section>
      `;
  });
}

function checkIfInQueue(recipe) {
  if (user.recipesToCook.includes(recipe)) {
    addToQueueButton.innerText = '';
    addToQueueButton.innerText += `Added to Cooking Queue`;
  } else if (!user.recipesToCook.includes(recipe)) {
    addToQueueButton.innerText = '';
    addToQueueButton.innerText += `Add to Cooking Queue`;
  }
}

function clickRecipeCard(event) {
  let eventTarget = event.target.closest('.recipe-target')
  if (eventTarget) {
    const targetId = parseInt(eventTarget.id);
    const foundRecipe = newRepository.recipesData.find(recipe => targetId === recipe.id);
    showRecipeView();
    recipeDetails(foundRecipe);
    checkIfInQueue(foundRecipe);
    showHeart(foundRecipe);
  }
}

function filterFavoritesViaSearchBar(event) {
  event.preventDefault();
  let input = [];
  let lowerCaseInput = favoritesSearchBar.value.toLowerCase();
  let lowerCaseNoSpacesInput = lowerCaseInput.replace(/  +/g, ' ');
  input.push(lowerCaseNoSpacesInput);
  user.filterFavsByNameOrIngredient(input);
  populateFavoritesPageAfterSearch();
  favoritesSearchBar.value = '';
}

function filterSearchResults(event) {
  event.preventDefault();
  show([searchResultsPage]);
  hide([
    homePage,
    sortByCourseHeader,
    browseRecipesSection,
    queuePage,
    favoritesPage,
    courseChooser,
    recipeDetailPage
  ]);
  let input = [];
  let lowerCaseInput = searchBar.value.toLowerCase();
  let lowerCaseNoSpacesInput = lowerCaseInput.replace(/  +/g, ' ');
  input.push(lowerCaseNoSpacesInput);
  newRepository.filterByNameOrIngredient(input);
  populateSearchPage(newRepository);
  searchBar.value = '';
}

function favoriteRecipe(event) {
  event.preventDefault();
  if (event.target.classList.contains('unfilled-heart')) {
    show([filledHeart]);
    hide([emptyHeart]);
    const targetID = event.target.parentNode.parentNode.id;
    const allRecipes = newRepository.recipesData;
    const foundRecipe = allRecipes.find(
      recipe => recipe.id === parseInt(targetID)
    );
    user.addToFavorites(foundRecipe);
  }
}

function unFavoriteRecipe(event) {
  event.preventDefault();
  if (event.target.classList.contains('filled-heart')) {
    hide([filledHeart]);
    show([emptyHeart]);
    const targetID = event.target.parentNode.parentNode.id;
    user.removeFromFavorites(targetID);
  }
}

function populateQueuePage(someRecipes) {
  queuePageGrid.innerHTML = '';
  someRecipes.forEach(recipe => {
    queuePageGrid.innerHTML += `
      <article id="${recipe.id}" class="mini-recipe-card recipe-target">
        <img class="mini-recipe-img" alt="Picture of ${recipe.name}" src="${recipe.image}">
        <h1 class="recipe-name-mini">${recipe.name}</h1>
      </article>
    `;
  });
}

function addToQueue() {
  if (addToQueueButton.innerText === 'Add to Cooking Queue') {
    const targetID = event.target.parentNode.id;
    const allRecipes = newRepository.recipesData;
    const foundRecipe = allRecipes.find(
      recipe => recipe.id === parseInt(targetID)
    );
    user.addRecipeToCookList(foundRecipe);
    populateQueuePage(user.recipesToCook);
  }
}