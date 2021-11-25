import { IMage } from "./article.interface";

export interface IEvent {
    id: string;
    title: string;
    date: number;
    description: string;
    body: string;
    image: IMage;
    slug: string;
    createdAt: Date;
    gallery: IMage[]
}

