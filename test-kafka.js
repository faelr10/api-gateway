const { Kafka } = require('kafkajs');

async function testKafkaConnection() {
  const kafka = new Kafka({
    clientId: 'test-client',
    brokers: ['localhost:9092'],
  });

  const admin = kafka.admin();
  try {
    await admin.connect();
    console.log('✅ Conectado ao Kafka com sucesso!');
    await admin.disconnect();
  } catch (error) {
    console.error('❌ Erro ao conectar ao Kafka:', error);
  }
}

testKafkaConnection();
