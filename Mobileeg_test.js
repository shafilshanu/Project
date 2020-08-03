Feature('login');

Scenario('test something', (I) => {
    I.amOnPage('https://www.amazon.in/dp/B084455L6M/ref=pc_mcnc_merchandised-search-17_?pf_rd_s=merchandised-search-17&pf_rd_t=Gateway&pf_rd_i=mobile&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_r=M913D01C1HNSJ9HSHKSB&pf_rd_p=c5ec7883-1957-496d-9c2f-e482a0221802');
    I.waitForElement('#imgTagWrapperId',30);
   // I.scrollTo(".home");
       //I.scrollPageToBottom();
    //I.click('//*[@id="view_scroll_right"]');
   // I.click("//div[contains(text(),'Samsung Galaxy M21 (Raven Black, 4GB RAM, 64GB Sto')]");
    I.moveCursorTo('#a-autoid-9');
   I.wait(3);
    I.saveScreenshot('try_1_pic.png');
    // I.screenshotElement('#bigpic','Product_image');
    I.seeVisualDiffForElement('#a-page','try_1_pic.png',{
      tolerance:2,
      prepareBaseImage:false,
    });

    




});