import PostItemContainer from "./PostItem/PostItemContainer"

const Posts = (props) => {
   return (
      <div>
         {props.posts.slice(0).reverse().map(
            (item, i) => (
               <PostItemContainer
                  content={props.content}
                  post={item}
                  UI={props.UI}
                  key={i}
                  number={i}
               />
            )
         )
         }
      </div>
   )
}

export default Posts