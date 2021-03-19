import {Request, Response, NextFunction} from 'express';

export type RestCall = {
    (request: Request, response: Response, next: NextFunction): void;
}