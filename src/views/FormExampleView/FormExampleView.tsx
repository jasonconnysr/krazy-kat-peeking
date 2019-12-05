import * as React from 'react';
import { TertiaryLayout } from '../../components/layouts';
import { Button } from '../../components/Button';
import { Checkbox, Input } from '../../components/form';
import styles from './FormExampleView.scss';

export const FormExampleView : React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
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

                    <Checkbox
                        labelText={'Agree or else'}
                        name={'termsAgreement'}
                        value={'agree'}
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
