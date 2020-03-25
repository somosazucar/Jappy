#!/bin/bash

# Exit early on errors
set -eu

# Python buffers stdout. Without this, you won't see what you "print" in the Activity Logs
export PYTHONUNBUFFERED=true

pip3 install --user -r requirements.txt

PORT=8080 WORKSPACE='.data' python3 -m jappy.server