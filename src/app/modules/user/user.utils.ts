import { IAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

export const findLastStudentId = async (): Promise<string | undefined> => {
  const lastUser = await User.findOne({ role: 'student' }, { id: 1, _id: 0 })

    .sort({
      createdAt: -1,
    })
    .lean();

  return lastUser?.id ? lastUser.id.substring(4) : undefined;
};

export const generateStudentId = async (
  academicSemester: IAcademicSemester
): Promise<string> => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(5, '0'); //00000
  //increment by 1
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementedId = `${academicSemester.year.substring(2)}${
    academicSemester.code
  }${incrementedId}`;

  return incrementedId;
};

export const lastFacultyId = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne(
    {
      role: 'faculty',
    },
    { id: 1, _id: 0 }
  )
    .sort({ createdAt: -1 })
    .lean();
  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

export const generateFacultyId = async (): Promise<string | undefined> => {
  const currentId = (await lastFacultyId()) || (0).toString().padStart(5, '0');

  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  incrementedId = `F-${incrementedId}`;

  return incrementedId;
};
