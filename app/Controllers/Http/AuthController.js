'use strict'

const User = use('App/Models/User')

class AuthController {
  async store({ request, response, auth }) {
    const { email, password } = request.only(['email', 'password'])

    const { token } = await auth.attempt(email, password)

    return response.ok({ token })
  }
}

module.exports = AuthController
