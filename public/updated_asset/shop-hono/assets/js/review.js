document.addEventListener("DOMContentLoaded", function() {
    // Đặt giá trị mặc định cho tên và email vì hiện tại chưa lấy từ DB
    var nameInput = document.getElementById("comment-name");
    var emailInput = document.getElementById("comment-email");
    if (nameInput) {
      nameInput.value = "Khách ẩn danh";
      nameInput.setAttribute("type", "hidden");
      nameInput.removeAttribute("required");
    }
    if (emailInput) {
      emailInput.value = "";
      emailInput.setAttribute("type", "hidden");
      emailInput.removeAttribute("required");
    }
  
    // Lấy tham chiếu đến form đánh giá và danh sách review
    var reviewForm = document.getElementById("review-form");
    var reviewList = document.getElementById("review-list");
    if (!reviewForm) {
      console.error("Không tìm thấy form đánh giá với id 'review-form'");
      return;
    }
    if (!reviewList) {
      console.error("Không tìm thấy danh sách review với id 'review-list'");
      return;
    }
  
    // Biến lưu phần tử review cần xoá khi người dùng nhấn nút xoá
    var reviewToDelete = null;
    var deleteModal = document.getElementById("deleteModal");
    var cancelDeleteBtn = document.getElementById("cancelDelete");
    var confirmDeleteBtn = document.getElementById("confirmDelete");
  
    // Xử lý submit của form đánh giá
    reviewForm.addEventListener("submit", function(e) {
      e.preventDefault();
  
      var reviewTextArea = document.getElementById("comment-review-text");
      if (!reviewTextArea) {
        console.error("Không tìm thấy textarea nhận xét với id 'comment-review-text'");
        return;
      }
      var reviewContent = reviewTextArea.value.trim();
      if (reviewContent === "") {
        alert("Vui lòng nhập nhận xét của bạn.");
        return;
      }
  
      // Tạo phần tử review mới
      var li = document.createElement("li");
      li.className = "comment-item";
  
      // Tạo phần header gồm tên và ngày đánh giá
      var headerDiv = document.createElement("div");
      headerDiv.className = "review-header";
  
      // Lấy tên từ input (mặc định đã được gán giá trị)
      var reviewName = nameInput ? nameInput.value : "Khách ẩn danh";
      var nameSpan = document.createElement("span");
      nameSpan.className = "review-name";
      nameSpan.textContent = reviewName;
  
      var dateSpan = document.createElement("span");
      dateSpan.className = "review-date";
      var currentDate = new Date();
      dateSpan.textContent = currentDate.toLocaleDateString();
  
      headerDiv.appendChild(nameSpan);
      headerDiv.appendChild(document.createTextNode(" - "));
      headerDiv.appendChild(dateSpan);
  
      // Tạo phần nội dung nhận xét
      var contentP = document.createElement("p");
      contentP.className = "review-content";
      contentP.textContent = reviewContent;
  
      // Tạo nút "Xoá đánh giá"
      var deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-review-btn";
      deleteBtn.textContent = "Xoá đánh giá";
      deleteBtn.addEventListener("click", function() {
        reviewToDelete = li;
        if (deleteModal) {
          deleteModal.style.display = "block";
        }
      });
  
      // Ghép các thành phần lại thành 1 review hoàn chỉnh
      li.appendChild(headerDiv);
      li.appendChild(contentP);
      li.appendChild(deleteBtn);
  
      // Thêm review mới vào danh sách
      reviewList.appendChild(li);
  
      // Xoá nội dung trong textarea sau khi submit
      reviewTextArea.value = "";
    });
  
    // Xử lý nút trong modal xác nhận xoá
    if (cancelDeleteBtn && confirmDeleteBtn && deleteModal) {
      cancelDeleteBtn.addEventListener("click", function() {
        deleteModal.style.display = "none";
        reviewToDelete = null;
      });
  
      confirmDeleteBtn.addEventListener("click", function() {
        if (reviewToDelete) {
          reviewList.removeChild(reviewToDelete);
          reviewToDelete = null;
        }
        deleteModal.style.display = "none";
      });
    } else {
      console.error("Không tìm thấy delete modal hoặc nút trong modal.");
    }
  });
  
  