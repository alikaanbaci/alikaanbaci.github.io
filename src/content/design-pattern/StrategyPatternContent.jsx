import React from 'react';
import CodeComponent from '../../component/CodeComponent';


export default class CompositePatternContent extends React.Component {
    
    render () {
        return (
            <div>
                <h1>Strategy Pattern</h1>
                 <CodeComponent lang={"java"} code={"composite"}/>
            </div>
        )
    }
}