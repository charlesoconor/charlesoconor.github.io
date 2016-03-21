#!/usr/bin/env python
import os
from flask import Flask, abort, request, jsonify, g, url_for, send_file, make_response
from flask.ext.httpauth import HTTPBasicAuth

# initialization
app = Flask(__name__)

@app.route('/')
def send_js():
    return send_file("index.html")

@app.route('/<path:path>')
def send_template( path ):
    return send_file( path )

if __name__ == '__main__':
    # running on 8000 so it doesn't conflict with kabundle
    app.run(debug=True, host='0.0.0.0', port=8000)

