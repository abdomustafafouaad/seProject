$(function () {
    "use strict";
    var username;
    var password;
    var email;



    $("#btnLogin").click(function (event) {
        event.preventDefault();
        username = $('#loginUsername').val();
        password = $('#loginPassword').val();
        // userName == 'admin' && passWord == '123'
        if (username == 'admin' && password == '123') {
            window.location.href = 'manager.html';
        } else {
            $('#loginModal').modal('hide');
            $('#loginUsername').val("");
            $('#loginPassword').val("");
            setTimeout(function () {
                $('.loginFailAlert').css("display", "block");
            }, 500);
            setTimeout(function () {
                $('.loginFailAlert').css("display", "none");
            }, 3500);            
        }
    });

    $("body").on('click','#btnSignUp',function (event) {

        $('#signUpUsername').val("");
        $('#signUpEmail').val("");
        $('#signUpPassword').val("");
        $('#signUpModal').modal('hide');

        setTimeout(function () {
            $('.signUpSuccessAlert').css("display", "block");
        }, 500);
        setTimeout(function () {
            $('.signUpSuccessAlert').css("display", "none");
        }, 3500);
    });



    // $(document).ready(function () {
    // $('#loggedIn').load('manager.html .managerMainWrapper');
    // $('#main-wrapper').hide();
    // $('#loginModal').modal("hide");
    // window.location.href='manager.html';
    // });
});