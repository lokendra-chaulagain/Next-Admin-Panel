import React from "react";
import { fetchAllEmployee } from "../../../redux/employee/employeeActions";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import SinglePersonEmailSendModal from "./SinglePersonEmailSendModal";

const MailTable = () => {
  const dispatch = useAppDispatch();
  const { employee } = useAppSelector((state: any) => state.employeeStore);

  React.useEffect(() => {
    dispatch(fetchAllEmployee());
  }, [dispatch]);

  return (
    <div className="customCard ">
      <table className="table ">
        <thead>
          <tr className="customPrimaryTxtColor">
            <th scope="col">S.N</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employee &&
            employee.map((employee: any, index: any) => (
              <tr key={index} className="customPrimaryTxtColor custom_table_hover">
                <th scope="row">{index + 1}</th>
                <td>{employee.fullName}</td>
                <td>{employee.email}</td>
                <td>
                  <SinglePersonEmailSendModal />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MailTable;
