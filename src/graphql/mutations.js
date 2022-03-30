import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
mutation authenticateUser($credentials: AuthenticateInput!) {
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`