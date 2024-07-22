import { step } from '../helpers/step';

export class SomeSteps {
    @step('Some step 1')
    async someStep1 (){
        console.log(' Some step 1');
    }
}