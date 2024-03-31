interface ReplyMessageType {
  video: BaseVideoType;
  user: UserInfoType;
  createdAt: string;
  content: string;
  targetReplyContent: string;
  rootContent: string;
  commentId: string;
}