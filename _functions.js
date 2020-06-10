//  common functions
function setFocus(on = onFocus, from = fromFocus) {
  onFocus = on;
  fromFocus = from;
  document.getElementById(onFocus).focus();
}
function runTest(on, from) {
  document.getElementById("test").innerHTML = screen1;
  document.getElementById("add").onkeydown = (e) => {
    actionScreen1(e.keyCode, e.target.id);
  };
  loadItem(on, from);

  // mouse lock
  document.querySelector("body").style.cursor = "none";
  document.onmousedown = () => false;

  // arrow lock
  document.body.onkeydown = (e) => {
    if (e.keyCode > 36 && e.keyCode < 41) {
      return false;
    }
  };
}

//  functions from screen1
function loadItem(on, from) {
  var item = document.querySelector(".screen1__item-block");
  item.innerHTML = "";

  accounts.map(({ title, img, id }) => {
    item.innerHTML +=
      '<div class="screen1__item" id=' + id + " tabindex=" + id + "></div>";
    item.onkeydown = (e) => {
      actionScreen1(e.keyCode, e.target.id);
    };

    document.getElementById(id).innerHTML =
      '<img class="screen1__item--image" src=' +
      img +
      ' alt="hero"></img><p class="screen1__item--name">' +
      title +
      "</p>";
  });

  setFocus(on, from);
}
function left(id) {
  id == "add"
    ? setFocus((on = accounts.length > 0 ? from : "add"), (fromFocus = "add"))
    : ((accounts = accounts
        .filter((item) => item.id != id)
        .map((item, index) => {
          return { id: index, title: item.title, img: item.img };
        })),
      loadItem(
        (on =
          accounts.length > 0
            ? id == 0
              ? 0
              : id == accounts.length
              ? id - 1
              : id
            : "add"),
        (fromFocus = id)
      ));
}
function up(id) {
  setFocus((on = id > 0 ? id - 1 : accounts.length - 1), (from = id));
}
function right(id) {
  setFocus((on = "add"), (from = id));
}
function down(id) {
  setFocus((on = id < accounts.length - 1 ? ++onFocus : 0), (from = id));
}

//  functions from screen2
function loadScreen2() {
  document.getElementById("test").innerHTML = screen2;

  setFocus((on = "input"), (from = "add"));

  var inputElement = document.getElementById("input");
  inputElement.onkeydown = (e) => {
    actionScreen2(e.keyCode, e.target.id);
  };
  inputElement.placeholder = "Enter item title";
  var buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.onkeydown = (e) => {
      actionScreen2(e.keyCode, e.target.id);
    };
  });
}
function addItem() {
  accounts = [
    ...accounts,
    {
      title: document.getElementById("input").value,
      img: image,
      id: accounts.length,
    },
  ];
  document.getElementById("input").value = "";
  setFocus((on = "input"));
}
