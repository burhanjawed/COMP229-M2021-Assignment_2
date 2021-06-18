import express, { Request, Response, NextFunction } from 'express';

import Contacts from '../Models/contacts';

// display contact list page
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    Contacts.find(function(err, contacts){
        if(err)
        {
            return console.error(err);
        }

        // print out contact list to console
        console.log(contacts);
    });
}