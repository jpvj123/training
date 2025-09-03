const{test,expect}=require('@playwright/test');

test('First playwright test' ,async({browser})=>
{   

    const context=await browser.newContext()
    const page=await context.newPage()
    ..docker
    ..jenkins
    //hi 
    //bye
    await page.goto('https://rahulshettyacademy.com/loginpagepractise')
    console.log( await page.title())
await expect (page).toHaveTitle("Not Found")

});

test('page playwright test' ,async({page})=>
{   

 
    await page.goto('https://google.com')
   console.log( await page.title())
    await expect (page).toHaveTitle("Google")



});

//using codegen

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('praveenvj27@gmail.com')
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Thalapathy@123')
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Add To Cart' }).first().click();
  await page.getByRole('button', { name: ' Add To Cart' }).nth(1).click();
  await page.getByRole('button', { name: '   Cart' }).click();
  await page.getByRole('button', { name: '❯', exact: true }).nth(1).click();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
 // First input field (credit card number)
  await page.locator('input[type="text"]').nth(0).fill('4542993192922293');

// Second input field (CVV)
  await page.locator('input[type="text"]').nth(1).fill('381');

// Third input field (Cardholder name)
 await page.locator('input[type="text"]').nth(2).fill('jeya');

  await page.getByRole('textbox', { name: 'Select Country' }).fill('India')
  await page.getByText('Place Order').click();
});


