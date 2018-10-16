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
var EndScene = (function (_super) {
    __extends(EndScene, _super);
    function EndScene(wz) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/game/end.exml";
        _this.wz = wz;
        return _this;
    }
    EndScene.prototype.onComplete = function () {
        SoundManager.Instance.playBgMusic();
        this.chuangjwz(this.wz, 255, 811);
        this.chuangjwz(this.wz, 444, 811);
        this.btn_cw.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onchongwan, this);
        var tp = Number(this.wz);
        if (tp >= 5 && tp < 10) {
            this.img_pz.source = 'role2_png';
        }
        else if (tp >= 10) {
            this.img_pz.source = 'role3_png';
        }
        else if (tp < 5) {
            this.img_pz.source = 'role1_png';
        }
    };
    EndScene.prototype.onchongwan = function () {
        SoundManager.Instance.playClickEffect();
        var ts = new StartScene();
        SceneManager.Instance.changeScene(ts);
    };
    //创建文图文字
    EndScene.prototype.chuangjwz = function (zt, x, y) {
        var wz = new egret.BitmapText();
        wz.font = RES.getRes("font_fnt");
        wz.text = zt;
        wz.x = x;
        wz.y = y;
        wz.width = 35;
        wz.height = 30;
        wz.textAlign = egret.HorizontalAlign.CENTER;
        wz.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(wz);
    };
    return EndScene;
}(Scene));
__reflect(EndScene.prototype, "EndScene");
//# sourceMappingURL=EndScene.js.map