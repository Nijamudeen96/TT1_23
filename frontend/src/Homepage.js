import PropTypes from 'prop-types'

const Homepage = ({title, summary}) => {
  return (
    <header>
        <h1>{title}</h1>  
        <h2>Welcome, {summary.Firstname}  {summary.Lastname}!</h2>      
    </header>
  )
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
            "AcccountBalance": 70200.71
        },
        {
            "AccountID": 958945214,
            "UserID": 1,
            "AccountType": "Current",
            "AcccountBalance": 99720.46
        }
    ]
}

Homepage.propTypes = {
    title: PropTypes.string.isRequired, 
}

export default Homepage