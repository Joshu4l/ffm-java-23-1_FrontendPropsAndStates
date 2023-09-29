
import {Character} from "./characters.ts";
import CharacterCard from "./CharacterCard.tsx";

/*
    Specify that the CharacterGallery component expects one prop named characterS,
    which itself will be a list of Character objects.
 */
type CharacterGalleryProps = {
    characters: Character[] // for this property object, make use of the Character-definition set up in characters.ts
}


// Pass in the specified (props-)argument whose type is CharacterGalleryProps accordingly:
export default function CharacterGallery(props: CharacterGalleryProps) {

    return (
        <div>
            Here's an overview of all Rick and Morty Characters from the API:

            <div>
                {/*
                    What happens here is:
                    we use our input argument ('props') from above, to iterate over each element
                    of its 'characters'-attribute (because it's a list itself).

                    Then, with each iteration, the respective character element
                    will instantiate a new <CharacterCard/> component (using the CharacterCard:
                */}
                {props.characters.map(character => <CharacterCard
                                                               key={character.id}
                                                               character={character}
                                                              />)
                }
            </div>

        </div>
    )
}
