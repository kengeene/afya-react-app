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


export const GET_ANALYTICS = gql`
  query AnalyticMetrics {
    analyticMetrics {
      id
      name
      unit
      data {
        month
        value
      }
    }
  }
`;

export const GET_NPS_DATA = gql`
  query NpsMetrics {
    npsMetrics {
      id
      location
      staffName
      efficiencyDelta
      npsDelta
      efficiency
      reportedIssues
      npsScore
    }
  }
`;
