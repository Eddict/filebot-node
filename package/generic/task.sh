#!/bin/sh

export DATA="`dirname $0`/data"
export TASK="$1"

filebot @"$DATA/task/$TASK.args" >> "$DATA/log/$TASK.log" 2>&1
