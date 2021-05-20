import { OnModuleInit } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { ClientKafka } from '@nestjs/microservices';
import { RoutesGateway } from './routes.gateway';
export declare class RoutesController implements OnModuleInit {
    private readonly routesService;
    private kafkaClient;
    private routeGateway;
    private kafkaProducer;
    constructor(routesService: RoutesService, kafkaClient: ClientKafka, routeGateway: RoutesGateway);
    create(createRouteDto: CreateRouteDto): string;
    findAll(): Promise<import("./entities/route.entity").RouteDocument[]>;
    findOne(id: string): string;
    update(id: string, updateRouteDto: UpdateRouteDto): string;
    remove(id: string): string;
    onModuleInit(): Promise<void>;
    startRoute(id: string): void;
    consumeNewPosition(message: {
        value: {
            routeId: string;
            clientId: string;
            position: [number, number];
            finished: boolean;
        };
    }): void;
}
