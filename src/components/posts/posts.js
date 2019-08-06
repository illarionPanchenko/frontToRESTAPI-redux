import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../../actions/postActions";
import './posts.sass'



class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

  /*  componentWillReceiveProps(nextProps) {
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }
*/

 shouldComponentUpdate(nextProps) {
     if(nextProps.newPost){
         this.props.posts.unshift(nextProps.newPost)
     }
     return true
 }

    render() {

        const postItems = this.props.posts.map((post)=>(
            <div key={post.id} className='card-body card' style={{width: '90%', margin: '5%'}}>
                <h3 className='card-title'>{post.title}</h3>
                <p className='card-text'>{post.body}</p>
                <hr />
            </div>
        ));

        return (
            <div>
                <div className='card' style={{backgroundColor: '#f5feff'}}>
                <h1 style={{ margin: '10px'}}>Posts</h1>
                </div>
                <div className='container'>
                {postItems}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);