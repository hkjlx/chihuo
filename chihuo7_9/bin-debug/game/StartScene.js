var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/game/start.exml";
        return _this;
    }
    StartScene.prototype.onComplete = function () {
        this.btn_ks.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onkaishi, this);
        this.btn_sz.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onshezhi, this);
    };
    //点击开始游戏按钮
    StartScene.prototype.onkaishi = function () {
        SoundManager.Instance.playBgMusic();
        SoundManager.Instance.playClickEffect();
        var ts = new TisScene();
        SceneManager.Instance.changeScene(ts);
    };
    //点击设置按钮
    StartScene.prototype.onshezhi = function () {
        SoundManager.Instance.playClickEffect();
        var sz = new SettingScene();
        SceneManager.Instance.pushScene(sz);
    };
    return StartScene;
}(Scene));
__reflect(StartScene.prototype, "StartScene");
//# sourceMappingURL=StartScene.js.map