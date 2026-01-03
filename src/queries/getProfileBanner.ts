
// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';
import { profileBannerData } from '../staticData';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return Promise.resolve(profileBannerData);
}
