import express, { Request, Response, NextFunction } from 'express';

import Contacts from '../Models/contacts';

// display contact list page
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    Contacts.find(function(err, contactsCollection){
        if(err)
        {
            return console.error(err);
        }

        // render contact-list view
        res.render('index', {title: 'Contact List', page: 'contact-list', contacts: contactsCollection});
    });
}