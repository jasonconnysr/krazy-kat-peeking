import * as React from 'react';
import uniqueId from 'lodash.uniqueid';

// https://github.com/nosir/cleave.js
import Cleave from 'cleave.js/react';
// required for phone numbers
import 'cleave.js/dist/addons/cleave-phone.us.js';

import classnames from 'classnames';
import styles from './Input.scss';

// https://www.typescriptlang.org/docs/handbook/advanced-types.html
type InputType =
    'text' |
    'default' |
    'password' |
    'tel' | // replaced by sr-phone
    'number' |
    'email' |
    'search' |
    'url' |
    'range' |
    'date' |
    'month' |
    'week' |
    'time' |
    'datetime' |
    'datetime-local' |
    'password' |
    'hidden' |
    'sr-creditcard' |
    'sr-phone' |
    'sr-ccexpdate'
;

interface IProps {
    id?: string,
    className?: string,
    disabled?: boolean,
    type: InputType,
    errorText?: string,
    formattingOptions?: object, // does cleave.js provide something better?
    hideLabel?: boolean,
    labelText: string,
    helpText?: string,
    name: string,
    value?: string,
    required?: boolean,
    onBlur?: (event: React.SyntheticEvent<HTMLElement>) => void,
    onChange?: (event: React.ChangeEvent<HTMLElement>) => void,
    onFocus?: (event: React.SyntheticEvent<HTMLElement>) => void
}

interface IState {
    disabled: boolean,
    errorText?: string | null,
    focused: boolean,
    required: boolean,
    showPassword: boolean,
    valid: boolean | null,
    value?: string | null
}

export const Input : React.FC<IProps> = props => {
    const { disabled, errorText, formattingOptions, helpText, hideLabel, id, labelText, required, type, value } = props;

    // a11y requires uniqueIds
    const uniqueIdValue = id || uniqueId('form-input');
    const uniqueHelpTextId = uniqueId(`${id}helpText`);
    const uniqueErrorTextId = uniqueId(`${id}errorText`);

    const [inputState, setInputState] = React.useState<IState>({
        disabled: disabled || false,
        focused: false,
        required: required || false,
        showPassword: false,
        valid: null
    });

    const handleBlur = () => {
        if (!inputState.value) {
            setInputState(inputState => ({
                ...inputState,
                focused: false
            }));
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setInputState(inputState => ({
            ...inputState,
            value: event.target.value
        }));
   };

    const handleFocus = () => {
        setInputState(inputState => ({
            ...inputState,
            focused: true
        }));
    };

    const togglePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setInputState(inputState => ({
            ...inputState,
            showPassword: !inputState.showPassword
        }));
    };

    return (
        <fieldset className={styles.block}>
            {!hideLabel && (
                <label
                    className={classnames(
                        styles.label,
                        {[`${styles.labelFocused}`]: inputState.focused || value}
                    )}
                    htmlFor={uniqueIdValue}
                >
                    {labelText}
                </label>
            )}

            {formattingOptions ? (
                <Cleave
                    aria-labelledby={`${uniqueIdValue} ${uniqueHelpTextId} ${uniqueErrorTextId}`}
                    className={classnames(
                        styles.input,
                        {
                            [styles.inputHasValue] : inputState.value,
                            [styles.inputHasError] : inputState.errorText
                        }
                    )}
                    disabled={inputState.disabled}
                    id={uniqueIdValue}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    options={formattingOptions}
                    required={inputState.required}
                    type={inputState.showPassword ? 'text' : type}
                    value={value}
                />
            ) : (
                <input
                    aria-labelledby={`${uniqueIdValue} ${uniqueHelpTextId} ${uniqueErrorTextId}`}
                    className={classnames(
                        styles.input,
                        {
                            [styles.inputHasValue] : inputState.value,
                            [styles.inputHasError] : inputState.errorText
                        }
                    )}
                    disabled={inputState.disabled}
                    id={uniqueIdValue}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    required={inputState.required}
                    type={inputState.showPassword ? 'text' : type}
                    value={value}
                />
            )}

            {type === 'password' && (
                <button
                    className={styles.passwordToggle}
                    onClick={togglePassword}
                    type={'button'}
                >
                    {inputState.showPassword ? 'Hide' : 'Show'}
                </button>
            )}

            {errorText && (
                <div
                    id={uniqueErrorTextId}
                    className={styles.errorText}
                >
                    {errorText}
                </div>
            )}

            {helpText && (
                <div
                    id={uniqueHelpTextId}
                    className={styles.helpText}
                >
                    {helpText}
                </div>
            )}
        </fieldset>
    )
};
