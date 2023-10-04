import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthServices } from './auth.services';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;

  const result = await AuthServices.loginUser(loginData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User login Successfully.',
    data: result,
  });
});

export const AuthController = {
  loginUser,
};
