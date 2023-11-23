import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class LawsuitService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createLawsuitDto: Prisma.LawsuitCreateInput) {
    return this.databaseService.lawsuit.create({ data: createLawsuitDto });
  }

  findAll() {
    return this.databaseService.lawsuit.findMany({});
  }

  findOne(id: number) {
    return this.databaseService.lawsuit.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateLawsuitDto: Prisma.LawsuitUpdateInput) {
    return this.databaseService.lawsuit.update({
      where: {
        id,
      },
      data: updateLawsuitDto,
    });
  }

  remove(id: number) {
    return this.databaseService.lawsuit.delete({
      where: { id },
    });
  }
}
