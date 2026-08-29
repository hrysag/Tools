powershell -Command "npx esbuild entry.ts --bundle --platform=browser --format=iife --global-name=MyLib --outfile=dist/checkScoreXXX.js"

powershell -Command "Get-Content footer/footer_checkscore.js -Raw -Encoding UTF8 | Add-Content dist/checkScoreXXX.js -Encoding UTF8"

pause