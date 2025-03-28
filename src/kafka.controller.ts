// kafka.controller.ts
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class KafkaController {
  @EventPattern('meu-topico')
  async handleKafkaMessage(@Payload() message: any) {
    console.log('Mensagem recebida do Kafka:', message);
    // Aqui você pode processar a mensagem
  }
}
