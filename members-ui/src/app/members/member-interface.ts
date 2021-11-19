import { SkillInterface } from './../skills/skill-interface';
export interface MemberInterface {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    jobTitle: string,
    skills: SkillInterface[]
}
