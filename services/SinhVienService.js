// Lớp đối tượng chứa các phương thức giao tiếp với backend api

var SinhVienService = function () {

    this.layDanhSachSinhVien = function () {
        var promise = axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', //BE cung cấp
            method: 'GET' // backend cung cấp
        });
        return promise;
    }
    this.themSinhVien = function (sv) {
        var promies = axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien', //API  backen cung cấp
            method: 'POST', // giao thức backend cung cấp
            data: sv // Dữ liệu gửi đi (lưu ý: dữ liệu gửi đi phải đúng format dữ liệu của backend yêu cầu)
        });
        return promies;
    }
    this.xoaSinhVien = function (maSinhVien) {
        var promies = axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=' + maSinhVien,
            method: "DELETE",
            // data: sv
        });
        return promies;
    }
    // this.suaSinhVien = function(){
    //     var promise = axios({
    //         url: `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=` + maSinhVien,
    //         method: "GET"
    //     });
    //     return promise;
    // }
}