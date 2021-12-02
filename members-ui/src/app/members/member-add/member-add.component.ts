import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { mergeMap } from 'rxjs';
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
  newMember: MemberInterface = <MemberInterface>{};

  constructor(private formBuilder: FormBuilder
    , private skillService: SkillService) {

      
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
    let controls = this.memberPersonalDetailsForm.controls['skills'] as FormArray;
    controls.clear();
    
    setTimeout(() => {
      this.skillService.getSkills().subscribe({ next: (skills: SkillInterface[]) => {
        skills.forEach(obj => {
          controls.push(this.formBuilder.group({
            id: [obj._id],
            name: [obj.name],
            selected: [false]
          }))
        });
      }});
    })
  }

  saveMemberTemp(){
    if(this.memberPersonalDetailsForm.valid){
      this.newMember.firstName = this.memberPersonalDetailsForm.controls['firstName'].value;
      this.newMember.lastName = this.memberPersonalDetailsForm.controls['lastName'].value;
      this.newMember.email = this.memberPersonalDetailsForm.controls['email'].value;
      this.newMember.jobTitle = this.memberPersonalDetailsForm.controls['jobTitle'].value;
      this.newMember.profilePicture = this.memberPersonalDetailsForm.controls['profilePicture'].value;
      this.newMember.profileDescription = this.memberPersonalDetailsForm.controls['profileDescription'].value;
    }
  }

  saveSkillsTemp(){
    let newMemberSkills: SkillInterface[] = new Array();
    
    this.skills.controls.forEach(item => {
      let newMemberSkill = <SkillInterface>{};
      if(item.value.selected){
        newMemberSkill._id = item.value.id;
        newMemberSkill.name = item.value.name;
        newMemberSkills.push(newMemberSkill);
      }
    })

    this.newMember.skills = newMemberSkills;
  }
  
  saveMember(){
    console.log("New Member", this.newMember);
  }


  get skills(): FormArray{
    return this.memberPersonalDetailsForm.get('skills') as FormArray;
  }

}
