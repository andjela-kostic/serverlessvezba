import { ICreateCommentRequest, IComment } from "../models/models";

export const createCommentRequest = (Comment: ICreateCommentRequest): IComment => {
  return { ...Comment, date: Date.now().toString(), isDone: false };
};