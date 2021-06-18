import express, { Request, Response, NextFunction } from 'express';

import Contacts from '../Models/contacts';

export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    Contacts.find(function(err, contacts){
        if(err)
        {
            return console.error(err);
        }

        console.log(contacts);
    });
}