export class Gift {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened || false
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.profileIdsOpened = data.profileIdsOpened || []
    this.profilesOpened = data.profilesOpened || []
  }

  get GiftCardTemplate() {
    return /*html*/
    <div class="col-md-3 p-3">
      <div class="gift-card ${this.opened ? 'opened' : ''}" onclick="app.GiftsControlller.openGift('${this.id}')">
        <div class="gift-image" style="background-image: url"
        </div>
    </div>
  }