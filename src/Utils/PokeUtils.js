export function getPokeId(url) {
  const splitted = url.split('/');
  return splitted[splitted.length - 2];
}

export function getPokeThumb(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}
