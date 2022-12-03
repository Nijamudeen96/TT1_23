import { useState, useEffect } from "react"
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Button from './Button'

const TransactionDetails = () => {
    const [loading, setLoading] = useState(true)
    const [transaction, setTransaction] = useState({})
    //const [error, setError] = useState(null)

    const params = useParams()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    useEffect(() => {
        const fetchTransaction = () => {
            const res = fetch(`http://localhost:5000/transactions/${params.TransactionID}`)
            const data = res.json()

            if(res.status === 404) {
                navigate('/')
            }

            setTransaction(data)
            setLoading(false)
        }

        fetchTransaction()
    })


  return loading ? (
    <h3>Loading..</h3>
  ) : (
    <div>
        <p>{pathname}</p>
        <h3>Transaction: {transaction.AccountID}</h3>
        <p>Date: {transaction.Date}</p>
        <p>Amount: {transaction.TransactionAmount}</p>
        <p>Comment: {transaction.Comment}</p>
        <Button 
            onClick={() => {
            navigate(-1)
        }} text='Go back' />
    </div>
  )
}

export default TransactionDetails