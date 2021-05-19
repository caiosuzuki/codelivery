import { OnModuleInit } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { ClientKafka } from '@nestjs/microservices';
export declare class RoutesController implements OnModuleInit {
    private readonly routesService;
    private kafkaClient;
    private kafkaProducer;
    constructor(routesService: RoutesService, kafkaClient: ClientKafka);
    create(createRouteDto: CreateRouteDto): string;
    findAll(): any;
    findOne(id: string): string;
    update(id: string, updateRouteDto: UpdateRouteDto): string;
    remove(id: string): string;
    onModuleInit(): any;
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
