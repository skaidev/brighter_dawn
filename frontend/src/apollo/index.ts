import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
	NormalizedCacheObject,
} from "@apollo/client";
import fetch from "isomorphic-unfetch";
import jscookie from "js-cookie";
import { NextPageContext } from "next";
import { useMemo } from "react";
import { STRAPI_URI, TOKEN_NAME } from "../utils/constants";
import { getTokenCookie } from "../utils/cookieUtils";

let apolloClient: ApolloClient<any>;

// if (process.browser) {
//     global.fetch = fetch;
// }

const uri = `${STRAPI_URI}/graphql`;

export const apollo: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	uri,
	cache: new InMemoryCache(),

	headers: {
		Authorization: "Bearer " + jscookie.get(TOKEN_NAME) || " ",
	},
});

export const apolloStrapi: ApolloClient<NormalizedCacheObject> =
	new ApolloClient({
		uri: `${STRAPI_URI}/graphql`,
		cache: new InMemoryCache(),
	});

const createLink = (initialState: any, token: string) => {
	const cookie = process.browser ? jscookie.get(TOKEN_NAME) : token;
	const httpLink = createHttpLink({
		uri,
		fetch,
		credentials: "include",
		headers: {
			cookie,
		},
	});

	return new ApolloClient({
		connectToDevTools: process.browser,
		ssrMode: !process.browser,
		link: httpLink,
		cache: new InMemoryCache().restore(initialState || {}),
	});
};

export const initializeApollo = (
	initialState?: any,
	ctx?: NextPageContext,
): ApolloClient<any> => {
	const cookie = getTokenCookie(ctx?.req);
	if (!process?.browser) return createLink(initialState, cookie);
	if (!apolloClient) {
		apolloClient = createLink(initialState, cookie);
	}

	return apolloClient;
};

export const useApollo = (initialState: any): ApolloClient<any> => {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
};
