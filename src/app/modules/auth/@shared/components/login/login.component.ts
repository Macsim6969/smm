import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  public form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }
  ngOnInit() {
    this.form = new FormGroup<any>({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  public submit(){
    const formData = {...this.form.value}
    this.form.reset()
    this.authService.login(formData).subscribe((data) =>{
      data ? this.router.navigate(['/']).then(): null;
    })
  }

}
