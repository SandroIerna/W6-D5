let deleteButton = document.querySelector(
  "body > div.container > table > tbody > tr:nth-child(1) > td.d-flex.justify-content-end > button"
);
// let li = document.querySelector(
//   "body > div.container > table > tbody > tr:nth-child(1)"
// );

let removeListRow = function () {
  // event.target will be the input element.
  let td = event.target.parentNode;
  let tr = td.parentNode; // the row to be removed
  tr.parentNode.removeChild(tr);
};

let addTrack = function () {};
