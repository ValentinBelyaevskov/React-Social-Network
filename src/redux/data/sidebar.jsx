const sidebar = {
   UI: {
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
      },
   },
   content: {
      actual: [
         {place: "Russia", trend: "Tik Tok", value: "401k"},
         {place: "Russia", trend: "Formula 1", value: "212k"},
         {place: "Russia", trend: "Илон Маск", value: "135k"},
         {place: "Russia", trend: "МРОТ", value: "50k"},
      ],
   
      whoToFollow: [
         {avatar: "./images/nike.jpg", community: "Nike", communityLogin: "@Nike", check: "./icons/check.svg"},
         {avatar: "./images/netflix.jpg", community: "Netflix Russia", communityLogin: "@NetflixRU", check: "./icons/check.svg"},
         {avatar: "./images/salomon.jpg", community: "Salomon Freeski", communityLogin: "@Salomonfreeski", check: "./icons/check.svg"},
         {avatar: "./images/formula1.jpg", community: "Formula 1", communityLogin: "@F1", check: "./icons/check.svg"},
      ],
   },
}

export default sidebar