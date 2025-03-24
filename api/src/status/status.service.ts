import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Status } from './status.entity';

@Injectable()
export class StatusService {
	constructor(
		@InjectRepository(Status) private readonly statusRepository: Repository<Status>
	) {}

	async findOneBy(filter: FindOneOptions<Status>): Promise<Status> {
		return await this.statusRepository.findOne(filter);
	}
}
