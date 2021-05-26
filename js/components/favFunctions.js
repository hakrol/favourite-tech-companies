// Checks and Saves the user favourites

export function getFavourites() {
  const favs = localStorage.getItem("favourites");

  if (!favs) {
    return [];
  } else {
    return JSON.parse(favs);
  }
}

export function saveUserFavs(favs) {
  localStorage.setItem("favourites", JSON.stringify(favs));
}
