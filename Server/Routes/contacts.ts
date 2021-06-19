import express from 'express';
const router = express.Router();
export default router;

// create contacts controller instance
import { DisplayAddPage, DisplayContactListPage, DisplayUpdatePage, ProcessAddPage, ProcessDeletePage, ProcessUpdatePage } from '../Controllers/contacts';

// import Util functions
import { AuthGuard } from '../Util/index';

/* GET contact-list page - with /contact-list */
router.get('/', DisplayContactListPage);

/* GET route for displaying update page - UPDATE Operation */
/* Display update/:id page - with /contact-list/update:id */
router.get('/update/:id', AuthGuard, DisplayUpdatePage);

/* POST route for processing update page - UPDATE Operation */
router.post('/update/:id', AuthGuard, ProcessUpdatePage);

/* GET route for displaying add page - CREATE Operation */
router.get('/add', AuthGuard, DisplayAddPage);

/* POST route for processing add page - CREATE Operation */
router.post('/add', AuthGuard, ProcessAddPage);

/* GET to perform deletion - DELETE Operation */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);