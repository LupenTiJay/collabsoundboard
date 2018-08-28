import socket
import time
UDP_IP = "192.168.1.149"
UDP_PORT = 12345
MESSAGE = "2"

print "UDP target IP:", UDP_IP
print "UDP target port:", UDP_PORT
print "message:", MESSAGE

sock = socket.socket(socket.AF_INET, # Internet
             socket.SOCK_DGRAM) # UDP
sock.sendto("11", (UDP_IP, UDP_PORT))
time.sleep(0.1)

sock.sendto("15", (UDP_IP, UDP_PORT))
time.sleep(0.1)

sock.sendto("13", (UDP_IP, UDP_PORT))
time.sleep(0.1)

sock.sendto("14", (UDP_IP, UDP_PORT))

time.sleep(0.1)

sock.sendto("01", (UDP_IP, UDP_PORT))
time.sleep(0.1)

sock.sendto("05", (UDP_IP, UDP_PORT))
time.sleep(0.1)

sock.sendto("03", (UDP_IP, UDP_PORT))
time.sleep(0.1)

sock.sendto("04", (UDP_IP, UDP_PORT))
time.sleep(0.1)


