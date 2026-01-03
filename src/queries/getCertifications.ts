
// queries/getCertifications.ts
import { Certification } from '../types';
import { certificationsData } from '../staticData';

export async function getCertifications(): Promise<Certification[]> {
  return Promise.resolve(certificationsData);
}
