
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import SearchBar from './SearchBar';
import LeftSideBar from './LeftSideBar';
import Results from './Results';
import DetailPage from './Detail';
import Logo from './Logo';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Logo />
                    <Route path="/" exact component={SearchBar}/>
                    <div className= "ui grid">
                        <Route path="/" exact component={LeftSideBar}/>
                        <Route path="/" exact component={Results}/>
                        <Route path="/item" exact component={DetailPage}/>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;