import { onSnapshot } from "firebase/firestore"
import { useState, useEffect } from "react"
import Post from "./Post"

const posts = [
    {
        id: '123',
        username: 'alexaalexa',
        userImg: '/alexa.jpeg',
        img: '',
        caption: 'A beautiful lion resting on the rock'
    },
    {
        id: '123',
        username: 'alexaalexa',
        userImg: '/alexa.jpeg',
        img: '',
        caption: 'A beautiful lion resting on the rock'
    },
]

const Posts = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
     const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
        setPosts(snapshot.docs);
     })

     return() => {
       unsubscribe()
     }
  }, [])

  return (
    <div>
      {posts.map((post) => (
       <Post 
         key={post.id} 
         id={post.id}
         username={post.username}
         userImg={post.userImg}
         img={post.img}
         caption={post.caption}
         />
      ))}
     
    </div>
  )
}

export default Posts