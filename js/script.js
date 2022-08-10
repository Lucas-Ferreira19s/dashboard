dataJson.map((item) => {
  let cardItem = document.querySelector(".card").cloneNode(true);
  const previous = document.querySelectorAll(".date");

  previous.forEach((el) => {
    el.addEventListener("click", handClick);
  });

  function handClick(event) {
    let tag = event.target.innerHTML

    switch (tag) {
      case "Daily":
        return daily();
      case "Weekly":
        return weekly();
      case "Monthly":
        return monthly();
    }
  }

  const title = (cardItem.querySelector(".title-card").innerHTML = item.title);
  const background = (cardItem.style.backgroundImage = "url(" + item.img + ")");
  const color = (cardItem.style.backgroundColor = item.color);
  function daily() {
    title
    background
    color
    cardItem.querySelector(".time").innerHTML =  item.timeframes.daily.current + "hrs";
    cardItem.querySelector(".previous").innerHTML =  "last week - " + item.timeframes.daily.previous + "hrs";
    
  }

  function weekly(){
    title
    background
    color
    cardItem.querySelector(".time").innerHTML =  item.timeframes.weekly.current + "hrs";
    cardItem.querySelector(".previous").innerHTML =  "last week - " + item.timeframes.weekly.previous + "hrs";
  }
  function monthly(){
    title
    background
    color
    cardItem.querySelector(".time").innerHTML =  item.timeframes.monthly.current + "hrs";
    cardItem.querySelector(".previous").innerHTML =  "last week - " + item.timeframes.monthly.previous + "hrs";
    
  }

  document.querySelector(".container").append(cardItem);

  daily()
});