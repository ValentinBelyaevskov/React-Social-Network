import PostItem from "./PostItem/PostItem"

const Posts = ({ state, appState }) => (
   <div>
      {state.posts.map(
         (item, i) => (
            <PostItem
               state={state}
               appState={appState}

               key={i}

               content={
                  {
                     image: item.images,
                     date: item.date,
                     text: item.text,
                     number: i,
                  }
               }

            />)
      )
      }
   </div>
)

export default Posts