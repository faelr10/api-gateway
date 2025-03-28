import { Injectable, OnModuleInit } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  onModuleInit() {
    console.log('✅ Kafka Consumer Service iniciado!');
  }

  @MessagePattern('meu-topico') // Nome exato do tópico Kafka
  consumeMessage(@Payload() message: any) {
    console.log('📩 Mensagem recebida do Kafka:', message.value);
  }
}
