import { test, expect } from '@playwright/test'

test('allows the user to type and submit a chat message', async ({ page }) => {
  // Go to the page that renders <Chat />
  await page.goto('/')

  // Locate the input by placeholder
  const input = page.getByPlaceholder('Say something...')

  // Ensure input is visible
  await expect(input).toBeVisible()

  // Type a message
  await input.fill('Hello AI')

  // Submit by pressing Enter
  await input.press('Enter')

  // Input should be cleared after submit
  await expect(input).toHaveValue('')
})
