import Action from '@/core/Action'
import Error from '@/core/Error'

class Registration extends Action
{
    constructor(){
        super();
        this.formData = {
            password: '',
            password2: '',
            email: ''
        },
        this.result = ''
        this.success = false;
        this.errors = new Error
        this.data = {}
    }

    getCredentials(){
        return {
            action: '/register',
            formtype: 'registrationForm'
        }
    }

    execute(){
        if(this.result){
            this.success = true;
            this.reset();
            var interval = setTimeout(() => {
                this.success = false;
            }, 3000);
        }
        
    }
}

export default Registration;