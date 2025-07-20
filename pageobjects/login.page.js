class LoginPage {
  get usernameInput() { return $('#username') }
  get passwordInput() { return $('#password') }
  get loginButton() { return $('.fa-sign-in') }
  get flashMessage() { return $('#flash') }

  async open() {
    await browser.url('/login')
  }

  async login(username, password) {
    await this.usernameInput.setValue(username)
    await this.passwordInput.setValue(password)
    await this.loginButton.click()
  }

  async getFlashMessage() {
    return await this.flashMessage.getText()
  }
}

module.exports = new LoginPage()