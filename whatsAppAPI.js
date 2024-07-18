export let waAPI = {
  countryCode: 55,
  number: false,
  go: function(text) {
    if (this.number != false) {
      window.open(`https://api.whatsapp.com/send?phone=${this.countryCode}${this.number}&text=${window.encodeURIComponent(text)}`);
    }
  }
}