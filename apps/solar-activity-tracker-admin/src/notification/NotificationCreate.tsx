import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <DateTimeInput label="sentAt" source="sentAt" />
        <NumberInput step={1} label="telegramUserId" source="telegramUserId" />
      </SimpleForm>
    </Create>
  );
};
