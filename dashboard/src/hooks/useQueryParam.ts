import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
	const { search } = useLocation();
	return useMemo(() => getQueryParams(search), [search]);
};

const getQueryParams = (search: string) => {
	if (search === "") return {};
	return (search.split("?").pop() as string)
		.split("&")
		.reduce((result: { [key: string]: string }, pair: string) => {
			const [key, value] = pair.split("=");
			result[key] = value;
			return result;
		}, {});
};
