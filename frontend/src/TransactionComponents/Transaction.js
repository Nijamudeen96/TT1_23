import { AiFillDelete } from 'react-icons/ai'
// import { Link } from 'react-router-dom'

const Transaction = ({ transaction, onDelete}) => {
  return (
    <div className='transaction' >
      <>
        
        <h3>
            Transaction No.: {transaction.TransactionID} 
            <AiFillDelete style={{ color: 'red', cursor: 'pointer'}} 
                     onClick={() => 
                     onDelete(transaction.TransactionID)} />
        </h3>
        <p>Transaction Account:{transaction.TransactionAmount}</p>
        <p>Receiving Account: {transaction.ReceivingAccountID}</p>
        <p>Date: {transaction.Date}</p>
        <p>Comment: {transaction.Comment}</p>
        {/* <p><Link to={`/transaction/${transaction.TransactionID}`}>
          View Details 
        </Link></p> */}
        </>
    </div>
  )
}

export default Transaction