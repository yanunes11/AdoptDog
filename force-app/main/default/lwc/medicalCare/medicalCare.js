import { LightningElement } from 'lwc';
import accountCreator from '@salesforce/apex/ContactService.contactCreator'

export default class MedicalCare extends LightningElement {
    contact = {};

    handleSubmit(event) {
        console.log('YNASC event.detail: '+JSON.stringify(event.detail));
        let contactObj = event.detail;
        console.log('YNASC contactObj: '+JSON.stringify(contactObj));
        accountCreator({
            ct: contactObj
        }).then((response) => {
            console.log('YNASC');
            console.table(response);
            //if response true
        }).catch((erroMsg) => {
            console.log('ERroMsg');
            //if response error
        });
    }
}