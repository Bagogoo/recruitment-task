import express, { Request, Response } from "express";

export const testRouter = express.Router()
    .get('/', (req: Request, res: Response) => {
        res.json({ message: 'This is routing test' });
    });
