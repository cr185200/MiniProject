import { Body, Controller, Param, Post, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import { CreateCatalogDto } from 'src/api/catalog/models/Requests/CreateCatalog.dto'
import { CatalogService } from 'src/domain/catalog/catalog.service';

@Controller('catalog')
export class CatalogController {
    constructor(private catalogService: CatalogService) {}

    @Post('createItem/:itemCode')
    @UsePipes(ValidationPipe)
    oldCreateItem(@Param('itemCode') itemCode: string, @Body() CreateCatalogDto: CreateCatalogDto ) {
        //return this.catalogService.createItem(CreateCatalogDto);
    }

    @Put('/createOldItem/:itemCode')
    createoldItem(@Param('itemCode') itemCode: string){
        return this.catalogService.createoldItem(itemCode);
    }

    @Put('/createItem/:itemCode')
    createItem(@Param('itemCode') itemCode: string){
        
    }

} // Catalog Controller
