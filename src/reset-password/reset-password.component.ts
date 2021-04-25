import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/_service/home.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  id:number;
  
  // admin: any ={
  //   adminID:0,
  //   adminEmail : '',
  //   adminPass: ''
  // };

  constructor(private aroute:ActivatedRoute,private pro:ProductService,private toaster:ToastrService,private route:Router) { }

  ngOnInit(): void {
    // this.id = +this.aroute.snapshot.paramMap.get('id');
    // this.admin = this.pro.getAdmin(this.id);
  }

  save(form:NgForm){
    console.log(form.value);
    this.route.navigate(['/adminlogin']);
    this.toaster.info('Admin Password Changed','Alert',{timeOut:2000});
    

    // let admin : any={
    //   adminID:form.value.adid,
    //   adminEmail:form.value.ademail,
    //   adminPass: form.value.adpwd,
    // }

    // this.pro.updateAdmin(admin);
  }

  

}
