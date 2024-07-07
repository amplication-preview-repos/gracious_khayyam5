import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SolarFlareService } from "./solarFlare.service";
import { SolarFlareControllerBase } from "./base/solarFlare.controller.base";

@swagger.ApiTags("solarFlares")
@common.Controller("solarFlares")
export class SolarFlareController extends SolarFlareControllerBase {
  constructor(
    protected readonly service: SolarFlareService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
