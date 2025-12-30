import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StudentService } from '../../../services/student.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

// Use dynamic import for bootstrap to avoid SSR issues
// const bootstrap = await import('bootstrap');

// Define interfaces for the student structure
export interface IGuardianDetails {
  gardianFullName: string;
  gardianEmail: string;
  gardianMobile: string;
  relationWithGardian: 'FATHER' | 'MOTHER' | 'GRAND_FATHER' | 'GRAND_MOTHER' | 'UNCLE' | 'AUNTY' | 'BROTHER' | 'SISTER';
}

export interface IAddress {
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  zipcode?: string;
}

export interface ISchoolDetails {
  schoolName?: string;
  schoolEmail?: string;
  schoolMobile?: string;
}

export interface IStudent {
  firstName: string;
  middleName: string;
  lastName: string;
  rollNumber: number | null;
  grade: number | null;
  section: string;
  email: string;
  mobile: string;
  gardianDetails: IGuardianDetails;
  gender: 'MALE' | 'FEMALE';
  dob: string;
  address: IAddress;
  schoolDetails: ISchoolDetails;
  isHandicapped: boolean;
  isActive: boolean;
}

const studentInitialValue: IStudent = {
  firstName: '',
  middleName: '',
  lastName: '',
  rollNumber: null,
  grade: null,
  section: '',
  email: '',
  mobile: '',
  gardianDetails: {
    gardianFullName: '',
    gardianEmail: '',
    gardianMobile: '',
    relationWithGardian: 'FATHER'
  },
  gender: 'MALE',
  dob: '',
  address: {
    street: '',
    city: '',
    state: '',
    country: '',
    zipcode: ''
  },
  schoolDetails: {
    schoolName: '',
    schoolEmail: '',
    schoolMobile: ''
  },
  isHandicapped: false,
  isActive: true
};

@Component({
  selector: 'app-student',
  imports: [CommonModule, FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {

  private studentService = inject(StudentService);
  private router = inject(Router);

  relationShipNames = ['FATHER', 'MOTHER', 'GRAND_FATHER', 'GRAND_MOTHER', 'UNCLE', 'AUNTY', 'BROTHER', 'SISTER'];
  student: IStudent = studentInitialValue;

  previewStudentData: IStudent | null = null;

  private modalInstance: any;

  onSubmit(form: NgForm): void {
    this.studentService.createStudent(this.student).subscribe((res: any) => {
      if (res.success) {
        alert("Student added successfully");
        form.reset();
        this.student = studentInitialValue;
        this.router.navigateByUrl('/students');
      }
    });
    // if (form.valid) {
    //   console.log('Form Submitted!', this.student);
    //   console.log('Form Values:', form.value);
    // } else {
    //   // Mark all fields as touched to show validation errors
    //   Object.keys(form.controls).forEach(key => {
    //     const control = form.controls[key];
    //     control.markAsTouched();
    //     control.updateValueAndValidity();
    //   });
    // }
  }

  onReset(form: NgForm): void {
    if (confirm('Are you sure you want to reset the form? All data will be lost.')) {
      form.resetForm();
      // Reset to default values
      this.student = studentInitialValue;
    }
  }

  async previewData(): Promise<void> {
    // Create a deep copy for preview
    this.previewStudentData = JSON.parse(JSON.stringify(this.student));

    // Format the date for better display
    if (this.previewStudentData?.dob) {
      this.previewStudentData.dob = new Date(this.previewStudentData.dob).toLocaleDateString();
    }

    // Show the modal
    // if (this.previewModal) {
    //   this.modalInstance = new bootstrap.Modal(this.previewModal.nativeElement);
    //   this.modalInstance.show();
    // }
  }

  // Helper method to format date for form input
  formatDateForInput(date: string): string {
    if (!date) return '';
    return new Date(date).toISOString().split('T')[0];
  }
}
