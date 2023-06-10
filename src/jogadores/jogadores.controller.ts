import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private readonly jogadoresService: JogadoresService) {}

  @Post()
  async criarAtualizarJogador(@Body() createPlayerDto: CreatePlayerDto) {
    await this.jogadoresService.criarAtualizarJogador(createPlayerDto);
  }

  @Get()
  async buscarJogadores(): Promise<Jogador[]> {

    return this.jogadoresService.buscarTodosJogadores()

  }
}
