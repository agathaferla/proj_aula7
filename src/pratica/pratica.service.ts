import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Pratica, PraticaDocument } from './pratica.model';

@Injectable()
export class PraticaService {

  constructor(
    @InjectModel(Pratica.name)
    private praticaModel: Model<PraticaDocument>,
  ) {}

  async criar(pratica: any) {
    return this.praticaModel.create(pratica);
  }

  async listar() {
    return this.praticaModel.find();
  }

  async estatisticas() {

    const praticas = await this.praticaModel.find();

    const total = praticas.length;

    const tipos: any = {};
    const usuarios: any = {};

    praticas.forEach((p) => {

      tipos[p.tipo] = (tipos[p.tipo] || 0) + 1;

      usuarios[p.nomeUsuario] =
        (usuarios[p.nomeUsuario] || 0) + 1;
    });

    const praticaMaisComum =
      Object.keys(tipos).reduce((a, b) =>
        tipos[a] > tipos[b] ? a : b
      );

    const usuarioMaisAtivo =
      Object.keys(usuarios).reduce((a, b) =>
        usuarios[a] > usuarios[b] ? a : b
      );

    return {
      totalGeral: total,
      praticaMaisComum,
      usuarioMaisAtivo,
      totalPorTipo: tipos,
    };
  }
}