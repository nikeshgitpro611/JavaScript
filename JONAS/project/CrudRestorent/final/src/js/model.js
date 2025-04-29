import { markup } from "./config";
const recipeContainer = document.querySelector('.recipe');


const state = {

   recipe: {},
};



export const loader = async (id) => {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );
  const data = await res.json();
  if (!res.ok) throw new Error(`${data.message} (${res.status})`);
  const { recipe } = data.data;

  
  const { ingredients } = recipe;
  console.log('recipe : ', recipe, 'ingredients : ', ingredients);
  const markupImg = markup(recipe);

  if (!markupImg) {
    console.error('The markup function returned undefined or null');
    return;
  }

  recipeContainer.insertAdjacentHTML('afterbegin', markupImg);
};


