import { IArticle } from "interface/article.interface";
import { atom } from "recoil";

export const ArticleAtom = atom({
    key:'ArticleAtom',
    default: null as unknown as IArticle
})

export const ArticlesAtom = atom({
    key: 'ArticlesAtom',
    default: [] as IArticle[]
})