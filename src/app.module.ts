import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ConsumerModule } from './consumer/consumer.module';
import { Constants, KafkaConfig } from './services/kafka.config';

const kafkaImport = ClientsModule.register([
  KafkaConfig(Constants.KafkaClientToken),
]);

@Module({
  imports: [kafkaImport, ConsumerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
