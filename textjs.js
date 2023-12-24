// Khi trình duyệt đã tải xong tất cả các phần tử HTML
document.addEventListener("DOMContentLoaded", function(event) {
  // Lấy tham chiếu tới phần tử chứa chữ
  var textElement = document.getElementById("text");

  // Đợi 3 giây và sau đó thêm lớp "hidden" để chữ biến mất
  setTimeout(function() {
    textElement.classList.add("hidden");
  }, 3000);
});