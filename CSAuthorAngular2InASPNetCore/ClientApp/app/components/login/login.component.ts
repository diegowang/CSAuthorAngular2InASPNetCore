﻿import { Component } from "@angular/core";
import { Router } from '@angular/router';

import { AuthService } from "../../_services/auth.service";

@Component({
    //moduleId: module.id,
    selector: "login",
    template: require('./login.component.html'),
    providers: [AuthService]
})
export class LoginComponent {

    private userName: string;
    private password: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    login() {
        this.authService.login(this.userName, this.password)
            .then(result => {
                if (result.State == 1) {
                    this.router.navigate(["./home"]);
                }
                else {
                    alert(result.Msg);
                }
            });
    }
}