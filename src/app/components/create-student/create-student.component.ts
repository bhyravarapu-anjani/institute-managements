import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  public formData:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      gender:new FormControl(),
      mobile:new FormControl(),
      email:new FormControl(),
      batch:new FormControl(),
      address:new FormGroup(
        {
          city:new FormControl(),
          mandal:new FormControl(),
          district:new FormControl(),
          state:new FormControl(),
          pincode:new FormControl()
        }
      ),
      eduactions:new FormArray([]),
      

    }
  )

  get educationsFormArray(){
    return this.formData.get('eduactions')as FormArray
  }
 add(){
  this.educationsFormArray.push(
    new FormGroup(
      {
        qualification:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl()
      }
    )
  )
  
 }
 delete(i:number){
  this.educationsFormArray.removeAt(i)
 }

}

