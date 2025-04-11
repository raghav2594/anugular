import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodoComponent } from './list-todo/list-todo.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'welcome/:name', component: WelcomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'todos', component: ListTodoComponent},
    {path : '**' , component: ErrorComponent}
];
