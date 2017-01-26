import { Component } from '@angular/core';

import { AuthService } from "../../_services/auth.service";

@Component({
    //moduleId: module.id,
    selector: 'home',
    template: require('./home.component.html'),
    providers: [AuthService]
})
export class HomeComponent {
    isLogin = false;
    userName: string;

    constructor(
        private authService: AuthService
    ) { }

    //ngOnInit(): void {
    //    this.isLogin = this.authService.checkLogin();
    //    if (this.isLogin) {
    //        this.authService.getUserInfo().then(res => {
    //            this.userName = (res.Data as any).UserName;
    //        });
    //    }

    //}
}
