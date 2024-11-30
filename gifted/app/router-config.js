import { AccountController } from "./controllers/AccountController.js";
import { GiftsController } from "./controllers/GiftsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [GiftsController],
    view: /*html*/`
    <div class="container-fluid">
      <div class="row">
        <!-- left sidebar section -->
        <div class="col-md-3 p-3 gift-form">
          <h2>Create Gift</h2>
          <form onsubmit="app.GiftsController.createGift(event)">
            <div class="mb-3">
              <label for="tag">Tag</label>
              <input type="text" class="form-control" name="tag" required maxlength="120">
            </div>
            <div class="mb-3">
              <label for="url">GIF URL</label>
              <input type="url" class="form-control" name="url" id="giftUrl" required>
            </div>
            <button type="submit" class="btn btn-light w-100">Create Gift</button>
          </form>

          <div class="mt-4">
            <h3>Search GIFs</h3>
            <div class="input-group mb-3">
              <input type="text" class="form-control" id="giphySearch" placeholder="Search Giphy...">
              <button class="btn btn-light" type="button" onclick="app.GiftsController.searchGifs()">
                <i class="mdi mdi-magnify"></i>
              </button>
            </div>
            <div class="row" id="giphyResults"></div>
          </div>
        </div>

        <!-- main content section-->
        <div class="col-md-9">
          <div class="row" id="giftsContainer"></div>
        </div>
      </div>
    </div>
    `


  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




