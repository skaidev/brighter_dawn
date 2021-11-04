export const TOKEN_NAME = "__bdmis";

export const SERVER_URL =
	process.env.NODE_ENV === "production"
		? "https://edfhr.org"
		: "http://localhost:8000";

export const STRAPI_URI =
	process.env.NODE_ENV !== "development"
		? "https://cms.edfhr.org"
		: "http://localhost:1337";

export const WS_URI = SERVER_URL;

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
