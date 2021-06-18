import express from 'express';
const router = express.Router();
export default router;

// create contacts controller instance
import { DisplayContactListPage, DisplayEditPage } from '../Controllers/contacts';

/* GET contact-list page - with /contact-list */
router.get('/', DisplayContactListPage);

/* Display edit/:id page - with /contact-list/edit:id */
router.get('/edit/:id', DisplayEditPage);