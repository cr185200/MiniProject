import { Injectable, Param } from '@nestjs/common';
import { CreateCatalogDto } from 'src/api/catalog/models/Requests/CreateCatalog.dto';
import { CatalogClient } from 'src/utils/catalog/catalogClient';
@Injectable()
export class CatalogService {
    constructor(
        private catalogClient: CatalogClient,
    ) {}

    createoldItem(itemCode: string){
        console.log("Loser");
        return this.catalogClient.createCatalogItem(itemCode);
    }

    createItem(itemCode:string) {
        
    }

} // catalog service 
