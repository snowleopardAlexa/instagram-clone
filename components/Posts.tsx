import Post from "./Post";

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
    {
        id: '123',
        username: 'alexaalexa',
        userImg: '/alexa.jpeg',
        img: '',
        caption: 'A beautiful lion resting on the rock'
    },
]

const Posts = () => {
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