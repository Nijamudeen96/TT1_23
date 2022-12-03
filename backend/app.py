from flask import Flask, request
import auth

app = Flask(__name__)

@app.route('/login/v1')
def login():
   username =  request.get_json()['username']
   password =  request.get_json()['password']
   return auth.login(username, password)

# @app.route('/decode')
# def decode():
#    auth.is_valid_auth(request.headers.get('Authorization'))
#    return auth.is_valid_auth(auth_token)

@app.route('/user/overview')
def user_overview():
   return{}

if __name__ == '__main__':
   app.run()