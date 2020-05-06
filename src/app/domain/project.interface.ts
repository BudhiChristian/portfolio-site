export interface ProjectInfo {
    title: string;
    descriptions: string[];
    links: LinkInfo[];
}

export interface LinkInfo {
    name: string;
    ref: string;
}