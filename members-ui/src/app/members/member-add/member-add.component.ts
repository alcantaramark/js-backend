import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.scss']
})
export class MemberAddComponent implements OnInit {
  memberPersonalDetails: FormGroup = <FormGroup>{};
  memberSKills: FormGroup = <FormGroup>{};

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.memberPersonalDetails = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      jobTitle: ['', Validators.required],
      profilePicture: ['', Validators.required],
      profileDescription: ['']
    });

    this.memberSKills = this.formBuilder.group({
      skills: new FormArray([new FormControl()])
    });
  }

}
