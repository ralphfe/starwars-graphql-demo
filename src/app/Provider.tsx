'use client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { PropsWithChildren } from 'react';

const client = new ApolloClient({
    uri: "todo",
    cache: new InMemoryCache(),
});

export function Providers({children}: PropsWithChildren) {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}