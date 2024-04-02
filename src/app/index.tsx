import React from 'react';
import {PostsList, AddPostForm} from "../features/posts";

function App() {
    return (
        <div className="App">
            <AddPostForm/>
            <PostsList/>
        </div>
    );
}

export default App;
