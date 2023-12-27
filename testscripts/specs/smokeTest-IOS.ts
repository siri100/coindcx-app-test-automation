import {HyundaiLoginPageIPA,HyundaiHomePageIPA, HyundaiLogoutPageIPA} from  '../common/pages/Hyundai-pages-IOS';
import {Shared} from '../common/support/shared';
import { assert ,expect} from 'chai';


describe('Hyundai Test Suite', () => {
//commit
    before('Verify Hyundai Login', async function () {

        await driver.pause(10000);
        await HyundaiLoginPageIPA.login(Shared.userName, Shared.password);
        await HyundaiLoginPageIPA.selectOrg();
        let homeText = await HyundaiHomePageIPA.getHomePageText();
        await assert.equal(homeText,'RECOMMENDED VEHICLES' , 'Home page not loaded succesfully');
    });
    after('Verify Hyundai logout', async function () {
        await HyundaiLogoutPageIPA.logout();
        let loginText = await HyundaiLogoutPageIPA.getlogoutText();
        await assert.equal(loginText,'Please login with your username and password.');
    

    });
    it('Verify Hyundai Watchlist', async () => {

        let vinValSRP = await HyundaiHomePageIPA.getVinVDPPage();
        let vinValWL = await HyundaiHomePageIPA.getVinWatchlist();
        await expect(vinValSRP).to.include(vinValWL);
        
    });
});


