import React from 'react';
import { Link } from 'react-router-dom';
import {pages} from '../constant/page';

export default class HeaderComponent extends React.Component {

    render () {
        return (
            <div>
                <nav>
                    {pages.map(page => {
                        return <Link style={{margin: "10px"}} key={page.key} to={page.path}>{page.pageName}</Link>
                    })}
                </nav>
            </div>
        )
    }
}