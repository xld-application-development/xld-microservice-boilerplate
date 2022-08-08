import { AppDataSource } from '../../../loaders/startup';
import { Biller } from '@models/08-2022';

export const findAll = async () => {
  const repository = AppDataSource.getRepository(Biller);
  return await repository.find({});
};

export const findOne = async (id: number) => {
  const repository = AppDataSource.getRepository(Biller);
  return await repository.findOne({
    where: {
      id,
    },
  });
};

export const save = async (name: string, tag: string) => {
  const biller = new Biller();
  biller.name = name;
  biller.tag = tag;
  return await AppDataSource.manager.save(biller);
};
