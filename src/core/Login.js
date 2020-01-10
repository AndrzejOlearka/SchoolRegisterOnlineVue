import Action from '@/core/Action'
import Error from '@/core/Error'

class Login extends Action
{
    constructor(){
        super();
        this.formData = {
            password: '',
            email: ''
        },
        this.result = ''
        this.success = false;
        this.errors = new Error
        this.data = {}
    }

    getCredentials(){
        return {
            action: '/login',
            formtype: 'loginForm'
        }
    }

    execute(){
        if(this.result){
            this.success = true;
            var interval = setTimeout(() => {
                if(this.data.role == 0){
                    window.location.replace('/News');
                } else{
                    window.location.replace('/News');
                }
            }, 3000);
        }
    }
}

export default Login;