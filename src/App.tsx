import './App.css'
import {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";

export default function App() {

    /*
        As the characters stored in our app represent information (in form of a list) that
        will actually be DISPLAYED in the UI, we will need the  useState  mechanism here,
        in order to properly store and update its state throughout its lifecycle:
     */
    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    /*
        Given that, we can USE the state variable itself as an (props-) argument
        in order to populate the CharacterGallery component:
    */
    return (
        <>
            <CharacterGallery  characters={characters}/>
        </>
    )
}
