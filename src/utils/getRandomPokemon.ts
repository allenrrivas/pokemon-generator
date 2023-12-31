const MAX_DEX_ID = 151;

export const getRandomPokemon: (notThisOne?: number) => number = (
  notThisOne,
) => {
  const pokedexNumber = Math.floor(Math.random() * MAX_DEX_ID) + 1;

  if (pokedexNumber !== notThisOne) return pokedexNumber;
  return getRandomPokemon(notThisOne);
};

export const getOptionsView = () => {
  const firstId = getRandomPokemon();

  return [firstId];
};
