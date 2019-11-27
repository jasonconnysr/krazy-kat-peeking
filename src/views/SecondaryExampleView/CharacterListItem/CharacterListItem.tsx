import * as React from 'react';
import { Character } from '../../../contexts/CharactersContext';
import styles from './CharacterListItem.scss';

interface Props {
    character: Character
}

export const CharacterListItem : React.FC<Props> = props => {
    const { firstName, lastName } = props.character;

    const handleClick = () => {
        console.log('select character');
    };

    return (
        <li
            className={styles.block}
            onClick={handleClick}
        >
            {firstName && firstName}

            {(firstName && lastName) && (' ')}

            {lastName && lastName}
        </li>
    );
};
