import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { CommonService } from 'src/app/shared/service/common/common.service';
import { SkillService } from 'src/app/skills/service/skill.service';
import { SkillInterface } from 'src/app/skills/skill-interface';
import { MemberInterface } from '../member-interface';
import { MemberService } from '../service/member.service';


@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.scss']
})
export class MemberAddComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper = <MatStepper>{};
  memberPersonalDetailsForm: FormGroup = <FormGroup>{};
  newMember: MemberInterface = <MemberInterface>{};

  constructor(private formBuilder: FormBuilder
    , private skillService: SkillService
    , private memberService: MemberService
    , private commonService: CommonService
    , private router: Router) {

      
    }

  ngOnInit(): void {
    this.memberPersonalDetailsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
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

  skillsNext(){
    if(this.skills.controls.filter((item) => item.value.selected).length == 0)
      this.commonService.displayMessage(`Please select at least 1 skill`, `Dismiss`);
    else
      this.stepper.next();
  }

  saveMember(){
    let newMemberSkills: SkillInterface[] = new Array();

    if(this.memberPersonalDetailsForm.valid){
      this.newMember.firstName = this.memberPersonalDetailsForm.controls['firstName'].value;
      this.newMember.lastName = this.memberPersonalDetailsForm.controls['lastName'].value;
      this.newMember.email = this.memberPersonalDetailsForm.controls['email'].value;
      this.newMember.jobTitle = this.memberPersonalDetailsForm.controls['jobTitle'].value;
      this.newMember.profilePicture = this.memberPersonalDetailsForm.controls['profilePicture'].value;
      this.newMember.profileDescription = this.memberPersonalDetailsForm.controls['profileDescription'].value;
    }

    this.skills.controls.forEach(item => {
      let newMemberSkill = <SkillInterface>{};
      if(item.value.selected){
        newMemberSkill._id = item.value.id;
        newMemberSkill.name = item.value.name;
        newMemberSkills.push(newMemberSkill);
      }
    })

    this.newMember.skills = newMemberSkills;
    console.log("New Member", this.newMember);

    
    this.memberService.saveNewMember(this.newMember).subscribe({
      next: (newMember: MemberInterface) => 
        this.commonService.displayMessage(`${ newMember.firstName + ' ' + newMember.lastName} successfull saved!`, "Dismiss", () => this.router.navigate(['member-list'])),
      error: (e) => this.commonService.displayMessage(`There was an error saving new member`, `Dismiss`)
    })
  }


  get skills(): FormArray{
    return this.memberPersonalDetailsForm.get('skills') as FormArray;
  }

}
