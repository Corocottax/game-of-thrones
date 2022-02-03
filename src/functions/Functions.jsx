import axios from "axios";

const UrlCharacters = "https://api.got.show/api/show/characters/";
const UrlLocations = "https://api.got.show/api/show/houses";

export const getCharacterByName = async (name) => {

    const res = await fetch(`${UrlCharacters}${name}`);
    if (res.ok) {

        return res.json();

    } else {

        return [];

    }
  };
  
export const getHouses = async () => {

    const res = await axios("https://api.got.show/api/show/houses");
    return (res.data);

}