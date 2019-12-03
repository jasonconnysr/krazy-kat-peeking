import * as React from 'react';
import uniqueId from 'lodash.uniqueid';

// https://github.com/nosir/cleave.js
// import * as Cleave from 'cleave.js/react';
// required for phone numbers
// import 'cleave.js/dist/addons/cleave-phone.us.js';

// import classnames from 'classnames';
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

interface Props {
    id?: string,
    className?: string,
    disabled?: boolean,
    type: InputType,
    errorText?: string,
    formattingOptions?: object,
    hideLabel?: boolean,
    labelText: string,
    helpText?: string,
    name: string,
    value?: string,
    required?: boolean,
    onChange?: (e: React.SyntheticEvent<HTMLElement>) => void,
    onFocus?: (e: React.SyntheticEvent<HTMLElement>) => void
}

/*
type State = {
    disabled?: boolean,
    errorTextParsed?: string,
    focused?: boolean,
    required?: boolean,
    showPassword?: boolean,
    valid?: boolean
};
*/

export const Input : React.FC<Props> = props => {
    const { disabled, errorText, formattingOptions, helpText, hideLabel, id, labelText, required, type, value } = props;
    const uniqueIdValue = id || uniqueId('form-input'); // a11y requires uniqueIds
    const uniqueHelpTextId = uniqueId(`${id}helpText`);
    const uniqueErrorTextId = uniqueId(`${id}errorText`);
    const [inputState, setInputState] = React.useState({
        disabled: disabled,
        focused: false,
        required: required,
        showPassword: false
    });

    const togglePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setInputState({
            disabled: inputState.disabled,
            focused: inputState.focused,
            required: inputState.required,
            showPassword: !inputState.showPassword
        });
    };

    return (
        <fieldset className={styles.block}>
            {!hideLabel && (
                <label
                    className={styles.label}
                    htmlFor={uniqueIdValue}
                >
                    {labelText}
                </label>
            )}

            {!formattingOptions && (
                <input
                    aria-labelledby={`${uniqueIdValue} ${uniqueHelpTextId} ${uniqueErrorTextId}`}
                    className={styles.input}
                    disabled={inputState.disabled}
                    id={uniqueIdValue}
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

/*
export class InputOld extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            disabled: this.props.disabled,
            focused: false,
            showPassword: false,
            required: this.props.required
        };
    }

    componentDidUpdate() {
        const {errorText} = this.props;

        if (errorText) {
            let errorTextParsed: string = Array.isArray(errorText.slice()) ? errorText[0] : errorText;

            if  (errorTextParsed !== this.state.errorTextParsed) {
                this.setState({
                    errorTextParsed: errorTextParsed
                });
            }
        }
    }

    onFocus = () => {
        this.setState({focused: true});
    }

    onBlur = () => {
        if (!this.props.value) {
            this.setState({focused: false});
        }
    }

    togglePassword = (e: any) => {
        e.preventDefault();
        this.setState({
            showPassword: !this.state.showPassword
        });
    }

    render() {
        const {
            id,
            type,
            required,
            disabled,
            onChange,
            className,
            errorText,
            formattingOptions,
            hideLabel,
            labelText,
            helpText,
            name,
            value
        } = this.props;

        const {errorTextParsed, focused, showPassword} = this.state;
        const uniqueIdValue = id || uniqueId('form-input'); // a11y requires uniqueIds

        let labelCss = classnames(
                            styles.label,
                            {[`${styles.labelFocused}`]: focused || value}
                        );

        let inputCss = classnames(
                            styles.input,
                            {
                                [`${styles.inputHasValue}`]: value,
                                [`${styles.inputHasError}`]: errorText
                            }
                       );

        return (
            <fieldset className={classnames(styles.block, {[`${className}`]: className})}>
                {!hideLabel && (
                    <label
                        className={labelCss}
                        htmlFor={uniqueIdValue}
                    >
                        {labelText}
                    </label>
                )}

                {!formattingOptions && (
                    <input
                        aria-label={hideLabel && typeof labelText === 'string' ? labelText : ''}
                        className={inputCss}
                        type={showPassword ? 'text' : type}
                        id={uniqueIdValue}
                        required={required}
                        placeholder={type === 'search' ? 'Search products, brands, and stores' : ''}
                        disabled={disabled}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    />
                )}

                {formattingOptions && (
                    <Cleave
                        className={classnames(
                            styles.input,
                            {
                                [`${styles.inputHasValue}`]: value,
                                [`${styles.inputHasError}`]: errorText
                            }
                        )}
                        type={'text'}
                        id={uniqueIdValue}
                        required={required}
                        disabled={disabled}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        options={formattingOptions}
                    />
                )}

                {type === 'password' && (
                    <button
                        className={styles.passwordToggle}
                        onClick={this.togglePassword}
                        type={'button'}
                    >
                        {this.state.showPassword === true ? 'Hide' : 'Show'}
                    </button>
                )}

                {errorText && (
                    <div className={styles.errorText}>
                        {errorTextParsed}
                    </div>
                )}

                {helpText && (
                    <div className={styles.helpText}>
                        {helpText}
                    </div>
                )}
            </fieldset>
        );
    }
}
*/
