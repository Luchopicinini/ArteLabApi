import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')   // 👈 PREFIJO GLOBAL
export class AppController {
  constructor(private readonly appService: AppService) {}

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
