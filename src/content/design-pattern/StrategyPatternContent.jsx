import React from 'react';
import CodeComponent from '../../component/CodeComponent';


export default class StrategyPatternContent extends React.Component {
    
    render () {
        return (
            <div>
                <h1>Strategy Pattern</h1>
                 <CodeComponent code={"composite"}/>
            </div>
        )
    }
}