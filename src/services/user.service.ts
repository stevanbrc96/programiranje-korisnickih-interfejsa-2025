import { userModel } from "../models/user.model"

export class UserService {
    static findUserByEmail(email: string) {
        if (!localStorage.getItem('users'))
            localStorage.setItem('users', JSON.stringify([

                {

                    firstName: 'Example',

                    lastName: 'User',

                    email: 'user@example.com',

                    phone: '+38163123123',

                    password: 'user123',

                    destination: 'Zagreb',

                    data: []
                }
            ]))

        const users: userModel[] = JSON.parse(localStorage.getItem('users')!)
        const exactUser = users.find(u => u.email === email)

        if (!exactUser)
            throw new Error('USER_NOT_FOUND')

        return exactUser
    }

    static login(email: string, password: string) {
        const user = this.findUserByEmail(email)
        if (user.password !== password) {
            throw new Error('BAD_CREDENTIALS')
        }

        localStorage.setItem('active', user.email)
    }

    static getActiveUser() {
        const active = localStorage.getItem('active')
        if (!active)
            throw new Error('NO_ACTIVE_USER')

        return this.findUserByEmail(active)
    }

    static logout() {
   localStorage.removeItem('active')
}
}