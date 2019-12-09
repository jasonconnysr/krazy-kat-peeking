import * as React from 'react';
import './scss/base/all.scss';
import './fonts/all.scss';


interface IThemeProviderProps {
    children?: React.ReactNode,
}

const GlobalStyles : React.FC<IThemeProviderProps> = props => {
    const { children } = props;

    if (!children) return null;

    return (
        <>
            {children}
        </>
    );
};

export default GlobalStyles;
