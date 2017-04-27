import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class Auth {

    asanaEndPoint: string = "https://app.asana.com/-/";
    token: string;
    onLoggedIn:Subject<string> = new Subject();

    constructor(private http: Http) {

    }

    authorizeUser() {
        let asanaAuthUrl = "https://app.asana.com/-/oauth_authorize";
        let callbackUrl = "http://localhost:4200/assets/auth-callback.html";
        let clientId = "325590203801245";
        let otherInfo = "&response_type=token&state=somerandomstate";
        let windowObj = this.createWindow(`
            ${asanaAuthUrl}?client_id=${clientId}&redirect_uri=${callbackUrl}${otherInfo}
        `);

        let intervalDuration = 500;

        let intervalId = setInterval(() => {
            if(!windowObj){
                return clearInterval(intervalId);
            }
            //send a message to the popup
            windowObj.postMessage("sendOauthLocaionHash", "*");
            windowObj.postMessage("popupAlive", "*");
            let hash = window["oauthLocaionHash"];

            //good
            if (hash && hash.length > 0
                && hash.split("&").length > 0
                && hash.split("&")[0].split("=").length > 1) {

                this.token = hash.split("&")[0].split("=")[1];
                clearInterval(intervalId);
                windowObj.close();
                this.onLoggedIn.next(this.token);
                this.onLoggedIn.complete();

            }
            // in progress
            else {
                if (windowObj.closed) {
                    clearInterval(intervalId);
                    windowObj.close();
                }
            }
        }, intervalDuration);
    }

    createWindow(
        url: string,
        name: string = 'Window',
        width: number = 500, height: number = 600,
        left: number = 0,
        top: number = 0) {

        if (url == null) {
            return null;
        }

        var options = `width=${width},height=${height},left=${left},top=${top}`;

        return window.open(url, name, options);
    }
}