powershell -Command "npx esbuild entryHistory.ts --bundle --platform=browser --format=iife --global-name=MyLib --target=es2015 --outfile=dist/SlotDataParserXXX.js"

powershell -Command "Get-Content footer/footer_history.js -Raw -Encoding UTF8 | Add-Content dist/SlotDataParserXXX.js -Encoding UTF8"

pause