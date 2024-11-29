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