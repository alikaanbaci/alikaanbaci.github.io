import React from 'react';
import CodeComponent from '../../component/CodeComponent';

export default class AdapterPatternContent extends React.Component {
    
    render () {
        return (
            <div>
                <h1 class="entry-title">Adapter Pattern</h1>
                <div class="entry-content">
                    <p>This pattern is easy to understand as the real world is full of adapters.&nbsp;&nbsp; For example consider a USB to Ethernet adapter. We need this when we have an Ethernet interface on one end and USB on the other. Since they are incompatible with each other. we use an adapter that converts one to other. This example is pretty analogous to Object Oriented Adapters. In design, adapters are used when we have a class (Client) expecting some type of object and we have an object (Adaptee) offering the same features but exposing a different interface.</p>
                    <p>To use an adapter:</p>
                    <ol>
                        <li>The client makes a request to the adapter by calling a method on it using the target interface.</li>
                        <li>The adapter translates that request on the adaptee using the adaptee interface.</li>
                        <li>Client receive the results of the call and is unaware of adapter&rsquo;s presence.</li>
                    </ol>
                    <p><strong><em>Definition:</em></strong></p>
                    <p>The adapter pattern convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn&rsquo;t otherwise because of incompatible interfaces.</p>
                </div>
                <CodeComponent code={"dfs"}/>
            </div>
        )
    }
}