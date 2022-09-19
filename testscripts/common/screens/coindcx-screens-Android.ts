import {BasePage} from './baseScreen';
import { assert } from 'chai';
// import { Shared } from '../support/shared';
import { HyundaiDb } from '../utils/coinDCX-db';


export class Wait{

    static async sleep(time: number){
        await browser.pause(time);
    }
}

 export class CoinDCXElementAPK {
    public static Element(locator: string) {
        
        return new BasePage(locator);
    }
}

export class CoinDCXHomeScreenAPK extends  CoinDCXElementAPK {
 
    static  skipBtnAPK () { return this.Element('~Skip') };
    static  skipForNowBtnAPK () { return this.Element('~Skip for now') };
    static  homeScreenMsgAPK () { return this.Element('android=new UiSelector().description("Unlock your true trading potential")') };
    static  myAccTab () { return this.Element('android=new UiSelector().description("Account")') };
    // static  skipBtnAPK1 () { return this.Element('android=new UiSelector().description ("Skip")') };
    static  loginLink () { return this.Element('~Login') };
    static  loginWithEmailLink () { return this.Element('~Log In with Email') };
    static  emailTextBox () { return this.Element('android=new UiSelector().textContains("Email Address")') };
    static  passTextBox () { return this.Element('android=new UiSelector().textContains("Password")') };
    static  loginBtn () { return this.Element('(//android.view.View[@content-desc="Login"])[2]') };
   
   

   
    static async VerifyHomePage () {
        
        await this.skipBtnAPK().click();
        await this.skipForNowBtnAPK().click();
        return await this.homeScreenMsgAPK().getAttribute('content-desc');
    
    }

    static async loginIntoCoindDCX(){
        await this.loginLink().click();
        await this.loginWithEmailLink().click();
        await this.emailTextBox().addValue('Srinivas.Madnal@gmail.com');
        await this.passTextBox().click();
        await this.passTextBox().addValue('Cinthol231');
        await driver.pause(3000);
        await this.loginBtn().click();
       
    }
 
}

export class CoinDCXAccountScreenAPK extends  CoinDCXHomeScreenAPK{

    static  myAccScreenMsg () { return this.Element('android=new UiSelector().descriptionContains("Welcome to CoinDCX Pro")') };
    static  scrollIntoaboutUSSec () { return this.Element('android=new UiScrollable(new UiSelector().scrollable(true)).scrollDescriptionIntoView("About Us v2.05.053")')};
    static  aboutSectionMsg () { return this.Element('android=new UiSelector().descriptionContains("About Us")')};
    static  aboutCoinDCX () { return this.Element('~About CoinDCX')};
    static  privacyPolicy () { return this.Element('~Privacy Policy')};
    static  termsCondition () { return this.Element('~Terms & Conditions')};
    static  riskDisc () { return this.Element('~Risk Disclosures')};
    static  scrollIntohelp_abtSection () { return this.Element('android=new UiScrollable(new UiSelector().scrollable(true)).scrollDescriptionIntoView("Help & Support")')};
    static  FAQlink () { return this.Element('~Frequently Asked Questions')};
    static  getUrl () { return this.Element('android=new UiSelector().resourceIdMatches("com.sec.android.app.sbrowser:id/location_bar_edit_text")')};
    static  introToMargin () { return this.Element('~Intro to Margin Trading')};

    //Health-Espresso
    static  loginButton () { return this.Element('~Login')};
    static  loginScreenMsg () { return this.Element('android=new UiSelector().descriptionContains("Welcome back!")')};
    static  emailTextBox () { return this.Element('android=new UiSelector().text("Email")') };
    static  passwordTextBox () { return this.Element('android=new UiSelector().text("Password")') };
    static  continueBtn () { return this.Element('~Continue') };
    static  samsungNeverBtn () { return this.Element('android=new UiSelector().resourceId("android:id/sem_autofill_save_no_second")')};
    static  homeScreenMsg () { return this.Element('android=new UiSelector().descriptionContains("Hello")') };
    static  quickAddBtn () { return this.Element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[9]/android.widget.Button') };
    static  quickAddMenuMsg () { return this.Element('~Quick Add') };
    static  addHRMenu () { return this.Element('~Heart Rate') };
    static  addHRTextBox () { return this.Element('android=new UiSelector().textContains("Heart Rate*")') };
    static  saveBtn () { return this.Element('~SAVE') };
    static  closeQuickMenu () { return this.Element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button[1]') };
    static  recentMetricsBtn () { return this.Element('android=new UiSelector().descriptionContains("Recent Metrics")') };
    static  recentMetricsMenuMsg () { return this.Element('~Metrics') };
    static  heartRateMenu () { return this.Element('~Heart Rate') };
    static  latestHRReading () { return this.Element('android=new UiSelector().descriptionContains("Latest:")') };
    static  addBPMenu () { return this.Element('~Blood Pressure') };
    static  addSystolicTextBox () { return this.Element('android=new UiSelector().textContains("Systolic*")') };
    static  addDiastolicTextBox () { return this.Element('android=new UiSelector().textContains("Diastolic*")') };
    static  BPMenu () { return this.Element('android=new UiSelector().descriptionContains("Blood Pressure")') };
    static  latestBPReading () { return this.Element('android=new UiSelector().descriptionContains("Latest:")') };
    static  okBtn () { return this.Element('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.Button[3]') };


    static async navigateToAccTab(){
        await this.myAccTab().click();
        return await this.myAccScreenMsg().getAttribute('content-desc');
    }

    static async scrollIntoAboutUs(){
         this.scrollIntoaboutUSSec();
        return this.aboutSectionMsg().getAttribute('content-desc');
    }
    static async getAboutUsContent(){
        let aboutUSContent = []
        aboutUSContent.push(await this.aboutCoinDCX().getAttribute('content-desc'));
        aboutUSContent.push(await this.privacyPolicy().getAttribute('content-desc'));
        aboutUSContent.push(await this.termsCondition().getAttribute('content-desc'));
        aboutUSContent.push(await this.riskDisc().getAttribute('content-desc'));
        return aboutUSContent;
        }

    static async getWebUrls() {
        this.scrollIntohelp_abtSection();

        await this.FAQlink().click();
        await driver.pause(2000);
        let faqurl = await this.getUrl().getVisibleText();
        console.log(faqurl);
        await driver.back();
        await this.introToMargin().click();
        await driver.pause(2000);
        let introMurl = await this.getUrl().getVisibleText();
        console.log(introMurl);
        return [faqurl, introMurl]
    }


    static async navigateToLoginScreen(){
          await this.loginButton().click();
          await driver.pause(2000);
          return this.loginScreenMsg().getAttribute('content-desc');
    }

    static async login(emailID: string,password: string){
        await this.emailTextBox().addValue(emailID);
        await this.passwordTextBox().click();
        await this.passwordTextBox().addValue(password);
        await this.continueBtn().click();
    }

    static async validateHomeScreen(){
        return this.homeScreenMsg().getAttribute('content-desc');
    }

    static async navigateToQuickAddMenu(){
        await this.quickAddBtn().click();
        return this.quickAddMenuMsg().getAttribute('content-desc');
    }

    static async addHeartRate(HeartRate:any){
        await this.addHRMenu().click();
        await this.addHRTextBox().click();
        await this.addHRTextBox().addValue(HeartRate);
        await this.saveBtn().click();
        return this.quickAddMenuMsg().getAttribute('content-desc');
    }
    static async navigateToRecentMetrics(){
        await this.closeQuickMenu().click();
        await this.recentMetricsBtn().click();
        return this.recentMetricsMenuMsg().getAttribute('content-desc')
    }
    static async fecthHR(){
        await this.heartRateMenu().click();
        let latestHeartRateContent = await this.latestHRReading().getAttribute('content-desc');
        return Number(latestHeartRateContent.split(' ')[2].replace(/\n/g, '').split('M')[1])
    }

    static async startHomeScreen(){
        await driver.startActivity("com.health_espresso.app", "com.health_espresso.app.MainActivity");
        return this.homeScreenMsg().getAttribute('content-desc');
    }
    static async addBP(){
        await this.addBPMenu().click();
        await this.addSystolicTextBox().click();
        await this.addSystolicTextBox().addValue(120);
        await this.addDiastolicTextBox().click();
        await this.addDiastolicTextBox().addValue(80);
        await this.saveBtn().click();
    }
    static async fetchBP(){
        await this.okBtn().click();
        await this.BPMenu().click();
        let latestBPContent = await this.latestHRReading().getAttribute('content-desc');
        let BPReading = latestBPContent.split(' ')[2].replace(/\n/g, '').split('PM')[1];
        return BPReading;
    }
} 




export class RamdomAPKAutoamtion extends  CoinDCXElementAPK {
 
    static  osBtn () { return this.Element('~Preference') };
    static  smsBtn () { return this.Element('~SMS Messaging') };
    static  recipientTextBox () { return this.Element('android=new UiSelector().resourceId("io.appium.android.apis:id/sms_recipient")') };
    static  messageTextBox () { return this.Element('android=new UiSelector().resourceId("io.appium.android.apis:id/sms_content")') };
    static  sendSmsBtn () { return this.Element('~Send') };
    static  coinDCXMgs () { return this.Element('android=new UiSelector().textContains("Team DCX")') };
    static  fetchsmsEle () { return this.Element('android=new UiSelector().textContains("Your OTP to log in to your account is")') };
    

    static async sendOTP(){
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.os.SmsMessagingDemo")
        await this.recipientTextBox().addValue('8553333850');
        await this.messageTextBox().addValue('Your OTP is 989765, and is valid for 5 mins');
        await this.sendSmsBtn().click();
        
    }

    static async fetchOTP(){
        await driver.openNotifications();
        await driver.pause(4000)
        // await driver.startActivity("com.samsung.android.messaging","com.samsung.android.messaging.com.android.mms.ui.ConversationComposer");
        await this.coinDCXMgs().click();
        let smsContent = await this.fetchsmsEle().getVisibleText();
        console.log(await smsContent);
    }
    
   
}












// let aboutUSContent = {
//     about : await this.aboutCoinDCX().getAttribute('content-desc'),
//     privacyPolicy :await this.privacyPolicy().getAttribute('content-desc'),
//     TC : await this.termsCondition().getAttribute('content-desc'),
//     riskDisc : await this.riskDisc().getAttribute('content-desc'),
// }
// for(let [ele,val] of Object.entries(aboutUSContent)){
//     console.log(ele,val);
// }
// return aboutUSContent