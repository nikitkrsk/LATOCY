function copyDivToClipboard() {
  var range = document.createRange();
  range.selectNode(document.getElementById("fieldWithResult"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect
}
var car;
function RunScript() {
  car = document.getElementById("textIN").value;
  if (car.includes("pidor")) {
    document.getElementById("fieldWithResult").innerHTML = "сам ты пидор";
  } else {
    car = car.replace(/[hx]/g, "х");
    car = car.replace(/a/g, "а");
    car = car.replace(/b/g, "б");
    car = car.replace(/v/g, "в");
    car = car.replace(/g/g, "г");
    car = car.replace(/d/g, "д");
    car = car.replace(/e/g, "е");
    car = car.replace(/[ëé]/g, "ё");
    car = car.replace(/z/g, "з");
    car = car.replace(/ž/g, "ж");
    car = car.replace(/зх/g, "ж");
    car = car.replace(/i/g, "и");
    car = car.replace(/j/g, "й");
    car = car.replace(/k/g, "к");
    car = car.replace(/l/g, "л");
    car = car.replace(/m/g, "м");
    car = car.replace(/n/g, "н");
    car = car.replace(/o/g, "о");
    car = car.replace(/p/g, "п");
    car = car.replace(/r/g, "р");
    car = car.replace(/s/g, "с");
    car = car.replace(/t/g, "т");
    car = car.replace(/u/g, "у");
    car = car.replace(/f/g, "ф");
    car = car.replace(/c/g, "ц");
    car = car.replace(/č/g, "ч");
    car = car.replace(/цх/g, "ч");
    car = car.replace(/š/g, "ш");
    car = car.replace(/сх/g, "ш");
    car = car.replace(/ŝ/g, "щ");
    car = car.replace(/шч/g, "щ");
    car = car.replace(/y/g, "ы");
    car = car.replace(/[èê]/g, "э");
    car = car.replace(/йу/g, "ю");
    car = car.replace(/йа/g, "я");
    car = car.replace(/û/g, "ю");
    car = car.replace(/â/g, "я");
    car = car.replace(/’/g, "ь"); //var
    car = car.replace(/'/g, "ь"); //var
    car = car.replace(/ʹ/g, "ь");
    car = car.replace(/ʺ/g, "ъ");
    car = car.replace(/ьь/g, "ъ");

    car = car.replace(/[HX]/g, "Х");
    car = car.replace(/A/g, "А");
    car = car.replace(/B/g, "Б");
    car = car.replace(/V/g, "В");
    car = car.replace(/G/g, "Г");
    car = car.replace(/D/g, "Д");
    car = car.replace(/E/g, "Е");
    car = car.replace(/Ë/g, "Ё");
    car = car.replace(/Z/g, "З");
    car = car.replace(/Ž/g, "Ж");
    car = car.replace(/ЗХ/g, "Ж");
    car = car.replace(/Зх/g, "Ж");
    car = car.replace(/I/g, "И");
    car = car.replace(/J/g, "Й");
    car = car.replace(/K/g, "К");
    car = car.replace(/L/g, "Л");
    car = car.replace(/M/g, "М");
    car = car.replace(/N/g, "Н");
    car = car.replace(/O/g, "О");
    car = car.replace(/P/g, "П");
    car = car.replace(/R/g, "Р");
    car = car.replace(/S/g, "С");
    car = car.replace(/T/g, "Т");
    car = car.replace(/U/g, "У");
    car = car.replace(/F/g, "Ф");
    car = car.replace(/C/g, "Ц");
    car = car.replace(/Č/g, "Ч");
    car = car.replace(/ЦХ/g, "Ч");
    car = car.replace(/Цх/g, "Ч");
    car = car.replace(/Š/g, "Ш");
    car = car.replace(/СХ/g, "Ш");
    car = car.replace(/Сх/g, "Ш");
    car = car.replace(/Š/g, "Щ");
    car = car.replace(/ШЧ/g, "Щ");
    car = car.replace(/Шч/g, "Щ");
    car = car.replace(/Y/g, "Ы");
    car = car.replace(/[ÈÊ]/g, "Э");
    car = car.replace(/ЙУ/g, "Ю");
    car = car.replace(/ЙА/g, "Я");
    car = car.replace(/Йу/g, "Ю");
    car = car.replace(/Йа/g, "Я");
    car = car.replace(/Û/g, "Ю");
    car = car.replace(/Â/g, "Я");
    document.getElementById("fieldWithResult").innerHTML = car;
  }
}
function copyDivToClipboardReply() {
  document.getElementById("fieldWithResultCopy").innerHTML =
    "Copied to Clipboard";
}
window.addEventListener("load", function load(event) {
  var runButton = document.getElementById("runButton");
  runButton.addEventListener("click", function() {
    RunScript();
    copyDivToClipboard();
    copyDivToClipboardReply();
  });
});
console.log("just to lazy to install phonetic library");
