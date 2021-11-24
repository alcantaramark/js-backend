import { SkillInterface } from './../skills/skill-interface';
export interface MemberInterface {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    jobTitle: string,
    profileDescription: string,
    profilePicture: string,
    skills: SkillInterface[]
}
