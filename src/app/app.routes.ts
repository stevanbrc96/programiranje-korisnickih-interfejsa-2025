import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Question } from './question/question';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'question', component: Question },
  { path: 'profile', component: Profile },
  { path: '**', redirectTo: '' },
];
