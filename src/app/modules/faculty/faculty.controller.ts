import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { paginationFields } from './../../../constants/pagination';
import { facultyFilterableFields } from './faculty.constant';
import { FacultyService } from './faculty.service';

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await FacultyService.getSingleFaculty(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty fetched successfully.',
    data: result,
  });
});

const getAllFaculties = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, facultyFilterableFields);
  const paginationOption = pick(req.query, paginationFields);

  const result = await FacultyService.getAllFaculties(
    filters,
    paginationOption
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty fetched successfully.',
    data: result,
  });
});

export const FacultyController = {
  getSingleFaculty,
  getAllFaculties,
};
