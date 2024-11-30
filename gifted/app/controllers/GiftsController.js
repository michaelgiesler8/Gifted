import { AppState } from "../AppState.js"
import { giftsService } from "../services/GiftsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawGifts() {
  let template = ''
  AppState.gifts.forEach(gift => template += gift.GiftCardTemplate)
  setHTML('gifts', template)
}

function _drawGiphyResults() {
  let template = ''
  AppState.giphyResults.forEach(url => {
    template += `
      <div class="col-4 p-2">
        <img 
          src="${url}"
          alt="gif option"
          class="selectable gif-result"
          onclick="app.GiftsController.selectGif('${url}')"
        >
      </div>
    `
  })
  setHTML('giphyResults', template)
}

export class GiftsController {
  constructor() {
    AppState.on('gifts', _drawGifts)
    AppState.on('giphyResults', _drawGiphyResults)
    AppState.on('account, this.getGifts')
  }

  async getGifts() {
    try {
      await giftsService.getGifts()
    } catch (error) {
      Pop.error(error)
    }
  }

  async createGift(event) {
    try {
      event.preventDefault()
      const form = event.target
      const giftData = getFormData(form)
      await giftsService.createGift(giftData)
      form.reset()
      // @ts-ignore
      // bootstrap.Offcanvas.getInstance('#giftForm').hide()
    } catch (error) {
      Pop.error(error)
    }
  }

  async openGift(giftId) {
    try {
      await giftsService.openGift(giftId)
    } catch (error) {
      Pop.error(error)
    }
  }

  async searchGifs() {
    try {
      const searchTerm = document.getElementById('giphySearch').value
      if (!searchTerm) { return }
      await giftsService.searchGifs(searchTerm)
    } catch (error) {
      Pop.error(error)
    }
  }

  selectGif(url) {
    document.getElementById('giftUrl').value = url
  }
}