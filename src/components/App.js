
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchBar from './SearchBar';
import LeftSideBar from './LeftSideBar';
import Results from './Results';
import DetailPage from './Detail';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <SearchBar  />
                    <div className= "ui grid segment">
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