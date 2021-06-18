import express from 'express';
const router = express.Router();
export default router;

/* GET contact-list page - with /contact-list */
router.get('/', DisplayContactListPage);

/* Display edit/:id page - with /contact-list/edit:id */