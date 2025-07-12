let api = "https://dummyjson.com/recipes";
let products = [];
let img = document.querySelector("#img");
let nameElement = document.querySelector("#name");
let ingredientsElement = document.querySelector("#ingredients");
let cuisineElement = document.querySelector("#cuisine");
let dificulty = document.querySelector("#dificulty");
let cookingTime = document.querySelector("#time");
let preparationTime = document.querySelector("#prepare-time");
let nextBtn = document.querySelector("#next-recipe");
let preBtn = document.querySelector("#previous-recipe");
let instructionsElement = document.querySelector("#instructions");
let recipeNmbr = 0;

function showRecipe() {
  let mainLink = products.recipes[recipeNmbr];
  nameElement.textContent = mainLink.name;
  let imgAdd = mainLink.image;
  ingredientsElement.textContent = "";
  mainLink.ingredients.forEach((element) => {
    ingredientsElement.innerHTML += `<li>${element}</li>`;
  });
  img.innerHTML = `<img src="${imgAdd}">`;
  cuisineElement.textContent = mainLink.cuisine;
  dificulty.textContent = mainLink.difficulty;
  cookingTime.textContent = mainLink.cookTimeMinutes;
  preparationTime.textContent = mainLink.prepTimeMinutes;
  instructionsElement.textContent = "";
  mainLink.instructions.forEach((instruct) => {
    instructionsElement.innerHTML += `<li>${instruct}</li>`;
  });
}
(function () {
  fetch(api)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      products = res;
      showRecipe();
    })
    .catch(() => {
      alert("Please Reload some error occured");
    });
})();

nextBtn.addEventListener("click", () => {
  recipeNmbr++;
  if (recipeNmbr < products.recipes.length) {
    showRecipe();
  } else {
    recipeNmbr = products.recipes.length - 1;
    showRecipe();
  }
});
preBtn.addEventListener("click", () => {
  recipeNmbr--;
  if (recipeNmbr >= 0) {
    showRecipe();
  } else {
    recipeNmbr = 0;
    showRecipe();
  }
});
