import {Character} from "./characters.ts";

/*
    Specify that the CharacterCard component expects a prop named character,
    which should be an array of Character objects.
 */
type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {

    return (
        /*
            What happens here is:
            we take our input argument ('props') from above,
            to make use of its 'character'-attribute.
        */
        <div>
            <p> {props.character.name} </p>
            <p> {props.character.species} </p>
        </div>
    )
}
