import { useState, useEffect } from "react"
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { addDoc, collection, orderBy, query, onSnapshot, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"
import { useSession } from "next-auth/react"

const Post = ({ id, username, userImg, img, caption }) => {

const { data: session } = useSession()
const [comment, setComment] = useState("")
const [comments, setComments] = useState([])

// implicit destructuring 
useEffect(
  () => 
  onSnapshot(
    query(
      collection(db, "posts", id, "comments"),
      orderBy("timestamp", "desc")
    ),
    (snapshot) => setComments(snapshot.docs)
  ),
  [db]
)

const sendComment = async(e) => {
  e.preventDefault();

  const commentToSend = comment;
  setComment('');

  await addDoc(collection(db, "posts", id, "comments"), {
    comment: commentToSend,
    username: session.user.username,
    userImage: session.user.image,
    timestamp: serverTimestamp(),
  })
}

  return (
    <div key={id} className="bg-white my-7 border rounded-sm">
        <div className="flex items-center p-5">
            <img 
              src={userImg} 
              className="rounded-full h-12 w-12 object-contain border p-1 mr-3" 
              alt="profile photo" />
            <p className="flex-1 font-bold">{username}</p>
            <DotsHorizontalIcon className="h-5" />
        </div>
        <img 
          src={img}
          className="object-cover w-full" 
          alt="post-image" 
        />
        {session && (
          <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
              <HeartIcon className="btn" />
              <ChatIcon className="btn" />
              <PaperAirplaneIcon className="btn" />
          </div>
              <BookmarkIcon className="btn" />
          </div>
        )}
        
        <p className="p-5 truncate">
          <span className="font-bold mr-1">{username}</span>
          {caption}
        </p>

        {comments.length > 0 && (
          <div className="ml-10 h-20 overflow-y-scroll 
          scrollbar-thumb-black scrollbar-thin"> 
            {comments.map((comment) => (
              <div key={comment.id} className="flex items-center space-x-2 mb-3">
                 <img 
                   className="h-7 rounded-full"
                   src={comment.data().userImage} 
                   alt="profile-photo" 
                 />
                 <p className="text-sm flex-1">
                   <span className="font-bold">
                   {comment.data().username}
                   </span>
                   {comment.data().comment}
                 </p>
              </div>
            ))}
           </div>  
        )}

        {session && (
           <form className="flex items-center p-4">
           <EmojiHappyIcon className="h-7" />
           <input 
             type="text" 
             value={comment}
             onChange={e => setComment(e.target.value)}
             placeholder="Add a comment..."
             className="border-none flex-1 focus:ring-0" 
           />
           <button 
             type="submit" 
             disabled={!comment.trim()} 
             onClick={sendComment}
             className="font-semibold text-blue-400"
            >
             Post
          </button>
         </form>
        )}
    </div>
  )
}

export default Post