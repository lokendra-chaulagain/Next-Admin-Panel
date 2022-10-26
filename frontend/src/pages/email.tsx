import React from "react";
import MailTable from "../components/email/MailTable";
import SendMailToAllCard from "../components/email/SendMailToAllCard";

function Email() {
  return (
    <>
      <MailTable />
      <div className="mt-5">
        <SendMailToAllCard />
      </div>
    </>
  );
}

export default Email;
