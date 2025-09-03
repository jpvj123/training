

await page.goto('https://rahulshettyacademy.com/loginpagepractise')
    console.log( await page.title())
await expect (page).toHaveTitle("Not Found") 