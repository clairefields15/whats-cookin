import { assignVariables, pageLoad } from '../scripts'

const fetchUsersData = () => {
  return fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .catch(error => console.log(`Users API Error: ${error.message}`));
};

const fetchIngredientsData = () => {
  return fetch('http://localhost:3001/api/v1/ingredients')
    .then(response => response.json())
    .catch(error => console.log(`Ingredients API Error: ${error.message}`));
};

const fetchRecipesData = () => {
  return fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
    .catch(error => console.log(`Recipes API Error: ${error.message}`));
};

const getData = () => {
  Promise.all([fetchUsersData(), fetchRecipesData(), fetchIngredientsData()])
    .then(data => assignVariables(data))
    .then(() => pageLoad())
}

export default { fetchUsersData, fetchRecipesData, fetchIngredientsData, getData };
//getUsers();
//getData();

// fetch('http://localhost:3001/api/v1/ingredients')
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch('http://localhost:3001/api/v1/recipes')
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch('http://localhost:3001/api/v1/users');
//    .then(response => response.json())
//    .then(data => data.results.map(question => console.log(question.correct_answer)))
// export default { getUsersData };
// fetch('http://localhost:3001/api/v1/users');
//    .then(response => response.json())
//    .then(data => data.results.map(question => console.log(question.correct_answer)))
// export default { getUsersData };
// fetch('http://localhost:3001/api/v1/users');
//    .then(response => response.json())
//    .then(data => data.results.map(question => console.log(question.correct_answer)))
// export default { getUsersData };
// fetch('http://localhost:3001/api/v1/users');
//    .then(response => response.json())
//    .then(data => data.results.map(question => console.log(question.correct_answer)))

//export default { getUsersData };
