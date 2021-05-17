const homePage = document.getElementById('homePage');
const queuePage = document.getElementById('queuePage');
const favoritesPage = document.getElementById('favoritesPage');
const recipeDetailPage = document.getElementById('recipeDetailPage');
const searchResultsPage = document.getElementById('searchResultsPage');

const homeButton = document.getElementById('homeButton');
const favoriteButton = document.getElementById('favoriteButton');
const queueButton = document.getElementById('queueButton');

const browseMeals = document.getElementById('browseMeals');


function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
    element = elements[i];
    element.classList.add("hidden");
  }
};

function show(elements) {
  for (var i = 0; i < elements.length; i++) {
    element = elements[i];
    element.classList.remove("hidden");
  }
};

function goHome() {
  show([homePage, browseMeals]);
  hide([recipeDetailPage, favoritesPage, searchResultsPage, queuePage]);
}

function displayQueue() {
  show([queuePage]);
  hide([homePage, recipeDetailPage, favoritesPage, searchResultsPage, browseMeals]);
}

function displayFavorites() {
  show([favoritesPage]);
  hide([homePage, searchResultsPage, recipeDetailPage, browseMeals, queuePage]);
}

homeButton.addEventListener('click', goHome);
favoriteButton.addEventListener('click', displayFavorites);
queueButton.addEventListener('click', displayQueue);