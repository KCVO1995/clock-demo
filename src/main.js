let time = () => {
    let html_time = document.getElementById('html_time')
    setTimeout(() =>{
        let checked = () => {
            let radio = document.getElementsByName("country");
            for (let i = 0; i < radio.length; i++) {
                if (radio[i].checked == true) {
                    if (radio[i].id === 'China'){x = 8}
                    else if (radio[i].id === 'American'){x = -5}
                    else {x = 0}
                }
                
            }
            return x
        }


        let myDate = new Date()
        let second = myDate.getUTCSeconds()
        let hours = myDate.getUTCHours() + checked()
        let minute = myDate.getUTCMinutes()
        

        //秒
        sec.style.transform = 'rotate(' + second * 6 +'deg)'
        sec2.style.transform = 'rotate(' + (second * 6 - 180) + 'deg)'
        //分
        min.style.transform = 'rotate(' + minute * 6 + 'deg)'
        //时
        hour.style.transform = 'rotate(' + hours * 15 + 'deg)'
        time()
        console.log(second,minute,hours)
        //时间内容
        html_time.innerHTML = hours + ":" + minute + ":" + second
    },1000)
}
time()


//时间内容

