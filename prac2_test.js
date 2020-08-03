Feature('login');

Scenario('test something', (I) => {
    I.amOnPage('http://automationpractice.com/index.php?id_product=1&controller=product');
    I.waitForElement('#image-block',30);
    I.scrollTo(".home");
       //I.scrollPageToBottom();
    //I.click('//*[@id="view_scroll_right"]');
    I.moveCursorTo("#thumb_3");
    I.wait(3);
    I.saveScreenshot('Product_1_full_page.png');
    // I.screenshotElement('#bigpic','Product_image');
    I.seeVisualDiffForElement('#image-block','Product_1_full_page.png',{
      tolerance:2,
      prepareBaseImage:false,
    });






});