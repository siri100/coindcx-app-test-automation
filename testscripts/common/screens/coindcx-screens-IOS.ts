import {BasePage} from './basePage';
import { assert } from 'chai';


export class Wait{

    static async sleep(time: number){
        await browser.pause(time);
    }
}

 export class HyundaiElementIPA {
    public static Element(locator: string) {
        
        return new BasePage(locator);
    }
}

export class HyundaiLoginPageIPA extends  HyundaiElementIPA {
 

    static  inputUsernameIpa () { return this.Element(`~Username`) };
    static  inputPasswordIpa () { return this.Element(`~Password`) };
    static  btnSubmitIpa  () { return this.Element(`~login`) };
    static  orgSelectIpa () { return this.Element(`~Please select an organization`) };
    static  pickerWheelIpa () { return this.Element(`-ios predicate string:${`type == 'XCUIElementTypePickerWheel'`}`) };
    static  doneBtnIpa () { return this.Element(`-ios predicate string:${`type == 'XCUIElementTypeButton' && name CONTAINS 'Done'`}`) };
    static  dontAllowBtnIpa () { return this.Element(`-ios predicate string:${`type == 'XCUIElementTypeButton' && name CONTAINS 'Don’t Allow'`}`) }
    static  noBtnIpa () { return this.Element(`-ios predicate string:${`type == 'XCUIElementTypeButton' && name CONTAINS 'No'`}`) };
    static  recommendedMessgIpa () { return this.Element(`~RECOMMENDED VEHICLES`) };
    static  logoutTextslecIpa () { return  this.Element('~Please login with your username and password.') }

   
    static async login (username: string, password: string) {
        
        await this.inputUsernameIpa().click();
        await  this.inputUsernameIpa().addValue(username);
        await this.inputPasswordIpa().addValue(password);
        await  this.btnSubmitIpa().click();
        
        
    }

    static async selectOrg() {
        try {
            if (this.orgSelectIpa().waitForDisplayed(15000)) {
                await  this.orgSelectIpa().click();
                await  this.pickerWheelIpa().addValue('HYUNDAI MOTOR FINANCE');
                await  this.doneBtnIpa().click();
        }
     } catch (error) {
            console.log("No orgs present");
        
        
    }
}

    static async getHomePageText(){
        await this.dontAllowBtnIpa().click();
        await this.noBtnIpa().click();
        let recommMessage = await this.recommendedMessgIpa().getVisibleText();
        return recommMessage;
        
      }
 
}

export class HyundaiLogoutPageIPA extends  HyundaiLoginPageIPA {


    static  menuBtnIpa () { return this.Element(`-ios predicate string:${`type == 'XCUIElementTypeButton' && name CONTAINS 'home screen menu'`}`) }
    static  logoutBtnIpa () { return this.Element(`-ios predicate string:${`type == 'XCUIElementTypeStaticText' && name CONTAINS 'Logout'`}`) }
    static  logoutTextslecIpa () { return  this.Element('~Please login with your username and password.') }

    static async logout () {
        await  this.menuBtnIpa().click();
        await driver.execute('mobile: scroll', {direction: 'down'});
        await  this.logoutBtnIpa().click();
    }

    static async getlogoutText(){

        let logoutmessg = await this.logoutTextslecIpa().getVisibleText();
        return logoutmessg;
        
      }

}


export class HyundaiHomePageIPA extends  HyundaiLogoutPageIPA {

  

    static  homeBtnIpa () { return this.Element(`-ios predicate string:${`type == 'XCUIElementTypeButton' && name CONTAINS 'home screen menu'`}`) };
    static  viewAllVehiclesIpa () { return this.Element(`-ios predicate string:${`type == 'XCUIElementTypeStaticText' && name CONTAINS 'All Vehicles'`}`) };
    static  HyundaiLinkIpa () { return this.Element(`-ios predicate string:${`type == 'XCUIElementTypeStaticText' && name CONTAINS '2018 Kia'`}`) };
    static  addToWatclistBtnIpa () { return this.Element(`-ios predicate string:${`type == 'XCUIElementTypeStaticText' && name CONTAINS 'Add to Watchlist'`}`) };
    static  viewInWLBtnIpa () { return this.Element(`-ios predicate string:${`type == 'XCUIElementTypeStaticText' && name CONTAINS 'Vehicle in Watchlist'`}`) };
    static  vinSelectWLIpa () { return this.Element(`-ios class chain:${'**/XCUIElementTypeOther[22]/XCUIElementTypeStaticText[3]'}`) };
    static  removebtnIpa () { return this.Element(`-ios predicate string:${`type == 'XCUIElementTypeButton' && name CONTAINS 'Remove'`}`) };
    static  zeroSelectIpa () { return this.Element(`~0`) };

  
   

      static async getVinVDPPage () {
        await  this.homeBtnIpa().click();
        await  this.viewAllVehiclesIpa().click();
        await  this.HyundaiLinkIpa().click();
        await Wait.sleep(10000);
        await  this.addToWatclistBtnIpa().click();

        let vdpVIN;
        for (let i = 12; i <18 ; i++) {
           let vinSelectVDP = await this.Element(`-ios class chain:${'**/XCUIElementTypeStaticText['+i+']'}`);
           let value =await vinSelectVDP.getVisibleText();
           let re = /^\S+$/;
            if (value.length == 17 && re.test(value)) {
                 vdpVIN = value;
                 return vdpVIN;
            }
        }
       
    }


    static async getVinWatchlist(){
        await  this.viewInWLBtnIpa().click();
        await  Wait.sleep(10000);
        let VinVal =  await this.vinSelectWLIpa().getVisibleText();
        await this.removebtnIpa().click();
        let zeroVal = await this.zeroSelectIpa().getVisibleText();
        await assert.equal(zeroVal,'0');
        return VinVal;

    }
}