$(document).ready(function(){
    // Khi trang chi tiết load, cập nhật dữ liệu sản phẩm từ localStorage vào giao diện
    var productObj = JSON.parse(localStorage.getItem('selectedProduct'));
    if(productObj) {
        $('#product-title').text(productObj.name);
        $('#product-price').text(productObj.price);
        var newImageHtml = '<div class="product-image-large-image swiper-slide zoom-image-hover img-responsive">' +
                                '<img src="' + productObj.image + '" alt="' + productObj.name + '">' +
                           '</div>';
        $('#product-image').html(newImageHtml);
    }

    // Sự kiện "Thêm vào giỏ" trên trang chi tiết
    $('body').on('click', '.add-to-cart-btn', function(e) {
        e.preventDefault();
        var productName = $('#product-title').text().trim();
        var productPrice = $('#product-price').text().trim();
        var productImage = $('#product-image img').attr('src');

        // Gọi hàm dùng chung để thêm sản phẩm vào giỏ
        addProductToCart(productName, productPrice, productImage);
        // Hiệu ứng animation dựa vào ảnh sản phẩm
        animateAddToCart($('#product-image img'));
    });
});
