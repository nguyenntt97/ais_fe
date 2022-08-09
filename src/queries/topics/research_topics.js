import { gql } from "@apollo/client";

const TOPICS_QUERY = gql`
  query ResearchTopic {
    researchTopics {
      data {
        attributes {
          slug
          topic_name
          description
          domain
        }
      }
    }
  }
`;

export default TOPICS_QUERY;
