//  if data comes from outside
//-----------------------------//
var data = JSON.parse(data);
var accounts = data[0].accounts;
var image = data[1].image;
var screen1 = data[2].screen1;
var screen2 = data[3].screen2;
//-----------------------------//

//  if the data is inside
//-----------------------------//
// var data = {
//   accounts: [
//     {
//       id: 0,
//       title: "Item 1",
//       img:
//         "https://cdn.pixabay.com/photo/2020/05/25/20/06/storm-5220380_1280.jpg",
//     },
//     {
//       id: 1,
//       title: "Item 2",
//       img:
//         "https://cdn.pixabay.com/photo/2020/05/25/20/06/storm-5220380_1280.jpg",
//     },
//     {
//       id: 2,
//       title: "Item 3",
//       img:
//         "https://cdn.pixabay.com/photo/2020/05/25/20/06/storm-5220380_1280.jpg",
//     },
//   ],
//   image:
//     "https://cdn.pixabay.com/photo/2020/05/25/20/06/storm-5220380_1280.jpg",
//   screen1:
//     '<div class="screen1">' +
//     '<div class="screen1__item-block"></div>' +
//     '<button id="add">ADD</button></div>',

//   screen2:
//     '<div class="screen2"><div class="screen2__content">' +
//     '<input class="event screen2__input" ' +
//     'id="input" placeholder="Enter item title" ' +
//     'type="text"autocomplete="none"/>' +
//     '<div class="screen2__buttons-block">' +
//     '<button class="event" id="add">ADD</button>' +
//     '<button class="event" id="cancel">Cancel</button>' +
//     "</div></div></div>",
// };
// var accounts = data.accounts;
// var image = data.image;
// var screen1 = data.screen1;
// var screen2 = data.screen2;
//-----------------------------//

var onFocus = "0";
var fromFocus = "";

const actionScreen1 = (keyCode, id) => {
  id == "add"
    ? keyCode == 37
      ? setFocus((on = fromFocus), (from = "add"))
      : keyCode == 13 && loadScreen2()
    : keyCode == 37
    ? left(id)
    : keyCode == 38
    ? up(id)
    : keyCode == 39
    ? right(id)
    : keyCode == 40 && down(id);
};
