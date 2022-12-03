import { AiOutlineEdit } from 'react-icons/ai'
// import { Link } from 'react-router-dom'

const Transaction = ({ transaction, onAdd}) => {
  return (
    <div className='transaction' >
      <>
        
        <h3>
            {transaction.TransactionID} 
            {transaction.TransactionAmount} 
            <AiOutlineEdit style={{ color: 'red', cursor: 'pointer'}} 
                     onClick={() => 
                     onAdd(transaction.TransactionID)} />
        </h3>
        <p>{transaction.Date}</p>
        <p>{transaction.Comment}</p>
        {/* <p><Link to={`/transaction/${transaction.TransactionID}`}>
          View Details 
        </Link></p> */}
        </>
    </div>
  )
}

export default Transaction