function groupCheckboxes(){
    // Lấy trạng thái của checkbox chính
    var mainCheckbox = document.getElementById("group-all");
    var isChecked = mainCheckbox.checked;

    // Set trạng thái của các checkbox phụ
    document.getElementById("group-list").checked = isChecked;
    document.getElementById("group-edit").checked = isChecked;
    document.getElementById("group-delete").checked = isChecked;
    document.getElementById("group-insert").checked = isChecked;
    document.getElementById("group-permission").checked = isChecked;
}

function pageCheckboxes(){
    // Lấy trạng thái của checkbox chính
    var mainCheckbox = document.getElementById("page-all");
    var isChecked = mainCheckbox.checked;

    // Set trạng thái của các checkbox phụ
    document.getElementById("page-list").checked = isChecked;
    document.getElementById("page-edit").checked = isChecked;
    document.getElementById("page-delete").checked = isChecked;
    document.getElementById("page-insert").checked = isChecked;
    document.getElementById("page-duplicate").checked = isChecked;
}

function serviceCheckboxes(){
    // Lấy trạng thái của checkbox chính
    var mainCheckbox = document.getElementById("service-all");
    var isChecked = mainCheckbox.checked;

    // Set trạng thái của các checkbox phụ
    document.getElementById("service-list").checked = isChecked;
    document.getElementById("service-edit").checked = isChecked;
    document.getElementById("service-delete").checked = isChecked;
    document.getElementById("service-insert").checked = isChecked;
    document.getElementById("service-duplicate").checked = isChecked;
}

function portfolioCheckboxes(){
    // Lấy trạng thái của checkbox chính
    var mainCheckbox = document.getElementById("portfolio-all");
    var isChecked = mainCheckbox.checked;

    // Set trạng thái của các checkbox phụ
    document.getElementById("portfolio-list").checked = isChecked;
    document.getElementById("portfolio-edit").checked = isChecked;
    document.getElementById("portfolio-delete").checked = isChecked;
    document.getElementById("portfolio-insert").checked = isChecked;
    document.getElementById("portfolio-duplicate").checked = isChecked;
}

function portfolioCategoriesCheckboxes(){
    // Lấy trạng thái của checkbox chính
    var mainCheckbox = document.getElementById("portfolio-categories-all");
    var isChecked = mainCheckbox.checked;

    // Set trạng thái của các checkbox phụ
    document.getElementById("portfolio-categories-list").checked = isChecked;
    document.getElementById("portfolio-categories-edit").checked = isChecked;
    document.getElementById("portfolio-categories-delete").checked = isChecked;
    document.getElementById("portfolio-categories-insert").checked = isChecked;
    document.getElementById("portfolio-categories-duplicate").checked = isChecked;
}

function blogCheckboxes(){
    // Lấy trạng thái của checkbox chính
    var mainCheckbox = document.getElementById("blog-all");
    var isChecked = mainCheckbox.checked;

    // Set trạng thái của các checkbox phụ
    document.getElementById("blog-list").checked = isChecked;
    document.getElementById("blog-edit").checked = isChecked;
    document.getElementById("blog-delete").checked = isChecked;
    document.getElementById("blog-insert").checked = isChecked;
    document.getElementById("blog-duplicate").checked = isChecked;
}


//xử lý đăng nhập bằng google
function onSignIn(googleUser) {
    // Lấy thông tin người dùng
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
}

// function onSuccess(googleUser) {
// var profile = googleUser.getBasicProfile();
// console.log('ID: ' + profile.getId());
// console.log('Name: ' + profile.getName());
// console.log('Email: ' + profile.getEmail());
// }

// function onFailure(error) {
// console.log('Error: ' + error);
// }

// function renderButton() {
// gapi.signin2.render('google-signin-button', {
//     'scope': 'profile email',
//     'width': 240,
//     'height': 50,
//     'longtitle': true,
//     'theme': 'dark',
//     'onsuccess': onSuccess,
//     'onfailure': onFailure
// });
// }

// Khởi tạo Google Sign-In
gapi.load('auth2', function() {
gapi.auth2.init({
    client_id: '355216058653-vmsajn5e7trdmp9mi17ioof5rca7adst.apps.googleusercontent.com', // Thay YOUR_CLIENT_ID bằng Client ID của bạn
}).then(function () {
    renderButton();
});
});



//   // Khởi tạo SDK của Facebook
//   window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '3204965186472708', // Thay thế YOUR_APP_ID bằng ID ứng dụng của bạn
//       cookie     : true,
//       xfbml      : true,
//       version    : 'v10.0'
//     });
//   };

//   // Tải SDK của Facebook
//   (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));

//   // Xử lý sự kiện click
//   document.querySelector('.fa-facebook').addEventListener('click', function() {
//     // Gọi hộp thoại đăng nhập Facebook
//     FB.login(function(response) {
//       if (response.authResponse) {
//         // Người dùng đã đăng nhập và cung cấp quyền truy cập
//         console.log('Đăng nhập thành công:', response);
//       } else {
//         // Người dùng từ chối đăng nhập
//         console.log('Đăng nhập bị từ chối hoặc có lỗi.');
//       }
//     }, { scope: 'email,user_likes' }); // Các quyền truy cập cần được yêu cầu
//   });
