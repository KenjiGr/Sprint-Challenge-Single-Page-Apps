import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from './SearchForm';


export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  // TODO: Add useState to track data from useEffect
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => setCharacters(response.data.results))
    .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <SearchForm characters={characters} />
    </div>
  );
}
