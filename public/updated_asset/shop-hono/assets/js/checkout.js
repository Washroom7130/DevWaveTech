// Xử lý nút xác nhận địa chỉ
document.getElementById('btnConfirmShipping').addEventListener('click', function() {
    var address = document.getElementById('shippingAddressInput').value.trim();
    if(address === ""){
      alert("Vui lòng nhập địa chỉ nhận hàng!");
    } else {
      localStorage.setItem('shippingAddress', address);
      alert("Địa chỉ đã được xác nhận!");
    }
  });

  document.getElementById('btnConfirmPayment').addEventListener('click', function(e) {
    // Lấy đối tượng form chứa ô nhập địa chỉ
    var form = document.querySelector('form');
    // Kiểm tra tính hợp lệ của form (đảm bảo ô input với required đã được nhập)
    if (!form.checkValidity()) {
      // Nếu chưa nhập địa chỉ, hiển thị thông báo
      alert("Vui lòng nhập địa chỉ nhận hàng trước khi thanh toán!");
    } else {
      // Nếu đã nhập địa chỉ, mở modal thanh toán thành công
      var paymentModal = new bootstrap.Modal(document.getElementById('paymentSuccessModal'));
      paymentModal.show();
    }
  });



  // ---------------------------
  // CÁC SỰ KIỆN KHÁC (checkbox, collapse, v.v.) giữ nguyên:
  // ---------------------------
  
  // single-select
  document.querySelectorAll('.single-select').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        document.querySelectorAll('.single-select').forEach(function(other) {
          if (other !== checkbox) {
            other.checked = false;
            var target = other.parentElement.getAttribute('data-bs-target');
            if(target){
              var collapseElem = document.querySelector(target);
              if(collapseElem){
                collapseElem.classList.remove('show');
              }
            }
          }
        });
      }
    });
  });

  // single-select-1
  document.querySelectorAll('.single-select-1').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        document.querySelectorAll('.single-select-1').forEach(function(other) {
          if (other !== checkbox) {
            other.checked = false;
            var target = other.parentElement.getAttribute('data-bs-target');
            if (target) {
              var collapseElem = document.querySelector(target);
              if (collapseElem) {
                collapseElem.classList.remove('show');
              }
            }
          }
        });
      }
    });
  });



// Lắng nghe sự kiện ẩn modal của tất cả các modal trên trang
document.querySelectorAll('.modal').forEach(function(modalEl) {
    modalEl.addEventListener('hidden.bs.modal', function () {
      // Xóa tất cả các phần tử có class modal-backdrop nếu còn tồn tại
      var backdrops = document.getElementsByClassName('modal-backdrop');
      while (backdrops.length > 0) {
        backdrops[0].parentNode.removeChild(backdrops[0]);
      }
      // Nếu body còn class 'modal-open', loại bỏ nó
      document.body.classList.remove('modal-open');
    });
  });