function soma(e) {
  let value = e.value;
  e.value = parseInt(value) + 1;
}

function subtrai(e) {
  let value = e.value;
  if (value > 0) {
    e.value = parseInt(value) - 1;
  }
}