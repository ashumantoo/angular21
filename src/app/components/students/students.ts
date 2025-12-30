import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGetStudentResponse, StudentService } from '../../services/student.service';
import { IStudent } from './student/student';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students implements OnInit {

  private router = inject(Router);
  private studentService = inject(StudentService);

  students: any[] = [];

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((res: any) => {
      this.students = res.data;
    });
  }

  goToNewStudent() {
    this.router.navigateByUrl('/new-student');
  }
}
