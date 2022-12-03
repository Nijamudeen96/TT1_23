import jwt
import os
import db
import json
from dotenv import load_dotenv

load_dotenv()

def login(username, password):
    userid = db.login_user(username, password)
    
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
    decoded_username = jwt.decode(msg, os.environ.get('JWT_SECRET'), algorithms="HS256")
    return db.is_user(decoded_username)