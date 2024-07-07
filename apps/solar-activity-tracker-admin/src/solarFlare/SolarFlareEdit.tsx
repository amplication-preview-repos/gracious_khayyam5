import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const SolarFlareEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="startTime" source="startTime" />
        <DateTimeInput label="endTime" source="endTime" />
        <NumberInput step={1} label="intensity" source="intensity" />
      </SimpleForm>
    </Edit>
  );
};
