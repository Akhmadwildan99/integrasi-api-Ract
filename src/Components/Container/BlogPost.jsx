import React, { Component, Fragment } from 'react';
import Card from './Cards/card';
import axios from 'axios';
import './BlogPost.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export class BlogPost extends Component {
    state = {
        cards: [],
        formLogPost : {
            id: 1,
            userId: 1,
            title: "",
            body: ""
        }
    }
    
    getPostsApi = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((result) => {
            this.setState({
                cards: result.data
            })
        })
    }

    postDataApi = () => {
        axios.post('http://localhost:3004/posts', this.state.formLogPost).then((res)=>{
            console.log(res);
            this.getPostsApi()
        }, (err) => {
            console.log('error: ', err)
        })
    }

    handleRemove(data) {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res)=> {
            console.log(res);
            this.getPostsApi()
        })
    }

    handleChange = (event) => {
        let formBlogPostNew = {...this.state.formLogPost};
        let timeStamp = new Date().getTime();
        formBlogPostNew['id'] = timeStamp
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formLogPost: formBlogPostNew
        })
    }

    handleSubmit= () => {
        this.postDataApi()
    }

    componentDidMount() {
        this.getPostsApi()
    }
    render() {
        return (
            <Fragment>
                <Link to="/card">
                    <button>card</button>               
                </Link>
                <p className="title">Blog Post</p>
                <input value={this.props.totalOrder} />
                <div className="form-add">
                    <input 
                    type="text"
                    name="title" 
                    className="title-form"
                    placeholder="Add your title Blog"
                    onChange={this.handleChange} />
                    <br/>
                    <textarea 
                    type="text"
                    name="body" 
                    className="area-form"
                    placeholder="Add your text Blog"
                    id="body" 
                    cols="30" 
                    rows="10"
                    onChange={this.handleChange}></textarea>
                    <br/>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </div>
                {
                    this.state.cards.map(card => {
                        return <Card key= {card.id} data={card} remove={this.handleRemove} />
                    })
                }

                
            </Fragment>
        )
    }
}

const mapStateProps = (state) => {
    return {
        totalOrder: state.total
    }
}

export default connect(mapStateProps) (BlogPost)
