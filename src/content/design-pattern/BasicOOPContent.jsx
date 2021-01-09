import React from 'react';
import CodeComponent from '../../component/CodeComponent';

export default class BasicOOPContent extends React.Component {
    
    render () {
        return (
            <div>
                <div class="entry-content">
                    <h4 class="entry-title">Encapsulation</h4>
                    <p>
                        It allows us to restrict the access of our code components -these can be instance variables or methods- from other code components.
                        So that we can write read-only or write-only classes and we can make sure that datas in our class can't be changed out of our control.
                        Also we can prevent from errors that can be in the other code components that uses our codes without our knowledge due to changes in the our
                        codes by restricting the access.
                    </p>
                    <h4 class="entry-title">Inheritance</h4>
                    <p>
                        It is transferring behaviours and datas of a class to another.
                        It allows us to write reusable codes and to use polyporphism.
                    </p>
                    <h4 class="entry-title">Polymorphism</h4>
                    <p>
                        It is ability of a class or method to present different behaviours.
                        There are two types of it:
                        <ol>
                            <li>
                                Compile-time polyporphism: Method overloading
                            </li>
                            <li>
                                Run-time polyporphism: Method overriding
                            </li>
                        </ol>
                    </p>
                    <h4 class="entry-title">Abstraction</h4>
                    <p>
                        It is hiding implemantation of a class from its clients. It can be achieved by using interfaces and 
                        abstract classes.
                        It makes our codes easy to use.
                    </p>
                </div>
            </div>
        )
    }
}