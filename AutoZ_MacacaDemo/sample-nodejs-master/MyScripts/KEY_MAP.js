it('#4 153 点击页面返回键或手机端返回键，退出歌单详情页面', function() {
    return driver
        .waitForElementById(elems.歌单页.返回键, 6000, 200)
        .click()
        .sleep(500)
        .saveScreen('点击页面返回键，退出歌单详情页面')
        .waitForElementById(elems.乐库推荐页.歌单推荐_歌单, 6000, 200)
        .click()
        .sleep(1000)
        .keys(`send keys:${KEY_MAP.BACK}`)
        .sleep(500)
        .saveScreen('点击手机端返回键，退出歌单详情页面')
});