export let waAPI = {
  number: false,
  go: function(text) {
    if (this.number != false) {
      window.open(`https://api.whatsapp.com/send?phone=55${this.number}&text=${window.encodeURIComponent(text)}`);
    }
  }
}