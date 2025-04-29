import { markup, rendersSpinner } from './config';
const recipeContainer = document.querySelector('.recipe');
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { loader } from './model';

const fetchTest = async () => {
  try {
    let id = window.location.hash.slice(1);

    if (!id) return;
    rendersSpinner(recipeContainer, true);
    const data = await loader(id);
    recipeContainer.innerHTML = markup(data);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

window.addEventListener('hashchange', fetchTest);
window.addEventListener('load', fetchTest);
