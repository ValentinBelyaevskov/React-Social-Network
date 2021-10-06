const appData = {


   header: {   // ! header
      headerSearch: {   // ? headerSearch
         logo: "",
         searchInputText: "Search",
         searchLogo: "./icons/loupe.svg",
      }
   },


   main: {   // ! main
      profile: {   // ? profile

         user: {  // * user

            userData: [
               "Date of Birth",
               "City",
               "Education",
               "E-mail"
            ],

            newPost: {
               title: "New post",
               inputText: "What’s happening?",
               button: "Send",
               icons: [
                  "./icons/image.svg",
                  "./icons/video.svg",
                  "./icons/music.svg",
                  "./icons/files.svg",
               ]
            },

         },

         posts: {  // * post

            postButtonsImg: {
               like: "./icons/like.svg",
               comment: "./icons/comment.svg",
               repost: "./icons/share.svg",
            },

            postButtonsName: [
               "like",
               "comment",
               "repost",
            ],

         },

      },


      messages: {   // ? messages
         messagesSearch: {    // * messagesSearch
            searchInputText: "search",
            groupChatIcon: "./icons/chat.svg",
            otherIcon: "./icons/other.svg",
            searchIcon: "./icons/messageLoupe.svg",
         }
      },
   },


   sidebars: {   // ! sidebars 
      controls: [    // ? controls
         "Profile",
         "News",
         "Messages",
         "Friends",
         "Photos",
         "Music",
         "Settings",
      ],

      whatToFollow: {    // ? whatToFollow
         tags: "Actual",
         groups: "Who to follow",
         button: "Follow"
      }
   },
}

export default appData