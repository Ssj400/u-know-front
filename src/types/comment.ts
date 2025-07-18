export type Comments = {
    id: number;
    postId: number;
    content: string;
    author: {
        id: string;
        nickname: string;
    };
    createdAt: string;
    authorId: number;
}