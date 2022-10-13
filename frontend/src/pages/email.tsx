import React from 'react'
import MailTable from '../components/MailTable'
import SendMailToAllCard from '../components/SendMailToAllCard'

function Email() {
  return (
    <div>
        <MailTable/>
       <div className='mt-5'>
       <SendMailToAllCard/>
       </div>
    </div>
  )
}

export default Email