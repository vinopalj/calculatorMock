import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiService, InBankCalculatorConfiguration } from './api.service';

@Controller('api')
export class ApiController {
    constructor(
        private apiService: ApiService,
    ) {}

    @Post('/inbank')
    async getInbankCalculator(@Body() data: InBankCalculatorConfiguration): Promise<any> {

        console.log('body data payload', data);
        
        return await this.apiService.getInBankCalculatorConfiguration(data);
    }
}
