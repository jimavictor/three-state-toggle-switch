var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "rgb(92, 204, 125)";
    } else if (index == 1) {
      document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    } else {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "rgb(105, 214, 198)";
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});
