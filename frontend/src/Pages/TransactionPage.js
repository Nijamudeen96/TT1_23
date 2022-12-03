// import NavBar from "../components/NavBar"
import AddTransaction from "../TransactionComponents/AddTransaction"
import Transactions from "../TransactionComponents/Transactions"
import Header from '../TransactionComponents/Header'
import Button from '../TransactionComponents/Button'

const TransactionPage = () => {
  return (
    <>
      {/* <NavBar /> */}

      < AddTransaction />
      < Button text={'Add Transactions'} /> 
      <Transactions />
      
    </>
  )
}

export default TransactionPage