export interface ProjectInfo {
    title: string;
    descriptions: string[];
    links: LinkInfo[];
    image?: string;
}

export interface LinkInfo {
    name: string;
    ref: string;
}