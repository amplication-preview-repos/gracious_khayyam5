import { SolarFlare as TSolarFlare } from "../api/solarFlare/SolarFlare";

export const SOLARFLARE_TITLE_FIELD = "id";

export const SolarFlareTitle = (record: TSolarFlare): string => {
  return record.id?.toString() || String(record.id);
};
