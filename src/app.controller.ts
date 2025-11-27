import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/health')
  healthCheck() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('api/external-product')
  getExternalProduct() {
    return {
      id: 1,
      title: "Acrílico Profesional Artelab",
      price: 4990,
      description: "Pintura acrílica de alta calidad ideal para artistas.",
    };
  }
}

