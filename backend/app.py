from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow frontend to call

# SQLite DB config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    username = db.Column(db.String(50), unique=True)
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(50))
    phone = db.Column(db.String(15))

# Create DB tables
with app.app_context():
    db.create_all()

# ----------------- API Routes -----------------

# Register new user
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    name = data.get('name')
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    phone = data.get('phone')

    # Check if user exists
    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already registered'}), 400
    if User.query.filter_by(username=username).first():
        return jsonify({'message': 'Username already taken'}), 400

    new_user = User(name=name, username=username, email=email, password=password, phone=phone)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

# Login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email, password=password).first()
    if not user:
        return jsonify({'message': 'Invalid credentials'}), 401

    return jsonify({'message': 'Login successful', 'username': user.username})

# Test route
@app.route('/')
def home():
    return "Flask backend running!"

# Run server
if __name__ == '__main__':
    app.run(debug=True)
