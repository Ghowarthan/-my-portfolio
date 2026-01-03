
// queries/getTimeline.ts
import { TimelineItem } from '../types';
import { timelineData } from '../staticData';

export async function getTimeline(): Promise<TimelineItem[]> {
  return Promise.resolve(timelineData);
}
