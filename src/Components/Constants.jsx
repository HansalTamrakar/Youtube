const YOUR_API_KEY = "AIzaSyCr0mdslZb-Wuos4KeT-v8cD2TLsry1LNU";
export const YouTubeVideoApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  YOUR_API_KEY;

export const YoutubeApi =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=home";

export const commentData = [
  {
    name: "Person1",
    comment: "nice video",
    replies: [
      {
        name: "Person2",
        comment: "I like it",
        replies: [
          {
            name: "Person2",
            comment: "I like it",
            replies: [],
          },
        ],
      },
    ],
  },

  {
    name: "Person4",
    comment: "nice video",
    replies: [
      {
        name: "Person5",
        comment: "I like it",
        replies: [
          {
            name: "Person6",
            comment: "I like it",
            replies: [],
          },
        ],
      },
    ],
  },

  {
    name: "Person7",
    comment: "nice video",
    replies: [
      {
        name: "Person8",
        comment: "I like it",
        replies: [
          {
            name: "Person9",
            comment: "I like it",
            replies: [
              {
                name: "Person4",
                comment: "nice video",
                replies: [
                  {
                    name: "Person5",
                    comment: "I like it",
                    replies: [
                      {
                        name: "Person6",
                        comment: "I like it",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
