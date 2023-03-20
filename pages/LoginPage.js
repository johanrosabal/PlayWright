

class LoginPage{

    constructor(page){
        this.page = page
        this.username_input = page.getByLabel("Username")
        this.password_input = page.getByLabel("Password")
        this.login_button = page.getByRole('button',{name:'Login'})
    }

    // typeUsername(){

    // }

    // typePassword(){
        
    // }

    // clickLogin(){

    // }

    async getPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async signIn(username, password){

        await this.username_input.fill(username)
        await this.password_input.fill(password)
        await this.login_button.click()

    }

}

module.exports = LoginPage;