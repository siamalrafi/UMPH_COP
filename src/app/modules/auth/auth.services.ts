import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';

import { ILoginUser } from './auth.interface';

const loginUser = async (payload: ILoginUser) => {
  const { id, password } = payload;

  const user = new User();
  const isUserExist = await User.isUserExist(id)

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User dose not found.');
  }

  //   match password
  if (
    isUserExist.password &&
    !await User.isPasswordMatch(password, isUserExist?.password)
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password does not match.');
  }

  //   create access token

  return {
    isUserExist?.needPasswordChange
  };
};

export const AuthServices = {
  loginUser,
};
