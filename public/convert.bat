@echo off
setlocal enabledelayedexpansion

if not exist "visualisations2" mkdir visualisations2

for %%f in ("visualisations\*.wmv") do (
    set "filename=%%~nf"
    ffmpeg -i "visualisations\%%~nxf" -r 30 -c:v h264_nvenc -preset fast -b:v 5M -movflags +faststart -an "visualisations2\!filename!.mp4"
)

echo complete.
pause
