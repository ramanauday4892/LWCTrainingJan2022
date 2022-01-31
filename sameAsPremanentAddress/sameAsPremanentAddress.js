import { LightningElement } from 'lwc';

export default class SameAsPremanentAddress extends LightningElement {
    permanentZipCode;
    permanentLandmark;
    permanentAddress2;
    permanentAddress1;
    currentLandmark;
    currentZipCode;
    currentAddress2;
    currentAddress1;
    
    sameAsCurrent = false;

    sameAsCurrentAddress(event){
        this.sameAsCurrent = (this.sameAsCurrent == true) ? false : true;
        if(this.sameAsCurrent){
            this.permanentZipCode   = this.currentZipCode;
            this.permanentLandmark  = this.currentLandmark;
            this.permanentAddress2  = this.currentAddress2;
            this.permanentAddress1  = this.currentAddress1;
        }else{
            this.permanentZipCode   = '';
            this.permanentLandmark  = '';
            this.permanentAddress2  = '';
            this.permanentAddress1  = '';
        }
    }
    currentZipCodeChange(event){
        this.currentZipCode = event.target.value;
    }
    currentLandmarkChange(event){
        this.currentLandmark = event.target.value;
    }
    currentAddress2Change(event){
        this.currentAddress2 = event.target.value;
    }
    currentAddress1Change(event){
        this.currentAddress1 = event.target.value;
    }
}