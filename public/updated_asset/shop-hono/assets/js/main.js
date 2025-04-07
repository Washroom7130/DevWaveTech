(function($) {
    "use strict";

    /*****************************
     * Commons Variables
     *****************************/
    var $window = $(window),
        $body = $('body');

    /****************************
     * Sticky Menu
     *****************************/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".seperate-sticky-bar").removeClass("sticky");
        } else {
            $(".seperate-sticky-bar").addClass("sticky");
        }
    });

    /************************************************
     * Modal Search 
     ***********************************************/
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.close').on('click', function(event) {
        if ( event.target.className == 'close' ) {
            $(this).removeClass('open');
        }
    });

    /*****************************
     * Off Canvas Function
     *****************************/
    (function() {
        var $offCanvasToggle = $('.offcanvas-toggle'),
            $offCanvas = $('.offcanvas'),
            $offCanvasOverlay = $('.offcanvas-overlay'),
            $mobileMenuToggle = $('.mobile-menu-toggle');
        $offCanvasToggle.on('click', function(e) {
            e.preventDefault();
            var $this = $(this),
                $target = $this.attr('href');
            $body.addClass('offcanvas-open');
            $($target).addClass('offcanvas-open');
            $offCanvasOverlay.fadeIn();
            if ($this.parent().hasClass('mobile-menu-toggle')) {
                $this.addClass('close');
            }
        });
        $('.offcanvas-close, .offcanvas-overlay').on('click', function(e) {
            e.preventDefault();
            $body.removeClass('offcanvas-open');
            $offCanvas.removeClass('offcanvas-open');
            $offCanvasOverlay.fadeOut();
            $mobileMenuToggle.find('a').removeClass('close');
        });
    })();


    /**************************
     * Offcanvas: Menu Content
     **************************/
    function mobileOffCanvasMenu() {
        var $offCanvasNav = $('.offcanvas-menu'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.mobile-sub-menu');

        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<div class="offcanvas-menu-expand"></div>');

        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, .offcanvas-menu-expand', function(e) {
            var $this = $(this);
            if ($this.attr('href') === '#' || $this.hasClass('offcanvas-menu-expand')) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp();
                    $this.parent('li').find('li').removeClass('active');
                    $this.parent('li').find('ul:visible').slideUp();
                } else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.siblings('ul').slideDown();
                }
            }
        });
    }
    mobileOffCanvasMenu();

    /************************************************
     * Nice Select
     ***********************************************/
    $('select').niceSelect();


    /*************************
     *   Hero Slider Active
     **************************/
    var heroSlider = new Swiper('.hero-slider-active.swiper-container', {
        slidesPerView: 1,
        effect: "fade",
        speed: 1500,
        watchSlidesProgress: true,
        loop: true,
        autoplay: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    /****************************************
     *   Product Slider Active - 4 Grid 2 Rows
     *****************************************/
    var productSlider4grid2row = new Swiper('.product-default-slider-4grid-2row.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1500,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',

        navigation: {
            nextEl: '.product-slider-default-2rows .swiper-button-next',
            prevEl: '.product-slider-default-2rows .swiper-button-prev',
        },

        breakpoints: {

            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });


    /*********************************************
     *   Product Slider Active - 4 Grid Single Rows
     **********************************************/
    var productSlider4grid1row = new Swiper('.product-default-slider-4grid-1row.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1500,

        navigation: {
            nextEl: '.product-slider-default-1row .swiper-button-next',
            prevEl: '.product-slider-default-1row .swiper-button-prev',
        },

        breakpoints: {

            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    /*********************************************
     *   Product Slider Active - 4 Grid Single 3Rows
     **********************************************/
    var productSliderListview4grid3row = new Swiper('.product-listview-slider-4grid-3rows.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1500,
        slidesPerColumn: 3,
        slidesPerColumnFill: 'row',

        navigation: {
            nextEl: '.product-list-slider-3rows .swiper-button-next',
            prevEl: '.product-list-slider-3rows .swiper-button-prev',
        },

        breakpoints: {

            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });


    /*********************************************
     *   Blog Slider Active - 3 Grid Single Rows
     **********************************************/
    var blogSlider = new Swiper('.blog-slider.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1500,

        navigation: {
            nextEl: '.blog-default-slider .swiper-button-next',
            prevEl: '.blog-default-slider .swiper-button-prev',
        },
        breakpoints: {

            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
        }
    });


    /*********************************************
     *   Company Logo Slider Active - 7 Grid Single Rows
     **********************************************/
    var companyLogoSlider = new Swiper('.company-logo-slider.swiper-container', {
        slidesPerView: 7,
        speed: 1500,

        navigation: {
            nextEl: '.company-logo-slider .swiper-button-next',
            prevEl: '.company-logo-slider .swiper-button-prev',
        },
        breakpoints: {

            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 7,
            },
        }
    });

    /********************************
     *  Product Gallery - Horizontal View
     **********************************/
    // var galleryThumbsHorizontal = new Swiper('.product-image-thumb-horizontal.swiper-container', {
    //     loop: true,
    //     speed: 1000,
    //     spaceBetween: 25,
    //     slidesPerView: 4,
    //     freeMode: true,
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true,
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },

    // });

    // var gallerylargeHorizonatal = new Swiper('.product-large-image-horaizontal.swiper-container', {
    //     slidesPerView: 1,
    //     speed: 1500,
    //     thumbs: {
    //         swiper: galleryThumbsHorizontal
    //     }
    // });

    /********************************
     *  Product Gallery - Vertical View
     **********************************/
    var galleryThumbsvartical = new Swiper('.product-image-thumb-vartical.swiper-container', {
        direction: 'vertical',
        centeredSlidesBounds: true,
        slidesPerView: 4,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        spaceBetween: 25,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    var gallerylargeVartical = new Swiper('.product-large-image-vartical.swiper-container', {
        slidesPerView: 1,
        speed: 1500,
        thumbs: {
            swiper: galleryThumbsvartical
        }
    });

    /********************************
     *  Product Gallery - Single Slide View
     * *********************************/
    var singleSlide = new Swiper('.product-image-single-slide.swiper-container', {
        loop: true,
        speed: 1000,
        spaceBetween: 25,
        slidesPerView: 4,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            },
        }

    });

    /******************************************************
     * Quickview Product Gallery - Horizontal
     ******************************************************/
    var modalGalleryThumbs = new Swiper('.modal-product-image-thumb', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      var modalGalleryTop = new Swiper('.modal-product-image-large', { 
        thumbs: {
          swiper: modalGalleryThumbs
        }
      });

    /********************************
     * Blog List Slider - Single Slide
     * *********************************/
    var blogListSLider = new Swiper('.blog-list-slider.swiper-container', {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    /********************************
     *  Product Gallery - Image Zoom
     **********************************/
    // $('.zoom-image-hover').zoom();


    /************************************************
     * Price Slider
     ***********************************************/
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));



    /************************************************
     * Animate on Scroll
     ***********************************************/
    AOS.init({
       
        duration: 1000, 
        once: true, 
        easing: 'ease',
    });
    window.addEventListener('load', AOS.refresh);    

    /************************************************
     * Video  Popup
     ***********************************************/
    $('.video-play-btn').venobox(); 

    /************************************************
     * Scroll Top
     ***********************************************/
    $('body').materialScrollTop();


})(jQuery);

/***************Lọc giá*******************/
$(document).ready(function() {
    if (typeof $.ui !== "undefined") {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 5000000, // Giới hạn 5 triệu VND
            values: [100000, 2000000], // Giá trị mặc định
            step: 100000, // Bước nhảy 1000 VND
            slide: function(event, ui) {
                $("#amount").val(formatCurrency(ui.values[0]) + " - " + formatCurrency(ui.values[1]));
                filterProducts(ui.values[0], ui.values[1]);
            }
        });

        $("#amount").val(formatCurrency($("#slider-range").slider("values", 0)) +
            " - " + formatCurrency($("#slider-range").slider("values", 1)));

        updatePricesToVND(); // Cập nhật giá tiền trong danh sách sản phẩm
        filterProducts($("#slider-range").slider("values", 0), $("#slider-range").slider("values", 1));
    } else {
        console.error("jQuery UI chưa được tải.");
    }
});

// Hàm lọc sản phẩm theo giá (VND)
function filterProducts(minPrice, maxPrice) {
    $(".product-default-single-item").each(function() {
        let priceText = $(this).find(".price").text().replace(/\D/g, ""); // Loại bỏ ký tự không phải số
        let price = parseInt(priceText);

        if (price >= minPrice && price <= maxPrice) {
            $(this).closest(".col-xl-4").removeClass("d-none");
        } else {
            $(this).closest(".col-xl-4").addClass("d-none");
        }
    });
}


// Hàm định dạng số tiền (VND)
function formatCurrency(amount) {
    return amount.toLocaleString("vi-VN") + " VND";
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".content-right .price").forEach(function(priceElement) {
        let priceText = priceElement.textContent.replace(/\D/g, ""); // Lấy số, bỏ ký tự khác
        let formattedPrice = Number(priceText).toLocaleString("vi-VN") + " VND"; // Định dạng tiền VND
        priceElement.textContent = formattedPrice; // Cập nhật giá trị
    });
});


// JS Cho phần Category


$(document).ready(function () {
    $(".category-link").click(function (e) {
        e.preventDefault();

        var selectedCategory = $(this).data("category");

        // Cập nhật trạng thái danh mục: xóa active tất cả và thêm active vào mục vừa nhấp
        $(".category-link").removeClass("active-category");
        $(this).addClass("active-category");

        // Duyệt qua từng cột chứa sản phẩm trong grid view
        $("#layout-3-grid .row > div").each(function () {
            // Lấy phần sản phẩm bên trong cột
            var productItem = $(this).find(".product-default-single-item");

            // Nếu chọn "Tất cả" hoặc thuộc tính data-category của sản phẩm khớp với danh mục đã chọn
            if (selectedCategory === "all" || productItem.data("category") === selectedCategory) {
                $(this).fadeIn();  // Hiển thị cả cột
            } else {
                $(this).fadeOut(); // Ẩn cả cột
            }
        });
    });
});


//Funtion cho chức năng phân trang, kết nôi strang
var globalProducts = null;

function loadAdditionalProducts(callback) {
    // Nếu đã có dữ liệu, gọi ngay callback
    if (globalProducts !== null) {
        callback(globalProducts);
        return;
    }
    // Clone sản phẩm hiện có ở Page 1
    var products1 = $("#layout-3-grid .row > div").clone();
    // Load nội dung của Page 2 và Page 3 qua AJAX
    $.when($.get("shop-grid-sidebar-left_2.html"), $.get("shop-grid-sidebar-left_3.html"))
    .done(function(data2, data3) {
         var html2 = data2[0];
         var html3 = data3[0];
         // Trích xuất các cột chứa sản phẩm từ trang phụ
         var products2 = $(html2).find("#layout-3-grid .row > div");
         var products3 = $(html3).find("#layout-3-grid .row > div");
         // Gộp tất cả sản phẩm lại
         globalProducts = products1.add(products2).add(products3);
         callback(globalProducts);
    });
}


function filterAndRenderProducts(selectedCategory, allProducts) {
    var filteredProducts;
    if (selectedCategory === "all") {
        filteredProducts = allProducts;
    } else {
        filteredProducts = allProducts.filter(function() {
            // Kiểm tra data-category của phần sản phẩm bên trong cột
            var prodCat = $(this).find(".product-default-single-item").data("category");
            return prodCat === selectedCategory;
        });
    }
    // Xóa nội dung cũ và chèn sản phẩm lọc được vào container
    $("#layout-3-grid .row").empty().append(filteredProducts);
}

$(document).ready(function() {
    $(".category-link").click(function(e) {
        e.preventDefault();
        var selectedCategory = $(this).data("category");
        
        // Cập nhật trạng thái active
        $(".category-link").removeClass("active-category");
        $(this).addClass("active-category");
        
        // Nếu chưa có dữ liệu từ các trang phụ, load chúng một lần
        loadAdditionalProducts(function(allProducts) {
            filterAndRenderProducts(selectedCategory, allProducts);
        });
    });
});


// HÀM ĐỊNH DẠNG SỐ TIỀN -> VND


function formatPrices() {
    $(".content-right .price").each(function() {
      // Lấy toàn bộ ký tự số từ nội dung (bỏ ký tự không phải số)
      let priceText = $(this).text().replace(/\D/g, "");
      let numberPrice = Number(priceText);
      // Nếu số hợp lệ thì định dạng, ngược lại giữ nguyên
      if(!isNaN(numberPrice)) {
        let formatted = numberPrice.toLocaleString("vi-VN") + " VND";
        $(this).text(formatted);
      }
    });
  }

  
  function filterAndRenderProducts(selectedCategory, allProducts) {
    var filteredProducts;
    if (selectedCategory === "all") {
        filteredProducts = allProducts;
    } else {
        filteredProducts = allProducts.filter(function() {
            var prodCat = $(this).find(".product-default-single-item").data("category");
            return prodCat === selectedCategory;
        });
    }
    $("#layout-3-grid .row").empty().append(filteredProducts);
    // Sau khi chèn sản phẩm, gọi hàm định dạng giá:
    formatPrices();
}



$(document).ready(function() {
    /******************************************************
     * FUNCTION: loadCartFromLocalStorage
     * PURPOSE: LOAD CART ITEMS FROM LOCAL STORAGE WHEN PAGE LOADS
     ******************************************************/
    function loadCartFromLocalStorage() {
        var cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
        $('#offcanvas-add-cart .offcanvas-cart').empty();
  
        $.each(cart, function(index, item) {
            var cartItemHtml = 
                '<li class="offcanvas-cart-item-single" data-id="' + index + '">' +
                    '<div class="offcanvas-cart-item-block">' +
                        '<a href="#" class="offcanvas-cart-item-image-link">' +
                            '<img src="' + item.image + '" alt="" class="offcanvas-cart-image">' +
                        '</a>' +
                        '<div class="offcanvas-cart-item-content">' +
                            '<a href="#" class="offcanvas-cart-item-link">' + item.name + '</a>' +
                            '<div class="offcanvas-cart-item-details">' +
                                '<span class="offcanvas-cart-item-details-quantity">' +
                                    '<button class="quantity-decrease">-</button>' +
                                    '<span class="quantity-value">' + item.quantity + '</span>' +
                                    '<button class="quantity-increase">+</button>' +
                                '</span>' +
                                '<span class="offcanvas-cart-item-details-price">' + item.price + '</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="offcanvas-cart-item-delete text-right">' +
                        '<a href="#" class="delete-cart-item"><i class="fa fa-trash-o"></i></a>' +
                    '</div>' +
                '</li>';
            $('#offcanvas-add-cart .offcanvas-cart').append(cartItemHtml);
        });
  
        updateCartTotal();
        updateCartItemCount();
    }
  
    /******************************************************
     * FUNCTION: saveCartToLocalStorage
     * PURPOSE: SAVE CURRENT CART ITEMS TO LOCAL STORAGE
     ******************************************************/
    function saveCartToLocalStorage() {
        var cart = [];
        $('#offcanvas-add-cart .offcanvas-cart-item-single').each(function() {
            var productName  = $(this).find('.offcanvas-cart-item-link').text().trim();
            var productPrice = $(this).find('.offcanvas-cart-item-details-price').text().trim();
            var productImage = $(this).find('.offcanvas-cart-image').attr('src');
            var quantity = parseInt($(this).find('.quantity-value').text().trim());
            if (isNaN(quantity)) quantity = 1;
  
            cart.push({ 
                name: productName, 
                price: productPrice, 
                image: productImage, 
                quantity: quantity 
            });
        });
  
        localStorage.setItem('cartItems', JSON.stringify(cart));
    }
  
    /******************************************************
     * FUNCTION: updateCartTotal
     * PURPOSE: CALCULATE AND UPDATE THE TOTAL PRICE IN THE CART
     ******************************************************/
    function updateCartTotal() {
        var total = 0;
        $('#offcanvas-add-cart .offcanvas-cart-item-single').each(function() {
            var priceText = $(this).find('.offcanvas-cart-item-details-price').text().trim();
            var price = parseInt(priceText.replace(" VND", "").replace(/\./g, ""));
            if (isNaN(price)) price = 0;
  
            var quantity = parseInt($(this).find('.quantity-value').text().trim());
            if (isNaN(quantity)) quantity = 1;
  
            total += (quantity * price);
        });
        $('#offcanvas-add-cart .offcanvas-cart-total-price-value').text(formatCurrency(total));
    }
  
    /******************************************************
     * FUNCTION: updateCartItemCount
     * PURPOSE: UPDATE THE NUMBER OF ITEMS IN THE CART (FOR HEADER COUNT)
     ******************************************************/
    function updateCartItemCount() {
        var count = 0;
        $('#offcanvas-add-cart .offcanvas-cart-item-single').each(function() {
            var quantity = parseInt($(this).find('.quantity-value').text().trim());
            if (!isNaN(quantity)) {
                count += quantity;
            }
        });
        $('.header-action-link a[href="#offcanvas-add-cart"] .item-count').text(count);
    }
  
    /******************************************************
     * FUNCTION: formatCurrency
     * PURPOSE: FORMAT A NUMBER INTO "X.XXX VND" FORMAT
     ******************************************************/
    function formatCurrency(amount) {
        return amount.toLocaleString("vi-VN") + " VND";
    }
  
    /******************************************************
     * EVENT: ADD TO CART BUTTON CLICK
     * PURPOSE: HANDLE ADDING A PRODUCT (MERGE IF DUPLICATE)
     ******************************************************/
    $('body').on('click', '.add-to-cart-btn', function(e) {
        e.preventDefault();
        var $product = $(this).closest('.product-default-single-item');
        var productName  = $product.find('.content-left .title a').text().trim();
        var productPrice = $product.find('.content-right .price').text().trim();
        var productImage = $product.find('.image-box a img').attr('src');
  
        var $existingItem = null;
        $('#offcanvas-add-cart .offcanvas-cart-item-single').each(function() {
            var nameText = $(this).find('.offcanvas-cart-item-link').text().trim();
            if (nameText === productName) {
                $existingItem = $(this);
                return false;
            }
        });
  
        if ($existingItem) {
            var $qtySpan = $existingItem.find('.quantity-value');
            var currentQty = parseInt($qtySpan.text()) || 1;
            currentQty++;
            $qtySpan.text(currentQty);
        } else {
            var $cartItem = $(
                '<li class="offcanvas-cart-item-single">' +
                    '<div class="offcanvas-cart-item-block">' +
                        '<a href="#" class="offcanvas-cart-item-image-link">' +
                            '<img src="' + productImage + '" alt="" class="offcanvas-cart-image">' +
                        '</a>' +
                        '<div class="offcanvas-cart-item-content">' +
                            '<a href="#" class="offcanvas-cart-item-link">' + productName + '</a>' +
                            '<div class="offcanvas-cart-item-details">' +
                                '<span class="offcanvas-cart-item-details-quantity">' +
                                    '<button class="quantity-decrease">-</button>' +
                                    '<span class="quantity-value">1</span>' +
                                    '<button class="quantity-increase">+</button>' +
                                '</span>' +
                                '<span class="offcanvas-cart-item-details-price">' + productPrice + '</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="offcanvas-cart-item-delete text-right">' +
                        '<a href="#" class="delete-cart-item"><i class="fa fa-trash-o"></i></a>' +
                    '</div>' +
                '</li>'
            );
            $('#offcanvas-add-cart .offcanvas-cart').append($cartItem);
        }
  
        updateCartTotal();
        updateCartItemCount();
        saveCartToLocalStorage();
    });
  
    /******************************************************
     * EVENT: DELETE CART ITEM CLICK
     * PURPOSE: HANDLE REMOVING A PRODUCT FROM THE CART
     ******************************************************/
    $('body').on('click', '.delete-cart-item', function(e) {
        e.preventDefault();
        $(this).closest('.offcanvas-cart-item-single').remove();
        updateCartTotal();
        updateCartItemCount();
        saveCartToLocalStorage();
    });
  
    /******************************************************
     * EVENT: QUANTITY INCREASE/DECREASE
     ******************************************************/
    $(document).on('click', '.quantity-increase', function(e) {
        e.preventDefault();
        var $quantityElem = $(this).siblings('.quantity-value');
        var quantity = parseInt($quantityElem.text().trim()) || 1;
        quantity++;
        $quantityElem.text(quantity);
        saveCartToLocalStorage();
        updateCartTotal();
        updateCartItemCount();
    });
  
    $(document).on('click', '.quantity-decrease', function(e) {
        e.preventDefault();
        var $quantityElem = $(this).siblings('.quantity-value');
        var quantity = parseInt($quantityElem.text().trim()) || 1;
        if (quantity > 1) {
            quantity--;
            $quantityElem.text(quantity);
            saveCartToLocalStorage();
            updateCartTotal();
            updateCartItemCount();
        }
    });
  
    /******************************************************
     * INITIALIZATION: LOAD CART WHEN PAGE LOADS
     ******************************************************/
    loadCartFromLocalStorage();
  });
  








$('body').on('click', '.add-to-cart-btn', function(e) {
    e.preventDefault();
  
    // Tìm icon giỏ hàng
    var $cartIcon = $('.header-action-link a[href="#offcanvas-add-cart"] i.icon-bag');
    // Tìm ảnh sản phẩm (có thể thay đổi selector)
    var $productImg = $(this).closest('.product-default-single-item').find('.image-box img');
  
    // Clone ảnh
    if ($productImg.length) {
      var $clone = $productImg.clone().css({
        position: 'absolute',
        top: $productImg.offset().top,
        left: $productImg.offset().left,
        width: $productImg.width(),
        height: $productImg.height(),
        'z-index': 9999,
        opacity: 0.8
      });
      $('body').append($clone);
  
      // Animate đến vị trí icon giỏ hàng
      $clone.animate({
        top: $cartIcon.offset().top,
        left: $cartIcon.offset().left,
        width: 20,
        height: 20,
        opacity: 0.5
      }, 800, 'swing', function() {
        $(this).remove();
      });
    }
  
    // Code thêm sản phẩm vào giỏ thật (nếu có)...
  });

 

  







  



// Hàm định dạng số tiền theo định dạng VND
function formatCurrency(amount) {
    // Chuyển đổi số thành chuỗi với định dạng số của Việt Nam và thêm hậu tố " VND"
    return amount.toLocaleString("vi-VN") + " VND";
  }
  
  // Hàm tính tổng tiền của giỏ hàng
  function calculateSubtotal(cart) {
    return cart.reduce(function(total, item) {
      // Lấy giá của sản phẩm dưới dạng số, loại bỏ ký tự không phải số
      var price = parseInt(item.price.replace(" VND", "").replace(/\./g, "")) || 0;
      return total + (price * item.quantity);
    }, 0);
  }
  
  // Hàm hiển thị "Your order" dựa trên dữ liệu giỏ hàng lưu trong localStorage
  function displayYourOrder() {
    // Lấy dữ liệu giỏ hàng từ localStorage (được lưu trong key "cartItems")
    var cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    var tbodyHTML = "";
  
    // Duyệt qua từng sản phẩm trong giỏ hàng
    cart.forEach(function(item) {
      // Lấy giá sản phẩm dưới dạng số và tính tổng tiền cho sản phẩm đó
      var price = parseInt(item.price.replace(" VND", "").replace(/\./g, "")) || 0;
      var totalPrice = price * item.quantity;
      
      tbodyHTML += "<tr>";
      tbodyHTML += "<td>" + item.name + " <strong>× " + item.quantity + "</strong></td>";
      tbodyHTML += "<td>" + formatCurrency(totalPrice) + "</td>";
      tbodyHTML += "</tr>";
    });
  
    // Tính tổng tiền giỏ hàng, giả sử phí vận chuyển cố định là $5.00 (hoặc bạn có thể chuyển đổi sang VND tương ứng)
    var subtotal = calculateSubtotal(cart);
    var shipping = 200000;
    var orderTotal = subtotal + shipping;
  
    var tfootHTML = "";
    tfootHTML += "<tr><th>Tổng tiển hàng</th><td><strong>" + formatCurrency(subtotal) + "</strong></td></tr>";
    tfootHTML += "<tr><th>Phí vận chuyển</th><td><strong>" + formatCurrency(shipping) + "</strong></td></tr>";
    tfootHTML += "<tr class='order_total'><th>Tổng tiền</th><td><strong>" + formatCurrency(orderTotal) + "</strong></td></tr>";
  
    // Cập nhật nội dung cho bảng
    document.getElementById("order-items").innerHTML = tbodyHTML;
    document.getElementById("order-summary").innerHTML = tfootHTML;
  }
  
  // Gọi hàm hiển thị khi trang được tải
  displayYourOrder();


   // Lắng nghe sự kiện click nút "Xác nhận thanh toán"
   document.getElementById('btnConfirmPayment').addEventListener('click', function() {
    // Thực hiện xử lý logic thanh toán (nếu có), sau đó hiển thị modal
    var myModal = new bootstrap.Modal(document.getElementById('paymentSuccessModal'), {
      keyboard: false
    });
    myModal.show();
  });
  //Xem chi tiết sản phẩm


