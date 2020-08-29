import { Router } from 'express';

import ControllerUsersAndRules from './controllers/ControllerUsersAndRules';
import ControllerSystem from './controllers/ControllerSystem';
import ControllerUser from './controllers/ControllerUser';

const controllerUsersAndRules = new ControllerUsersAndRules();
const controllerSystem = new ControllerSystem();
const controllerUser = new ControllerUser();

const routes = Router();

routes.get('/listSystem', controllerSystem.listSystem);
routes.get('/listSystemRules/:idSystem', controllerSystem.listSystemAndRules);

routes.post('/listUsersAndRules', controllerUsersAndRules.listUsersAndRules);

routes.get('/selectLoginRules', controllerUser.selectUsersAndRules);
routes.post('/createLoginRules', controllerUser.createUsersAndRules);
routes.delete('/deleteLoginRules', controllerUser.deleteLoginRules);

export default routes;