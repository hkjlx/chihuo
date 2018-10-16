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
var Hanbao = (function (_super) {
    __extends(Hanbao, _super);
    function Hanbao() {
        var _this = _super.call(this) || this;
        _this.shuzu = []; //存放答案的数组
        _this.shuzu2 = []; //存放点击的数组
        _this.dj = 0; //点击次数
        _this.skinName = "resource/eui_skins/game/hanbao.exml";
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.oncomplete, _this);
        return _this;
    }
    Hanbao.prototype.oncomplete = function () {
        this.suijidaan();
        for (var i = 0; i < 3; i++) {
            this.gp_xx.getChildAt(i).addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontap, this);
        }
    };
    Hanbao.prototype.ontap = function (e) {
        SoundManager.Instance.playClickEffect();
        this.dj++;
        if (this.dj < 4) {
            var img = this.gp_xs.getChildAt(this.dj + 2);
            img.source = e.target.source;
            this.shuzu2.push(e.target.source);
            var tpy = img.y;
            img.y = 0;
            egret.Tween.get(img)
                .to({ y: tpy }, 300);
        }
        if (this.dj == 3) {
            if (this.shuzu[0] == this.shuzu2[0] && this.shuzu[1] == this.shuzu2[1] && this.shuzu[2] == this.shuzu2[2]) {
                SoundManager.Instance.playlianjioverEffect();
                this.parent.dispatchEvent(new egret.Event('JIAJIN'));
            }
            else {
                SoundManager.Instance.playWrongEffect();
                egret.Tween.get(this.img_cw)
                    .to({ visible: true })
                    .wait(500)
                    .to({ visible: false });
            }
            this.chuangj();
        }
    };
    //设置显示答案的容器
    Hanbao.prototype.suijidaan = function () {
        var arr = ['macaronsBule_png', 'macaronsGreen_png', 'macaronsRed_png'];
        // console.log(arr);
        for (var i = 0; i < arr.length; i++) {
            var sjs = Math.floor(Math.random() * arr.length);
            var dx = this.gp_daa.getChildAt(3 + i);
            dx.source = arr[sjs];
            this.shuzu.push(arr[sjs]);
        }
    };
    //获取随机出现的场景
    Hanbao.prototype.dajian = function () {
        var sjs = Math.floor(Math.random() * 3);
        switch (sjs) {
            case 0:
                var a = new Bql();
                this.parent.addChild(a);
                break;
            case 1:
                var b = new Dangao();
                this.parent.addChild(b);
                break;
            case 2:
                var c = new Hanbao();
                this.parent.addChild(c);
                break;
        }
    };
    //延迟界面的切换
    Hanbao.prototype.timerscene = function () {
        this.dajian();
        this.parent.removeChild(this);
    };
    //创建计时器
    Hanbao.prototype.chuangj = function () {
        this.tim = new egret.Timer(500, 1);
        this.tim.start();
        this.tim.addEventListener(egret.TimerEvent.TIMER, this.timerscene, this);
    };
    return Hanbao;
}(eui.Component));
__reflect(Hanbao.prototype, "Hanbao");
//# sourceMappingURL=Hanbao.js.map