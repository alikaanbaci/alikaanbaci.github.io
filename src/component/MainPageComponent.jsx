import React from 'react';
import AdapterPatternContent from '../content/design-pattern/AdapterPatternContent';
import {Route} from 'react-router-dom';
import {menulinks} from '../constant/menulink';
import SidebarComponent from './SidebarComponent';
import MainContent from '../content/MainContent';
import CompositePatternContent from '../content/design-pattern/StrategyPatternContent';
import SpringFrameworkContent from '../content/springframework/SpringframeworkContent';

export default class MainPageComponent extends React.Component {
    
    render () {
        return (
            <div style={{display: "flex"}}>
                <SidebarComponent pages={menulinks} />
                <div className="center">
                    <Route exact path="/main">
                        <MainContent/>
                    </Route>
                    <Route path="/main/springframework">
                        <SpringFrameworkContent/>
                    </Route>
                    <Route path="/main/design-pattern/adapter">
                        <AdapterPatternContent/>
                    </Route>
                    <Route path="/main/design-pattern/composite">
                        <CompositePatternContent/>
                    </Route>
                </div>    
            </div>    
        )
    }
}