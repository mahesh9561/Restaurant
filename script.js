document.addEventListener("DOMContentLoaded", function () {
  

  displayRecipes(recipes);

  document.getElementById("searchInput").addEventListener("input", function () {
    filterRecipes(recipes);
  });

  document.getElementById("showAll").addEventListener("click", function () {
    displayRecipes(recipes);
  });

  document.getElementById("showVeg").addEventListener("click", function () {
    filterByType(recipes, "veg");
  });

  document.getElementById("showNonVeg").addEventListener("click", function () {
    filterByType(recipes, "non-veg");
  });

  document.getElementById("above45").addEventListener("change", function () {
    filterByRating(recipes, 4.5, "above");
  });

  document.getElementById("below40").addEventListener("change", function () {
    filterByRating(recipes, 4.0, "below");
  });
});

function displayRecipes(recipes) {
  const recipeContainer = document.getElementById("recipeContainer");
  recipeContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    const img = document.createElement("img");
    img.src = recipe.imageSrc;
    img.alt = recipe.name;
    img.classList.add("recipe-image");

    const name = document.createElement("h2");
    name.textContent = recipe.name;

    const type = document.createElement("p");
    type.textContent = `Type: ${recipe.type}`;

    const time = document.createElement("p");
    time.textContent = `Time: ${recipe.time}`;

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${recipe.rating}`;

    const likeButton = document.createElement("button");
    likeButton.textContent = "Like";
    likeButton.classList.add("like-button");
    likeButton.addEventListener("click", function () {
      toggleLike(recipe);
      displayRecipes(recipes);
    });

    if (recipe.isLiked) {
      likeButton.classList.add("liked");
    }

    recipeCard.appendChild(img);
    recipeCard.appendChild(name);
    recipeCard.appendChild(type);
    recipeCard.appendChild(time);
    recipeCard.appendChild(rating);
    recipeCard.appendChild(likeButton);

    recipeContainer.appendChild(recipeCard);
  });
}

function filterRecipes(recipes) {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchInput)
  );
  displayRecipes(filteredRecipes);
}

function filterByType(recipes, type) {
  const filteredRecipes = recipes.filter((recipe) => recipe.type === type);
  displayRecipes(filteredRecipes);
}

function filterByRating(recipes, rating, filterType) {
  let filteredRecipes;

  if (filterType === "above") {
    filteredRecipes = recipes.filter((recipe) => recipe.rating > rating);
  } else if (filterType === "below") {
    filteredRecipes = recipes.filter((recipe) => recipe.rating < rating);
  }

  displayRecipes(filteredRecipes);
}

// Add functions for other interactive features (like button, type toggle, rating filter) as needed
