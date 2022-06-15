import { Injectable, Param } from '@nestjs/common';
import { CreateCatalogDto } from 'src/api/catalog/models/Requests/CreateCatalog.dto';
import { CatalogClient } from 'src/utils/catalog/catalogClient';
@Injectable()
export class CatalogService {
    constructor(private catalogClient: CatalogClient) {}

    createItem(itemCode:string, CreateCatalogDto: CreateCatalogDto) {
        return this.catalogClient.createItem(itemCode, CreateCatalogDto);
    }

    getAllItems() {
        return this.catalogClient.getAllItems();
    }
} // catalog service 
