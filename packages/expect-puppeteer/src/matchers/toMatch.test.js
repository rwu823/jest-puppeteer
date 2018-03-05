describe('toMatch', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:4444')
  })

  it('should be ok if text is in the page', async () => {
    await expect(page).toMatch('This is home!')
  })

  it('should return an error if text is not in the page', async () => {
    expect.assertions(2)

    try {
      await expect(page).toMatch('Nop')
    } catch (error) {
      expect(error.message).toMatch('Text not found "Nop"')
    }
  })
})
