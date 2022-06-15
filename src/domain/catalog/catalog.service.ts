import { Injectable } from '@nestjs/common';
import { CreateCatalogDto } from 'src/api/catalog/models/Requests/CreateCatalog.dto';

@Injectable()
export class CatalogService {


    createItem( CreateCatalogDto: CreateCatalogDto){
        return console.log("Loser");
    }

} // catalog service 
