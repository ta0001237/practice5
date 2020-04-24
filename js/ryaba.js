const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleButton() {
  $.getJSON(dataURL, handleData);
}

function handleData(data) {
  let lastMessage = "";
  let obj = {
    var1: $("input[name=var1]")[0].value,
    var2: $("input[name=var2]")[0].value,
    var3: $("input[name=var3]")[0].value,
    var4: $("input[name=var4]")[0].value,
    var5: $("input[name=var5]")[0].value,
    var6: $("input[name=var6]")[0].value,
    speach: $("input[name=speach]")[0].value
  }

  data["text"].forEach(function(item, index) {
    for (key in obj) {
      item = item.replace("{" + key + "}", obj[key]);
    }
    
    lastMessage = lastMessage + item +"<br>";
  });

  $("div#result").html(lastMessage);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
