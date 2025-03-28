import { Injectable } from '@nestjs/common';
import { IApiGatewayService } from './structure';

@Injectable()
export class ApiGatewayService implements IApiGatewayService {
  constructor() {
    console.log('ApiGatewayService created');
  }

  async getHello(): Promise<object> {
    //aqui vou tratar a parte de autenticação e autorização

    //depois vou chamar o microserviço responsável por gRPC

    return {
      msg: 'Hello from ApiGatewayService',
      timestamp: new Date().toISOString(),
    };
  }
}
