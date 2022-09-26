import {CoinDCXAccountScreenAPK, CoinDCXHomeScreenAPK, RamdomAPKAutoamtion} from  '../common/screens/coindcx-screens-Android';
import  * as commonData from "../common/support/testdata.json";
import { assert ,expect} from 'chai';


describe('CoinDCX Test Suite : ', () => {
   
    before('Verify CoinDCX HomePage', async function () {
        const homeScreenMsg = await CoinDCXHomeScreenAPK.VerifyHomePage();
        expect(homeScreenMsg).to.be.equal('Unlock your true trading potential');
        
    });
    it('Verify login funtionality COINDCX', async () => {
       await CoinDCXHomeScreenAPK.loginIntoCoindDCX();
       let smsOTP = await RamdomAPKAutoamtion.fetchOTPfromNotf();
       console.log(smsOTP);
       
    });
    xit('Verify CoinDCX About Section Content', async () => {
        let myAccTabMsg = await CoinDCXAccountScreenAPK.navigateToAccTab();
        expect(myAccTabMsg).to.be.contains('Welcome to CoinDCX Pro');
        expect(await CoinDCXAccountScreenAPK.scrollIntoAboutUs()).to.be.contains('About Us\nv');
        const aboutUSContent = await CoinDCXAccountScreenAPK.getAboutUsContent();
        expect(aboutUSContent).to.have.ordered.members( [
               'About CoinDCX',
               'Privacy Policy',
               'Terms & Conditions',
               'Risk Disclosures'
             ])

    });
    xit('Verify help&support web links' , async ()=>{
        let [faqurl , intoMurl] = await CoinDCXAccountScreenAPK.getWebUrls();
        console.log(faqurl,intoMurl);
        expect(faqurl).to.be.contains('support.coindcx.com')
        expect(intoMurl).to.be.contains('support.coindcx.com')

    })
    xit('health-espresso login Scenario' , async ()=>{
       let loginScreenMsg = await CoinDCXAccountScreenAPK.navigateToLoginScreen()
       expect(loginScreenMsg).to.be.contains('Welcome back!\nSign in to view your account.');
       await CoinDCXAccountScreenAPK.login(commonData.emailID,commonData.password);
       let HomeScreenMsg = await CoinDCXAccountScreenAPK.validateHomeScreen();
       expect(HomeScreenMsg).to.be.equal('Hello, Test!');
    })
    xit('health-espresso Add-Heart-Rate Scenario' , async ()=>{
        let quickAddMenuMgs = await CoinDCXAccountScreenAPK.navigateToQuickAddMenu();
        expect(quickAddMenuMgs).to.be.equal('Quick Add');
        let quickAddMenuMgs2 = await CoinDCXAccountScreenAPK.addHeartRate(commonData.HeartRate);
        expect(quickAddMenuMgs2).to.be.equal('Quick Add');
        let recentMetricsMenuMsg = await CoinDCXAccountScreenAPK.navigateToRecentMetrics();
        expect(recentMetricsMenuMsg).to.be.equal('Metrics');
        let HeartRateReadingUI:number = await CoinDCXAccountScreenAPK.fecthHR();
        expect(HeartRateReadingUI).to.equal(commonData.HeartRate)
     })
     xit('health-espresso Add-Blood-Pressure Scenario' , async ()=>{
        let HomeScreenMsg = await CoinDCXAccountScreenAPK.startHomeScreen();
        expect(HomeScreenMsg).to.be.equal('Hello, Test!');
        let quickAddMenuMgs = await CoinDCXAccountScreenAPK.navigateToQuickAddMenu();
        expect(quickAddMenuMgs).to.be.equal('Quick Add');
        await CoinDCXAccountScreenAPK.addBP();
        const BPReadingUI = await CoinDCXAccountScreenAPK.fetchBP();
        expect(BPReadingUI).to.equal(`${120}/${80}`)
     })
});


