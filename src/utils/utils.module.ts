import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CatalogClient } from './catalog/catalogClient';

@Module({
    //imports: [CatalogClient],
    exports: [CatalogClient, ConfigService],
    imports: [HttpModule], // importing Httpmodule and configservice worked but i dont know why
    providers: [CatalogClient, ConfigService]
})
export class UtilsModule {}
