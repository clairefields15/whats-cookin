class RecipeRepository {
  constructor(recipes) {
    this.recipesData = recipes;
    this.filteredByTag = [];
    this.filteredByName = [];
    this.filteredByIngredient = [];
    this.filteredByNameOrIngredient = [];
  }

  filterByTag(tags) {
    const filteredRecipes = tags.reduce((acc, tag) => {
      this.recipesData.forEach(recipe => {
        if(recipe.tags.includes(tag) && !acc.includes(recipe)) {
          acc.push(recipe)
        }
      });
      return acc
    }, [])
    this.filteredByTag = filteredRecipes;
  }

  filterByIngredients(ingredients) {
    const filteredRecipes = ingredients.reduce((acc, ingredient) => {
      this.recipesData.forEach(recipe => {
        const recipeIngredients = recipe.getIngredientNames();
        const splitIngredients = recipeIngredients.map(ingredient => ingredient.split(' ')).flat()
        if (splitIngredients.includes(ingredient) &&
          !acc.includes(ingredient)
        ) {
          acc.push(recipe);
        }
      });
      return acc
    }, []);
    this.filteredByIngredient = filteredRecipes;
  }

  filterByName(names) {
    const filteredRecipes = names.reduce((acc, name) => {
      this.recipesData.forEach(recipe => {
        const recipeNames = recipe.name.toLowerCase();
        if(recipeNames.includes(name) && !acc.includes(name)) {
          acc.push(recipe)
        }
      });
      return acc
    }, []);
    this.filteredByName = filteredRecipes;
  }
  
  filterByNameOrIngredient(inputs) {
    console.log(inputs)
    const filteredRecipes = inputs.reduce((acc, item) => {
      
      this.recipesData.forEach(recipe => {
        const recipeNames = recipe.name.toLowerCase();
        if (recipeNames.includes(item) && !acc.includes(recipe)) {
          acc.push(recipe)
        }
      });
      console.log('acc after names', acc)
      
      this.recipesData.forEach(recipe => {
        const recipeIngredients = recipe.getIngredientNames();
        const splitIngredients = recipeIngredients
          .map(ingredient => ingredient.split(' '))
          .flat();
        if (
          splitIngredients.includes(item) &&
          !acc.includes(recipe)
        ) {
          acc.push(recipe);
        }
      });
      console.log('acc after ingredients >>>', acc)

      return acc;
    }, []);

    this.filteredByNameOrIngredient = filteredRecipes;
  }

};

export default RecipeRepository;