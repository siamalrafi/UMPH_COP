import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createStudent
);

router.post(
  '/create-faculty',
  validateRequest(UserValidation.createFacultyZodSchema),
  UserController.createFaculty
);

router.post(
  '/create-admin',
  validateRequest(UserValidation.createAdminZodSchema),
  UserController.createAdmin
);

// create faculty
// create admin

export const UserRoutes = router;
