import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ConsumerController {
  constructor() {}

  @MessagePattern('meu-topico')
  async Login(@Payload() message) {
    //const [emailUser, action] = message.value.split(':');
    console.log(message);

    return 'Success';
  }
}
