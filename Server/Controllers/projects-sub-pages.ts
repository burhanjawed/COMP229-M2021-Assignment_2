import express, { Request, Response, NextFunction } from 'express';

// import Util functions
import { UserDisplayName } from '../Util';

// Display Holy Cow Page
export function DisplayHolyCow(req: Request, res: Response, next: NextFunction): void
{
    res.render('projects-sub-pages', { title: 'Holy Cow - Projects - Burhan Jawed', page: 'holy-cow',  displayName: UserDisplayName(req)});
}

// Display Rascal Franky Page
export function DisplayRascalFranky(req: Request, res: Response, next: NextFunction): void
{
    res.render('projects-sub-pages', { title: 'Rascal Franky - Projects - Burhan Jawed', page: 'rascal-franky', displayName: UserDisplayName(req) });
}

// Display ReaderLab Page
export function DisplayReaderLab(req: Request, res: Response, next: NextFunction): void
{
    res.render('projects-sub-pages', { title: 'ReaderLab - Projects - Burhan Jawed', page: 'readerlab', displayName: UserDisplayName(req)});
}