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
    return /*html*/`
    <div class="col-md-3 p-3">
      <div class="gift-card ${this.opened ? 'opened' : ''}" ${this.opened ? '' : `onclick="app.GiftsController.openGift('${this.id}')"`}>
        <div class="gift-image" style="background-image: url(${this.opened ? this.url : 'assets/img/gift-box.png'})">
          ${!this.opened ? '<div class="click-to-open">Click to Open</div>' : ''}
        </div>
        <div class="gift-tag">${this.tag}</div>
    </div>
  </div>
  `
  }
}