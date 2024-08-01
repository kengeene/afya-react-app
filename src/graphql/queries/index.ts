import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      visits
      keyIssues
      npsData
    }
  }
`;


export const GET_ISSUES = gql`
  query GetIssues {
    keyIssues {
      id
      type
      location
      count
    }
  }
`;
