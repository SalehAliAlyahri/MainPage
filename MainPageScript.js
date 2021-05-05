function greet() {
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 17){
        greet = 'Good Morning';
        pic = document.body.style.backgroundImage = "url('joppe-spaa-yUY4rEElc6E-unsplash.jpg')";
    }
    else if (hrs >= 12 && hrs <= 17){
        greet = 'Good Afternoon';
        pic = document.body.style.backgroundImage = "url('tim-j-EJ4qfFp1g8Q-unsplash-2.jpg')";

    }   
    else if (hrs >= 17 && hrs <= 24){
        greet = 'Good Evening';
        pic = document.body.style.backgroundImage = "url('henry-chen-x7clQSWhlfE-unsplash.jpg')";

    //document.getElementById('greet').innerHTML =greet;
    }
    return pic ,greet + ', Saleh' ;
}

function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    var dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
    return dateTime;
}
setInterval(function () {
    greetMessage = greet();
    document.getElementById("greet").innerHTML = greetMessage;
    currentTime = getDateTime();
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);