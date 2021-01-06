import React from 'react';
import { Link } from 'react-router-dom';

export default class SidebarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isOpen: []};
        this.props.pages.forEach(e => {
            this.state.isOpen.push(false)
        });
    }

    hasChildren(item) {
        return item.children && item.children.length;
    }

    open(index) {
        this.setState(state => {
            const isOpen = state.isOpen.map((item, i) => {
                return index === i ? !item : item;
            });
            return { isOpen };
        });
    }

    render () {
        return (
            <div>
                <nav>
                    {this.props.pages.map(
                        (link, i) => {
                            return (
                                <ul>
                                    <li>
                                        <Link onClick={this.open.bind(this, i)} key={i} to={link.path}>{link.pageName}</Link>
                                        {this.hasChildren(link) && this.state.isOpen[i] && <SidebarComponent pages={link.children}/>}
                                    </li>
                                </ul>
                            ) 
                        }
                    )}
                </nav>
            </div>
        )
    }
}