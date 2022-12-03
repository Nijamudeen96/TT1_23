# include all db logic here
import mysql.connector 

mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password=""
        )

print(str(mydb))
print("connectedddddd")

def login_user(username, password):
    if mydb:
        mycursor = mydb.cursor()
        
        queryStr = "SELECT * FROM bank.user where username = '" + username + "' and password = '" + password +"'"
        mycursor.execute(queryStr)
        myresult = mycursor.fetchall()
        return myresult[0][0]
    else:
        return "cannot find"

def is_user(username):
    if mydb:
        mycursor = mydb.cursor()
        
        queryStr = "SELECT count(*) FROM bank.user where username = '" + username + "'"
        mycursor.execute(queryStr)
        myresult = mycursor.fetchall()
        if myresult >= 1:
            return True
        else:
            return False
    else:
        return False