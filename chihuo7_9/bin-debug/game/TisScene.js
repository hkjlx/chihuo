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
var TisScene = (function (_super) {
    __extends(TisScene, _super);
    function TisScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/game/tsScene.exml";
        return _this;
    }
    TisScene.prototype.onComplete = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontap, this);
    };
    TisScene.prototype.ontap = function () {
        // console.log('点击了');
        SoundManager.Instance.playClickEffect();
        var game = new GameScene();
        SceneManager.Instance.changeScene(game);
    };
    return TisScene;
}(Scene));
__reflect(TisScene.prototype, "TisScene");
//# sourceMappingURL=TisScene.js.map