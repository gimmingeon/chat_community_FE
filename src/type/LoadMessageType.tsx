export interface LoadMessageType {
    id: number,
    content: string,
    createdAt: Date,
    user: { id: number, nickname: string },

}