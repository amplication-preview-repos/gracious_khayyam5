import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SolarFlareModuleBase } from "./base/solarFlare.module.base";
import { SolarFlareService } from "./solarFlare.service";
import { SolarFlareController } from "./solarFlare.controller";
import { SolarFlareResolver } from "./solarFlare.resolver";

@Module({
  imports: [SolarFlareModuleBase, forwardRef(() => AuthModule)],
  controllers: [SolarFlareController],
  providers: [SolarFlareService, SolarFlareResolver],
  exports: [SolarFlareService],
})
export class SolarFlareModule {}
