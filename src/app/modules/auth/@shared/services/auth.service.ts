import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, tap} from "rxjs";
import {User} from "../auth.model";
import {StoreService} from "../../../shared/services/store.service";

export interface AuthResponseData {
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string,
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  public token: string = null;
  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private store: StoreService) {
  }

  sigUp(form: { email: string, password: string }) {
    console.log(form)
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDoWSiI1UE0JosMMolT2Mw_kc8dWXPm7vM', {
      email: form.email, password: form.password, returnSecureToken: true
    }).pipe(tap(resData => {
    this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }

  login(form: { email: string, password: string }) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDoWSiI1UE0JosMMolT2Mw_kc8dWXPm7vM', {
      email: form.email, password: form.password , returnSecureToken: true
    }).pipe(tap((resData: AuthResponseData) => {
     this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
      this.store._idUser = resData.idToken
    }));
  }

  logout() {
    this.user.next(null)
    localStorage.removeItem('userData')
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer)
    }
    this.tokenExpirationTimer = null;
  }

  autoLogin() {
    const userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData'))
    if (!userData) {
      return
    }

    const loaderUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    if (loaderUser.token) {
      this.user.next(loaderUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration)
    }
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    console.log(expiresIn)
    this.autoLogout(expiresIn * 1000);
    const expirationData = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationData);
    this.user.next(user)

    localStorage.setItem('userData', JSON.stringify(user))
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      console.log(expirationDuration)
      this.logout();
    }, expirationDuration)
  }
}
