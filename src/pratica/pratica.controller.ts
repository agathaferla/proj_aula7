import { Body, Controller, Get, Post } from '@nestjs/common';
import { PraticaService } from './pratica.service';

@Controller()
export class PraticaController {

  constructor(
    private readonly praticaService: PraticaService
  ) {}

  @Post('pratica')
  async criar(@Body() body: any) {
    return this.praticaService.criar(body);
  }

  @Get('historico')
  async listar() {
    return this.praticaService.listar();
  }

  @Get('estatisticas')
  async estatisticas() {
    return this.praticaService.estatisticas();
  }
}