import React from "react";

import SinglePersonEmailSendModal from "./SinglePersonEmailSendModal";

const MailTable = () => {
  return (
    <div className="customCard ">
      <table className="table ">
        <thead>
          <tr className="customPrimaryTxtColor">
            <th scope="col">S.N</th>
            <th scope="col">Full Name</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="customPrimaryTxtColor custom_table_hover">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <SinglePersonEmailSendModal />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MailTable;
