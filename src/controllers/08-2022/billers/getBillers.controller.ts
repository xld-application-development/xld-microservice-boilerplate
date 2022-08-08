import { NextFunction, Request, Response } from 'express';
import { findAll } from '@database/08-2022/billers/billers.database';
import { success, fail, logger } from '@utils';

export const findAllBillersAsync = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const billers = await findAll();

    return res.status(200).json(success(billers));
  } catch (exception) {
    logger.error(exception);
    return res.status(exception.code).json(fail(exception.data, exception.message));
  }
};
