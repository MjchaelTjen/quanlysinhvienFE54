// Khai báo lớp đối tượng trong javascript Class (Prototype)
var SinhVien = function (maSV,tenSV,loaiSV, email,soDienThoai,diemToan,diemLy,diemHoa,diemRenLuyen,) {
    this.maSinhVien = maSV;
    this.tenSinhVien = tenSV;
    this.loaiSinhVien = loaiSV;
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
    this.diemRenLuyen = diemRenLuyen;
    this.email = email;
    this.soDienThoai = soDienThoai;
    this.diemTrungBinh = function () {
        var dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
        return dtb;
    }
    this.xepLoai = function () {
        var dtbb = this.diemTrungBinh()

        if (this.diemRenLuyen < 5) {
            return "Yếu";
        } else if (dtbb < 5) {
            return "Yếu";
        }
        else if (dtbb >= 5 && dtbb < 6) {
            return "Trung bình";
        } else if (dtbb >= 6 && dtbb < 7) {
            return "Trung bình khá";
        } else if (dtbb >= 7 && dtbb < 8) {
            return "Khá";
        }
        else if (dtbb >= 8 && dtbb < 9) {
            return "Giỏi";
        } else if (dtbb >= 9 && dtbb < 10) {
            return "Giỏi";
        }
        else {
            return "Yếu";
        }
    }
}