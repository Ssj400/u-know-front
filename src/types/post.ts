export interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    authorId: number;
    categoryId: number;
    author: {
        id: number;
        nickname: string;
    }
    category: {
        id: number;
        name: string;
    }
}

export interface PostForm {
    title: string;
    content: string;
    categoryId: number;
}

