import express, { Request, Response, NextFunction } from 'express';

import passport from 'passport';

// create an instance of user model
import User from '../Models/user';

// import Util functions
import { UserDisplayName } from '../Util';

// Display Home Page
export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Burhan Jawed - Personal Portfolio', page: 'home', displayName: UserDisplayName(req) });
}

// Display About Page
export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'About - Burhan Jawed', page: 'about', displayName: UserDisplayName(req) });
}

// Display Projects Page
export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Projects - Burhan Jawed', page: 'projects', displayName: UserDisplayName(req) });
}

// Display Services Page
export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Services - Burhan Jawed', page: 'services', displayName: UserDisplayName(req) });
}

// Display Contact Page
export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Contact - Burhan Jawed', page: 'contact', displayName: UserDisplayName(req) });
}

// Display login page
export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
{
    if(!req.user)
    {
        return res.render('index', { title: 'Login - Burhan Jawed', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/contact-list');
}

export function ProcessLoginPage(req: Request, res: Response, next: NextFunction): void
{
    passport.authenticate('local', (err, user, info) => {
        // are there server errors?
        if(err)
        {
            console.error(err);
            return next(err);
        }

        // are there login errors?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.login(user, (err) => 
        // are there db errors?
        {
            if(err)
            {
                console.error(err);
                return next(err);
            }

            return res.redirect('/contact-list');
        });
    })(req, res, next);
}

export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction): void
{
    if(!req.user)
    {
        return res.render('index', { title: 'Register - Burhan Jawed', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/contact-list');
}

export function ProcessRegisterPage(req: Request, res: Response, next: NextFunction): void
{
    // instantiate a new User object
    let newUser = new User
    ({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.FirstName + " " + req.body.LastName
    });

    User.register(newUser, req.body.password, (err) =>
    {
        if(err)
        {
            console.error('Error: Inserting New User');
            if(err.name == "UserExistsError")
            {
                console.error('Error: User Already Exists');
            }
            req.flash('registerMessage', 'Registration Error');
            
            return res.redirect('/register');
        }

        // after successful registration - login the user
        return passport.authenticate('local')(req, res, () => {
            return res.redirect('/contact-list');
        });
    });
}

export function ProcessLogoutPage(req: Request, res: Response, next: NextFunction): void
{
    req.logout();

    return res.redirect('/login');
}