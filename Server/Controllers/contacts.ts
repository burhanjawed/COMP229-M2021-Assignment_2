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

export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // pass the id to db
    Contacts.findById(id, {}, {}, (err, contactItemToEdit) =>
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // show the edit view
        res.render('index', {title: 'Edit', page: 'edit', person: contactItemToEdit});
    });
}