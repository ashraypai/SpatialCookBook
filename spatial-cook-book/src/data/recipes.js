export const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    cookTime: "20 mins",
    difficulty: "Medium",
    image: "/recipeImages/spaghetti-carbonara.jpg",
    youtubeId: "D_2DBLAt57c",
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or bacon",
      "4 large eggs",
      "100g Parmesan cheese, grated",
      "2 cloves garlic, minced",
      "Salt and black pepper",
      "2 tbsp olive oil"
    ],
    instructions: [
      "Boil water in a large pot and cook spaghetti for 8-10 minutes until al dente",
      "While pasta cooks, fry pancetta in a large pan for 5 minutes until crispy",
      "Beat eggs with Parmesan cheese in a bowl",
      "Drain pasta and immediately mix with hot pancetta for 2 minutes",
      "Remove from heat and quickly stir in egg mixture for 1 minute",
      "Season with salt and pepper, serve immediately"
    ]
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    cookTime: "45 mins",
    difficulty: "Hard",
    image: "/recipeImages/chicken-tikka-masala.jpg",
    youtubeId: "wm5vqZcl8BQ",
    ingredients: [
      "500g chicken breast, cubed",
      "200ml Greek yogurt",
      "400ml coconut milk",
      "400g canned tomatoes",
      "2 onions, diced",
      "3 cloves garlic, minced",
      "2 tsp garam masala",
      "1 tsp turmeric",
      "2 tbsp tomato paste"
    ],
    instructions: [
      "Marinate chicken in yogurt and spices for 30 minutes",
      "Cook marinated chicken in a hot pan for 8 minutes until browned",
      "Sauté onions and garlic for 5 minutes until soft",
      "Add tomato paste and cook for 2 minutes",
      "Add canned tomatoes and simmer for 15 minutes",
      "Stir in coconut milk and cooked chicken, simmer for 10 minutes",
      "Garnish and serve with rice"
    ]
  },
  {
    id: 3,
    title: "Chocolate Chip Cookies",
    cookTime: "25 mins",
    difficulty: "Easy",
    image: "/recipeImages/chocolate-chip-cookies.jpg",
    youtubeId: "3vUtRRZG0xY",
    ingredients: [
      "200g butter, softened",
      "150g brown sugar",
      "100g white sugar",
      "2 large eggs",
      "300g plain flour",
      "1 tsp baking soda",
      "200g chocolate chips",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "Preheat oven to 180°C and line baking sheets",
      "Cream butter and sugars together for 3 minutes until fluffy",
      "Beat in eggs and vanilla extract",
      "Mix in flour and baking soda until just combined",
      "Fold in chocolate chips",
      "Drop spoonfuls on baking sheet and bake for 12 minutes",
      "Cool on wire rack for 5 minutes before serving"
    ]
  }
]

export const getRecipeById = (id) => {
  return recipes.find(recipe => recipe.id === parseInt(id))
}