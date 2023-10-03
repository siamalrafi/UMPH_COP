import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();
router.post(
  '/create-management',
  validateRequest(
    ManagementDepartmentValidation.createManagementDepartmentZodSchema
  ),
  ManagementDepartmentController.createManagementDepartment
);

// router.get('/', ManagementDepartmentController.getAllManagementDepartments);

// router.get(
//   '/:id',
//   ManagementDepartmentController.getSinglelManagementDepartment
// );

// router.patch(
//   '/:id',
//   validateRequest(
//     ManagementDepartmentValidation.updateManagementDepartmentZodSchema
//   ),
//   ManagementDepartmentController.updateManagementDepartment
// );

export const FacultyRoutes = router;
