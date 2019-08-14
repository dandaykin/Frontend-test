function showtime(){
    var date = new Date ();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM"

    if (h == 0){
        h = 12;
    }

    if(h > 12){
        h = (h - 12);
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m +":" + s + " " + session;

    $('#myclock').text(time);


    setTimeout(showtime, 1000);

}

$(document).ready(function() {




    showtime();

    $(document).find("li").css("color", "red");





    $("#tags").css('cursor','pointer');

    $("#Education").click(function(){
        $("#Educat").toggle();

    });

    $("#Skillset").click(function(){
        $("#Skills").toggle()
    });

    $("#Profiles").click(function(){
        $("#Profile").toggle()

    });

    $("#Personals").click(function(){
        $("#Adi").toggle()

    });







    $("p").hover(function() {
        $(this).css("background-color", "white");
    }, function() {
        $(this).css("background-color", "#ffad48");
    });
});


    

