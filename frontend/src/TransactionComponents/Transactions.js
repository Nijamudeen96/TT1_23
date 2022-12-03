// import Transaction from './Transaction'
// import Button from './Button'
// import { useState } from 'react'
// import Header from './Header'
// import AddTransaction from './AddTransaction'



// const Transactions = ({ onDelete, onAdd, showonAdd }) => {
//     const[showAddTransaction, setShowAddTransaction] = useState(false)
//     const [transactions, setTransaction] = useState([
//         {
//             "TransactionID": 1,
//             "AccountID": 621156213,
//             "ReceivingAccountID": 339657462,
//             "Date": "2022-11-08T04:00:00.000Z",
//             "TransactionAmount": 500.00,
//             "Comment": "Monthly Pocket Money"
//         },
//         {
//             "TransactionID": 2,
//             "AccountID": 958945214,
//             "ReceivingAccountID": 621156213,
//             "Date": "2022-11-08T04:00:00.000Z",
//             "TransactionAmount": 8996.00,
//             "Comment": "School Fees"
//         },
//         {
//             "TransactionID": 3,
//             "AccountID": 828120424,
//             "ReceivingAccountID": 322798030,
//             "Date": "2022-11-25T04:00:00.000Z",
//             "TransactionAmount": 3000.00,
//             "Comment": "Driving Centre Top-up"
//         },
//         {
//             "TransactionID": 4,
//             "AccountID": 353677039,
//             "ReceivingAccountID": 785703027,
//             "Date": "2022-11-17T06:21:00.000Z",
//             "TransactionAmount": 255.00,
//             "Comment": "Tuition Fee Payment"
//         },
//         {
//             "TransactionID": 5,
//             "AccountID": 259555772,
//             "ReceivingAccountID": 828120424,
//             "Date": "2022-11-08T04:00:00.000Z",
//             "TransactionAmount": 32.00,
//             "Comment": "Books Payment"
//         }
//     ])

//     //Delete transaction
//     const deleteTransaction = (AccountID) => {
//     //console.log('delete',id);
//     setTransaction(transactions.filter((transaction) => transaction.AccountID !== AccountID ))
//   }

//    //Add Transaction
//    const addTransaction = (transaction) => {
//     //console.log(transaction);
// 	const TransactionID = Math.floor(Math.random() * 10000) + 1
	
// 	//console.log(TransactionID);

// 	const newTransaction = { TransactionID, ...transaction }
// 	setTransaction([...transactions, newTransaction])

//   }


//   return (
// 	<>
//         {/* <Header onAdd={() => setShowAddTransaction(!showAddTransaction)} 
// 		showAdd={showAddTransaction} />
// 		{showAddTransaction && <AddTransaction onAdd={AddTransaction} />} */}
        
//         {transactions.map((transaction) => (<Transaction transaction={transaction} onDelete={onDelete} onAdd={onDelete} />
//         ))}
//     </>
//   )
// }

// export default Transactions