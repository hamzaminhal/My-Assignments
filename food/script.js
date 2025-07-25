let api = "https://dummyjson.com/recipes";
let currentRecipe = 0;
let cardsElement = document.querySelector("#cards");

(async function () {
  let data = await fetch(api);
  let products = await data.json();
  showRecipes(products);
})();

function showRecipes(products) {
  let { recipes } = products;
  console.log(recipes);
  recipes.map((recipe) => {
    let {
      cookTimeMinutes,
      id,
      name,
      cuisine,
      difficulty,
      image,
      ingredients,
      instructions,
      prepTimeMinutes,
      rating,
    } = recipe;
    cardsElement.innerHTML += `
    <div class="recipe-card">
      <img
        src="${image}"
        alt="Recipe Image"
        class="recipe-image"
      />
      <div class="recipe-content">
        <h2 class="recipe-title">${name}</h2>
        <p class="recipe-meta">⏱️ ${prepTimeMinutes} mins &nbsp; • &nbsp; 🔥 ${difficulty}</p>
        <p class="recipe-desc">
          ${instructions}
          feasts or BBQ nights.
        </p>
        <button onClick="openRecipe(${id})" class="recipe-btn">View Recipe</button>
      </div>
    </div>
    `;
  });
}

function openRecipe(recipeNmbr) {
  console.log(recipeNmbr);
}
