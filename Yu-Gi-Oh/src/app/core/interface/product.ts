

export interface ITheme<T = string> {
    subscribers: string[];
    posts: T[];
    themeName: string;
    _id: string;
    created_at: string;
    updatedAt: string;
    __v: string;

}