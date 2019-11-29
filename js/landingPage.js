$(function () {
    "use strict";
    $("#btnLogin").click(function (event) {
        event.preventDefault();
        var userName = $('#uname1').val();
        var passWord = $('#pwd1').val();
        // userName == 'admin' && passWord == '123'
        if (userName == 'admin' && passWord == '123') {
            // $('#loggedIn').load('manager.html .managerMainWrapper');
            // $('#main-wrapper').hide();
            // $('#loginModal').modal("hide");
            window.location.href='manager.html';
        } else {
            alert('Wrong!');
        }
    });

    

    // $(document).ready(function () {

    //     // $('#loggedIn').load('manager.html .managerMainWrapper');
    //     // $('#main-wrapper').hide();
    //     // $('#loginModal').modal("hide");
    //     // window.location.href='manager.html';
    // });
});