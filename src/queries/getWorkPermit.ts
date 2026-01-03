
// queries/getWorkPermit.ts
import { WorkPermit } from '../types';
import { workPermitData } from '../staticData';

export async function getWorkPermit(): Promise<WorkPermit> {
  return Promise.resolve(workPermitData);
}
