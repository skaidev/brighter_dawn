export interface IArticle {
	id: string;
	title: string;
	description: string;
	content: string;
	image: IMage;
	slug: string;
}

export interface IMage {
	url: string;
	id: string;
}
