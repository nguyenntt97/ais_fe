import { gql } from "@apollo/client";

const TOPICS_QUERY = gql`
  query ResearchTopic {
    researchTopics {
      data {
        attributes {
          slug
          title
          title_en
          summary
          summary_en
          domain
          public_thumbnail
        }
      }
    }
  }
`;

export default TOPICS_QUERY;
