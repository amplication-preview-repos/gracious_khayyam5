import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type NotificationWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
  telegramUserId?: IntNullableFilter;
};
