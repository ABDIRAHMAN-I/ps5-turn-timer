#!/bin/bash

while true; do
    echo "Starting 6-minute timer..."
    sleep 360  # 6 minutes

    afplay /System/Library/Sounds/Glass.aiff
    say -v "Alex" "your time is up, pass the controller to the next person, then wait for your turn, good job!"
    osascript -e 'display notification "Your time is over." with title "Timer Alert"'

    echo "Time's up! Restarting..."
done
