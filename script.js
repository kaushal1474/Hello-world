$(document).ready(function () {
    $("#hh1").click(function () {
        $("#pp1").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#hh2").click(function () {
        $("#pp2").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#hh3").click(function () {
        $("#pp3").slideToggle("slow");
    });
});

/*$(document).ready(function () {
    setTimeout(function () {
        $("#a1").fadeIn("slow");
    }, 5000);
});

$(document).ready(function () {

    $('BODY').keyup(function () {
        page = $('#all_text').text();
        searchedText = $('#searchfor').val();
        $("p:contains('" + searchedText + "')").css("color", "white");
    });
});*/


$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#table1 tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});