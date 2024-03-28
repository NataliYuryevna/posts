import React from 'react';
import PostsList from "../features/posts/ui/List";
import AddPostForm from "../features/posts/ui/AddPostForm";

function App() {
  return (
    <div className="App">
        <AddPostForm/>
        <PostsList/>
    </div>
  );
}

export default App;
