$(function () {
    $(".homeBtn").click(function (event) {
        event.preventDefault();
        $('#pageLoader').addClass('pageLoader');
        $('#mainNavbar').children().removeClass('active');
        $('.homeBtn').addClass('active');
        $('#stuffManagement').hide();
        $('#stockManagement').hide();
        $('#customerServices').hide();
        $('#menuManagement').hide();
        setTimeout(function () {
            $('#pageLoader').hide();
            $('#managerHome').show();
        }, 500);
    });

    $(".stockManageBtn").click(function (event) {
        event.preventDefault();
        $('#pageLoader').addClass('pageLoader');
        $('#mainNavbar').children().removeClass('active');
        $('li.stockManageBtn').addClass('active');
        $('#managerHome').hide();
        setTimeout(function () {
            $('#pageLoader').hide();
            $('#otherPages').load('stockManagement.html #stockManagement');
        }, 500);
    });
    
    $(".stuffManageBtn").click(function (event) {
        event.preventDefault();
        $('#pageLoader').addClass('pageLoader');
        $('#mainNavbar').children().removeClass('active');
        $('li.stuffManageBtn').addClass('active');
        $('#managerHome').hide();
        setTimeout(function () {
            $('#pageLoader').hide();
            $('#otherPages').load('stuffManagement.html #stuffManagement');
        }, 500);
    });

    // $(".customerManageBtn").click(function (event) {
    //     event.preventDefault();
    //     $('#pageLoader').addClass('pageLoader');
    //     $('#mainNavbar').children().removeClass('active');
    //     $('li.customerManageBtn').addClass('active');
    //     $('#managerHome').hide();
    //     setTimeout(function () {
    //         $('#pageLoader').hide();
    //         $('#otherPages').load('customerManagement.html #customerServices');
    //     }, 500);
    // });

        $(".menuManageBtn").click(function (event) {
        event.preventDefault();
        $('#pageLoader').addClass('pageLoader');
        $('#mainNavbar').children().removeClass('active');
        $('li.menuManageBtn').addClass('active');
        $('#managerHome').hide();
        setTimeout(function () {
            $('#pageLoader').hide();
            $('#otherPages').load('menuManagement.html #menuManagement');
        }, 500);
    });


    // $(document).ready(() => {
    //     $('#managerHome').hide();
    //     setTimeout(function () {
    //         $('#pageLoader').hide();
    //         $('#otherPages').load('menuManagement.html #menuManagement');
    //     }, 1);
    // });

    //************************* STUFF PAGE *****************************//
    var roleChosen;
    var optionalFiring;
    var editedname;
    var editedsalary;
    var editedrole;
    var optionalediting;

    // Firing Stuff Member
    $("body").on("click", ".fireStuffMember", function (event) {
        optionalFiring = $(this).parent().parent();
    });

    $("body").on("click", "#btnFire", function (event) {
        optionalFiring.remove();
        $('#fireModal').modal('hide');
    });

    // Editing Stuff Member
    $("body").on("click", ".editStuffMember", function (event) {
        optionalediting = $(this).parent().parent();
    });

    $("body").on("click", ".roleItemChosen", function (event) {
        editedrole = $(this).html();
        $('#editStaffRole').attr('placeholder', editedrole);
    });

    $("body").on("click", "#btnEdit", function (event) {
        if ($('#editStaffName').val() != '') {
            editedname = $('#editStaffName').val();
        }
        if ($('#editStaffSalary').val() != '') {
            editedsalary = $('#editStaffSalary').val();
        }
        $(optionalediting).find(".stuffMemberName").html(editedname);
        $(optionalediting).find(".stuffMemberRole").html(editedrole);
        $(optionalediting).find(".stuffMemberSalary").html(editedsalary);
        $('#editModal').modal('hide');
        $('#editStaffName').val("");
        $('#editStaffRole').attr('placeholder', 'Edit Role');
        $('#editStaffSalary').val("");
    });

    // Hiring Stuff Member
    $("body").on("click", ".roleItemChosen", function (event) {
        roleChosen = $(this).html();
        $('#hireStaffRole').attr('placeholder', roleChosen);
    });

    $("body").on("click", "#btnHire", function (event) {
        var hireName = $("#hireStaffName").val();
        var hireSalary = $("#hireStaffSalary").val();
        $("#stuffTableBody").append('<tr><td>' + hireName + '</td><td>' + roleChosen + '</td><td>' + hireSalary + ' EGP</td><td class="text-nowrap"><a href="#" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil text-inverse m-r-10"></i></a><a class="fireStuffMember" data-toggle="modal" href="#fireModal" role="button"><i class="fa fa-close text-danger"></i></a></td></tr>');
        $('#hireModal').modal('hide');
        $("#hireStaffName").val("");
        $('#hireStaffRole').attr('placeholder', 'Role');
        $("#hireStaffSalary").val("");
    });



    //************************* STOCK PAGE *****************************//
    var roleChosen;
    var optionalRemoving;
    var editedprice;
    var editedQuantity;
    var optionalediting;

    // Removing Stock Item
    $("body").on("click", ".removeStockItem", function (event) {
        optionalRemoving = $(this).parent().parent();
    });

    $("body").on("click", "#btnRemove", function (event) {
        optionalRemoving.remove();
        $('#removeModal').modal('hide');
    });

    // Editing Stuff Member
    $("body").on("click", ".editStockItem", function (event) {
        optionalediting = $(this).parent().parent();
    });

    $("body").on("click", ".roleItemChosen", function (event) {
        editedrole = $(this).html();
        $('#editStaffRole').attr('placeholder', editedrole);
    });

    $("body").on("click", "#btnEdit", function (event) {
        if ($('#editStaffSalary').val() != '') {
            editedQuantity = $('#editItemQuantity').val();
        }
        if ($('#editStaffSalary').val() != '') {
            editedprice = $('#editItemPrice').val();
        }
        $(optionalediting).find(".stockItemQuantity").html(editedQuantity);
        $(optionalediting).find(".stockItemPrice").html(editedprice);
        $('#editModal').modal('hide');
        $('#editItemQuantity').val("");
        $('#editItemPrice').val("");
    });

    // Adding Stuff Member
    $("body").on("click", "#btnAdd", function (event) {
        var itemName = $("#addItemName").val();
        var itemQuantity = $("#addItemQuantity").val();
        var itemPrice = $("#addItemPrice").val();
        $("#stockTableBody").append('<tr><td>' + itemName + '</td><td>' + itemQuantity + '</td><td>' + itemPrice + ' EGP</td><td class="text-nowrap"><a class="editStockItem" data-toggle="modal" href="#editModal" role="button"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a><a class="removeStockItem" data-toggle="modal" href="#removeModal" role="button"><i class="fa fa-close text-danger"></i></a></td></tr>');
        $('#addModal').modal('hide');
        $("#addItemName").val("");
        $("#addItemQuantity").val("");
        $("#addItemPrice").val("");        
    });

});