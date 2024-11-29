import { AppState } from "../AppState.js"
import { baseURL } from "../env"
import { Gift } from "../models/Gift.js"
import { api } from "./AxiosService.js"

const giphy = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: 'GCekFU9TP23Rr6ZtP1WsX1fN8j1hNKQy'
  }
})

class GiftsService {
  async getGifts() {
    const res = await api.get('api/gifts')
    AppState.gifts = res.data.map(g => new Gift(g))
  }

  async createGift(giftData) {
    const res = await api.post('api/gifts', giftData)
    const gift = new Gift(res.data)
    AppState.gifts.unshift(gift)
  }

  async openGift(giftId) {
    const res = await api.put(`api/gifts/${giftId}`, { opened: true })
    const giftIndex = AppState.gifts.findIndex(g => g.id == giftId)
    if (giftIndex !== -1) {
      AppState.gifts.splice(giftIndex, 1, new Gift(res.data))
    }
  }

  async searchGifs(query) {
    const res = await giphy.get('search', {
      params: {
        q: query,
        limit: 24
      }
    })
    AppState.giphyResults = res.data.data.map(g => g.images.downsized.url)
  }
}

export const giftsService = new GiftsService()