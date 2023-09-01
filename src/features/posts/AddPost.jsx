import React ,{useImperativeHandle, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPosts } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);


  const submitHandler =(e)=>{
    e.preventDefault();
    if(title && content){
      dispatch(addPosts(title,content,userId))
    }
    setTitle('')
    setContent('')
    setUserId('')
  }
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map(user=>(
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))
  return (
    <section>
      <h2>Add a New Posts: </h2>
      <form onSubmit={e=>submitHandler(e)}>
        <label htmlFor="postTitle">Post Title:</label>
        <input 
          type="text" 
          placeholder='Post Title' 
          id='postTitle'
          value={title} 
          onChange={e=>setTitle(e.target.value)} />
          <label htmlFor="postAuthor">Author:</label>
          <select id="postAuthor" value={userId} onChange={e=>setUserId(e.target.value)}>
          <option value="" disabled defaultValue={true} hidden>Select Your option</option>
            {userOptions}
          </select>
        <label htmlFor="postContent">Post Content: </label>
        <textarea 
          type="text" 
          placeholder='Post Content' 
          id="postContent"
          value={content} 
          onChange={e=>setContent(e.target.value)} />
        <button type='submit' disabled={!canSave}>Save Post</button>
    </form>
    </section>
  )
}

export default AddPost