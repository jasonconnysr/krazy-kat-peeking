import * as React from 'react';
import { Fetcher } from '../../fetcher';
import CharactersContext, { defaultCharacters, Character } from '../../contexts/CharactersContext';
import { SecondaryLayout } from '../../components/layouts';
import CharacterList from './CharacterList';
import styles from './SecondaryExampleView.scss';

const SecondaryExampleView : React.FC = () => {
    const [exampleCharacters, setCharacters] = React.useState({
        error: false,
        errorMessage: null,
        loaded: false,
        characters: defaultCharacters
    });

    React.useEffect(() => {
        const getCharacters = async () => {
            try {
                setCharacters({
                    error: false,
                    errorMessage: null,
                    loaded: false,
                    characters: exampleCharacters.characters
                });

                const response: Array<Character> = await Fetcher('http://localhost:8080/api/characters');

                setCharacters({
                    error: false,
                    errorMessage: null,
                    loaded: true,
                    characters: response
                });
            }
            catch (error) {
                console.log('handle error', error.message);
                setCharacters({
                    error: true,
                    errorMessage: error.message,
                    loaded: true,
                    characters: exampleCharacters.characters
                });
            }
        };

        getCharacters();
    }, []);

    return (
        <CharactersContext.Provider value={exampleCharacters.characters}>
            <SecondaryLayout
                classname={styles.block}
                error={false}
                errorMessage={null}
                loaded={true}
            >
                <h1 className={styles.heading}>Secondary Example</h1>

                <p>A slimmed down template to focus user actions.</p>

                <section>
                    <h2>Hi!</h2>

                    <p>Choose your favorites...</p>

                    <CharacterList/>
                </section>
            </SecondaryLayout>
        </CharactersContext.Provider>
    );
};

export default SecondaryExampleView;
