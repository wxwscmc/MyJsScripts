it('#9 167 向上滑动页面,歌曲/歌单详情TAB页置顶后位置固定', function() {
    var tabLocation_1;
    var tabLocation_2;
    return driver
        .waitForElementById(elems.歌单页.TAB标签, 6000, 200)
        .getRect()
        .then(info => {
            tabLocation_1 = info;
            console.log("tabLocation_1",tabLocation_1);
        })
        .swipeScreen(null,null,0.9,0.7,0.9,0.4,1)
        .waitForElementById(elems.歌单页.TAB标签, 6000, 200)
        .getRect()
        .then(info => {
            tabLocation_2 = info;
            console.log("tabLocation_2",tabLocation_2);
            tabLocation_2.should.not.eql(tabLocation_1);
        })
        .swipeScreen(null,null,0.9,0.7,0.9,0.4,1)
        .waitForElementById(elems.歌单页.TAB标签, 6000, 200)
        .getRect()
        .then(tabLocation_3 => {
            console.log("tabLocation_3",tabLocation_3);
            tabLocation_3.should.eql(tabLocation_2);
        })
});