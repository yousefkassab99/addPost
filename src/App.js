import React from 'react';
import PostsList from './features/posts/PostsList';
import AddPostsForm from './features/posts/AddPostsForm';

function App() {
  return (
   <main className='App' >
  <PostsList />
  <AddPostsForm />
   </main>
  );
}

export default App;
