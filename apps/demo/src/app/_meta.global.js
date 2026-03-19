const config = {
  index: {
    type: "page",
    title: "Easy-to-Use TOC Component",
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
        title: "API Reference",
        items: {
          "toc-provider": {
            title: "<TocProvider>",
          },
          toc: {
            title: "<Toc>",
          },
          headings: {
            title: "<H2> ~ <H6>",
          },
        },
      },
    },
  },
};

export default config;
