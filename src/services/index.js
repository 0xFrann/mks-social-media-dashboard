export const totalFollowers = () => {
  const number = 23004;
  return number.toLocaleString();
};

export const getGlobalStats = () => [
  {
    socialMedia: {
      icon: "facebook",
      link: { text: "@nathanf", url: "#" },
    },
    totalStats: {
      number: 1987,
      caption: "Followers",
    },
    growthStats: {
      caption: "12 Today",
      growth: true,
    },
  },
  {
    socialMedia: {
      icon: "twitter",
      link: { text: "@nathanf", url: "#" },
    },
    totalStats: {
      number: 1044,
      caption: "Followers",
    },
    growthStats: {
      caption: "99 Today",
      growth: true,
    },
  },
  {
    socialMedia: {
      icon: "instagram",
      link: { text: "@realnathanf", url: "#" },
    },
    totalStats: {
      number: "11k",
      caption: "Followers",
    },
    growthStats: {
      caption: "1099 Today",
      growth: true,
    },
  },
  {
    socialMedia: {
      icon: "youtube",
      link: { text: "Nathan F.", url: "#" },
    },
    totalStats: {
      number: 8239,
      caption: "Subscribers",
    },
    growthStats: {
      caption: "144 Today",
      growth: false,
    },
  },
];

export const getTodayStats = () => [
  {
    socialMedia: { icon: "facebook" },
    parameters: [
      {
        caption: "Page Views",
        totalStats: 87,
        growthStats: {
          percent: "3%",
          growth: true,
        },
      },
      {
        caption: "Likes",
        totalStats: 52,
        growthStats: {
          percent: "2%",
          growth: false,
        },
      },
    ],
  },
  {
    socialMedia: { icon: "instagram" },
    parameters: [
      {
        caption: "Likes",
        totalStats: 5462,
        growthStats: {
          percent: "2257%",
          growth: true,
        },
      },
      {
        caption: "Profile Views",
        totalStats: "52k",
        growthStats: {
          percent: "1375%",
          growth: true,
        },
      },
    ],
  },
  {
    socialMedia: { icon: "twitter" },
    parameters: [
      {
        caption: "Retweets",
        totalStats: 117,
        growthStats: {
          percent: "303%",
          growth: true,
        },
      },
      {
        caption: "Likes",
        totalStats: 507,
        growthStats: {
          percent: "533%",
          growth: true,
        },
      },
    ],
  },
  {
    socialMedia: { icon: "youtube" },
    parameters: [
      {
        caption: "Likes",
        totalStats: 107,
        growthStats: {
          percent: "19%",
          growth: false,
        },
      },
      {
        caption: "TotalViews",
        totalStats: 1407,
        growthStats: {
          percent: "12%",
          growth: false,
        },
      },
    ],
  },
];
