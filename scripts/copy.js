function clickToCopy(e){
  var text = document.getElementById("hexcode").innerHTML;
  console.log(text);
  var dummy = document.createElement("textarea");
  dummy.value = text;
  dummy.setAttribute("readonly", "");
  dummy.style.position = "absolute";
  dummy.style.left = "-9999px";
  document.body.appendChild(dummy);
  dummy.select();
  dummy.setSelectionRange(0, 99999);

  document.execCommand("copy");


}
