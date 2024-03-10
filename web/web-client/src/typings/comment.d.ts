interface AddCommentType {
  vid: number,
  content: string,
  parentId: number,
  replyUserId?: number,
  replyUserName?: string,
  at: Array<string>
}


interface CommentType {
  id: number;
  uid: number;
  atUserIds: string;
  atUsernames: string;
  author: UserInfoType;
  content: string;
  createdAt: string;
  parentId: number;
  reply: ReplyType[];
  replyCount: number;

  // 本地使用的数据，接口不返回
  page?: number;
  showReplyBox?: boolean;
  hiddenMoreBtn?: boolean;
}

interface ReplyType {
  id: number;
  uid: number;
  atUserIds: string;
  atUsernames: string;
  author: UserInfoType;
  content: string;
  createdAt: string;
  parentId: number;
  replyUserId: number;
  replyUserName: string;
}
