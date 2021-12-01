import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SkillService } from 'src/app/skills/service/skill.service';
import { SkillInterface } from 'src/app/skills/skill-interface';
import { MemberInterface } from '../member-interface';


@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.scss']
})
export class MemberAddComponent implements OnInit {
  memberPersonalDetailsForm: FormGroup = <FormGroup>{};
  availableSkills: any[] = new Array();

  constructor(private formBuilder: FormBuilder
    , private skillService: SkillService) { 
      this.skillService.getSkills().subscribe(res => res.map((obj: SkillInterface) => {
        this.availableSkills.push({ _id:  obj._id, name: obj.name, checked: false})
      }));
    }

  ngOnInit(): void {
    this.memberPersonalDetailsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      jobTitle: ['', Validators.required],
      profilePicture: ['', Validators.required],
      profileDescription: [''],
      skills: this.formBuilder.array([])
    });
}

  get skills(): FormArray{
    return this.memberPersonalDetailsForm.get('skills') as FormArray;
  }

  saveMember(){
    let newMember: MemberInterface = <MemberInterface>{};
    let newMemberSkills: string[] = new Array();

    if(this.memberPersonalDetailsForm.valid){
      newMember.firstName = this.memberPersonalDetailsForm.controls['firstName'].value;
      newMember.lastName = this.memberPersonalDetailsForm.controls['lastName'].value;
      newMember.email = this.memberPersonalDetailsForm.controls['email'].value;
      newMember.jobTitle = this.memberPersonalDetailsForm.controls['jobTitle'].value;
      newMember.profilePicture = this.memberPersonalDetailsForm.controls['profilePicture'].value;
      newMember.profileDescription = this.memberPersonalDetailsForm.controls['profileDescription'].value;

      console.log('skills form', this.availableSkills);
    }
  }

}
