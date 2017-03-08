(function () {
    changeCss('body', 'font-size:' + fontSize + 'px;');
    changeCss('#modalShellBody .btn', 'font-size:' + btnFontSize + 'px;');
    changeCss('.modal-content .close', 'font-size:' + btnFontSize + 'px;');
    changeCss('.modal-content .modal-title', 'font-size:' + eval(eval(btnFontSize / 2) + (btnFontSize / 4)) + 'px;');
    changeCss('.btn', 'font-size:' + fontSize + 'px;');
    changeCss('.navbar-brand', 'font-size:' + eval(fontSize / 1.5) + 'px;');
    changeCss('#divCallRecords', 'font-size:' + recordFontSize + 'px;');
    changeCss('label.error', 'font-size:' + eval(fontSize / 1.5) + 'px;');
    changeCss('.imgLoader', 'height:' + eval(fontSize / 2) + 'px;');
    changeCss('#GridView1, #btnRefresh', 'font-size:' + eval(fontSize / 2.2) + 'px;');
    changeCss('.fa-check, .fa-check-circle, .fa-spinner, .fa-head', 'font-size:' + eval(30 * screenWidth / 360) + 'px;');



})();

$(function () {
    $('.clsField').change(function () {
        var rate = $('#txtRate').val();
        var sArea = $('#txtSArea').val();
        var otherCharges = $('#txtOtderCharges').val();
        var total;
        var stampDuty;
        var reg = $('#txtReg').val();
        var sTax;
        var vat;
        var grandTotal;
        var mentainenceDeposit;
        var mentainenceExp;

        total = eval(eval(parseInt(rate) * parseInt(sArea)) + parseInt(otherCharges));
        $('#txtTotal').val(total);

        stampDuty = eval(eval(parseInt(total) * 5) / 100);
        $('#txtStampDuty').val(stampDuty);

        vat = eval(eval(parseInt(total) * 1) / 100);
        $('#txtVat').val(vat);

        sTax = eval(eval(parseInt(total) * 4.5) / 100);
        $('#txtSTax').val(sTax);

        grandTotal = eval(parseInt(total) + parseInt(stampDuty) + parseInt(reg) + parseInt(sTax) + parseInt(vat));
        $('#txtGrandTotal').val(grandTotal);
        
        var maintenance = parseInt($('#txtMaintenance').val());
        mentainenceDeposit = eval(parseInt(sArea) * maintenance);
        $('.dspMD').text(mentainenceDeposit);
        
        mentainenceExp = eval(parseInt(sArea) * parseInt($('#txtMaintenanceExp').val()));
        mentainenceExp = eval(mentainenceExp * 12);
        $('.dspME').text(mentainenceExp);
        
        var miscCharges = parseInt($('#txtMisCharges').val());
        
        var totalAmount = eval(grandTotal + mentainenceDeposit + mentainenceExp + miscCharges);
        
        $('.totalAmount').text(totalAmount);
    })
});

function changeCss(className, classValue) {
    // we need invisible container to store additional css definitions
    var cssMainContainer = $('#css-modifier-container');
    if (cssMainContainer.length == 0) {
        var cssMainContainer = $('<div id="css-modifier-container"></div>');
        cssMainContainer.hide();
        cssMainContainer.appendTo($('head'));
    }

    // and we need one div for each class
    classContainer = cssMainContainer.find('div[data-class="' + className + '"]');
    if (classContainer.length == 0) {
        classContainer = $('<div data-class="' + className + '"></div>');
        classContainer.appendTo(cssMainContainer);
    }

    // append additional style
    classContainer.html('<style>' + className + ' {' + classValue + '}</style>');
}