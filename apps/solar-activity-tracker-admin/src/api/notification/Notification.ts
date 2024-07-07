export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  message: string | null;
  sentAt: Date | null;
  telegramUserId: number | null;
};
