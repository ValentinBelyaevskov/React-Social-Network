import PostItem from "./PostItem/PostItem"

const Posts = () => (
   <div className="posts">
      <PostItem image="https://i.pinimg.com/564x/51/90/ac/5190acde39a10ebd71d2edf193bbc9da.jpg" date="July 21 at 21:19" text="Post text"/>

      <PostItem image="https://i.pinimg.com/564x/88/7c/8f/887c8fc7bb7fcfe15eb3a7139095254a.jpg" date="May 14 at 19:05" text="Post text"/>

      <PostItem image="https://i.pinimg.com/564x/7b/ce/db/7bcedb2bededd5f48ed0c847ab4b6745.jpg" date="May 1 at 22:05" text="Post text"/>
   </div>
)

export default Posts