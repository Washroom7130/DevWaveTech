// Hàm kiểm tra mật khẩu nhập lại
function checkPasswordMatch() {
    var newPassword = document.getElementById("newPassword").value;
    var confirmNewPassword = document.getElementById("confirmNewPassword").value;
    var passwordError = document.getElementById("passwordError");

    if (newPassword !== confirmNewPassword) {
      passwordError.style.display = "block";
    } else {
      passwordError.style.display = "none";
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('changePasswordForm');
    var passwordError = document.getElementById('passwordError');
    var newPassword = document.getElementById('newPassword');
    var confirmNewPassword = document.getElementById('confirmNewPassword');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Chặn submit mặc định

      // Kiểm tra lại xem hai ô mật khẩu mới có trùng khớp không
      if (newPassword.value !== confirmNewPassword.value) {
        passwordError.style.display = 'block';
        return;
      } else {
        passwordError.style.display = 'none';
      }

      // Tại đây bạn có thể gọi AJAX/fetch API để gửi yêu cầu đổi mật khẩu lên server
      // Giả sử server trả về thành công, ta sẽ hiển thị modal đổi mật khẩu thành công:

      var successModalEl = document.getElementById('changePasswordSuccessModal');
      var successModal = new bootstrap.Modal(successModalEl, {});
      successModal.show();

      // Reset form sau khi đổi mật khẩu
      form.reset();
    });
  });