import * as React from 'react';
import { TertiaryLayout } from '../../components/layouts';
import { Button } from '../../components/Button';
import { Input } from '../../components/form/Input/Input';
import styles from './FormExampleView.scss';

export const FormExampleView : React.FC = () => {
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log('submit clicked!');
    };

    return (
        <TertiaryLayout
            error={false}
            errorMessage={null}
            loaded={true}
        >
            <section>
                <h1>Form Example</h1>

                <p>This uses a tertiary layout with a slimmed down header and footer to focus users on the task at hand.</p>

                <form className={styles.form} name={'example-form'}>
                    <Input
                        type={'text'}
                        labelText={'first name'}
                        name={'firstName'}
                    />

                    <Input
                        type={'text'}
                        labelText={'last name'}
                        name={'lastName'}
                    />

                    <Input
                        type={'password'}
                        labelText={'password'}
                        name={'password'}
                    />

                    <Button
                        handleClick={handleSubmit}
                        text={'Submit'}
                    />
                </form>
            </section>
        </TertiaryLayout>
    );
};
