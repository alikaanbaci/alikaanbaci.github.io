import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CodeProvider from '../code/CodeProvider';

export default class CodeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.codeProvider = new CodeProvider();
    }
    
    render () {
        return (
            <div>
                <SyntaxHighlighter
                    showLineNumbers language={this.props.lang} style={xcode}>
                    {this.codeProvider.getCodeString(this.props.code)}
                </SyntaxHighlighter>
            </div>
        )
    }
}