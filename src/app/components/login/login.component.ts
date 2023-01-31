import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
  public formData:FormGroup=new FormGroup(
    {
      email:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      password:new FormControl()
    }
  )
  constructor(private _logInService:LoginService,private _router:Router){}
  Submit(){
    console.log(this.formData.value);
    this._logInService.getData(this.formData.value).subscribe(
      (data:any)=>{
        sessionStorage.setItem("new-token",data.token);
        this._router.navigateByUrl("/dashboard")
       
      },
      (err:any)=>{
        alert("credential invalid");
        
      }
    )
    

  }
  
  
  

}