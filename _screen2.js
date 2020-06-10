const actionScreen2 = (keyCode, id) => {
  switch (id) {
    case "input":
      keyCode == 40
        ? setFocus((on = fromFocus), (from = "input"))
        : keyCode == 13 && setFocus((on = "add"), (from = "input"));
      break;
    case "add":
      keyCode == 38
        ? setFocus((on = "input"), (from = "add"))
        : keyCode == 39
        ? setFocus((on = "cancel"), (from = "add"))
        : keyCode == 13 && !document.getElementById("input").value
        ? setFocus((on = "input"), (from = "add"))
        : ((fromFocus = "add"), addItem());
      break;
    case "cancel":
      keyCode == 37
        ? setFocus((on = "add"), (from = "cancel"))
        : keyCode == 38
        ? setFocus((on = "input"), (from = "cancel"))
        : keyCode == 13 && runTest((on = accounts.length ? "0" : "add"));
      break;
  }
};
