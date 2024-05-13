from flask import Flask, jsonify, request
from flask_cors import CORS


# app instance
app = Flask(__name__)
CORS(app)

@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'message': "Hello!"
    })

if __name__ == "__main__":
    app.run(port=8080) #remove debug in production