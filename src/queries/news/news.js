import gql from "graphql-tag";

const NEWS_QUERY = gql`
  query NewsArticle {
    newsArticles {
      data {
        attributes {
          slug
          title
          summary
          public_thumbnail
        }
      }
    }
  }
`;

export default NEWS_QUERY;
