import { Controller, Get } from '@nestjs/common';

@Controller('api')  // 👈 AQUI LE AGREGAS EL PREFIJO CORRECTO
export class AppController {

  @Get('health')
  healthCheck() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('external-product')
  getExternalProduct() {
    return {
      id: 1,
      title: "Acrílico Profesional Artelab",
      price: 4990,
      description: "Pintura acrílica de alta calidad ideal para artistas.",
    };
  }
}
