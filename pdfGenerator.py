import os
import asyncio
from pyppeteer import launch

os.environ['PYPPETEER_CHROMIUM_REVISION'] = '1263111'

async def main():
    browser = await launch({
        # 2) opcional: apontar a Chrome local
        'executablePath': r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        'headless': True,
        'args': ['--no-sandbox']
    })
    page = await browser.newPage()
    await page.goto('file:///C:/Users/PC/Documents/Explore/Gerador_de_Oficios_SME_2025/index.html')
    # await page.screenshot({'path': 'example.png'})
    await page.pdf({
        'path': 'Oficio.pdf',
        'width': '794px',
        'height': '1123px',
        'printBackground': True,
        'margin': {'top': '0', 'right': '0', 'bottom': '0', 'left': '0'},
        'scale': 1.0
    })



    await browser.close()

asyncio.get_event_loop().run_until_complete(main())