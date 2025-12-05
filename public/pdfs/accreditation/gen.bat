@echo off
setlocal enabledelayedexpansion

echo -----------------------------------------
echo Collecting PDF paths from AQ folders...
echo -----------------------------------------

set output=%cd%\aqars_paths.txt
> "%output%" echo.

REM Loop folders after rename
for %%d in (AQ21 AQ22 AQ23) do (
    if exist "%%d" (
        echo Processing: %%d

        for /r "%%d" %%f in (*.pdf) do (
            REM Get full path
            set full=%%f

            REM Convert backslashes to forward slashes
            set full=!full:\=/!

            REM Remove the absolute path up to /accreditation/
            for /f "tokens=2,* delims=/accreditation/" %%a in ("!full!") do (
                echo /pdfs/accreditation/%%a >> "%output%"
            )
        )
    ) else (
        echo Skipping (not found): %%d
    )
)

echo.
echo -----------------------------------------
echo DONE ✔
echo File saved:
echo %output%
echo -----------------------------------------
pause
