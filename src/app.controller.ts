import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller()
export class AppController {
  @UseGuards() // 🔥 Desactiva JWT aquí
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
