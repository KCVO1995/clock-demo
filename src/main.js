let time = () => {
  let html_time = document.getElementById("html_time");

  setTimeout(() => {
    let myDate = new Date();
    let second = myDate.getUTCSeconds();
    let hours = myDate.getUTCHours();
    let minute = myDate.getUTCMinutes();

    let checked = () => {
      let radio = document.getElementsByName("country");
      let jetLag;

      for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked == true) {
          if (radio[i].id === "China") {
            hours < 16 ? (jetLag = 8) : (jetLag = -16);
          } else if (radio[i].id === "American") {
            hours > 4 ? (jetLag = -5) : (jetLag = 19);
          } else {
            jetLag = 0;
          }
        }
      }
      return jetLag;
    };

    hours += checked();

    //秒
    sec.style.transform = "rotate(" + second * 6 + "deg)";
    sec2.style.transform = "rotate(" + (second * 6 - 180) + "deg)";
    //分
    min.style.transform = "rotate(" + minute * 6 + "deg)";
    //时
    let x;
    if (hours > 12) {
      x = (hours - 12) * 30 + minute * 0.5;
    } else {
      x = hours * 30 + minute * 0.5;
    }
    x = x.toString();
    x = x + "deg";
    hour.style.transform = `rotate(${x})`;
    //时间内容
    html_time.innerHTML = hours + ":" + minute + ":" + second;
    time();
  }, 1);
};
time();

//时间内容
