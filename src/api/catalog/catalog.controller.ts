import { Body, Controller, Param, Post, UsePipes, ValidationPipe, Put, Get } from '@nestjs/common';
import { CreateCatalogDto } from 'src/api/catalog/models/Requests/CreateCatalog.dto'
import { CatalogService } from 'src/domain/catalog/catalog.service';

@Controller('catalog')
export class CatalogController {
    constructor(private catalogService: CatalogService) {}

    @Put('/createItem/:itemCode')
    //@UsePipes(ValidationPipe)
    createItem(@Param('itemCode') itemCode: string, @Body() CreateCatalogDto: CreateCatalogDto){
        return this.catalogService.createItem(itemCode, CreateCatalogDto);
    }

    @Get('/getItems/')
    getAllItems(){
        return this.catalogService.getAllItems();
    }

    @Get('/getItem/:itemCode')
    getItem(@Param('itemCode') itemCode: string){
        return this.catalogService.getItem(itemCode);
    }

} // Catalog Controller
