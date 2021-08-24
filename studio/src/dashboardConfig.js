export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "612560ccbd8e00222ff95267",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-qadgfj3h",
                  apiId: "7d72d424-4b22-4370-9883-4795ec0590b4",
                },
                {
                  buildHookId: "612560ccdcac531badd4cadb",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ptpybjiq",
                  apiId: "97994e51-d23c-4095-b891-067da4b820f4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/raziqamine/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ptpybjiq.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
