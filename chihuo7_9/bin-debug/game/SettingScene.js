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
var SettingScene = (function (_super) {
    __extends(SettingScene, _super);
    function SettingScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/game/settingScene.exml";
        return _this;
    }
    SettingScene.prototype.onComplete = function () {
        this.btn_bgmusic.currentState = SoundManager.Instance.isMusic ? "up" : "noPlay";
        this.btn_effect.currentState = SoundManager.Instance.isEffect ? "up" : "noPlay";
        this.btn_bgmusic.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapBgMusic, this);
        this.btn_effect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapEffect, this);
        this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapOk, this);
    };
    //点击背景音乐按钮时
    SettingScene.prototype.onTapBgMusic = function () {
        SoundManager.Instance.isMusic = !SoundManager.Instance.isMusic;
        if (!SoundManager.Instance.isMusic) {
            this.btn_bgmusic.currentState = "noPlay";
        }
        else {
            this.btn_bgmusic.currentState = "";
        }
        SoundManager.Instance.playClickEffect();
    };
    //点击音效按钮时
    SettingScene.prototype.onTapEffect = function () {
        SoundManager.Instance.isEffect = !SoundManager.Instance.isEffect;
        if (!SoundManager.Instance.isEffect) {
            this.btn_effect.currentState = "noPlay";
        }
        else {
            this.btn_effect.currentState = "";
        }
        SoundManager.Instance.playClickEffect();
    };
    //点击确认按钮时
    SettingScene.prototype.onTapOk = function () {
        SoundManager.Instance.playClickEffect();
        SceneManager.Instance.popScene();
    };
    return SettingScene;
}(Scene));
__reflect(SettingScene.prototype, "SettingScene");
//# sourceMappingURL=SettingScene.js.map