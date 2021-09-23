import PostItem from "./PostItem/PostItem"

const Posts = ({data}) => (
   <div className="posts">
      {data.map(item => (
         <PostItem
            image={item.images}
            date={item.date}
            text={item.text}
         />)
      )}
   </div>
)

export default Posts