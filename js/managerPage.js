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
        }, 1000);
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
        }, 1000);
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
        }, 1000);
    });

    $(".customerManageBtn").click(function (event) {
        event.preventDefault();
        $('#pageLoader').addClass('pageLoader');
        $('#mainNavbar').children().removeClass('active');
        $('li.customerManageBtn').addClass('active');
        $('#managerHome').hide();
        setTimeout(function () {
            $('#pageLoader').hide();
            $('#otherPages').load('customerManagement.html #customerServices');
        }, 1000);
    });

        $(".menuManageBtn").click(function (event) {
        event.preventDefault();
        $('#pageLoader').addClass('pageLoader');
        $('#mainNavbar').children().removeClass('active');
        $('li.menuManageBtn').addClass('active');
        $('#managerHome').hide();
        setTimeout(function () {
            $('#pageLoader').hide();
            $('#otherPages').load('menuManagement.html #menuManagement');
        }, 1000);
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

    // Editing Stock Item
    $("body").on("click", ".editStockItem", function (event) {
        optionalediting = $(this).parent().parent();
    });

    $("body").on("click", "#btnEdit", function (event) {
        if ($('#editItemQuantity').val() != '') {
            editedQuantity = $('#editItemQuantity').val();
        }
        if ($('#editItemPrice').val() != '') {
            editedprice = $('#editItemPrice').val();
        }
        $(optionalediting).find(".stockItemQuantity").html(editedQuantity);
        $(optionalediting).find(".stockItemPrice").html(editedprice);
        $('#editModal').modal('hide');
        $('#editItemQuantity').val("");
        $('#editItemPrice').val("");
    });

    // Adding Stock Item
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

    //************************* MENU PAGE / OFFERS SECTION *****************************//
    var optionalRemoving;
    var editedprice;
    var editedname;
    var optionalediting;
    var offerChosen;

    // Removing Offer
    $("body").on("click", ".removeOffer", function (event) {
        optionalRemoving = $(this).parent().parent();
    });

    $("body").on("click", "#btnOfferRemove", function (event) {
        optionalRemoving.remove();
        $('#removeOfferModal').modal('hide');
    });

    // Editing Offer
    $("body").on("click", ".editOffer", function (event) {
        optionalediting = $(this).parent().parent();
    });

    $("body").on("click", "#btnOfferEdit", function (event) {
        if ($('#editOfferName').val() != '') {
            editedname = $('#editOfferName').val();
        }
        if ($('#editOfferPrice').val() != '') {
            editedprice = $('#editOfferPrice').val();
        }
        $(optionalediting).find(".offerName").html(editedname);
        $(optionalediting).find(".offerPrice").html(editedprice);
        $('#editOfferModal').modal('hide');
        $('#editOfferName').val("");
        $('#editOfferPrice').val("");
    });

    // Adding Offer
    $("body").on("click", ".offerItemChosen", function (event) {
        offerChosen = $(this).html();
        $('#offerRole').attr('placeholder', offerChosen);
    });

    $("body").on("click", "#btnAddOffer", function (event) {
        var itemName = $("#addOfferName").val();
        var itemPrice = $("#addOfferPrice").val();
        if (offerChosen == 'OFFER') {
            $(".offerSectionBody").append('<div class="col-lg-3 col-md-4 col-sm-6 "><div class="center-text mb-30"><div class="ïmg-200x mlr-auto pos-relative"><h6 class="ribbon-cont offer color-white"><div class="ribbon primary"></div><b>OFFER</b></h6><img src="images/margherita.png" alt=""></div><h5 class="mt-20 offerName">'+ itemName + '</h5><h4 class="mt-5 color-primary offerPrice"><b>' + itemPrice + ' EGP</b></h4><a class="editOffer" data-toggle="modal" href="#editModal" role="button"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a><a class="removeOffer" data-toggle="modal" href="#removeModal" role="button"><i class="fa fa-close text-danger"></i></a></div></div>');
        } else if (offerChosen == 'SPECIALITY') {
            $(".offerSectionBody").append('<div class="col-lg-3 col-md-4 col-sm-6 "><div class="center-text mb-30"><div class="ïmg-200x mlr-auto pos-relative"><h6 class="ribbon-cont ribbonSpecialities color-white"><div class="ribbon secondary"></div><b>SPECIALITY</b></h6><img src="images/margherita.png" alt=""></div><h5 class="mt-20 offerName">' + itemName + '</h5><h4 class="mt-5 color-primary offerPrice"><b>' + itemPrice + ' EGP</b></h4><a class="editOffer" data-toggle="modal" href="#editModal" role="button"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a><a class="removeOffer" data-toggle="modal" href="#removeModal" role="button"><i class="fa fa-close text-danger"></i></a></div></div>');
        }
        $('#addOfferModal').modal('hide');
        $("#addOfferName").val("");
        $('#offerRole').attr('placeholder', 'OFFER/SPECIALITY');
        $("#addOfferPrice").val("");
    });

    //************************* MENU PAGE / MENU SECTION *****************************//
    var optionalRemoving;
    var editedname;
    var editedprice;
    var editedingredients;
    var optionalediting;

    // Removing Menu Item
    $("body").on("click", ".removeMenuItem", function (event) {
        optionalRemoving = $(this).parent().parent().parent().parent();
    });

    $("body").on("click", "#btnMenuItemRemove", function (event) {
        optionalRemoving.remove();
        $('#removeMenuItemModal').modal('hide');
    });

    // Editing Menu Item
    $("body").on("click", ".editMenuItem", function (event) {
        optionalediting = $(this).parent().parent();
    });

    $("body").on("click", "#btnMenuItemEdit", function (event) {
        if ($('#editItemName').val() != '') {
            editedname = $('#editItemName').val();
        }
        if ($('#editItemIngredients').val() != '') {
            editedingredients = $('#editItemIngredients').val();
        }
        if ($('#editMenuItemPrice').val() != '') {
            editedprice = $('#editMenuItemPrice').val();
        }
        $(optionalediting).find(".menuItemName").html(editedname);
        $(optionalediting).find(".menuItemIngredients").html(editedingredients);
        $(optionalediting).find(".menuItemPrice").html(editedprice);
        $('#editMenuItemModal').modal('hide');
        $('#editItemName').val("");
        $('#editItemIngredients').val("");
        $('#editMenuItemPrice').val("");
    });

    // Adding Menu Item
    $("body").on("click", "#btnAddMenuItem", function (event) {
        var itemName = $("#addItemName").val();
        var itemIngredients = $("#addItemIngredients").val();
        var itemPrice = $("#addItemPrice").val();
        $(".menuSectionBody").append('<div class="col-md-6"><div class="sided-90x mb-30 "><div class="s-left"><img class="br-3" src="images/menu-1-120x120.jpg" alt="Menu Image"></div><div class="s-right"><h5 class="mb-10"><b>' + itemName + '</b><b class="color-primary float-right">' + itemPrice + ' EGP</b></h5><p class="pr-70">' + itemIngredients + '</p><div class="menuItemBtns float-right"><a class="editMenuItem" data-toggle="modal" href="#editModal" role="button"><i class="fa fa-pencil text-inverse m-r-10"></i></a><a class="removeMenuItem" data-toggle="modal" href="#removeModal" role="button"><i class="fa fa-close text-danger"></i></a></div></div></div></div>');
        $('#addMenuItemModal').modal('hide');
        $("#addItemName").val("");
        $("#addItemIngredients").val("");
        $("#addItemPrice").val("");
    });

});