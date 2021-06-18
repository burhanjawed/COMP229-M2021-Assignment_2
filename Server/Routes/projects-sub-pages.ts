import express from 'express';
const router = express.Router();
export default router;

// create a projects-sub-page controller instance
import {DisplayHolyCow, DisplayRascalFranky, DisplayReaderLab} from '../Controllers/projects-sub-pages';

/* ---- Projects Sub-pages ---- */

/* GET projects/holycow page. */
router.get('/holy-cow', DisplayHolyCow);
  
  /* GET projects/rascalfranky page. */
  router.get('/rascal-franky', DisplayRascalFranky);
  
  /* GET projects/readerlab page. */
  router.get('/readerlab', DisplayReaderLab);