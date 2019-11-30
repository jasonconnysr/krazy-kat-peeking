import * as React from 'react';
import { Character } from '../../../contexts/CharactersContext';
import styles from './CharacterListItem.scss';
import classNames from 'classnames';

interface Props {
    character: Character
}

export const CharacterListItem : React.FC<Props> = props => {
    const { firstName, lastName } = props.character;
    const [ isSelected, setSelected ] = React.useState(false);

    const handleClick = () => {
        setSelected(!isSelected);
    };

    return (
        <li className={styles.block}>
            <button
                className={classNames(
                    styles.button,
                    {[`${styles.buttonSelected}`] : isSelected}
                )}
                onClick={handleClick}
            >
                {firstName && firstName}

                {(firstName && lastName) && (' ')}

                {lastName && lastName}
            </button>
        </li>
    );
};
