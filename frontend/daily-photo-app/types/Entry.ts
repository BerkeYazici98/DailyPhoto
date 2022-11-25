import {Photo} from "./Photo"
import {Project} from "./Project";

export type Entry = {
    id?: number,
    project: Project,
    description: string,
    date: string,
}