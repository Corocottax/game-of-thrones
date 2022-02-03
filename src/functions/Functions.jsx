const UrlCharacters = "https://api.got.show/api/show/characters/";
/* const UrlLocations = "https://api.got.show/api/show/locations/" */

export const getCharacterByName = async (name) => {

    const res = await fetch(`${UrlCharacters}${name}`);
    if (res.ok) {

        return res.json();

    } else {

        return [];

    }
  };
  