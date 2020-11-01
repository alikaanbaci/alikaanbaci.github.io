import React from 'react';
import { Link } from 'react-router-dom';

export default class SidebarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isOpened: false}
    }

    hasChildren(item) {
        return item.children && item.children.length;
    }

    open() {
        this.setState({isOpened: !this.state.isOpened})
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
                                        <Link onClick={this.open.bind(this)} key={i} to={link.path}>{link.pageName}</Link>
                                        {this.hasChildren(link) && this.state.isOpened && <SidebarComponent pages={link.children}/>}
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