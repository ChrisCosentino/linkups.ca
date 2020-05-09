import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import uuid from 'react-uuid';

import '../styles/App.css';

export default class LinkItem extends Component {
    render() {
        const emptyUrl = 'http://null';

        return (
            <Container style={{textAlign: 'center', marginTop: '36px'}}>
                <a href="/" >
                    <h1>@{this.props.link.username}</h1>
                </a>
                
                { this.props.link.instagram !== emptyUrl ? 
                <div>
                <a href={this.props.link.instagram}>
                    <div className="link instagram">
                        <Row className="link-content" style={{fontSize: '24px'}}>
                            <i className="fab fa-instagram fa-lg icon-logo" ></i>
                        </Row>
                    </div>
                </a>
                </div>
                : <></>
                }
                
                { this.props.link.twitter !== emptyUrl ? 
                <div>
                <a href={this.props.link.twitter}>
                    <div className="link twitter">
                        <Row className="link-content" style={{fontSize: '24px'}}>
                            <i className="fab fa-twitter fa-lg icon-logo" ></i>
                        </Row>
                    </div>
                </a>
                </div>
                : null
                }

                { this.props.link.soundcloud !== emptyUrl ? 
                <div>
                <a href={this.props.link.soundcloud}>
                    <div className="link soundcloud">
                        <Row className="link-content" style={{fontSize: '24px'}}>
                            <i className="fab fa-soundcloud fa-lg icon-logo" ></i>
                        </Row>
                    </div>
                </a>
                </div>
                : null
                }

                { this.props.link.youtube !== emptyUrl ? 
                <div>
                <a href={this.props.link.youtube}>
                    <div className="link youtube">
                        <Row className="link-content" style={{fontSize: '24px'}}>
                            <i className="fab fa-youtube fa-lg icon-logo" ></i>
                        </Row>
                    </div>
                </a>
                </div>
                : null
                }

                { this.props.link.linkedin !== emptyUrl ? 
                <div>
                <a href={this.props.link.linkedin}>
                    <div className="link linkedin">
                        <Row className="link-content" style={{fontSize: '24px'}}>
                            <i className="fab fa-linkedin fa-lg icon-logo" ></i>
                        </Row>
                    </div>
                </a>
                </div>
                : null
                }

                { this.props.link.facebook !== emptyUrl ? 
                <div>
                <a href={this.props.link.facebook}>
                    <div className="link facebook">
                        <Row className="link-content" style={{fontSize: '24px'}}>
                            <i className="fab fa-facebook fa-lg icon-logo" ></i>
                        </Row>
                    </div>
                </a>
                </div>
                : <></>
                }

                { this.props.link.snapchat !== emptyUrl ? 
                <div>
                <a href={this.props.link.snapchat}>
                    <div className="link snapchat">
                        <Row className="link-content" style={{fontSize: '24px'}}>
                            <i className="fab fa-snapchat fa-lg icon-logo" ></i>
                        </Row>
                    </div>
                </a>
                </div>
                : null
                }   


                { this.props.link.reddit !== emptyUrl ? 
                <div>
                <a href={this.props.link.reddit}>
                    <div className="link reddit">
                        <Row className="link-content" style={{fontSize: '24px'}}>
                            <i className="fab fa-reddit fa-lg icon-logo" ></i>
                        </Row>
                    </div>
                </a>
                </div>
                : null
                }

                { this.props.link.twitch !== emptyUrl ? 
                <div>
                <a href={this.props.link.twitch}>
                    <div className="link twitch">
                        <Row className="link-content" style={{fontSize: '24px'}}>
                            <i className="fab fa-twitch fa-lg icon-logo" ></i>
                        </Row>
                    </div>
                </a>
                </div>
                : null
                }


                { this.props.link.pinterest !== emptyUrl ? 
                <div>
                <a href={this.props.link.pinterest}>
                    <div className="link pinterest">
                        <Row className="link-content" style={{fontSize: '24px'}}>
                            <i className="fab fa-pinterest fa-lg icon-logo" ></i>
                        </Row>
                    </div>
                </a>
                </div>
                : null
                }

                
            </Container>
        )
    }
}
