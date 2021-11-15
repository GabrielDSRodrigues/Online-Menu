export function insert(html, $in) {
  $in.insertAdjacentHTML("beforeend", html);
}

export function id(e) {
  return document.getElementById(e);
}