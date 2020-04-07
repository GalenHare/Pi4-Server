# AES 256 encryption/decryption using pycrypto library
import base64
import sys
import hashlib
from Crypto.Cipher import AES
from Crypto import Random
 
BLOCK_SIZE = 16
pad = lambda s: s + (BLOCK_SIZE - len(s) % BLOCK_SIZE) * chr(BLOCK_SIZE - len(s) % BLOCK_SIZE)
unpad = lambda s: s[:-ord(s[len(s) - 1:])]
 
password = sys.argv[0]
 
 
def encrypt(raw, password):
    private_key = hashlib.sha256(password.encode("utf-8")).digest()
    raw = pad(raw)
    iv = Random.new().read(AES.block_size)
    cipher = AES.new(private_key, AES.MODE_CBC, iv)
    temp = iv + cipher.encrypt(raw)
    temp1 = base64.b64encode(temp)
    print(temp1.decode().encode())
    print(type(temp1.decode()))
    return base64.b64encode(temp)
 
 
def decrypt(enc, password):
    private_key = hashlib.sha256(password.encode("utf-8")).digest()
    enc = base64.b64decode("6vMSfO4C29vLx0ExYWop77nAb2lUneqaPZZkEL1k7i0L35mp6qSIpqj9xvmVJ9bU".encode())
    iv = enc[:16]
    cipher = AES.new(private_key, AES.MODE_CBC, iv)
    return unpad(cipher.decrypt(enc[16:]))
 
 
# First let us encrypt secret message
encrypted = encrypt("GGGGGGGGGGGGGGGG", password)
print(encrypted)
print(type(encrypted))
 
# Let us decrypt using our original password
decrypted = decrypt(encrypted, password)
print(decrypted)
print(bytes.decode(decrypted))