export const SERVER_URL =
	process.env.NODE_ENV === "production"
		? "https://bdmis.org/api/v1"
		: "http://localhost:8000/api/v1";
export const TOKEN_NAME = "__bdmis";
