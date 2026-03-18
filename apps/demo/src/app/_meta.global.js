const config = {
  index: {
    type: "page",
    display: "hidden",
    theme: {
      copyPage: false,
      layout: "full",
      toc: false,
    },
  },
  docs: {
    type: "page",
    title: "Docs",
    items: {
      introduction: {
        title: "Introduction",
      },
      "getting-started": {
        title: "Getting Started",
      },
      api: {
        title: "API",
      },
    },
  },
};

export default config;
