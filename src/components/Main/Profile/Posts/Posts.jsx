import PostItem from "./PostItem/PostItem"

const Posts = ({data}) => (
   <div>
      {data.map(
         (item, i) => (
            <PostItem
               key={i}
               image={item.images}
               date={item.date}
               text={item.text}
            />)
         )
      }
   </div>
)

export default Posts