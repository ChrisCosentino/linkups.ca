import React, { Component } from 'react'
import Link from './Link';
import NotFound from './NotFound';

import axios from 'axios';

export default class UserComponent extends Component {

    constructor(props){
        super(props);

        this.state ={
            links: [],
            notFound: false
        }
    }

    componentDidMount(){
        axios.get('/api/links/'+ this.props.match.params.username)
            .then(res => {
                this.setState({ links: res.data });
                console.log(this.state.links);
            })
            .catch(err => {
                console.log(err.response);
                if(err.response.status === 404){
                    this.setState({ notFound: true });
                }
            });
    }

    render() {
        if(this.state.notFound){
            return (
                <NotFound />
            )
        }else{
            return (
                <div>
                    <Link links={this.state.links} />
                </div>
            )
        }
    }
}
