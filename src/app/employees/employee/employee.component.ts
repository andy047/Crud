import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public servicio:EmployeeService,
    private firestore:AngularFirestore) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?:NgForm){
      if(form!=null)
        form.resetForm();
        this.servicio.formData={
          id:null,
          fullName:'',
          position:'',
          empCode:'',
          mobile:''
        }
      
    }

    onSubmit(form:NgForm){
      let data = form.value;
      this.firestore.collection('employees').add(data);
      this.resetForm(form)
    }

  }


