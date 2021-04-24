export class CourseViewModel {

    maKhoaHoc: string = '';
    biDanh:string = '';
    tenKhoaHoc:string = '';
    moTa:string = '';
    luotXem:string = '';
    maNhom:string = ''; 
    ngayTao:string = '';
    soLuongHocVien:number = 0;
    hinAnh:string ='';
    nguoiTao:NguoiTao = new NguoiTao();
    danhMucKhoaHoc:DanhMucKhoaHoc = new DanhMucKhoaHoc();
    // "nguoiTao": {
    //     "taiKhoan": "admin_test",
    //     "hoTen": "seaways",
    //     "maLoaiNguoiDung": "GV",
    //     "tenLoaiNguoiDung": "Giáo vụ"
    //   },
    //   "danhMucKhoaHoc": {
    //     "maDanhMucKhoahoc": "Design",
    //     "tenDanhMucKhoaHoc": "Thiết kế Web"
    //   }
}
class NguoiTao{
    taiKhoan:string;
    hoTen: string;
    maLoaiNguoiDung: string;
    tenLoaiNguoiDung: string;
}
class DanhMucKhoaHoc{
    maDanhMucKhoaHoc: string; 
    tenDanhMucKhoaHoc: string; 
}
