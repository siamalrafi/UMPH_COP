import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
app.use('/api/v1/', routes);

// //Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // throw new ApiError(httpStatus.OK, 'Testing Error logger');
//   res.send('Testing');
// });

//global error handler
app.use(globalErrorHandler);

export default app;
