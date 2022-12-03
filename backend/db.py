from datetime import datetime
import mysql.connector

mydb = mysql.connector.connect(host="localhost", user="root", password="")

print(str(mydb))
print("connectedddddd")


def login_user(username, password):
    try:
        mycursor = mydb.cursor()
        mycursor.execute(
            "SELECT * FROM Bank.User WHERE Username = %s AND Password = %s",
            (username, password),
        )
        myresult = mycursor.fetchall()
        return myresult[0][0]
    except Exception as e:
        return {"error": str(e)}


def is_user(username):
    try:
        mycursor = mydb.cursor()
        mycursor.execute(
            "SELECT COUNT(*) FROM Bank.User WHERE Username = %s", (username,)
        )
        return mycursor.fetchone()[0] > 0
    except Exception as e:
        return {"error": str(e)}


def get_user(userid: str) -> dict[str, str]:
    try:
        mycursor = mydb.cursor()
        mycursor.execute(
            "SELECT UserId, Username, Firstname, Lastname, Email, Address, OptIntoPhyStatements FROM Bank.User WHERE UserId = %s",
            (userid,),
        )
        return {k: v for k, v in zip(mycursor.column_names, mycursor.fetchone())}
    except Exception as e:
        return {"error": str(e)}


def update_user(userid: str, email: str, address: str) -> None:
    try:
        mycursor = mydb.cursor()
        mycursor.execute(
            "UPDATE Bank.user SET Email = %s, Address = %s WHERE UserId = %s",
            (email, address, userid),
        )
        mydb.commit()
    except Exception as e:
        return {"error": str(e)}


def get_bank_info(userid: str) -> dict[str, str]:
    try:
        mycursor = mydb.cursor()
        mycursor.execute(
            "SELECT AccountId, AccountType, AccountBalance FROM Bank.BankAccount WHERE UserId = %s",
            (userid,),
        )
        return {k: v for k, v in zip(mycursor.column_names, mycursor.fetchone())}
    except Exception as e:
        return {"error": str(e)}


def insert_transaction(
    AccountID: str,
    ReceivingAccountID: str,
    Date: datetime,
    TransactionAmount: str,
    Comment: str,
) -> None:
    try:
        mycursor = mydb.cursor()
        mycursor.execute(
            "INSERT INTO Bank.ScheduledTransactions (AccountID, ReceivingAccountID, Date, TransactionAmount, Comment) VALUES %s, %s, %s, %s, %s",
            (AccountID, ReceivingAccountID, Date, TransactionAmount, Comment),
        )
        mydb.commit()
    except Exception as e:
        return {"error": str(e)}


def delete_transaction(TransactionID: str) -> None:
    try:
        mycursor = mydb.cursor()
        mycursor.execute(
            "DELETE FROM Bank.ScheduledTransactions WHERE TransactionID = %s",
            (TransactionID,),
        )
        mydb.commit()
    except Exception as e:
        return {"error": str(e)}

def get_transaction_details(userid: str, AccountID: str):
    try:
        mycursor = mydb.cursor()
        mycursor.execute(
            """
            select * from bank.scheduledtransactions 
            join (select Bank.BankAccount.UserID, BankAccount.AccountID from Bank.BankAccount) as t1
            on t1.AccountID = bank.scheduledtransactions.AccountID
            where userid = %s
            """(userid)
        )
        return mycursor.fetchall()
    except Exception as e:
        return {"error": str(e)}
