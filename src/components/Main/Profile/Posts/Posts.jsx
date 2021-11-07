import PostItemContainer from "./PostItem/PostItemContainer"

const Posts = (props) => {

   console.log(props.posts.slice(0).reverse())

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