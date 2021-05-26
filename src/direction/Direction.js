import React, { Component, Fragment } from 'react';
import { Route } from 'react-router';
import Login from './../components/login/Login';
import ListAnimal from './../components/animal/ListAnimal';

class Direction extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/animal" component={ListAnimal}/>
                </Fragment>
            </div>
        );
    }
}

export default Direction;