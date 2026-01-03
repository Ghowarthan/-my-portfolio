
// queries/getSkills.ts
import { Skill } from '../types';
import { skillsData } from '../staticData';

export async function getSkills(): Promise<Skill[]> {
  return Promise.resolve(skillsData);
}
