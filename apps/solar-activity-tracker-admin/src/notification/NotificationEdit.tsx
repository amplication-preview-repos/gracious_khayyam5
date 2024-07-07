import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <DateTimeInput label="sentAt" source="sentAt" />
        <NumberInput step={1} label="telegramUserId" source="telegramUserId" />
      </SimpleForm>
    </Edit>
  );
};
