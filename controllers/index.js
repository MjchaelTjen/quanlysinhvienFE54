var mangSinhVien = [];

var valideate = new Validation();

// Định nghĩa sự kiện khi người dùng bấm nút xác nhận
document.querySelector("#btnXacNhan").onclick = function () {
    // Tạo ra đối tượng sinh viên người dùng nhập từ giao diện
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector("#maSinhVien").value;
    sv.tenSinhVien = document.querySelector("#tenSinhVien").value;
    sv.email = document.querySelector("#email").value;
    sv.soDienThoai = document.querySelector("#soDt").value;
    sv.diemToan = document.querySelector("#diemToan").value;
    sv.diemLy = document.querySelector("#diemLy").value;




    sv.diemHoa = document.querySelector("#diemHoa").value;
    sv.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
    sv.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
    console.log("Sinh Viên", sv);

    // Kiểm tra hợp lệ
    // Kiểm tra rỗng
    var valid = true;
    valid &= valideate.kiemTraRong(sv.maSinhVien, "Mã sinh viên", ".kiemTraRong-maSinhVien") &
        valideate.kiemTraRong(sv.tenSinhVien, "Tên sinh viên", ".kiemTraRong-tenSinhVien") &
        valideate.kiemTraRong(sv.email, "Email", ".kiemTraRong-email") &
        valideate.kiemTraRong(sv.soDienThoai, "Số dt", ".kiemTraRong-soDt") &
        valideate.kiemTraRong(sv.diemToan, "Điểm toán", ".kiemTraRong-diemToan") &
        valideate.kiemTraRong(sv.diemLy, "Điểm lý", ".kiemTraRong-diemLy") &
        valideate.kiemTraRong(sv.diemHoa, "Điểm hóa", ".kiemTraRong-diemHoa") &
        valideate.kiemTraRong(sv.diemRenLuyen, "Điểm rèn luyện", ".kiemTraRong-diemRenLuyen");

    // // Kiểm tra định dạng dữ liệu

    // // Kiểm tra định dạng email
    valid &= valideate.kiemTraEmail(sv.email, "Email", ".kiemTraDinhDang-email");
    // // Kiểm tra tất cả ký tự định dạng tenSinhVien
    valid &= valideate.kiemTraTatCaKyTu(sv.tenSinhVien, "Tên sinh viên", ".kiemTraDinhDang-tenSinhVien");

    // // Kiểm tra định dạng số điện thoại & điểm
    // valid &= valideate.kiemTraTatCaLaSo(sv.soDienThoai, "", ".kiemTraDinhDang-soDienThoai") &
    //     valideate.kiemTraTatCaLaSo(sv.diemToan, "Điểm toán", ".kiemTraDinhDang-diemToan") &
    //     valideate.kiemTraTatCaLaSo(sv.diemLy, "Điểm lý", ".kiemTraDinhDang-diemLy") &
    //     valideate.kiemTraTatCaLaSo(sv.diemHoa, "Điểm hóa", ".kiemTraDinhDang-diemHoa") &
    //     valideate.kiemTraTatCaLaSo(sv.diemRenLuyen, "Điểm rèn luyện", ".kiemTraDinhDang-diemRenLuyen");

    // // Kiểm tra giá trị điểm toán
    // valid &= valideate.kiemTraGiaTri(sv.diemToan, "Điểm toán", ".kiemTraGiaTri-diemToan", 0, 10);
    // // Kiểm tra giá trị điểm lý
    // valid &= valideate.kiemTraGiaTri(sv.diemLy, "Điểm lý", ".kiemTraGiaTri-diemLy", 0, 10);
    // // Kiểm tra giá trị điểm hóa
    // valid &= valideate.kiemTraGiaTri(sv.diemHoa, "Điểm hóa", ".kiemTraGiaTri-diemHoa", 0, 10);
    // // Kiểm tra giá trị điểm rèn luyện
    // valid &= valideate.kiemTraGiaTri(sv.diemRenLuyen, "Điểm rèn luyện", ".kiemTraGiaTri-diemRenLuyen", 0, 10);

    // // Kiểm tra độ dài 
    // valid &= valideate.kiemTraDoDaiChuoi(sv.email, "Email", ".kiemTraDoDai-email", 6, 32);
    // valid &= valideate.kiemTraDoDaiChuoi(sv.tenSinhVien, "Tên sinh viên", ".kiemTraDoDai-tenSinhVien", 6, 50);


    // if (sv.maSinhVien.trim() === "") {
    //     // DOM đến thẻ lỗi kiemTraRong-maSinhVien => ghi nội dung lỗi vào innerHTML
    //     document.querySelector(".kiemTraRong-maSinhVien").innerHTML = "Mã sinh viên không được bỏ trống !";
    //     // Không hợp lệ cho dừng không chạy tiếp
    //     valid = false;
    // }
    // else {
    //     document.querySelector(".kiemTraRong-maSinhVien").innerHTML = "";
    // }

    // if (sv.tenSinhVien.trim() === "") {
    //     document.querySelector(".kiemTraRong-tenSinhVien").innerHTML = "Tên sinh viên không được để trống !";
    //     valid = false;
    // }
    // else {
    //     document.querySelector(".kiemTraRong-tenSinhVien").innerHTML = "";
    // }

    // if (sv.email.trim() === "") {
    //     document.querySelector(".kiemTraRong-email").innerHTML = "Email không được để trống !";
    //     valid = false;
    // }
    // else {
    //     document.querySelector(".kiemTraRong-email").innerHTML = "";
    // }

    if (valid == false) {
        return;
    }

    // if (sv.soDienThoai.trim() === "") {
    //     document.querySelector(".kiemTraRong-soDt").innerHTML = "Số điện thoại không được để trống !";
    //     return;
    // }
    // else {
    //     document.querySelector(".kiemTraRong-soDt").innerHTML = "";
    // }

    // if(sv.diemToan.trim() === ""){
    //     document.querySelector(".kiemTraRong-diemToan").innerHTML ="Điểm toán không được để trống !";
    //     return;
    // }
    // else {
    //     document.querySelector(".kiemTraRong-diemToan").innerHTML = "";
    // }

    // if(sv.diemLy.trim() === ""){
    //     document.querySelector(".kiemTraRong-diemLy").innerHTML ="Điểm lý không được để trống !";
    //     return;
    // }
    // else {
    //     document.querySelector(".kiemTraRong-diemLy").innerHTML = "";
    // }

    // if(sv.diemHoa.trim() === ""){
    //     document.querySelector(".kiemTraRong-diemHoa").innerHTML ="Điểm hóa không được để trống !";
    //     return;
    // }
    // else {
    //     document.querySelector(".kiemTraRong-diemHoa").innerHTML = "";
    // }

    // if(sv.diemRenLuyen.trim() === ""){
    //     document.querySelector(".kiemTraRong-diemRenLuyen").innerHTML ="Điểm rèn luyện không được để trống !";
    //     return;
    // }
    // else {
    //     document.querySelector(".kiemTraRong-diemRenLuyen").innerHTML = "";
    // }


    //Thêm một sinh viên vào mảng
    mangSinhVien.push(sv);

    renderTable(mangSinhVien);

    // Lưu vào Localstorage
    luuLocalStorage();


    // Tạo thẻ trSinhVien, cú pháp tọa thẻ: document.createElement("tenThe");
    // var trSinhVien = document.createElement("tr");

    // // Tạo thẻ tdMaSinhVien => Chứa nội dung sv.maSinhVien
    // var tdMaSinhVien = document.createElement("td");
    // tdMaSinhVien.innerHTML = sv.maSinhVien;
    // var tdTenSinhVien = document.createElement("td");
    // tdTenSinhVien.innerHTML = sv.tenSinhVien;
    // var tdEmail = document.createElement("td");
    // tdEmail.innerHTML = sv.email;
    // var tdSoDienThoai = document.createElement("td");
    // tdSoDienThoai.innerHTML = sv.soDienThoai;
    // var tdDiemTrungBinh = document.createElement("td");
    // tdDiemTrungBinh.innerHTML = sv.diemTrungBinh();
    // var tdXepLoai = document.createElement("td")
    // tdXepLoai.innerHTML = sv.xepLoai();

    // // Tạo ra td chức năng 
    // var tdChucNang = document.createElement("td");

    // var buttonXoa = document.createElement("button");
    // buttonXoa.innerHTML = "Delete";
    // buttonXoa.className = "btn btn-danger";
    // buttonXoa.onclick = function () {
    //     // this: là nút xóa
    //     // this vị trí hiện tại là thẻ button => .parentElement là thẻ td => td.parentElement => thẻ tr => .remove(); xóa
    //     this.parentElement.parentElement.remove();
    // }

    // // Add button vào td
    // tdChucNang.appendChild(buttonXoa);
    // // Chèn thẻ con vào thẻ cha: theCha.appendChild(theCon)
    // trSinhVien.appendChild(tdMaSinhVien);
    // trSinhVien.appendChild(tdTenSinhVien);
    // trSinhVien.appendChild(tdEmail);
    // trSinhVien.appendChild(tdSoDienThoai);
    // trSinhVien.appendChild(tdDiemTrungBinh);
    // trSinhVien.appendChild(tdXepLoai);
    // trSinhVien.appendChild(tdChucNang);



    // // DOM đến thẻ tbody => appendChild thẻ tr vào 
    // document.querySelector("#tableSinhVien").appendChild(trSinhVien);
}

var renderTable = function (arrSV) {
    // từ mảng sinh viên tạo ra một chuỗi html nhiều thẻ tr dựa vào vòng lặp
    var noiDungTable = "";
    for (var index = 0; index < arrSV.length; index++) {
        // Mỗi lần lặp lấy ra 1 dối tượng sinhVien
        var sinhVien = arrSV[index];
        var sv = new SinhVien(sinhVien.maSinhVien, sinhVien.tenSinhVien, sinhVien.loaiSinhVien, sinhVien.email, sinhVien.soDienThoai, sinhVien.diemToan, sinhVien.diemLy, sinhVien.diemHoa, sinhVien.diemRenLuyen);
        // sv.maSinhVien = sinhVien.maSinhVien;
        // sv.tenSinhVien = sinhVien.tenSinhVien;
        // sv.email = sinhVien.email;
        // sv.soDienThoai = sinhVien.soDienThoai;
        // sv.diemToan = sinhVien.diemToan;
        // sv.diemLy = sinhVien.diemLy;
        // sv.diemHoa = sinhVien.diemHoa;
        // sv.diemRenLuyen = sinhVien.diemRenLuyen;
        // sv.loaiSinhVien = sinhVien.loaiSinhVien;
        // Tọa ra 1 chuỗi + dồn vào nội dung <tr></tr>
        noiDungTable += `
        <tr>
            <td>${sv.maSinhVien}</td>
            <td>${sv.tenSinhVien}</td>
            <td>${sv.email}</td>
            <td>${sv.soDienThoai}</td>
            <td>${sv.diemTrungBinh()}</td>
            <td>${sv.xepLoai()}</td>
            <td><button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')" >Delete</button></td>
            <td><button class="btn btn-primary" onclick="chinhSua('${sv.maSinhVien}')">Edit</button></td>
        </tr>
        `;

    }
    console.log(noiDungTable);
    document.querySelector("#tableSinhVien").innerHTML = noiDungTable;
}
// Cài đặt sự kiện cho nút button xóa
var xoaSinhVien = function (masv) {
    // mangSinhVien = [{ma:1,ten:'a'},{ma:2,ten:'b'},{ma:3,ten:'c'}]
    for (var index = mangSinhVien.length - 1; index >= 0; index--) {
        // mỗi lần duyệt lấy ra 1 đối tượng sinh viên
        var sv = mangSinhVien[index];
        // lấy mã sinh viên của từng đối tượng được so sánh với maSinhVien được click
        if (sv.maSinhVien == masv) {
            // splice là hàm xóa phần tử của mảng dựa vào index
            // mangSinhVien.splice(index, số phần tử giống nhau sẽ được xóa)
            mangSinhVien.splice(index, 1);
        }
    }
    // sau khi xóa dữ liệu trong mảng gọi hàm tạo lại table truyền vào mảng sinh viên đã xóa
    renderTable(mangSinhVien);
}

var chinhSua = function (maSV) {

    document.querySelector("#maSinhVien").disabled = true;
    document.querySelector("#btnXacNhan").disabled = true;
    // Từ mã sinh viên => tìm sinh viên trong mảng sinh viên
    for (var index = 0; index < mangSinhVien.length; index++) {
        // mỗi làn duyệt lấy ra 1 dối tượng sinh viên
        var sv = mangSinhVien[index];
        // so sánh nếu maSV  truyền vào === với đối tượng đang duyệt => gán ngược lại lên các control phía trên
        if (maSV === sv.maSinhVien) {
            document.querySelector("#maSinhVien").value = sv.maSinhVien;
            document.querySelector("#tenSinhVien").value = sv.tenSinhVien;
            document.querySelector("#email").value = sv.email;
            document.querySelector("#soDt").value = sv.soDienThoai;
            document.querySelector("#diemToan").value = sv.diemToan;
            document.querySelector("#diemLy").value = sv.diemLy;
            document.querySelector("#diemHoa").value = sv.diemHoa;
            document.querySelector("#diemRenLuyen").value = sv.diemRenLuyen;
            document.querySelector("#loaiSinhVien").value = sv.loaiSinhVien;


        }
    }
}

// Viết hàm lưu trự dữ liệu xống máy tính client
var luuLocalStorage = function () {
    // Biếng mảng sinh viên thành chuỗi
    var sMangSinhVien = JSON.stringify(mangSinhVien);
    // Đem chuỗi mangSinhVien lưu vào localStorage
    localStorage.setItem("mangSinhVien", sMangSinhVien);
}

// Viết phương thức lấy dữ liệu từ localStorage => khi người dùng vừa vào trang web
var layMangSinhVienStorage = function () {
    // kiểm tra dữ liệu có trong localStorage không
    if (localStorage.getItem("mangSinhVien")) {
        // Lấy dữ liệu được lưu trong localStorage ra ngoài
        var sMangSinhVien = localStorage.getItem("mangSinhVien");
        // Biến dữ liệu chuỗi chuyển về object javascript gán vào mangSinVien
        mangSinhVien = JSON.parse(sMangSinhVien);
        // Sau khi lấy dữ liệu ra gọi hàm tạo bảng
        renderTable(mangSinhVien);
    }
}

layMangSinhVienStorage();

// Cập nhật thông tin
document.querySelector("#btnLuuThongTin").onclick = function () {
    // Lấy thông tin người dùng sau khi thay dổi gán vào đối tượng sinhVien
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector("#maSinhVien").value;
    sv.tenSinhVien = document.querySelector("#tenSinhVien").value;
    sv.email = document.querySelector("#email").value;
    sv.soDienThoai = document.querySelector("#soDt").value;
    sv.diemToan = document.querySelector("#diemToan").value;
    sv.diemLy = document.querySelector("#diemLy").value;
    sv.diemHoa = document.querySelector("#diemHoa").value;
    sv.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
    sv.loaiSinhVien = document.querySelector("#loaiSinhVien").value;

    // tìm trong mangSinhVien  đối tượng cùng mã => cập nhật lại
    for (var index = 0; index < mangSinhVien.length; index++) {

        var sinhVienCapNhat = mangSinhVien[index];

        if (sinhVienCapNhat.maSinhVien === sv.maSinhVien) {
            sinhVienCapNhat.maSinhVien = sv.maSinhVien;
            sinhVienCapNhat.tenSinhVien = sv.tenSinhVien;
            sinhVienCapNhat.email = sv.email;
            sinhVienCapNhat.soDienThoai = sv.soDienThoai;
            sinhVienCapNhat.diemToan = sv.diemToan;
            sinhVienCapNhat.diemLy = sv.diemLy;
            sinhVienCapNhat.diemHoa = sv.diemHoa
            sinhVienCapNhat.diemRenLuyen = sv.diemRenLuyen;
        }
    }
    // gọi hàm tạo lại bảng
    renderTable(mangSinhVien);
    // gọi hàm lưu vào localStorage
    luuLocalStorage();

    document.querySelector("#maSinhVien").disabled = false;
    document.querySelector("#btnXacNhan").disabled = false;

}