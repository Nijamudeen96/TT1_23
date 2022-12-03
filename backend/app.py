from flask import Flask, request
import auth

app = Flask(__name__)

@app.route('/')
def hello_world():
   return 'Hello World'

@app.route('/login')
def login():
   username =  request.get_json()['username']
   password =  request.get_json()['password']
   return auth.login(username, password)

@app.route('/decode')
def decode():
   auth_token = request.headers.get('Authorization')
   return auth.is_valid_auth(auth_token)

if __name__ == '__main__':
   app.run()