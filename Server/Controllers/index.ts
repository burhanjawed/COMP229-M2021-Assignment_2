import express, { Request, Response, NextFunction } from 'express';

// Display Home Page
export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Burhan Jawed - Personal Portfolio', page: 'home' });
}

// Display About Page
export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'About - Burhan Jawed', page: 'about' });
}

// Display Projects Page
export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Projects - Burhan Jawed', page: 'projects' });
}

// Display Services Page
export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Services - Burhan Jawed', page: 'services' });
}

// Display Contact Page
export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Contact - Burhan Jawed', page: 'contact' });
}