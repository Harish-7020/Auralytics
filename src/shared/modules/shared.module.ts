import { Module } from "@nestjs/common";
import { DbConnectionModule } from "./db-connection.module";
import { UserService } from "src/modules/user/user.service";
import { JWTService } from "../services/jwt.service";
import { AuthService } from "../../modules/auth/auth.service";

const MODULES = [
    DbConnectionModule
]

const SERVICES = [
   UserService,
   JWTService,
   AuthService
]

@Module({
    imports: [...MODULES],
    controllers: [],
    providers: [...SERVICES],
    exports: [...MODULES, ...SERVICES]
})
export class SharedModule { }

