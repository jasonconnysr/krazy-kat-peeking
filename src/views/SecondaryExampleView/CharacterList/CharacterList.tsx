import * as React from 'react';
import CharactersContext , { Character } from '../../../contexts/CharactersContext';
import CharacterListItem from '../CharacterListItem';
import styles from './CharacterList.scss';

export const CharacterList : React.FC = () => {
    return (
        <CharactersContext.Consumer>
            {(characters: Array<Character>) => (
                <ul className={styles.block}>
                    {characters.map((character: Character, index) => {
                        return <CharacterListItem key={index} character={character}/>;
                    })}
                </ul>
            )}
        </CharactersContext.Consumer>
    );
};
