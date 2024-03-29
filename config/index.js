module.exports = {
  //-- SITE SETTINGS -----
  author: "@konstantinmuenster",
  siteTitle: "Gatsby Starter Portfolio Minimal",
  siteShortTitle: "yujinwon", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "A modern one-page portfolio with a clean yet expressive design.",
  siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio Minimal", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#93c5fd",
      btn: "#2563eb",
      tertiary: "#93c5fd",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#000000",
      secondary: "#93c5fd",
      btn: "#2563eb",
      tertiary: "#93c5fd",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
      // primary: "#FAFAFA",
      // secondary: "#2A2926",
      // tertiary: "#252525",
      // text: "rgba(255, 255, 255, 0.87)",
      // subtext: "#AAAAAA",
      // background: "#121212",
      // card: "#1C1C1C",
      // scrollBar: "rgba(255, 255, 255, 0.5)",
      // boxShadow: "rgba(0, 0, 0, 0.16)",
      // boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // GitHub, LinkedIn, Resume
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/yujinwon/",
    },
    {
      name: "Github",
      url: "https://github.com/iamyujinwon",
    },
    {
      name: "Resume",
      url: "/Yujin_Won_Resume.pdf",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Interests",
        url: "/#interests",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
