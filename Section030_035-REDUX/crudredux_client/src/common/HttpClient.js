import axios from 'axios';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const axiosClient = axios.create({
    baseURL: 'http://localhost:4000'
});

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});