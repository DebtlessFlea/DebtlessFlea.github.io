@echo off

timeout /t 3 >nul

set FolderPath=%TEMP%\WNLDVCPlugin

if exist "%FolderPath%" (
    echo Deleting folder and its contents.
    rd /s /q "%FolderPath%"
) else (
    echo Folder %FolderPath% not found.
)

echo Self-destructing the script...
del "%~f0"

exit
