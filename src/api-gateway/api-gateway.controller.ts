import { Controller, Get, Inject, Injectable } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { IApiGatewayService } from './structure';

@Injectable()
@Controller('gateway')
export class ApiGatewayController {
  constructor(
    @Inject(ApiGatewayService)
    private readonly apiGatewayService: IApiGatewayService,
  ) {
    console.log('ApiGatewayController created');
  }

  @Get('hello')
  async getHello(): Promise<object> {
    const response = this.apiGatewayService.getHello();
    return response;
  }
}
