import express, { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

// connect to contact model
import Contacts from '../Models/contacts';

// import Util functions
import { UserDisplayName } from '../Util';

// display contact list page
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    Contacts.find(function(err, contactsCollection){
        if(err)
        {
            return console.error(err);
        }

        // render contact-list view
        res.render('index', {title: 'Contacts List', page: '/contact-list/contact-list', contacts: contactsCollection, displayName: UserDisplayName(req)});
    });
}

// display Update page
export function DisplayUpdatePage(req: Request, res: Response, next: NextFunction): void
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
        res.render('index', {title: 'Update Contact', page: '/contact-list/update', contacts: contactItemToEdit, displayName: UserDisplayName(req)});
    });
}

// process Update page
export function ProcessUpdatePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Contact
    let updatedContact = new Contacts
    ({
        "_id": id,
        "Name": req.body.name,
        "Number": req.body.number,
        "Email": req.body.email
    });

    // find the contact by id and update
    Contacts.updateOne({_id: id}, updatedContact, {}, (err) =>{
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact-list');
    });
}

// display Add page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', {title: 'Add Contact', page: '/contact-list/add', contacts: '', displayName: UserDisplayName(req)});
}

// process Add page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
    // instantiate a new Contact
    let newContact = new Contacts
    ({
        "Name": req.body.name,
        "Number": req.body.number,
        "Email": req.body.email
    });

    //db.contacts.insert
    Contacts.create(newContact, (err) => {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact-list');
    });
}

// process Delete
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    //db.contacts.remove
    Contacts.remove({_id: id}, (err) => {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact-list');
    });
}