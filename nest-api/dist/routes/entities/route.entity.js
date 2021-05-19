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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteSchema = exports.Route = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Route = class Route {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Route.prototype, "_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Route.prototype, "title", void 0);
__decorate([
    mongoose_1.Prop(mongoose_1.raw({
        lat: { type: Number },
        lng: { type: Number },
    })),
    __metadata("design:type", Object)
], Route.prototype, "startPosition", void 0);
__decorate([
    mongoose_1.Prop(mongoose_1.raw({
        lat: { type: Number },
        lng: { type: Number },
    })),
    __metadata("design:type", Object)
], Route.prototype, "endPosition", void 0);
Route = __decorate([
    mongoose_1.Schema()
], Route);
exports.Route = Route;
exports.RouteSchema = mongoose_1.SchemaFactory.createForClass(Route);
//# sourceMappingURL=route.entity.js.map