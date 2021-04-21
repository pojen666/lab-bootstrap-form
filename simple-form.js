$(function () {
    // 宣告全域變數
    var form = $('.need-validation')
    var sameAddress = $('input[id="same-address"]')

    // 相同地址value發生變化時觸發
    sameAddress.change(function () {
        // 如果狀態是被選中的
        if ($(this).is(':checked')) {
            // 帳單地址的value設置為通訊地址
            $('input[id="bill-address"').val($('input[id="address"').val())
        }
    })

    // 表單送出時觸發
    form.submit(function (event) {
        // 表單驗證不通過則停止subnmit的動作
        if (this.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }
        // 添加顯示驗證結果的類別
        $(this).addClass('was-validated')
    })
})