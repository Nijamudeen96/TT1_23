from flask import Flask, request
import auth
import db

app = Flask(__name__)


@app.route("/login")
def login():
    username = request.get_json()["username"]
    password = request.get_json()["password"]
    return auth.login(username, password)


@app.route("/get_user/<userid>")
def get_user(userid: str):
    if auth.is_valid_auth(request.headers.get("Authorization")):
        return db.get_user(userid)
    else:
        return {"error": "Not authorized"}


@app.route("/update_user/<userid>", methods=["POST"])
def update_user(userid: str):
    try:
        if auth.is_valid_auth(request.headers.get("Authorization")):
            email = request.get_json()["email"]
            address = request.get_json()["address"]
            db.update_user(userid, email, address)
            return {"success": "User updated"}
        else:
            return {"error": "Not authorized"}
    except Exception as e:
        return {"error": str(e)}


@app.route("/get_bank_info/<userid>")
def get_bank_info(userid: str):
    try:
        if auth.is_valid_auth(request.headers.get("Authorization")):
            return db.get_bank_info(userid)
        else:
            return {"error": "Not authorized"}
    except Exception as e:
        return {"error": str(e)}


@app.route("/insert_transaction", methods=["POST"])
def insert_transaction(
    AccountID: str,
    ReceivingAccountID: str,
    Date,
    TransactionAmount: str,
    Comment: str,
):
    try:
        if auth.is_valid_auth(request.headers.get("Authorization")):
            AccountID = request.get_json()["AccountID"]
            ReceivingAccountID = request.get_json()["ReceivingAccountID"]
            Date = request.get_json()["Date"]
            TransactionAmount = request.get_json()["TransactionAmount"]
            Comment = request.get_json()["Comment"]
            db.insert_transaction(
                AccountID, ReceivingAccountID, Date, TransactionAmount, Comment
            )
            return {"success": "Transaction inserted"}
        else:
            return {"error": "Not authorized"}
    except Exception as e:
        return {"error": str(e)}


@app.route("delete_transaction", methods=["POST"])
def delete_transaction(
    TransactionID: str,
):
    try:
        if auth.is_valid_auth(request.headers.get("Authorization")):
            TransactionID = request.get_json()["TransactionID"]
            db.delete_transaction(TransactionID)
            return {"success": "Transaction deleted"}
        else:
            return {"error": "Not authorized"}
    except Exception as e:
        return {"error": str(e)}


if __name__ == "__main__":
    app.run()
