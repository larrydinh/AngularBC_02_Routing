import { Component, OnInit } from '@angular/core';
import { CourseViewModel } from 'src/app/_core/models/CourseViewModel';
import { CourseService } from 'src/app/_core/services/course.service';

@Component({
  selector: 'app-homepage',
  template: `
    <div class="container">
      <div class="display-4 text-center">Danh sach khoa hoc</div>
      <div class="row">
        <div class="col-4" *ngFor="let item of course">
          <div class="card text-white bg-dark">
            <img
              class="card-img-top"
              [src]="item.hinhAnh"
              [alt]="item.tenKhoaHoc"
            />
            <div class="card-body">
              <h4 class="card-title">{{ item.tenKhoaHoc }}</h4>
              <p class="card-text">{{ item.moTa }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  course: CourseViewModel = new CourseViewModel();
  constructor(private courseService: CourseService) {}

  ///life cycle thực thi sau khi giao diện render (didmount)
  ngOnInit(): void {
    // let observableCouse = this.courseService.layDanhSachKhoaHoc();
    // observableCouse.subscribe(
    //   (result) => {
    //     this.course = result;
    //   },
    //   (errors) => {
    //     console.log(errors.error);
    //   }
    // );
    this.layDanhSachKhoaHocAPI();
  }

  layDanhSachKhoaHocAPI = async () => {
    try {
      let result: any = await this.courseService
        .layDanhSachKhoaHoc()
        .pipe()
        .toPromise();
      this.course = result;
    } catch (errors) {
      console.log(errors);
    }
  };
}
