import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActividadesCulturales } from './ActividadesCulturales.entity';
import { CreateActividadesCulturalesDto } from './dto/create-ActividadesCulturales.dto';
import { UpdateActividadesCulturalesDto } from './dto/update-ActividadesCulturales.dto';

@Injectable()
export class ActividadesCulturalesService {
    constructor(
    @InjectRepository(ActividadesCulturales)
    private readonly repo: Repository<ActividadesCulturales>,
    ) {}

    findAll() {
    return this.repo.find();
    }

    findOne(id: number) {
    return this.repo.findOne({ where: { NID_ACTIVIDAD_CULTURAL: id } });
    }

    create(data: CreateActividadesCulturalesDto) {
    const nueva = this.repo.create(data);
    return this.repo.save(nueva);
    }

    update(id: number, data: UpdateActividadesCulturalesDto) {
    return this.repo.update(id, data);
    }

    remove(id: number) {
    return this.repo.delete(id);
    }
}
