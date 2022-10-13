import React from "react";
import EmployeeEducationCard from "../../@mui/EmployeeEducationCard";
import EmployeeEmergencyContactCard from "../../@mui/EmployeeEmergencyContactCard";
import EmployeeExperienceCard from "../../@mui/EmployeeExperienceCard";
import EmployeeInfoCard from "../../@mui/EmployeeInfoCard";
import EmployeePersonalInformationCard from "../../@mui/EmployeePersonalInformationCard";

const EmployeeId = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <EmployeeInfoCard />
        </div>
        <div className="col">
          <EmployeePersonalInformationCard />
        </div>
      </div>

      <EmployeeEducationCard />
      <EmployeeEmergencyContactCard />
      <EmployeeExperienceCard />
    </div>
  );
};

export default EmployeeId;
