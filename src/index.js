import './styles/index.scss';

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refineMoons: 4,
};

const elvenGauntLetsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refineMoonstone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntLetsRecipe);
