module.exports = {
  //-- SITE SETTINGS -----
  author: "Michael Moschello",
  siteTitle: "Ridge Forensics",
  siteShortTitle: "Ridge Forensics", // Used as logo text in header, footer, and splash screen
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config
  siteUrl: "https://rfsitetest.netlify.app/",
  useCookieBar: false, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: "", // e.g. UA-XXXXXX-X

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#590404",
      tertiary: "#590404",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#001601",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/@alphonse52leos
  //https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40alphonse52leo
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 3,

  socialMedia: [
    {
      name: "Past Results",
      url: "",
    },
    {
      name: "Alumni",
      url: "",
    },
    {
      name: "Officers",
      url: "",
    },
    {
      name: "Photos",
      url: "",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Join",
        url: "/#join",
      },

      {
        name: "Members",
        url: "/#members",
      },
      {
        name: "Judging",
        url: "/#judging",
      },
      {
        name: "Parents",
        url: "/#parents",
      },
      {
        name: "Latest Results",
        url: "/#results",
      },
    ],
    button: {
      useFileName: false,
      name: "Contact",
      fileName: "", // the file has to be placed inside the static folder at the root level
      url: "", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    {
      name: "I can put links here",
      url: "/thing",
    },
    {
      name: "",
      url: "",
    },
  ],
}
