import * as React from 'react';
import uniqueId from 'lodash.uniqueid';
import classnames from 'classnames';
import styles from './Checkbox.scss';

interface IProps {
    checked?: boolean,
    className?: string,
    id?: string,
    groupName?: string,
    labelText: string,
    name: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
}

export const Checkbox : React.FC<IProps> = props => {
    const { checked, className, id, groupName, labelText, name, onChange, value } = props;
    // a11y requires uniqueIds
    const uniqueIdValue = id || uniqueId('form-checkbox');

    return (
        <div
            className={classnames(
                styles.block,
                {[`${className}`] : className}
            )}
        >
            <input
                aria-labelledby={groupName ? groupName : uniqueIdValue}
                checked={checked}
                className={styles.input}
                id={uniqueIdValue}
                name={name}
                onChange={onChange}
                type={'checkbox'}
                value={value}
            />

            <label
                className={styles.label}
                htmlFor={uniqueIdValue}
            >
                {labelText}
            </label>
        </div>
    );
};
