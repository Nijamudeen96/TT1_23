from datetime import datetime
import mysql.connector

mydb = mysql.connector.connect(host="localhost", user="root", password="")

print(str(mydb))
print("connectedddddd")


def login_user(username, password):
    try:
        mycursor = mydb.cursor()
        queryStr = (
            "SELECT * FROM bank.user where username = '"
            + username
            + "' and password = '"
            + password
            + "'"
        )
        mycursor.execute(queryStr)
        myresult = mycursor.fetchall()
        return myresult[0][0]
    except Exception as e:
        return {"error": str(e)}


def is_user(username):
    try:
        mycursor = mydb.cursor()
        queryStr = "SELECT count(*) FROM bank.user where username = '" + username + "'"
        mycursor.execute(queryStr)
        myresult = mycursor.fetchall()
        if myresult >= 1:
            return True
        else:
            return False
    except Exception as e:
        return {"error": str(e)}


def get_user(userid: str) -> dict[str, str]:
    try:
        mycursor = mydb.cursor()
        mycursor.execute(
            "SELECT UserId, Username, Firstname, Lastname, Email, Address, OptIntoPhyStatements FROM bank.user WHERE userid = %s",
            (userid,),
        )
        return {colname: value for colname, value
            in zip(["UserId", "Username", "Firstname", "Lastname", "Email", "Address", "OptIntoPhyStatements"], mycursor.fetchone())}
    except Exception as e:
        return {"error": str(e)}


def update_user(userid: str, email: str, address: str) -> None:
    try:
        mycursor = mydb.cursor()
        mycursor.execute(
            "UPDATE users SET email = %s, address = %s WHERE userid = %s",
            (email, address, userid),
        )
        mydb.commit()
    except Exception as e:
        return {"error": str(e)}


def get_bank_info(userid: str) -> dict[str, str]:
    try:
        mycursor = mydb.cursor()
        mycursor.execute(
            "SELECT AccountId, AccountType, AccountBalance FROM bank WHERE userid = %s",
            (userid,),
        )
        return mycursor.fetchone()
    except Exception as e:
        return {"error": str(e)}

def insert_transaction(AccountID: str, ReceivingAccountID: str, Date: datetime, TransactionAmount: str, Comment: str) -> None:
    try:
        mycursor = mydb.cursor()
        mycursor.execute(
            "insert into bank.scheduledtransactions (AccountID, ReceivingAccountID, Date, TransactionAmount, Comment) values %s, %s, %s, %s, %s",
            (AccountID, ReceivingAccountID, Date, TransactionAmount, Comment),
        )
        mydb.commit()
    except Exception as e:
        return {"error": str(e)}

def delete_transaction(TransactionID: str) -> None:
    try:
        mycursor = mydb.cursor()
        mycursor.execute(
            "delete from bank.scheduledtransactions where TransactionID = %s",
            (TransactionID),
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