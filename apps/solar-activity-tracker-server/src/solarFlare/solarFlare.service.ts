import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SolarFlareServiceBase } from "./base/solarFlare.service.base";

@Injectable()
export class SolarFlareService extends SolarFlareServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
