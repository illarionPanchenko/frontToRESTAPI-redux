import React from 'react';
import Posts from "./components/posts/posts";
import PostForm from "./components/postform/postform";
import { Provider } from 'react-redux'
import store from "./store";
import './App.sass';

function App() {

  return (
      <Provider store = {store}>
        <div className="App">
          <PostForm/>
          <Posts/>
        </div>
      </Provider>
  );
}

export default App;
