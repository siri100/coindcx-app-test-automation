
export  class BasePage {
    

    private UIElement;
    private locator;
    constructor(locator:string) {
        this.locator = locator;
        this.UIElement = $(locator);
    }

    async click() {
        await (await this.UIElement).click();
    }
    async addValue(keys: string|number) {
        await (await this.UIElement).addValue(keys);
    }

    async getAttribute(attribute: string) {
        return await (await this.UIElement).getAttribute(attribute);
    }

    async getVisibleText() {
       
        return await (await this.UIElement).getText();
    }

    async waitForDisplayed(){
        return await (await this.UIElement).waitForDisplayed();
    }
    async waitForEnabled(){
        return await (await this.UIElement).waitForEnabled();
    }
    async isEnabled(){
        return await (await this.UIElement).isEnabled();
    }
    async clearValue(){
        return await (await this.UIElement).clearValue();
    }
    
    
}
