import mysql.connector as t
from flask import Flask, render_template, request, redirect, url_for, jsonify

app = Flask(__name__,)
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['STATIC_FOLDER'] = 'static'

def check_credentials_seller(username, password):
    try:
        mydb = t.connect(password="12345", user='root', host="localhost", database='artisanconnect')
        cu = mydb.cursor()
        cu.execute(f"SELECT * FROM seller WHERE New_Username = '{username}' AND password = '{password}'")
        result = cu.fetchone()
        mydb.close()
        if result:
            return True
        else:
            return False
    except t.Error as error:
        print("Error while connecting to MySQL", error)
        return False 
def check_credentials_user(username, password):
    try:
        mydb = t.connect(password="12345", user='root', host="localhost", database='artisanconnect')
        cu = mydb.cursor()
        cu.execute(f"SELECT * FROM User WHERE username = '{username}' AND password = '{password}'")
        result = cu.fetchone()
        mydb.close()
        if result:
            return True
        else:
            return False
    except t.Error as error:
        print("Error while connecting to MySQL", error)
        return False

@app.route("/")
def index():
    return render_template('art.html')

@app.route("/s_l")
def sl():
    error_message = request.args.get('error_message')
    return render_template('seller-login.html', error_message=error_message)


@app.route("/login", methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    if check_credentials_seller(username, password):
        return redirect(url_for('next_page'))  # Replace 'next_page' with your route for the next HTML page
    else:
        return redirect(url_for('sl', error_message='Invalid username or password'))
@app.route("/u_l")
def ul():
    error_message = request.args.get('error_message')
    return render_template('user-login.html', error_message=error_message)
@app.route("/logins", methods=['POST'])
def login_s():
    username = request.form['username']
    password = request.form['password']

    if check_credentials_user(username, password):
        return redirect(url_for('next_page'))  # Replace 'next_page' with your route for the next HTML page
    else:
        return redirect(url_for('ul', error_message='Invalid username or password'))

@app.route("/next_page")
def next_page():
    return render_template('explore.html')
@app.route("/signupu")
def signup_page2():
    return render_template('signup.html')
@app.route("/signup")
def signup_page():
    return render_template('seller-signup.html')
@app.route("/uprocess", methods=['POST'])
def uprocess_signup():
    text1 = request.form['name']
    text2 = request.form['email']
    text3 = request.form['username']
    text4 = request.form['password']
    text5 = request.form['address']
    text6 = request.form['phone']
    mydb = t.connect(password="12345", user='root', host="localhost", database='artisanconnect')
    cu = mydb.cursor()
    cu.execute(f"INSERT INTO user values ('{text1}','{text2}','{text3}','{text4}','{text5}','{text6}')")
    mydb.commit()
    mydb.close()

    return redirect(url_for('next_page'))

@app.route("/process", methods=['POST'])
def process_signup():
    text1 = request.form['new-username']
    text2 = request.form['new-password']
    text3 = request.form['full-name']
    text4 = request.form['address']
    text5 = request.form['bank-account']
    text6 = request.form['product-details']
    text7 = request.form['email']
    
    mydb = t.connect(password="12345", user='root', host="localhost", database='artisanconnect')
    cu = mydb.cursor()
    cu.execute(f"INSERT INTO seller values ('{text1}','{text2}','{text3}','{text7}','{text4}','{text6}','{text5}')")
    mydb.commit()
    mydb.close()

    return redirect(url_for('next_page'))

if __name__ == '__main__':
    app.run(debug=True)
 
