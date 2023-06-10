import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class JogadoresService {
  private jogadores: Jogador[] = [];

  private readonly logger = new Logger(JogadoresService.name);

  async criarAtualizarJogador(CreatePlayerDto: CreatePlayerDto): Promise<void> {
    this.create(CreatePlayerDto);
  }

  async buscarTodosJogadores(): Promise<Jogador[]> {
    return await this.jogadores;
  }

  private create(createPlayerDto: CreatePlayerDto): void {
    const { name, email, phoneNumber } = createPlayerDto;

    const jogadores: Jogador = {
      _id: uuidv4(),

      name,
      email,
      phoneNumber,

      ranking: 'A',
      positionRanking: 1,
      urlImageFriendly: 'www.google.com.br/foto123.jpg',
    };
    this.logger.log(`CreatePlayerDto: ${JSON.stringify(jogadores)}`);
    this.jogadores.push(jogadores);
  }
}
