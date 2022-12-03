import jwt
import os
import db
import json
from dotenv import load_dotenv

load_dotenv()

def login(username, password):
    userid = 1
    # check database
    # userid = db.login_user(username, password)
    
    if int(userid):
        auth_token = jwt.encode({"username": username}, os.environ.get('JWT_SECRET'), algorithm="HS256")
        result = {
            "user_id" : 1,
            "username" : username,
            "auth_token" : auth_token
        }
    else:
        result = {
            "user_id" : -1
        }
    return json.dumps(result)
    
    


def is_valid_auth(msg):
    print(msg)
    print(type(msg))
    decoded_username = jwt.decode(msg, os.environ.get('JWT_SECRET'), algorithms="HS256")
    # check if username in db

    return json.dumps({
        "username" : decoded_username['username']
    })