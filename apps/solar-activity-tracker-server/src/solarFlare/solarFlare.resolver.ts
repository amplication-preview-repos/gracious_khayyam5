import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SolarFlareResolverBase } from "./base/solarFlare.resolver.base";
import { SolarFlare } from "./base/SolarFlare";
import { SolarFlareService } from "./solarFlare.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SolarFlare)
export class SolarFlareResolver extends SolarFlareResolverBase {
  constructor(
    protected readonly service: SolarFlareService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
