import React, { Fragment } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Nprogress from "nprogress";
import Router from "next/router";
import { useApollo } from "../apollo";
import { ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import "styles/index.scss";
import "styles/custom.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 

if (process.browser) {
	require("bootstrap/dist/js/bootstrap");
}

Router.events.on("routeChangeStart", () => {
	Nprogress.start();
});
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
	const client = useApollo(pageProps.apollo);
	return (
		<Fragment>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				></meta>
				<meta name="yandex-verification" content="a57d2d540a5a65c6" />
				<meta
					name="keywords"
					content="Primary school,nursery school, nursery and primary school , Coding club, ICT hall,Portharcourt school, Nigeria"
				/>
				<title>Brighter Dawn Montessori International School</title>
				<meta
					name="description"
					content="Brighter Dawn Montessori International School is an early child education institution nurturing happy effective leaders for the 21st century."
				/>
				<link rel="stylesheet" href="/nprogress.css" />
			</Head>
			<ApolloProvider client={client}>
				<RecoilRoot>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</RecoilRoot>
			</ApolloProvider>
		</Fragment>
	);
};

export default MyApp;

const Layout = ({ children }: { children: React.ReactChild }) => {
	return <Fragment>{children}</Fragment>;
};
