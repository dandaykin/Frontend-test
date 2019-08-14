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


    $("#Education").click(function(){
        $("#Educat").show();

        $("#Education").click(function () {
            $("#Educat").hide();
        });
    });

    $("#Skillset").click(function(){
        $("#Skills").show();

        $("#Skillset").click(function () {
            $("#Skills").hide();
        });
    });

    $("#Profiles").click(function(){
        $("#Profile").show();

        $("#Profiles").click(function () {
            $("#Profile").hide();
        });
    });

    $("#Personals").click(function(){
        $("#Adi").show();

        $("#Personals").click(function () {
            $("#Adi").hide();
        });
    });

    $("p").hover(function() {
        $(this).css("background-color", "white");
    }, function() {
        $(this).css("background-color", "#ffad48");
    });
});


    

