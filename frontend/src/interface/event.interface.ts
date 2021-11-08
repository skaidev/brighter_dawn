
export interface IEvent {
    id: string;
    title: string;
    date: number;
    description: string;
    body: string;
    image: IMage;
    slug: string;
    gallery: IMage[]
}

export interface IMage {
    url: string;
    id: string;
}
