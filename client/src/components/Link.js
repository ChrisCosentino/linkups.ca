import React, { Component } from 'react';
import LinkItem from './LinkItem';

import uuid from 'react-uuid';


export default class Link extends Component {
    render() {
        return this.props.links.map((link) => (
            <div>
                
                    <LinkItem link={link} key={uuid()} />
                
            </div>
        ))   
    }
}
