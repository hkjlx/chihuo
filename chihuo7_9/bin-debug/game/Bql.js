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
var Bql = (function (_super) {
    __extends(Bql, _super);
    function Bql() {
        var _this = _super.call(this) || this;
        _this.shuzu = []; //存放答案的数组
        _this.shuzu2 = []; //存放点击的数组
        _this.dj = 0; //点击次数
        _this.skinName = "resource/eui_skins/game/bql.exml";
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.oncomplete, _this);
        return _this;
    }
    Bql.prototype.oncomplete = function () {
        this.sjtm = Math.floor(Math.random() * 3 + 2);
        this.suijidaan();
        for (var i = 0; i < 3; i++) {
            this.gp_xx.getChildAt(i).addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontap, this);
        }
    };
    Bql.prototype.ontap = function (e) {
        SoundManager.Instance.playClickEffect();
        this.dj++;
        // console.log(this.dj);
        if (this.dj < this.sjtm + 1) {
            var img = this.gp_xs.getChildAt(this.dj);
            var tpy = img.y;
            img.y = 0;
            img.source = e.target.source;
            this.shuzu2.push(e.target.source);
            egret.Tween.get(img)
                .to({ y: tpy }, 300);
        }
        var sfcg = true;
        if (this.dj == this.sjtm) {
            for (var i = 0; i < this.sjtm; i++) {
                if (this.shuzu[i] != this.shuzu2[i]) {
                    sfcg = false;
                }
            }
            if (sfcg) {
                SoundManager.Instance.playlianjioverEffect();
                this.parent.dispatchEvent(new egret.Event('JIAJIN'));
            }
            else {
                SoundManager.Instance.playWrongEffect();
                egret.Tween.get(this.img_cw)
                    .to({ visible: true })
                    .wait(300)
                    .to({ visible: false });
            }
            this.chuangj();
        }
    };
    //设置显示答案的容器
    Bql.prototype.suijidaan = function () {
        var arr = ['iceBule_png', 'iceGreen_png', 'iceRed_png'];
        for (var i = 0; i < this.sjtm; i++) {
            var sjs = Math.floor(Math.random() * arr.length);
            var dx = this.gp_daa.getChildAt(i + 1);
            dx.source = arr[sjs];
            this.shuzu.push(arr[sjs]);
        }
    };
    //获取随机出现的场景
    Bql.prototype.dajian = function () {
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
    Bql.prototype.timerscene = function () {
        this.dajian();
        this.parent.removeChild(this);
    };
    //创建计时器
    Bql.prototype.chuangj = function () {
        this.tim = new egret.Timer(500, 1);
        this.tim.start();
        this.tim.addEventListener(egret.TimerEvent.TIMER, this.timerscene, this);
    };
    return Bql;
}(eui.Component));
__reflect(Bql.prototype, "Bql");
//# sourceMappingURL=Bql.js.map