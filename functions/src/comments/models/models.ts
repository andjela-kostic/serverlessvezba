export interface IComment {
    title: string;
    desc: string;
    date: string;
    isDone: boolean;
  }
  
  export interface ICreateCommentRequest {
    title: string;
    desc: string;
  }