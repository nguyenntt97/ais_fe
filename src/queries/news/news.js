import { gql } from "@apollo/client";

const NEWS_QUERY = gql`
  query NewsArticle {
    newsArticles {
      data {
        attributes {
          slug
          title
          summary
          update_time
          public_thumbnail
        }
      }
    }
  }
`;

export default NEWS_QUERY;
