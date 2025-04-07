$(document).ready(function(){
    // Sự kiện "Xem thêm" trên trang shop: lưu thông tin sản phẩm vào localStorage rồi chuyển hướng sang trang chi tiết
    $('body').on('click', '.btn-xemthem', function(e) {
        e.preventDefault();
        var $product = $(this).closest('.product-default-single-item');
        var productName  = $product.find('.content-left .title a').text().trim();
        var productPrice = $product.find('.content-right .price').text().trim();
        var productImage = $product.find('.image-box a img').attr('src');

        var productObj = {
            name: productName,
            price: productPrice,
            image: productImage
        };

        localStorage.setItem('selectedProduct', JSON.stringify(productObj));
        window.location.href = "product-details-default.html";
    });

});
