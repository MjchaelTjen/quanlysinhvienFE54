// console.log(axios);

// Kết nối dữ liệu backend dựa vào thư viện axios
var svService = new SinhVienService();

var layDanhSachSinhVienApi = function () {

    var promies = svService.layDanhSachSinhVien(); // gọi đến backend lấy data


    // xử lý cho trường hợp gọi thành công
    promies.then(function (result) {
        console.log('kết quả', result.data)
        // Lấy dữ liệu sever trả về gọi hàm tạo table
        rednerTable(result.data)
    });

    // xử lý cho trường hợp thất bại
    promies.catch(function (error) {
        console.log(error);
    });

    console.log('123');
}

var rednerTable = function (mangSinhVien) {
    var noiDungTable = "";
    for (var i = 0; i < mangSinhVien.length; i++) {
        var sv = new SinhVien();
        sv.maSinhVien = mangSinhVien[i].maSinhVien;
        sv.tenSinhVien = mangSinhVien[i].tenSinhVien;
        sv.diemToan = mangSinhVien[i].diemToan;
        sv.diemLy = mangSinhVien[i].diemLy;
        sv.diemHoa = mangSinhVien[i].diemHoa;
        sv.diemRenLuyen = mangSinhVien[i].diemRenLuyen;
        sv.loaiSinhVien = mangSinhVien[i].loaiSinhVien;
        sv.email = mangSinhVien[i].email;
        // tạo ra các tr chứa thông tin sinh viên tương ứng
        noiDungTable += `
        <tr>
            <td>${sv.maSinhVien}</td>
            <td>${sv.tenSinhVien}</td>
            <td>${sv.email}</td>
            <td>${sv.diemTrungBinh()}</td>
            <td>${sv.xepLoai()}</td>
            <td>
                <button class="btn btn-danger"  onclick="xoaSinhVien('${sv.maSinhVien}')">Xóa</button>
                <button class="btn btn-primary" onclick="suaSinhVien('${sv.maSinhVien}')">Chỉnh sửa</button>
            </td>
        </tr>
        `;
    }
    document.querySelector("#tableSinhVien").innerHTML = noiDungTable;
}

layDanhSachSinhVienApi();



// ---- Chức năng thêm sinh viên lưu trữ vào sever thông qua api backend ----

document.querySelector("#btnXacNhan").onclick = function () {
    // Lấy dữ liệu từ người dùng nhập vào
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector("#maSinhVien").value;
    sv.tenSinhVien = document.querySelector("#tenSinhVien").value;
    sv.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
    sv.diemToan = document.querySelector("#diemToan").value;
    sv.diemLy = document.querySelector("#diemLy").value;
    sv.diemHoa = document.querySelector("#diemHoa").value;
    sv.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
    sv.email = document.querySelector("#email").value;
    console.log("Sinh Vien", sv);
    //  Dùng axios đưa dữ liệu về sever thông qua api backend cung cấp

    var promies = svService.themSinhVien(sv);

    // var promise = axios({
    //     url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien', //API  backen cung cấp
    //     method: 'POST', // giao thức backend cung cấp
    //     data: sv // Dữ liệu gửi đi (lưu ý: dữ liệu gửi đi phải đúng format dữ liệu của backend yêu cầu)
    // });

    // Hàm thực thi khi gọi ajax thành công
    promies.then(function (result) {
        console.log(result.data);

        // location.reload();

        // Gọi phương thức lấy thông tin sinh viên tạo lại table mới
        layDanhSachSinhVienApi();
    });

    // Hàm thực thi khi lỗi xảy ra
    promies.catch(function (error) {
        console.log(error.response.data);
    })
}


// ----Chức năng xóa sinh viên sever dựa vào api backend----

var xoaSinhVien = function (maSinhVien) {
    // alert(maSinhVien);
    var promies = svService.xoaSinhVien(maSinhVien);
    // Hàm xử lí thành công
    promies.then(function (result) {
        console.log(result.data);
        layDanhSachSinhVienApi();
    });

    // Hàm xử lý thất bại
    promies.catch(function (error) {
        console.log(error.response.data);
    })
}


var suaSinhVien = function (maSinhVien) {
    // alert(maSinhVien);
    // var promies = maSinhVien.suaSinhVien();
    var promies = axios({
        url: `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=` + maSinhVien,
        method: "GET"
    });
    promies.then(function (result) {
        var sv = result.data;
        // Gán dữ liệu ên giao diện người dùng nhập thông tin
        document.querySelector("#maSinhVien").value = sv.maSinhVien;
        document.querySelector("#tenSinhVien").value = sv.tenSinhVien;
        document.querySelector("#loaiSinhVien").value = sv.loaiSinhVien;
        document.querySelector("#email").value = sv.email;
        document.querySelector("#diemToan").value = sv.diemToan;
        document.querySelector("#diemLy").value = sv.diemLy;
        document.querySelector("#diemHoa").value = sv.diemHoa;
        document.querySelector("#diemRenLuyen").value = sv.diemRenLuyen;
    });

    promies.catch(function (error) {
        console.log(error.response.data);
    });
}


// Chức năng lưu thông tin sinh viên sever dựa vào api backend cung cấp
document.querySelector("#btnLuuThongTin").onclick = function () {
    // Lấy dữ liệu từ người dùng nhập đưa vào đối tượng theo format dữ liệu của backend yêu cầu
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector("#maSinhVien").value;
    sv.tenSinhVien = document.querySelector("#tenSinhVien").value;
    sv.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
    sv.diemToan = document.querySelector("#diemToan").value;
    sv.diemLy = document.querySelector("#diemLy").value;
    sv.diemHoa = document.querySelector("#diemHoa").value;
    sv.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
    sv.email = document.querySelector("#email").value;

    // GỌi ajax đưa dữ liệu về sever cập nhật
    var promies = axios({
        url: `http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=` + sv.maSinhVien,
        method: "PUT",
        data: sv
    });


    promies.then(function (result) {
        console.log(result.data);
        layDanhSachSinhVienApi();
    });


    promies.catch(function (error) {
        console.log(error.response.data);
    })

}