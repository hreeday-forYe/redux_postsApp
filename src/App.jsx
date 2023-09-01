import PostList from "./features/posts/postList"
import AddPost from "./features/posts/AddPost"
function App() {

  return (
    <>
      <main className='app'>
        <AddPost/>
        <PostList/>
      </main>
    </>
  )
}

export default App
