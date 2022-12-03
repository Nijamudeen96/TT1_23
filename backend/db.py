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
            "SELECT UserId, Username, Firstname, Lastname, Email, Address, OptIntoPhyStatements FROM users WHERE userid = %s",
            (userid,),
        )
        return mycursor.fetchone()
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