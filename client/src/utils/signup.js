import { gql } from '@apollo/client';

export const USER_SIGNUP = gql`
mutation addProfile($name: String!, $passWord: String!, $dateOfBirth: String!) {
    addProfile(name: $name) {
        _id
        name
        passWord
        dateOfBirth
    }
}
`