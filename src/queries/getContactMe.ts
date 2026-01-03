
// queries/getContactMe.ts
import { ContactMe } from '../types';
import { contactMeData } from '../staticData';

export async function getContactMe(): Promise<ContactMe> {
  return Promise.resolve(contactMeData);
}
