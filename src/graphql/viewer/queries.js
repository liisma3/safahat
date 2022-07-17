import { gql } from '@apollo/client';

export const GET_VIEWERS = gql`
  query Viewers {
    viewers {
      login
      email
      token
      level
      phone
      
    }
  }
`;

export const GET_VIEWER = gql`
    query Viewer($id: String) {
    viewer(id: $id) {
      login
      email
      token
      level
      phone
      productsPromoted
      bio
      cards{title}
  
      tablets{
        title
      }
    cardsValid{
      title
      }
  tabletsValid{ title}
  role
  
  liism
  walletId
  address{
    name
    destination
    building
    street
    city
    state
    country
  
    zip
    isdefault
  }
  updatedAt
  createdAt
    }
  }
`;

export const SIGN_IN_VIEWER = gql`
  query SignInViewer($input: SignViewerInput) {
    signinViewer(input: $input) {
      login
      email
      token
      
      phone
      
      productsPromoted
    }
  }
`;
export const GET_TOKEN = gql`
  query RefreshToken {
    refreshToken {
      token
    }
  }
`;
