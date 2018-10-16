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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.jin = 0; //斤数
        _this.skinName = "resource/eui_skins/game/game.exml";
        return _this;
    }
    GameScene.prototype.onComplete = function () {
        var _this = this;
        this.dajian();
        this.w = this.djs.width;
        egret.Tween.get(this.ready)
            .to({ visible: 1 }, 300)
            .call(function () {
            egret.Tween.get(_this.go)
                .to({ visible: 1 }, 300);
        }, this)
            .to({ visible: 0 }, 300)
            .call(function () {
            egret.Tween.get(_this.go)
                .to({ visible: 0 }, 300);
        }, this);
        this.timerdjs();
        this.weitutest();
        this.addEventListener('JIAJIN', this.jiajin, this);
    };
    //获取随机出现的场景
    GameScene.prototype.dajian = function () {
        var sjs = Math.floor(Math.random() * 3);
        switch (sjs) {
            case 0:
                var a = new Bql();
                this.addChild(a);
                break;
            case 1:
                var b = new Dangao();
                this.addChild(b);
                break;
            case 2:
                var c = new Hanbao();
                this.addChild(c);
                break;
        }
    };
    //倒计时
    GameScene.prototype.timerdjs = function () {
        this.tim = new egret.Timer(250, 240);
        this.tim.start();
        this.tim.addEventListener(egret.TimerEvent.TIMER, this.ontimer, this);
        this.tim.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.jishijieshu, this);
    };
    GameScene.prototype.ontimer = function () {
        this.djs.width = this.w * ((this.tim.repeatCount - this.tim.currentCount) / this.tim.repeatCount);
        if ((this.tim.repeatCount - this.tim.currentCount) == 52) {
            SoundManager.Instance.stopBgMusic();
            SoundManager.Instance.playmiaoEffect();
        }
    };
    GameScene.prototype.jishijieshu = function () {
        var end = new EndScene(this.jin + '');
        SceneManager.Instance.changeScene(end);
    };
    //位图文本
    GameScene.prototype.weitutest = function () {
        var bt = new egret.BitmapText();
        bt.font = RES.getRes('font_fnt');
        bt.text = '0';
        this.addChild(bt);
        bt.x = 312;
        bt.y = 191;
        bt.width = 60;
        bt.height = 60;
        bt.scaleX = 2;
        bt.scaleY = 2;
        bt.textAlign = egret.HorizontalAlign.CENTER;
        bt.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.bt = bt;
    };
    //当完成一次时，斤数加一
    GameScene.prototype.jiajin = function () {
        this.jin++;
        this.bt.text = this.jin + '';
        switch (this.jin) {
            case 5:
                this.img_pz.source = 'role2_png';
                break;
            case 10:
                this.img_pz.source = 'role3_png';
                break;
        }
    };
    return GameScene;
}(Scene));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map