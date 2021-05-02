"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesController = void 0;
const common_1 = require("@nestjs/common");
const routes_service_1 = require("./routes.service");
const create_route_dto_1 = require("./dto/create-route.dto");
const update_route_dto_1 = require("./dto/update-route.dto");
const microservices_1 = require("@nestjs/microservices");
let RoutesController = class RoutesController {
    constructor(routesService, kafkaClient) {
        this.routesService = routesService;
        this.kafkaClient = kafkaClient;
    }
    create(createRouteDto) {
        return this.routesService.create(createRouteDto);
    }
    findAll() {
        return this.routesService.findAll();
    }
    findOne(id) {
        return this.routesService.findOne(+id);
    }
    update(id, updateRouteDto) {
        return this.routesService.update(+id, updateRouteDto);
    }
    remove(id) {
        return this.routesService.remove(+id);
    }
    async onModuleInit() {
        this.kafkaProducer = await this.kafkaClient.connect();
    }
    startRoute(id) {
        this.kafkaProducer.send({
            topic: "route.new-direction",
            messages: [
                {
                    key: "route.new-direction",
                    value: JSON.stringify({ routeId: id, clientId: '' }),
                },
            ]
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_route_dto_1.CreateRouteDto]),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_route_dto_1.UpdateRouteDto]),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "remove", null);
__decorate([
    common_1.Get(':id/start'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoutesController.prototype, "startRoute", null);
RoutesController = __decorate([
    common_1.Controller('routes'),
    __param(1, common_1.Inject('KAFKA_SERVICE')),
    __metadata("design:paramtypes", [routes_service_1.RoutesService,
        microservices_1.ClientKafka])
], RoutesController);
exports.RoutesController = RoutesController;
//# sourceMappingURL=routes.controller.js.map