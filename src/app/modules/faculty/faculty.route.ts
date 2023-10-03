import express from 'express';
import { FacultyController } from './faculty.controller';

const router = express.Router();

router.get('/:id', FacultyController.getSingleFaculty);
router.get(
  '/',

  FacultyController.getAllFaculties
);
export const FacultyRoutes = router;
