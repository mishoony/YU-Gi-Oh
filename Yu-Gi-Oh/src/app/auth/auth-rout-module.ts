import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routs : Routes =[
    {
        path: 'register',
        component : RegisterComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    }
]

export const AuthRouterModule = RouterModule.forChild(routs)