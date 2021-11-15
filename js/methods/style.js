export function block(e) {
  e.style.display = "block";
}

export function none(e) {
  e.style.display = "none";
}

export function visibility(e) {
  if (e.style.display == "block") {
    none(e);
  } else if (e.style.display = "none") {
    block(e);
  }
}