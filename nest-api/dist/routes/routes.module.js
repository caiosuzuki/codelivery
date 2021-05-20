"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesModule = void 0;
const common_1 = require("@nestjs/common");
const routes_service_1 = require("./routes.service");
const routes_controller_1 = require("./routes.controller");
const mongoose_1 = require("@nestjs/mongoose");
const route_entity_1 = require("./entities/route.entity");
const microservices_1 = require("@nestjs/microservices");
const routes_gateway_1 = require("./routes.gateway");
let RoutesModule = class RoutesModule {
};
RoutesModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: route_entity_1.Route.name,
                    schema: route_entity_1.RouteSchema
                }
            ]),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: 'KAFKA_SERVICE',
                    useFactory: () => ({
                        transport: microservices_1.Transport.KAFKA,
                        options: {
                            client: {
                                clientId: process.env.KAFKA_CLIENT_ID,
                                brokers: [process.env.KAFKA_BROKER]
                            },
                            consumer: {
                                groupId: !process.env.KAFKA_CONSUMER_GROUP_ID || process.env.KAFKA_CONSUMER_GROUP_ID === ''
                                    ? 'my-consumer-' + Math.random()
                                    : process.env.KAFKA_CONSUMER_GROUP_ID
                            },
                        },
                    }),
                },
            ]),
        ],
        controllers: [routes_controller_1.RoutesController],
        providers: [routes_service_1.RoutesService, routes_gateway_1.RoutesGateway]
    })
], RoutesModule);
exports.RoutesModule = RoutesModule;
//# sourceMappingURL=routes.module.js.map