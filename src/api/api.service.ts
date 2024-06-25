import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

export interface InBankCalculatorConfiguration {
    product_code: string;
    amount: number; // standard price (not same logic as Hc !)
    period: number; 
    payment_day: number;
    down_payment_amount: number;
    currency: 'CZK' | 'EUR'; // Add more currencies as needed
    response_level: 'simple' | 'detailed'; // Add more levels if available
}

export interface InBankCalculatorResponse {
    product_code: string;
    amount: number;
    period: number;
    down_payment_amount: number;
    payment_day: number;
    response_level: 'simple' | 'detailed';
    currency: 'CZK' | 'EUR'; // Extend with more currencies as needed
    payment_amount_monthly: number;
    interest_rate_annual: number;
    credit_cost_rate_annual: number;
    total_cost: number;
    total_cost_of_credit: number;
    down_payment_minimum_percentage: number;
    down_payment_minimum_amount: number;
}

@Injectable()
export class ApiService {
    private readonly nestConfigService: NestConfigService

    constructor() {
        this.nestConfigService = new NestConfigService();
    }

    async getInBankCalculatorConfiguration(configuration: InBankCalculatorConfiguration): Promise<InBankCalculatorResponse | null>{
            console.log(
                configuration
            )
        try {
                const shopUuid = this.nestConfigService.get<string>('INBANK_SHOPUUID')
                const token = this.nestConfigService.get<string>('INBANK_APIKEY')
      
                console.log('shopUuid', shopUuid);
                const resp = await fetch(
                    `https://demo-api.inbank.cz/partner/v2/shops/${shopUuid}/calculations`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify(configuration)
                    }
                );

                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await resp.json();
                return data;
    
            } catch (error) {
                return  null
       
            }

    
    }
}

