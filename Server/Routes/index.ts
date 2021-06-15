import express from 'express';
const router = express.Router();
export default router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Burhan Jawed - Personal Portfolio', page: 'home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Burhan Jawed - Personal Portfolio', page: 'home'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About - Burhan Jawed', page: 'about' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects - Burhan Jawed', page: 'projects' });
});


/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services - Burhan Jawed', page: 'services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact - Burhan Jawed', page: 'contact' });
});

/* ---- Projects Sub-pages ---- */

/* GET projects/holycow page. */
router.get('/projects/holy-cow', function(req, res, next) {
  res.render('index-sub-pages', { title: 'Holy Cow - Projects - Burhan Jawed', page: 'holy-cow' });
});

/* GET projects/rascalfranky page. */
router.get('/projects/rascal-franky', function(req, res, next) {
  res.render('index-sub-pages', { title: 'Rascal Franky - Projects - Burhan Jawed', page: 'rascal-franky' });
});

/* GET projects/readerlab page. */
router.get('/projects/readerlab', function(req, res, next) {
  res.render('index-sub-pages', { title: 'ReaderLab - Projects - Burhan Jawed', page: 'readerlab' });
});
