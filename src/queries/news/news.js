import {
  gql
} from "@apollo/client";

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
