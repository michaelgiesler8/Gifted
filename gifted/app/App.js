import { AuthController } from './controllers/AuthController.js';
import { GiftsController } from './controllers/GiftsController.js';
import { router } from './router-config.js';


class App {
  router = router
  AuthController = new AuthController()
  GiftsController = new GiftsController()
}

const app = new App()
app.router.init(app)
window.app = app
export { app }