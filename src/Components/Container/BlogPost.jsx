import React, { Component, Fragment } from 'react';
import Card from './Cards/card';
import axios from 'axios';
import './BlogPost.css';

export class BlogPost extends Component {
    state = {
        cards: []
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             cards: json
        //         });
        //     })
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => this.setState({
                cards: res.data
            }))
    }
    render() {
        return (
            <Fragment>
                <p className="title">Blog Post</p>
                {
                    this.state.cards.map(card => {
                        return <Card key= {card.id} title={card.title} desc ={card.body}/>
                    })
                }
                
            </Fragment>
        )
    }
}

export default BlogPost
