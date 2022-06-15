import { Body, Controller, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCatalogDto } from 'src/api/catalog/models/Requests/CreateCatalog.dto'
import { CatalogService } from 'src/domain/catalog/catalog.service';

@Controller('catalog')
export class CatalogController {
    constructor(private readonly catalogService: CatalogService) {}

    @Post('createItem/:itemCode')
    @UsePipes(ValidationPipe)
    createItem(@Param('itemCode') itemCode: string, @Body() CreateCatalogDto: CreateCatalogDto ) {
        return this.catalogService.createItem(CreateCatalogDto);
    }

} // Catalog Controller
