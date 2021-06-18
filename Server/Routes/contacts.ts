import express from 'express';
const router = express.Router();
export default router;

// create contacts controller instance
import { DisplayAddPage, DisplayContactListPage, DisplayUpdatePage, ProcessAddPage, ProcessDeletePage, ProcessUpdatePage } from '../Controllers/contacts';

/* GET contact-list page - with /contact-list */
router.get('/', DisplayContactListPage);

/* GET route for displaying add page - UPDATE Operation */
/* Display update/:id page - with /contact-list/update:id */
router.get('/update/:id', DisplayUpdatePage);

/* POST route for processing edit page - UPDATE Operation */
router.post('/update/:id', ProcessUpdatePage);

/* GET route for displaying add page - CREATE Operation */
router.get('/add', DisplayAddPage);

/* POST route for processing add page - CREATE Operation */
router.post('/add', ProcessAddPage);

/* GET to perform deletion - DELETE Operation */
router.post('/delete/:id', ProcessDeletePage);