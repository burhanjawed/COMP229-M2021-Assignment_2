import express from 'express';
const router = express.Router();
export default router;

// create an index controller instance
import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage} from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

/* ---- Projects Sub-pages ---- */

/* GET projects/holycow page. */
router.get('/projects/holy-cow', function(req, res, next) {
  res.render('projects-sub-pages', { title: 'Holy Cow - Projects - Burhan Jawed', page: 'holy-cow' });
});

/* GET projects/rascalfranky page. */
router.get('/projects/rascal-franky', function(req, res, next) {
  res.render('projects-sub-pages', { title: 'Rascal Franky - Projects - Burhan Jawed', page: 'rascal-franky' });
});

/* GET projects/readerlab page. */
router.get('/projects/readerlab', function(req, res, next) {
  res.render('projects-sub-pages', { title: 'ReaderLab - Projects - Burhan Jawed', page: 'readerlab' });
});
