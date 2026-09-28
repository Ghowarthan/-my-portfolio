import React, { useEffect, useState } from 'react';
import './WorkPermit.css';
import { getWorkPermit } from '../queries/getWorkPermit';
import { WorkPermit as IWorkPermit } from '../types';
import { FaPassport, FaCheckCircle, FaBriefcase, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

const WorkPermit: React.FC = () => {
  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(null);

  useEffect(() => {
    async function fetchWorkPermitData() {
      const data = await getWorkPermit();
      setWorkPermitData(data);
    }
    fetchWorkPermitData();
  }, []);

  if (!workPermitData) {
    return <div style={{ color: '#fff', textAlign: 'center', marginTop: '100px' }}>Loading...</div>;
  }

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <div className="work-permit-header">
          <div className="visa-badge-icon">
            <FaPassport />
          </div>
          <h2 className="work-permit-headline">Visa & Work Authorization</h2>
          <span className="visa-status-pill">{workPermitData.visaStatus}</span>
        </div>

        <div className="work-permit-details">
          <div className="work-permit-row">
            <div className="row-icon"><FaGraduationCap /></div>
            <div className="row-content">
              <h4>Current Academic Standing</h4>
              <p>M.S. in Robotics and Autonomous Systems (Systems Engineering) at <strong>Arizona State University</strong> (Expected Graduation: May 2028).</p>
            </div>
          </div>

          <div className="work-permit-row highlight-row">
            <div className="row-icon"><FaCheckCircle /></div>
            <div className="row-content">
              <h4>Internship Work Authorization (CPT)</h4>
              <p>Eligible for full-time <strong>Curricular Practical Training (CPT)</strong> for Summer 2027 internships. <strong>No employer visa sponsorship required.</strong></p>
            </div>
          </div>

          <div className="work-permit-row highlight-row">
            <div className="row-icon"><FaBriefcase /></div>
            <div className="row-content">
              <h4>Post-Graduation Work Authorization (STEM OPT)</h4>
              <p>Eligible for up to <strong>3 years (36 months) of STEM OPT</strong> work authorization in the United States upon graduation without requiring immediate H-1B sponsorship.</p>
            </div>
          </div>

          <div className="work-permit-row">
            <div className="row-icon"><FaMapMarkerAlt /></div>
            <div className="row-content">
              <h4>Availability & Location</h4>
              <p>Based in Tempe, Arizona. Open to Summer 2027 relocation nationwide across the United States.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPermit;
