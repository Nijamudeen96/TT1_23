import { useState } from 'react'
import TransactionPage from '../Pages/TransactionPage'

const AddTransaction = ({ onAdd }) => {
    const [date, setDate] = useState('')
    const [amount, setTransactionAmount] = useState('')
    const [comment, setComment] = useState('')
    const [accid, setAccountID] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
        

        onAdd({ date, amount, comment, accid })
        
        setDate('')
        setTransactionAmount('')
        setComment('')
    }

  return (
    <form className="add-form" onSubmit={onSubmit} >
        <div className="form-control">
            <label>AccountID</label>
            <input type='text' 
            placeholder='Add Comment' 
            value={accid} onChange={(e) => setAccountID(e.target.value)} />
        </div>

        <div className="form-control">
            <label>ReceiverID</label>
            <input type='text' 
            placeholder='Add Comment' 
            value={accid} onChange={(e) => setAccountID(e.target.value)} />
        </div>

        <div className="form-control">
            <label>Date</label>
            <input type='text' 
            placeholder='Add Comment' 
            value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="form-control">
            <label>Amount</label>
            <input type='text' 
            placeholder='Add Amount' 
            value={amount} onChange={(e) => setTransactionAmount(e.target.value)} />
        </div>

        <div className="form-control">
            <label>Comment</label>
            <input type='text' 
            placeholder='Add Comment' 
            value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>


        <input 
            type='submit' 
            value='Save Transaction' 
            className="btn btn-block"/>
        
    </form>
  )
}

export default AddTransaction