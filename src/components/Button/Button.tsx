import * as React from 'react';
import classnames from 'classnames';
import styles from './Button.scss';

interface Props {
    classname?: string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    showLogo?: boolean,
    text: string
}

const Button : React.FC<Props> = props => {
    const { classname, handleClick, showLogo, text } = props;

    return (
        <button
            className={classnames(
                styles.block,
                {[styles.blockWithLogo] : showLogo},
                {[`${classname}`]: classname}
            )}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default Button;
