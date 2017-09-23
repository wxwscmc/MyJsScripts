it('#4 186 点击打开歌曲TAB，点击单曲，播放该单曲，歌单歌曲都加入播放列表', function() {
    var songsName = new Array(4);
    var songsNamePlayList = new Array(4);
    return driver
    //获取歌单前四首歌名
        .elementsById(elems.歌单页.歌曲名, 6000, 200)
        .click()
        .then(els => {
            return els[0]
        })
        .text()
        .then(text => {
            songsName[0] = text;
        })
        .elementsById(elems.歌单页.歌曲名, 6000, 200)
        .then(els => {
            return els[1]
        })
        .text()
        .then(text => {
            songsName[1] = text;
        })
        .elementsById(elems.歌单页.歌曲名, 6000, 200)
        .then(els => {
            return els[2]
        })
        .text()
        .then(text => {
            songsName[2] = text;
        })
        .elementsById(elems.歌单页.歌曲名, 6000, 200)
        .then(els => {
            return els[3]
        })
        .text()
        .then(text => {
            songsName[3] = text;
        })
        //去播放列表获取前四首，并检查是否一致
        .waitForElementById(elems.迷你播放器.播放列表图标, 6000, 200)
        .click()
        .sleep(2000)
        .elementsById(elems.全屏播放页.播放列表歌名, 6000, 200)
        .then(els => {
            return els[0]
        })
        .text()
        .then(text => {
            songsNamePlayList[0] = text;
        })
        .elementsById(elems.全屏播放页.播放列表歌名, 6000, 200)
        .then(els => {
            return els[1]
        })
        .text()
        .then(text => {
            songsNamePlayList[1] = text;
        })
        .elementsById(elems.全屏播放页.播放列表歌名, 6000, 200)
        .then(els => {
            return els[2]
        })
        .text()
        .then(text => {
            songsNamePlayList[2] = text;
        })
        .elementsById(elems.全屏播放页.播放列表歌名, 6000, 200)
        .then(els => {
            return els[3]
        })
        .text()
        .then(text => {
            songsNamePlayList[3] = text;
            songsNamePlayList.should.eql(songsName);
        })
});