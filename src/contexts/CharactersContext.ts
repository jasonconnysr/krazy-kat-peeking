import * as React from 'react';

export interface Character {
    firstName: string | null;
    lastName: string | null;
}

export const defaultCharacters: Array<Character> = [];

const CharactersContext = React.createContext(defaultCharacters);

export default CharactersContext;
