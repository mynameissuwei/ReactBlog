import React from 'react';

import PostOne from '../component/posts/PostOne.jsx';
import {connect} from 'react-redux';

import {fetchPosts} from '../action/PostsAction.js';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,//post的state
    user:state.user//博客的博主信息
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch(fetchPosts())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostOne);