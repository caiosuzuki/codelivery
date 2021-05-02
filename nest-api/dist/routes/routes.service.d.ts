import { Model } from 'mongoose';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { RouteDocument } from './entities/route.entity';
export declare class RoutesService {
    private routeModel;
    constructor(routeModel: Model<RouteDocument>);
    create(createRouteDto: CreateRouteDto): string;
    findAll(): Promise<RouteDocument[]>;
    findOne(id: number): string;
    update(id: number, updateRouteDto: UpdateRouteDto): string;
    remove(id: number): string;
}
