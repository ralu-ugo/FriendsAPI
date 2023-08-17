import 'dotenv/config'
import 'tsconfig-paths/register'
import createError from 'http-errors'
import express, { Request, Response } from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import './db/mongodb'


import indexRouter from './routes/index';
import friendRouter from './routes/friend.route';
import documentationRouter from './routes/documentation.routes'

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/friends', friendRouter);
app.use('/api-docs', documentationRouter)


// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: any) {
  next(createError(404));
});

// error handler
app.use(function(err: any, req: Request, res: Response, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

export default app;
