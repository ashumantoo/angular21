import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IStudent } from '../components/students/student/student';
import { Observable } from 'rxjs';

export interface IGetStudentResponse<T> {
  success: boolean;
  status: number;
  data: T;
}


@Injectable({
  providedIn: 'root',
})
export class StudentService {

  private http = inject(HttpClient);


  getStudents() {
    return this.http.get(`https://express-rest-api-wtt1.onrender.com/api/student`);
  }

  getStudentById(id: string) {
    return this.http.get(`https://express-rest-api-wtt1.onrender.com/api/student/${id}`);
  }

  createStudent(student: any) {
    return this.http.post(`https://express-rest-api-wtt1.onrender.com/api/student`, student);
  }

  updateStudent(id: string, student: any) {
    return this.http.post(`https://express-rest-api-wtt1.onrender.com/api/student/${id}`, student);
  }

}
