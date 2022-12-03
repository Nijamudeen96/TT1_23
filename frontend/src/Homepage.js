import PropTypes from 'prop-types'
import React from 'react'
import Accountitem from './Accountitem';

const Homepage = ({title, summary, useroverview}) => {
    if (useroverview.length === 0) {
        return <h2 className=''>Found No Account.</h2>;
      }//Conditional value of account
    return ( <ul>
        <h1>{title}</h1>  
        <h2>Welcome, {summary.Firstname}  {summary.Lastname}!</h2>
        
        <table>
            <tr>
                <th>Account ID</th>
                <th>Account Type</th>
                <th>Balance</th>
            </tr>
        {useroverview.map((element) => (
            <Accountitem AccountID={element.AccountID} AccountType={element.AccountType} AccountBalance={element.AccountBalance} />
        ))}
        </table>
    </ul>
  );
}

Homepage.defaultProps = {
    title: 'Homepage',
    summary:
        {
            "UserID": 1,
            "Username": "ExecutiveDBS",
            "Password": "DBSBestBank2022",
            "Firstname": "Tom",
            "Lastname": "Lim",
            "Email": "TomLim@easymail.com",
            "Address": "Block 123 Serangoon Garden #10-129",
            "OptIntoPhyStatements": 0
        },
    useroverview:
    [
        {
            "AccountID": 621156213,
            "UserID": 1,
            "AccountType": "Saving",
            "AccountBalance": 70200.71
        },
        {
            "AccountID": 958945214,
            "UserID": 1,
            "AccountType": "Current",
            "AccountBalance": 99720.46
        }
    ]
}

Homepage.propTypes = {
    title: PropTypes.string.isRequired, 
}

export default Homepage