import React, { Component } from 'react';

import { FormInline, Button, Input } from 'mdbreact';

class Timer extends Component {
    render(){
        return(
            <div>
                <FormInline>
                    <Input label="Type your email" icon="envelope" group type="email" />
                    <Input label="Type your password" icon="lock" group type="password" />
                    <Button color="danger">Login</Button>
                </FormInline>

            </div>
           
        );
    }
}


export default Timer;