// @ts-nocheck
//const { test, expect } = require('@playwright/test');
import {test,expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';


test('Testing Page Object Model with Playwright', async ({page})=>{

  const Login = new LoginPage(page);

  await Login.getPage();
  await Login.signIn('tomsmithrosabal','SuperSecretPassword!');

});

