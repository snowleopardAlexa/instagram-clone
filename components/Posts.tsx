import Post from "./Post";

const posts = [
    {
        id: '123',
        username: 'alexaalexa',
        userImg: '/alexa.jpeg',
        img: '',
        caption: 'subscribe'
    },
    {
        id: '123',
        username: 'alexaalexa',
        userImg: '/alexa.jpeg',
        img: '',
        caption: 'subscribe'
    },
    {
        id: '123',
        username: 'alexaalexa',
        userImg: '/alexa.jpeg',
        img: '',
        caption: 'subscribe'
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