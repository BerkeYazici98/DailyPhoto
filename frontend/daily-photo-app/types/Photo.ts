import {Tag} from "./Tag";

export type Photo = {
    id?: number,
    tag: Tag,
    date: string,
    image?: File,
}