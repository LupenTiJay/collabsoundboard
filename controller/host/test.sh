#!/bin/bash

def_host=192.168.0.106
def_port=12345

HOST=${2:-$def_host}
PORT=${3:-$def_port}

echo -n "hello" | nc -4u -w1 $HOST $PORT