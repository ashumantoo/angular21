import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { ControlFlow } from './components/control-flow/control-flow';
import { SignalExp } from './components/signal-exp/signal-exp';
import { Students } from './components/students/students';
import { Student } from './components/students/student/student';

export const routes: Routes = [
  { path: 'students', component: Students },
  { path: 'new-student', component: Student },
  { path: 'update-student/:id', component: Student },
  { path: "admin", component: Admin },
  { path: "user", component: User },
  { path: "data-binding", component: DataBinding },
  { path: "control-flows", component: ControlFlow },
  { path: "signal", component: SignalExp }
];
