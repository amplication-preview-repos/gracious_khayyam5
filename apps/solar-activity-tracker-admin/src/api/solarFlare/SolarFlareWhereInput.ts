import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SolarFlareWhereInput = {
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  intensity?: IntNullableFilter;
};
