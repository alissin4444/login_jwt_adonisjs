'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request, response }) {
    const data = request.only(['name', 'email', 'password'])

    const user = await User.create(data)

    return response.ok(user)
  }
}

module.exports = UserController
