const main = {
   UI: {
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

      chat: {
         icons: {
            arrow: "./icons/arrow.svg",
            attachments: "./icons/attachments.svg",
            sendArrow: "./icons/sendArrow.svg",
            other: "./icons/other.svg",
            emoji: "./icons/emoji.svg"
         }
      },
   },

   content: {
      friends: [
         {
            avatar: "https://i.pinimg.com/564x/33/48/3f/33483f8798bd49395b86b3c2133caa45.jpg",
            name: "Aldous Norman",
            online: true,
            location: "Nottingham",
            dateOfBirth: "13.02.1995",
         },
         {
            avatar: "https://i.pinimg.com/564x/66/06/ce/6606cef8781cc84789c796dd7f9fa152.jpg",
            name: "Derrick Gray",
            online: false,
            location: "Leicester",
            dateOfBirth: "12.11.1991",
         },
         {
            avatar: "https://i.pinimg.com/564x/e2/de/b7/e2deb7d73cd3fa66f9d7007cd1a5d653.jpg",
            name: "Janice Carroll",
            online: false,
            location: "Worcester",
            dateOfBirth: "01.02.1996",
         },
         {
            avatar: "https://i.pinimg.com/564x/f6/69/9e/f6699e72c4ce444d1e5e965ddb00235a.jpg",
            name: "Homer Welch",
            online: false,
            location: "Salford",
            dateOfBirth: "20.05.1999",
         },
         {
            avatar: "https://i.pinimg.com/564x/d9/3b/12/d93b12ef8ca14d2a272da069741cf9a0.jpg",
            name: "Edward Stafford",
            online: false,
            location: "Derby",
            dateOfBirth: "28.12.1989",
         },
         {
            avatar: "https://i.pinimg.com/564x/ee/ed/74/eeed74579774a5c2440a3eb595185d80.jpg",
            name: "Rudolph Leonard",
            online: false,
            location: "York",
            dateOfBirth: "05.08.1990",
         },
         {
            avatar: "https://i.pinimg.com/564x/f7/d5/24/f7d52411d28a66e60e83e2901d4f44db.jpg",
            name: "Oliver Hawkins",
            online: true,
            location: "Norwich",
            dateOfBirth: "08.04.2001",
         },
         {
            avatar: "https://i.pinimg.com/564x/ed/51/d0/ed51d0d050c8d82989126b0f8d32d1dc.jpg",
            name: "John Hancock",
            online: false,
            location: "City of London",
            dateOfBirth: "30.11.1983",
         },
         {
            avatar: "https://i.pinimg.com/564x/a5/b3/b6/a5b3b63b354d56bc594ceaf16ebaa111.jpg",
            name: "David Townsend",
            online: true,
            location: "Durham",
            dateOfBirth: "09.03.1998",
         },
         {
            avatar: "https://i.pinimg.com/564x/5e/11/bf/5e11bf9e797a5f6ff42a52935c25b632.jpg",
            name: "Sophia Wilkins",
            online: true,
            location: "City of London",
            dateOfBirth: "18.07.1987",
         },
         {
            avatar: "https://i.pinimg.com/564x/19/9b/88/199b88687447a7380dcd0dc30fde8bb0.jpg",
            name: "Brittany Stephens",
            online: true,
            location: "Salford",
            dateOfBirth: "03.09.1991",
         },
         {
            avatar: "https://i.pinimg.com/564x/3f/e1/6b/3fe16bf088b630d0f9b44b21d29f5aa1.jpg",
            name: "Kristin Hudson",
            online: false,
            location: "City of London",
            dateOfBirth: "29.02.1999",
         },
         {
            avatar: "https://i.pinimg.com/236x/f3/52/b9/f352b9f33b141004a17b5faf66b90e37.jpg",
            name: "Edward Richard",
            online: false,
            location: "Lancaster",
            dateOfBirth: "31.07.1982",
         },
         {
            avatar: "https://i.pinimg.com/564x/38/ad/b5/38adb5ae5813a39393c43be11510f534.jpg",
            name: "Bartholomew Mosley",
            online: true,
            location: "Winchester",
            dateOfBirth: "19.03.1983",
         },
         {
            avatar: "https://i.pinimg.com/564x/81/85/43/818543f30868e293db66e1cb2897842b.jpg",
            name: "Gerald Nicholson",
            online: true,
            location: "Coventry",
            dateOfBirth: "09.01.1989",
         },
         {
            avatar: "https://i.pinimg.com/564x/2e/58/71/2e5871995bfe4e921b407a267e05f9be.jpg",
            name: "Paul Briggs",
            online: false,
            location: "Winchester",
            dateOfBirth: "07.06.1986",
         },
      ],

      communities: [
         {status: "Unfollow", avatar: "./images/nike.jpg", community: "Nike", communityLogin: "@Nike", check: "./icons/check.svg"},
         {status: "Unfollow", avatar: "./images/netflix.jpg", community: "Netflix Russia", communityLogin: "@NetflixRU", check: "./icons/check.svg"},
         {status: "Unfollow", avatar: "./images/salomon.jpg", community: "Salomon Freeski", communityLogin: "@Salomonfreeski", check: "./icons/check.svg"},
         {status: "Unfollow", avatar: "./images/formula1.jpg", community: "Formula 1", communityLogin: "@F1", check: "./icons/check.svg"},
      ],

      messenger: {
         search: "asd asdawdasas as a",
         dialogText: "ijokki u das dawjgk",
         newMessage: { person: "", date: "", messageText: "" },
         dialogs: [
            {
               name: "Paul Briggs",
               messages: [
                  { person: "you", date: "2020-11-17T21:27:21.000", messageText: "Ut aut reiciendis" },
               ],
               dialogId: "paulbriggs07061986",
            },
            {
               name: "Gerald Nicholson",
               messages: [
                  { person: "you", date: "2021-01-02T17:08:21.000", messageText: "Temporibus autem)))" },
               ],
               dialogId: "geraldnicholson09011989",
            },
            {
               name: "Bartholomew Mosley",
               messages: [
                  { person: "interlocutor", date: "2021-04-20T15:54:21.000", messageText: "At vero eos et" },
               ],
               dialogId: "bartholomewmosley19031983",
            },
            {
               name: "Edward Richard",
               messages: [
                  { person: "interlocutor", date: "2021-04-27T03:12:21.000", messageText: "To take a trivial example" },
               ],
               dialogId: "edwardrichard31071982",
            },
            {
               name: "Kristin Hudson",
               messages: [
                  { person: "you", date: "2021-05-12T10:20:21.000", messageText: "You how all this mistaken idea" },
               ],
               dialogId: "kristinhudson29021999",
            },
            {
               name: "Brittany Stephens",
               messages: [
                  { person: "you", date: "2021-08-11T17:10:21.000", messageText: "et dolore magnam" },
               ],
               dialogId: "brittanystephens03091991",
            },
            {
               name: "Sophia Wilkins",
               messages: [
                  { person: "interlocutor", date: "2021-09-10T20:14:21.000", messageText: "(((..." },
                  { person: "you", date: "2021-09-10T14:24:21.000", messageText: "But I must explain to you how all this mistaken idea" },
                  { person: "you", date: "2021-09-10T14:26:21.000", messageText: "But I must explain to you how all this mistaken idea" },
                  { person: "interlocutor", date: "2021-09-11T17:05:21.000", messageText: "But I must explain to you how all this mistaken idea" },
                  { person: "you", date: "2021-09-12T13:10:21.000", messageText: "But I must explain to you how all this mistaken idea" },
               ],
               dialogId: "sophiawilkins18071987",
            },
            {
               name: "David Townsend",
               messages: [
                  { person: "you", date: "2021-09-20T11:17:21.000", messageText: "Temporibus autem quibusdam et aut officiis debitis aut rerum" },
               ],
               dialogId: "davidtownsend09031998",
            },
            {
               name: "John Hancock",
               messages: [
                  { person: "you", date: "2021-09-28T22:51:21.000", messageText: "Good idea!" },
               ],
               dialogId: "johnhancock30111983",
            },
            {
               name: "Oliver Hawkins",
               messages: [
                  { person: "interlocutor", date: "2021-10-01T13:18:21.000", messageText: "Et harum quidem?" },
               ],
               dialogId: "oliverhawkins08042001",
            },
            {
               name: "Rudolph Leonard",
               messages: [
                  { person: "interlocutor", date: "2021-10-12T23:07:21.000", messageText: "At vero eos et" },
               ],
               dialogId: "rudolphleonard05081990",
            },
            {
               name: "Edward Stafford",
               messages: [
                  { person: "you", date: "2021-10-21T23:16:21.000", messageText: "But who has any right to find fault" },
               ],
               dialogId: "edwardstafford28121989",
            },
            {
               name: "Homer Welch",
               messages: [
                  { person: "interlocutor", date: "2021-10-27T18:10:21.000", messageText: "because it is pain..." },
               ],
               dialogId: "homerwelch20051999",
            },
            {
               name: "Janice Carroll",
               messages: [
                  { person: "you", date: "2021-10-28T19:00:21.000", messageText: "Ok)" },
               ],
               dialogId: "janicecarroll01021996",
            },
            {
               name: "Derrick Gray",
               messages: [
                  { person: "interlocutor", date: "2021-10-28T23:10:21.000", messageText: "Sed ut perspiciatis unde omnis" },
                  { person: "you", date: "2021-10-30T22:49:21.000", messageText: "But I must explain to you how all this mistaken idea" },
                  { person: "you", date: "2021-11-01T12:31:21.000", messageText: "But I must explain to you how all this mistaken idea" },
                  { person: "interlocutor", date: "2021-11-02T02:47:21.000", messageText: "But I must explain to you how all this mistaken idea" },
                  { person: "you", date: "2021-11-02T05:54:21.000", messageText: "But I must explain to you how all this mistaken idea" },
               ],
               dialogId: "derrickgray12111991",
            },
            {
               name: "Aldous Norman",
               messages: [
                  { person: "interlocutor", date: "2021-10-30T14:48:00.000", messageText: "But I must explain to you how all this mistaken idea" },
                  { person: "you", date: "2021-10-31T09:14:00.000", messageText: "But I must explain to you how all this mistaken idea" },
                  { person: "you", date: "2021-10-31T09:15:00.000", messageText: "But I must explain to you how all this mistaken idea" },
                  { person: "interlocutor", date: "2021-10-31T12:37:00.000", messageText: "But I must explain to you how all this mistaken idea" },
                  { person: "you", date: "2021-11-01T10:53:00.000", messageText: "But I must explain to you how all this mistaken idea" },
                  { person: "you", date: "2021-11-01T10:54:02.000", messageText: "But I must explain to you how all this mistaken idea" },
                  { person: "you", date: "2021-11-02T08:54:21.000", messageText: "But I must explain to you how all this mistaken idea" },
                  { person: "interlocutor", date: "2021-11-02T08:59:21.000", messageText: "But I must explain to you how all this mistaken idea" },
               ],
               dialogId: "aldousnorman13021995",
            },
         ]
      },

      profile: {
         newPost: {
            date: "",
            text: "asdasd asdaw dasdas",
            images: "",
            videos: [],
            audio: [],
            documents: [],
            likes: 0,
            reposts: 0,
            comments: [],
         },

         posts: [
            {
               date: "2020-03-20T15:17:00.000",
               text: "Post text",
               images: ["https://i.pinimg.com/564x/77/14/40/771440492fe85b540fd144cfc7572334.jpg"],
               videos: [""],
               audio: [""],
               documents: [""],
               likes: 74,
               reposts: 0,
               comments: ["classics of the genre", "lorem ipsum dolor..."],
            },
            {
               date: "2021-04-01T22:23:00.000",
               text: "Post text",
               images: ["https://i.pinimg.com/564x/7b/ce/db/7bcedb2bededd5f48ed0c847ab4b6745.jpg"],
               videos: [""],
               audio: [""],
               documents: [""],
               likes: 103,
               reposts: 1,
               comments: ["lorem ipsum dolor...", "it's very beautiful photo", "where is it?"],
            },
            {
               date: "2021-10-31T19:05:00.000",
               text: "Post text",
               images: ["https://i.pinimg.com/564x/88/7c/8f/887c8fc7bb7fcfe15eb3a7139095254a.jpg"],
               videos: [""],
               audio: [""],
               documents: [""],
               likes: 97,
               reposts: 4,
               comments: [],
            },
            {
               date: "2021-11-02T10:51:00.000",
               text: "Sed ut perspiciatis unde omnis",
               images: ["https://i.pinimg.com/564x/51/90/ac/5190acde39a10ebd71d2edf193bbc9da.jpg"],
               videos: [""],
               audio: [""],
               documents: [""],
               likes: 120,
               reposts: 0,
               comments: [],
            },
         ],

         user: {
            avatar: "https://i.pinimg.com/564x/91/97/f2/9197f24f198f0e93d062e66a702d3be4.jpg",
            name: "Ivanov Ivan",
            ["Date of Birth"]: "03.05.1995",
            ["City"]: "Moscow",
            ["Education"]: "Lomonosov MSU",
            ["E-mail"]: "ivanovivan@mail.ru",
         },
      }
   },
}

export default main