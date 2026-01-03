import React, { useEffect, useState } from 'react';
import './WorkPermit.css';
import { getWorkPermit } from '../queries/getWorkPermit';
import { WorkPermit as IWorkPermit } from '../types';
const WorkPermit: React.FC = () => {

  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(null);
  useEffect(() => {
    async function fetchWorkPermitData() {
      const data = await getWorkPermit();
      setWorkPermitData(data);
    }
    fetchWorkPermitData();
  }, []);

  if (!workPermitData) return <div>Loading...</div>;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Visa Status</h2>
        <p className="work-permit-summary">
          Prospective <strong>F-1 Student Visa 🇺🇸</strong> holder, eligible for on-campus employment and <strong>Co-op / CPT</strong> opportunities as part of the academic program.
          <br /><br />
          Highly motivated to gain hands-on industry and research experience while pursuing my studies. 🌟
        </p>
      </div>
    </div>
  );
};

export default WorkPermit;
