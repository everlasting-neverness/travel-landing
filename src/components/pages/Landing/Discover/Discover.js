import React from 'react';
import cx from 'classnames';
import s from './Discover.css';
import { Flex } from '../../../ui-kit/Flex';
import { Input } from '../../../ui-kit/Input';
import { Button } from '../../../ui-kit/Button';

class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleUserInput(e) {
        console.log(e.target.value);
    }

    handleFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <section className={cx(this.props.className, s.container)}>
                <h1 className={s.title}>Discover Amazing places in Japan</h1>
                <p className={s.content}>
                    Jump off balcony, onto stranger's head. Chase ball of string
                    hide when guests come over. Being gorgeous with belly side
                    up i could pee on this if i had the energy but under the
                    bed, for attack the child, open the door,
                </p>
                <form className={s.form} onSubmit={this.handleFormSubmit}>
                    <Flex alignItems='center' className={s.formInnerContainer}>
                        <Input
                            content={{
                                labelText: 'What would you like to do?'
                            }}
                            handleUserInput={this.handleUserInput}
                        />
                        <Input
                            content={{
                                labelText: 'Where would you like to go?'
                            }}
                            handleUserInput={this.handleUserInput}
                        />
                        <Button>SEARCH</Button>
                    </Flex>
                </form>
            </section>
        );
    }
}

export { Discover };
