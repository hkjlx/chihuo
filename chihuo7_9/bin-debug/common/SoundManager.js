var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundManager = (function () {
    // private _voluem:number = 1;//音量
    function SoundManager() {
        var _this = this;
        this.isbgMusicComplete = false; //背景音乐是否加载完成
        this.isClickComplete = false;
        this.islianji01Complete = false;
        this.islianjioverComplete = false;
        this.isWrongComplete = false;
        this.ismiaoComplete = false;
        this._isMusic = true; // 背景音乐是否播放
        this._isEffect = true; //音效是否播放
        this.cs = 1; //控制背景音乐不会重复添加
        this.bgMusic = new egret.Sound();
        this.bgMusic.load("resource/images/music/gameBG101.mp3");
        this.bgMusic.addEventListener(egret.Event.COMPLETE, function () {
            _this.isbgMusicComplete = true;
        }, this);
        this.click = new egret.Sound();
        this.click.load("resource/images/music/lianji101.mp3");
        this.click.addEventListener(egret.Event.COMPLETE, function () {
            _this.isClickComplete = true;
        }, this);
        this.lianji01 = new egret.Sound();
        this.lianji01.load("resource/images/music/lianji102.mp3");
        this.lianji01.addEventListener(egret.Event.COMPLETE, function () {
            _this.islianji01Complete = true;
        }, this);
        this.lianjiover = new egret.Sound();
        this.lianjiover.load("resource/images/music/lianjiover101.mp3");
        this.lianjiover.addEventListener(egret.Event.COMPLETE, function () {
            _this.islianjioverComplete = true;
        }, this);
        this.wrong = new egret.Sound();
        this.wrong.load("resource/images/music/wrong01.mp3");
        this.wrong.addEventListener(egret.Event.COMPLETE, function () {
            _this.isWrongComplete = true;
        }, this);
        this.miao = new egret.Sound();
        this.miao.load("resource/images/music/10sec01.mp3");
        this.miao.addEventListener(egret.Event.COMPLETE, function () {
            _this.ismiaoComplete = true;
        }, this);
    }
    Object.defineProperty(SoundManager, "Instance", {
        get: function () {
            if (!SoundManager._manager) {
                SoundManager._manager = new SoundManager();
            }
            return SoundManager._manager;
        },
        enumerable: true,
        configurable: true
    });
    //播放背景音乐
    SoundManager.prototype.playBgMusic = function () {
        if (this.isbgMusicComplete && this.isMusic && this.cs) {
            this.bgMusic_channel = this.bgMusic.play(0, 0);
            this.cs = 0;
        }
    };
    //停止背景音乐
    SoundManager.prototype.stopBgMusic = function () {
        if (this.bgMusic_channel) {
            this.bgMusic_channel.stop();
            this.bgMusic_channel = null;
            this.cs = 1;
        }
    };
    //播放音效
    SoundManager.prototype.playClickEffect = function () {
        // this.isEffect 调用getter方法
        if (this.isClickComplete && this.isEffect) {
            this.click.play(0, 1);
        }
    };
    //播放成功音效
    SoundManager.prototype.playlianji01Effect = function () {
        if (this.islianji01Complete && this.isEffect) {
            this.lianji01.play(0, 1);
        }
    };
    //播放结算音效
    SoundManager.prototype.playlianjioverEffect = function () {
        if (this.islianjioverComplete && this.isEffect) {
            this.lianjiover.play(0, 1);
        }
    };
    //播放错误音效
    SoundManager.prototype.playWrongEffect = function () {
        if (this.isWrongComplete && this.isEffect) {
            this.wrong.play(0, 1);
        }
    };
    //播放时间快结束时的音效
    SoundManager.prototype.playmiaoEffect = function () {
        if (this.ismiaoComplete && this.isMusic) {
            this.miao.play(0, 1);
        }
    };
    //设置音量
    SoundManager.prototype.setVolume = function (v) {
        if (this.bgMusic_channel) {
            this.bgMusic_channel.volume = v;
        }
    };
    Object.defineProperty(SoundManager.prototype, "isMusic", {
        get: function () {
            var ret = egret.localStorage.getItem("isMusic");
            if (ret == "true" || !ret) {
                this._isMusic = true;
            }
            else {
                this._isMusic = false;
            }
            return this._isMusic;
        },
        set: function (b) {
            this._isMusic = b;
            egret.localStorage.setItem("isMusic", b.toString());
            if (b) {
                //播放声音
                this.playBgMusic();
            }
            else {
                //关闭声音
                this.stopBgMusic();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "isEffect", {
        //获取_isEffect属性的值
        get: function () {
            var ret = egret.localStorage.getItem("isEffect");
            if (ret == "true" || ret == null) {
                this._isEffect = true;
            }
            else {
                this._isEffect = false;
            }
            return this._isEffect;
        },
        //设置_isEffect属性的值
        set: function (b) {
            this._isEffect = b;
            egret.localStorage.setItem("isEffect", b.toString());
        },
        enumerable: true,
        configurable: true
    });
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
//# sourceMappingURL=SoundManager.js.map