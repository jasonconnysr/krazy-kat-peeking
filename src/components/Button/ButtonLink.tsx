import * as React from 'react';
import classnames from 'classnames';
import styles from './Button.scss';

interface Props {
    classname?: string,
    handleClick: (event: React.MouseEvent<HTMLAnchorElement>) => void,
    href: string,
    showLogo?: boolean,
    targetBlank?: boolean,
    text: string
}

const ButtonLink : React.FC<Props> = props => {
    const { classname, handleClick, href, showLogo, targetBlank, text } = props;

    return (
        <a
            href={href}
            className={classnames(
                styles.block,
                {[styles.blockWithLogo] : showLogo},
                {[`${classname}`] : classname}
            )}
            target={targetBlank ? '_blank' : '_self'}
            rel="noopener noreferrer"
            onClick={handleClick}
        >
            {text}
        </a>
    );
};

export default ButtonLink;
