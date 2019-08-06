import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createPost } from "../../actions/postActions";
import './postform.scss'

class PostForm extends Component {

    state={
        title:'',
        body:'',
        styleTitle: '200px',
        styleBody: '200px',
        stopor: 0,
        stoporBody: 0,
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        // call action with post in payload
        this.props.createPost(post);
    };
    componentDidUpdate() {
        //change width of inputs depending on the length of the text
        if(this.state.title.length > 15 && this.state.stopor===0){
            this.setState({styleTitle: '600px', stopor: 1})
        }else if(this.state.title.length < 15 && this.state.stopor!==0){
            this.setState({styleTitle: '200px', stopor: 0})
        }
        if(this.state.body.length > 15 && this.state.stoporBody===0){
            this.setState({styleBody: '600px', stoporBody: 1,})
        }else if(this.state.body.length < 15 && this.state.stoporBody!==0){
            this.setState({styleBody: '200px', stoporBody: 0,})
        }
    }

    render() {
        return (
            <div className='form-div'>
                <h1>Add post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h5>Title: </h5>
                        <input type='text' name='title' style={{width: this.state.styleTitle}}
                               onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <br/>
                    <div>
                        <h5>Body: </h5>
                        <input type='text' name='body' style={{width: this.state.styleBody}}
                               onChange={this.onChange} value={this.state.body}/>
                    </div>
                    <br/>
                    <button type='submit' style={{marginBottom: '10px'}} className='btn btn-primary'>Submit</button>

                </form>
            </div>
        );
    }
}

export default connect(null, {createPost})(PostForm);