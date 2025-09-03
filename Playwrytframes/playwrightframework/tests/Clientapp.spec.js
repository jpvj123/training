const { test, expect } = require('@playwright/test');
 
 //hello
//my name

 
 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage

   const email = "nikhil@gmail.com";

  

   //const productName = 'zara coat 3';
   //const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
 await page.waitForSelector('#userEmail');
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
})


test.only('@Child windows hadl', async ({browser})=>
 {
     const context = await browser.newContext();
     const page =  await context.newPage();
     const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
 
 })
// npx playwright test tests/Clientapp.spec.js --debug  -open playwright inspector





//   test('test', async ({ page }) => {
//   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

//   await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
//   await page.getByRole('textbox', { name: 'Password:' }).fill('learning');
//   await page.getByRole('combobox').selectOption('consult');
//   await page.getByRole('button', { name: 'Sign In' }).click();

//   // 🔹 Wait for the popup when clicking on "Free Access to InterviewQues/"
//   const [popup] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.getByRole('link', { name: 'Free Access to InterviewQues/' }).click()
//   ]);

//   // 🔹 Now interact inside the popup
//   await popup.getByRole('link', { name: 'mentor@rahulshettyacademy.com' }).click();
//   await popup.getByRole('link', { name: 'Job Support' }).nth(1).click();
// });


 //npx playwright codegen https://rahulshettyacademy.com/loginpagePractise/  -use codegen




test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.locator('#username').fill('rahulshettyacademy')
  await page.locator('#password').fill('learning')
  await page.locator('span.checkmark').nth(1).check();
  await page.locator('#okayBtn').click();
  
  await page.locator('select.form-control').selectOption('consult');
  await page.locator('input#terms').check();
  await page.locator('#signInBtn').click();
  await page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum' }).getByRole('button').click();
  await page.locator('app-card').filter({ hasText: 'Samsung Note 8 $24.99 Lorem' }).getByRole('button').click();
  await page.getByText('Checkout ( 2 ) (current)').click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByText('I agree with the term &').click();

  await page.getByRole('textbox', { name: 'Please choose your delivery' }).fill('goa');
   await page.getByText('I agree with the term &').click();
  await page.getByRole('button', { name: 'Purchase' }).click();
  await page.getByText('× Success! Thank you! Your').click();
  await expect(page.getByText('Success! Thank you!')).toBeVisible();
    const successMsg = page.getByText('Success! Thank you!');
  await expect(successMsg).toBeVisible();

  // ✅ Print to console
  console.log(await successMsg.textContent());

 
});


// test.only('@Child windows hadl', async ({page,context})=>
//  {
//     // const context = await browser.newContext();
//     // const page =  await context.newPage();
//     // const userName = page.locator('#username');
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     const documentLink = page.locator("[href*='documents-request']");
 
//     const [newPage]=await Promise.all(
//    [
//       context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
//       documentLink.click(),
   
//    ])//new page is opened
