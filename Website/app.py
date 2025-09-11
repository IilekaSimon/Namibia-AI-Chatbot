from flask import Flask, render_template
import socket

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

def get_ip_address():
    """Get the local IP address of the machine"""
    try:
        # Connect to a remote host to determine the local IP
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip_address = s.getsockname()[0]
        s.close()
        return ip_address
    except:
        return "127.0.0.1"  # Fallback to localhost

if __name__ == '__main__':
    ip_address = get_ip_address()
    print(f"Server will be accessible at: http://{ip_address}:5000")
    app.run(host='0.0.0.0', port=5000, debug=True)