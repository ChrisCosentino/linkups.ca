import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBBtn, MDBInput, MDBIcon } from 'mdbreact';
import { 
    FaInstagram, 
    FaTwitch, 
    FaTwitter, 
    FaSoundcloud, 
    FaPinterest, 
    FaYoutube, 
    FaFacebook, 
    FaSnapchat,
    FaReddit, 
    FaLinkedin
} from 'react-icons/fa';

import axios from 'axios';
import { Redirect, Prompt } from 'react-router-dom';



export default class FormComponent extends Component {
   

    constructor(props){
        super(props);

        this.state = {
            username: '',
            instagram: '',
            twitter: '',
            soundcloud: '',
            youtube: '',
            facebook: '',
            linkedin: '',
            snapchat: '',
            reddit: '',
            twitch: '',
            pinterest: '',
            isCreated: false,
            error: ''
        }

    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    
    handleSubmit = (e) => {
         e.preventDefault();
    
        const data = {
            username: this.state.username,
            instagram: this.state.instagram ? this.state.instagram : 'null',
            twitter: this.state.twitter ? this.state.twitter : 'null',
            soundcloud: this.state.soundcloud ? this.state.soundcloud : 'null',
            youtube: this.state.youtube ? this.state.youtube : 'null',
            linkedin: this.state.linkedin ? this.state.linkedin : 'null',
            facebook: this.state.facebook ? this.state.facebook : 'null',
            snapchat: this.state.snapchat ? this.state.snapchat : 'null',
            reddit: this.state.reddit ? this.state.reddit : 'null',
            twitch: this.state.twitch ? this.state.twitch : 'null',
            pinterest: this.state.pinterest ? this.state.pinterest : 'null'
        }

        console.log(data);
       
        axios.post('http://localhost:5000/api/links', data)
            .then((res) => {
                console.log(res);
                
                this.setState({ isCreated: true });
            })
            .catch(err => {
                if(err.response.status === 404){
                    this.setState({ error: 'The username is taken' });
                }
            })
    }

   


    render() {


        if(this.state.isCreated){
            return (
                <>
                    <Prompt message={location => (
                        `Copy this URL: https://linkups.ca${location.pathname}`
                    )}/>
                    <Redirect to={{pathname: '/' + this.state.username}} />
                </>
            )
        }else{
        return (
            <>
            <MDBCard>
                <form onSubmit={this.handleSubmit}>
                    <h1 className="card-header stylish-color-dark white-text text-center py-4">
                        <span>YOUR URL:</span> <br />
                        <strong style={{fontSize: '24px'}}>https://www.linkups.ca/ <input type="text"  placeholder="Enter username..." name="username" required onChange={this.onChange}/></strong>
                        <br />
                        <span style={{fontSize: '12px', color: 'lightgray'}}>**People will be able to find you by this link</span>
                    </h1>

                   <MDBCardBody>

                        { this.state.error !== '' ? 
                        <p style={{color: 'red'}}>* Error: {this.state.error}</p>
                        : <div></div>
                        }

                        <br />
                        <div>
                            <MDBInput label={ <span><FaInstagram /> Instagram</span>} group type="text" name="instagram" className="insta-form" onChange={this.onChange} />
                        </div>

                        <br />

                        <div>
                            <MDBInput label={ <span><FaTwitter /> Twitter</span>} group type="text" name="twitter" onChange={this.onChange} />
                        </div>

                        <br />

                        <div>
                            <MDBInput label={ <span><FaSoundcloud /> Soundcloud</span>} group type="text" name="soundcloud" onChange={this.onChange} />
                        </div>

                        <br />

                        <div>
                            <MDBInput label={ <span><FaTwitch /> Twitch</span>} group type="text" name="twitch" onChange={this.onChange} />
                        </div>

                        <br />

                        <div>
                            <MDBInput label={ <span><FaSnapchat /> Snapchat</span>} group type="text" name="snapchat" onChange={this.onChange} />
                        </div>

                        <br />

                        <div>
                            <MDBInput label={ <span><FaReddit /> Reddit</span>} group type="text" name="reddit" onChange={this.onChange} />
                        </div>

                        <br />

                        <div>
                            <MDBInput label={ <span><FaLinkedin /> Linkedin</span>} group type="text" name="linkedin" onChange={this.onChange} />
                        </div>

                        <br />

                        <div>
                            <MDBInput label={ <span><FaFacebook /> Facebook</span>} group type="text" name="facebook" onChange={this.onChange} />
                        </div>

                        <br />

                        <div>
                            <MDBInput label={ <span><FaYoutube /> Youtube</span>} group type="text" name="youtube" onChange={this.onChange} />
                        </div>

                        <br />

                        <div>
                            <MDBInput label={ <span><FaPinterest /> Pinterest</span>} group type="text" name="pinterest" onChange={this.onChange} />
                        </div>
                        <br />
                        
                        <MDBBtn color="blue-grey" type="Submit" >Submit</MDBBtn>
                   </MDBCardBody>
                </form>
            
            </MDBCard>
            
            </>
        )
        }
    }
}
