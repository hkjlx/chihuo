var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,s){function a(e){try{c(i.next(e))}catch(t){s(t)}}function o(e){try{c(i["throw"](e))}catch(t){s(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,o)}c((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return i([e,t])}}function i(n){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,s&&(a=s[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(s,n[1])).done)return a;switch(s=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,s=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){c.label=n[1];break}if(6===n[0]&&c.label<a[1]){c.label=a[1],a=n;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(n);break}a[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(i){n=[6,i],s=0}finally{r=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,s,a,o,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},Scene=function(e){function t(){var t=e.call(this)||this;return t.addEventListener(eui.UIEvent.CREATION_COMPLETE,t.onComplete,t),t}return __extends(t,e),t}(eui.Component);__reflect(Scene.prototype,"Scene");var SoundManager=function(){function e(){var e=this;this.isbgMusicComplete=!1,this.isClickComplete=!1,this.islianji01Complete=!1,this.islianjioverComplete=!1,this.isWrongComplete=!1,this.ismiaoComplete=!1,this._isMusic=!0,this._isEffect=!0,this.cs=1,this.bgMusic=new egret.Sound,this.bgMusic.load("resource/images/music/gameBG101.mp3"),this.bgMusic.addEventListener(egret.Event.COMPLETE,function(){e.isbgMusicComplete=!0},this),this.click=new egret.Sound,this.click.load("resource/images/music/lianji101.mp3"),this.click.addEventListener(egret.Event.COMPLETE,function(){e.isClickComplete=!0},this),this.lianji01=new egret.Sound,this.lianji01.load("resource/images/music/lianji102.mp3"),this.lianji01.addEventListener(egret.Event.COMPLETE,function(){e.islianji01Complete=!0},this),this.lianjiover=new egret.Sound,this.lianjiover.load("resource/images/music/lianjiover101.mp3"),this.lianjiover.addEventListener(egret.Event.COMPLETE,function(){e.islianjioverComplete=!0},this),this.wrong=new egret.Sound,this.wrong.load("resource/images/music/wrong01.mp3"),this.wrong.addEventListener(egret.Event.COMPLETE,function(){e.isWrongComplete=!0},this),this.miao=new egret.Sound,this.miao.load("resource/images/music/10sec01.mp3"),this.miao.addEventListener(egret.Event.COMPLETE,function(){e.ismiaoComplete=!0},this)}return Object.defineProperty(e,"Instance",{get:function(){return e._manager||(e._manager=new e),e._manager},enumerable:!0,configurable:!0}),e.prototype.playBgMusic=function(){this.isbgMusicComplete&&this.isMusic&&this.cs&&(this.bgMusic_channel=this.bgMusic.play(0,0),this.cs=0)},e.prototype.stopBgMusic=function(){this.bgMusic_channel&&(this.bgMusic_channel.stop(),this.bgMusic_channel=null,this.cs=1)},e.prototype.playClickEffect=function(){this.isClickComplete&&this.isEffect&&this.click.play(0,1)},e.prototype.playlianji01Effect=function(){this.islianji01Complete&&this.isEffect&&this.lianji01.play(0,1)},e.prototype.playlianjioverEffect=function(){this.islianjioverComplete&&this.isEffect&&this.lianjiover.play(0,1)},e.prototype.playWrongEffect=function(){this.isWrongComplete&&this.isEffect&&this.wrong.play(0,1)},e.prototype.playmiaoEffect=function(){this.ismiaoComplete&&this.isMusic&&this.miao.play(0,1)},e.prototype.setVolume=function(e){this.bgMusic_channel&&(this.bgMusic_channel.volume=e)},Object.defineProperty(e.prototype,"isMusic",{get:function(){var e=egret.localStorage.getItem("isMusic");return"true"!=e&&e?this._isMusic=!1:this._isMusic=!0,this._isMusic},set:function(e){this._isMusic=e,egret.localStorage.setItem("isMusic",e.toString()),e?this.playBgMusic():this.stopBgMusic()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isEffect",{get:function(){var e=egret.localStorage.getItem("isEffect");return"true"==e||null==e?this._isEffect=!0:this._isEffect=!1,this._isEffect},set:function(e){this._isEffect=e,egret.localStorage.setItem("isEffect",e.toString())},enumerable:!0,configurable:!0}),e}();__reflect(SoundManager.prototype,"SoundManager");var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[4,platform.login()];case 2:return t.sent(),[4,platform.getUserInfo()];case 3:return e=t.sent(),console.log(e),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var i=new eui.Theme("resource/default.thm.json",e.stage);i.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){SoundManager.Instance,SceneManager.Instance.rootLayer=this;var e=new StartScene;SceneManager.Instance.changeScene(e)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,i){function r(e){t.call(i,e)}function s(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),n.call(i))}var a=this;"undefined"!=typeof generateEUI?egret.callLater(function(){t.call(i,generateEUI)},this):"undefined"!=typeof generateEUI2?RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),r(e),egret.callLater(function(){t.call(i,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_TEXT))},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var GameData=function(){function e(){}return Object.defineProperty(e,"GUANQIA",{get:function(){var t=egret.localStorage.getItem("guanqia");return null==t||""==t?e._GUANQIA=1:e._GUANQIA=Number(t),e._GUANQIA},set:function(t){egret.localStorage.setItem("guanqia",t.toString()),e._GUANQIA=t},enumerable:!0,configurable:!0}),e.getGameLevelData=function(){RES.getResAsync("questions_json",function(t){e.GameLevelData=t,e.GameLevels=t.length},this)},e.getLevelData=function(t){return t<=e.GameLevels?e.GameLevelData[t-1]:void console.log("你太厉害了，通关啦！")},e}();__reflect(GameData.prototype,"GameData");var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function i(i){t.call(n,i,e)}if(RES.hasRes(e)){var r=RES.getRes(e);r?i(r):RES.getResAsync(e,i,this)}else RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var SceneManager=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return null==e._manager&&(e._manager=new e),e._manager},enumerable:!0,configurable:!0}),e.prototype.changeScene=function(e){this.currentScene&&(this.rootLayer.removeChild(this.currentScene),this.currentScene=null),this.rootLayer.addChild(e),this.currentScene=e},e.prototype.pushScene=function(e){this.pop_scene||(this.rootLayer.addChild(e),this.pop_scene=e,console.log("push"))},e.prototype.popScene=function(){this.pop_scene&&(this.rootLayer.removeChild(this.pop_scene),this.pop_scene=null)},e}();__reflect(SceneManager.prototype,"SceneManager");var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t.addEventListener(egret.Event.ADDED_TO_STAGE,t.onAdd,t),t.addEventListener(egret.Event.REMOVED_FROM_STAGE,t.onRemove,t),t}return __extends(t,e),t.prototype.onAdd=function(){this.width=this.stage.stageWidth,this.height=this.stage.stageHeight,this.addEventListener(egret.Event.ENTER_FRAME,this.onFrame,this)},t.prototype.onFrame=function(){this.bt&&(this.bt.rotation+=5)},t.prototype.onRemove=function(){this.hasEventListener(egret.Event.ENTER_FRAME)&&this.removeEventListener(egret.Event.ENTER_FRAME,this.onFrame,this)},t.prototype.createView=function(){var e=this;RES.getResByUrl("resource/images/loading2.png",function(t,n){e.bt=new egret.Bitmap,e.bt.texture=t,e.bt.anchorOffsetX=e.bt.width/2,e.bt.anchorOffsetY=e.bt.height/2,e.bt.x=e.width/2,e.bt.y=e.height/2,e.addChild(e.bt),e.textField=new egret.TextField,e.addChild(e.textField),e.textField.width=e.bt.width,e.textField.height=e.bt.height,e.textField.anchorOffsetX=e.textField.width/2,e.textField.anchorOffsetY=e.textField.height/2,e.textField.x=e.width/2,e.textField.y=e.height/2,e.textField.textAlign=egret.HorizontalAlign.CENTER,e.textField.verticalAlign=egret.VerticalAlign.MIDDLE,e.textField.size=16},this,RES.ResourceItem.TYPE_IMAGE)},t.prototype.onProgress=function(e,t){this.textField&&(this.textField.text=e+"/"+t)},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Bql=function(e){function t(){var t=e.call(this)||this;return t.shuzu=[],t.shuzu2=[],t.dj=0,t.skinName="resource/eui_skins/game/bql.exml",t.addEventListener(eui.UIEvent.CREATION_COMPLETE,t.oncomplete,t),t}return __extends(t,e),t.prototype.oncomplete=function(){this.sjtm=Math.floor(3*Math.random()+2),this.suijidaan();for(var e=0;3>e;e++)this.gp_xx.getChildAt(e).addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontap,this)},t.prototype.ontap=function(e){if(SoundManager.Instance.playClickEffect(),this.dj++,this.dj<this.sjtm+1){var t=this.gp_xs.getChildAt(this.dj),n=t.y;t.y=0,t.source=e.target.source,this.shuzu2.push(e.target.source),egret.Tween.get(t).to({y:n},300)}var i=!0;if(this.dj==this.sjtm){for(var r=0;r<this.sjtm;r++)this.shuzu[r]!=this.shuzu2[r]&&(i=!1);i?(SoundManager.Instance.playlianjioverEffect(),this.parent.dispatchEvent(new egret.Event("JIAJIN"))):(SoundManager.Instance.playWrongEffect(),egret.Tween.get(this.img_cw).to({visible:!0}).wait(300).to({visible:!1})),this.chuangj()}},t.prototype.suijidaan=function(){for(var e=["iceBule_png","iceGreen_png","iceRed_png"],t=0;t<this.sjtm;t++){var n=Math.floor(Math.random()*e.length),i=this.gp_daa.getChildAt(t+1);i.source=e[n],this.shuzu.push(e[n])}},t.prototype.dajian=function(){var e=Math.floor(3*Math.random());switch(e){case 0:var n=new t;this.parent.addChild(n);break;case 1:var i=new Dangao;this.parent.addChild(i);break;case 2:var r=new Hanbao;this.parent.addChild(r)}},t.prototype.timerscene=function(){this.dajian(),this.parent.removeChild(this)},t.prototype.chuangj=function(){this.tim=new egret.Timer(500,1),this.tim.start(),this.tim.addEventListener(egret.TimerEvent.TIMER,this.timerscene,this)},t}(eui.Component);__reflect(Bql.prototype,"Bql");var Dangao=function(e){function t(){var t=e.call(this)||this;return t.shuzu=[],t.shuzu2=[],t.dj=0,t.skinName="resource/eui_skins/game/dangao.exml",t.addEventListener(eui.UIEvent.CREATION_COMPLETE,t.oncomplete,t),t}return __extends(t,e),t.prototype.oncomplete=function(){this.sjtm=Math.floor(3*Math.random()+2),this.suijidaan();for(var e=0;3>e;e++)this.gp_xx.getChildAt(e).addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontap,this)},t.prototype.ontap=function(e){if(SoundManager.Instance.playClickEffect(),this.dj++,this.dj<this.sjtm+1){var t=this.gp_xs.getChildAt(this.dj),n=t.y;t.y=0,t.source=e.target.source,this.shuzu2.push(e.target.source),egret.Tween.get(t).to({y:n},300)}var i=!0;if(this.dj==this.sjtm){for(var r=0;r<this.sjtm;r++)this.shuzu[r]!=this.shuzu2[r]&&(i=!1);i?(SoundManager.Instance.playlianjioverEffect(),this.parent.dispatchEvent(new egret.Event("JIAJIN"))):(SoundManager.Instance.playWrongEffect(),egret.Tween.get(this.img_cw).to({visible:!0}).wait(500).to({visible:!1})),this.chuangj()}},t.prototype.suijidaan=function(){for(var e=["cakeGreen_png","cakeBlue_png","cakeRed_png"],t=0;t<this.sjtm;t++){var n=Math.floor(Math.random()*e.length),i=this.gp_daa.getChildAt(t+1);i.source=e[n],this.shuzu.push(e[n])}},t.prototype.dajian=function(){var e=Math.floor(3*Math.random());switch(e){case 0:var n=new Bql;this.parent.addChild(n);break;case 1:var i=new t;this.parent.addChild(i);break;case 2:var r=new Hanbao;this.parent.addChild(r)}},t.prototype.timerscene=function(){this.dajian(),this.parent.removeChild(this)},t.prototype.chuangj=function(){this.tim=new egret.Timer(500,1),this.tim.start(),this.tim.addEventListener(egret.TimerEvent.TIMER,this.timerscene,this)},t}(eui.Component);__reflect(Dangao.prototype,"Dangao");var EndScene=function(e){function t(t){var n=e.call(this)||this;return n.skinName="resource/eui_skins/game/end.exml",n.wz=t,n}return __extends(t,e),t.prototype.onComplete=function(){SoundManager.Instance.playBgMusic(),this.chuangjwz(this.wz,255,811),this.chuangjwz(this.wz,444,811),this.btn_cw.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onchongwan,this);var e=Number(this.wz);e>=5&&10>e?this.img_pz.source="role2_png":e>=10?this.img_pz.source="role3_png":5>e&&(this.img_pz.source="role1_png")},t.prototype.onchongwan=function(){SoundManager.Instance.playClickEffect();var e=new StartScene;SceneManager.Instance.changeScene(e)},t.prototype.chuangjwz=function(e,t,n){var i=new egret.BitmapText;i.font=RES.getRes("font_fnt"),i.text=e,i.x=t,i.y=n,i.width=35,i.height=30,i.textAlign=egret.HorizontalAlign.CENTER,i.verticalAlign=egret.VerticalAlign.MIDDLE,this.addChild(i)},t}(Scene);__reflect(EndScene.prototype,"EndScene");var GameScene=function(e){function t(){var t=e.call(this)||this;return t.jin=0,t.skinName="resource/eui_skins/game/game.exml",t}return __extends(t,e),t.prototype.onComplete=function(){var e=this;this.dajian(),this.w=this.djs.width,egret.Tween.get(this.ready).to({visible:1},300).call(function(){egret.Tween.get(e.go).to({visible:1},300)},this).to({visible:0},300).call(function(){egret.Tween.get(e.go).to({visible:0},300)},this),this.timerdjs(),this.weitutest(),this.addEventListener("JIAJIN",this.jiajin,this)},t.prototype.dajian=function(){var e=Math.floor(3*Math.random());switch(e){case 0:var t=new Bql;this.addChild(t);break;case 1:var n=new Dangao;this.addChild(n);break;case 2:var i=new Hanbao;this.addChild(i)}},t.prototype.timerdjs=function(){this.tim=new egret.Timer(250,240),this.tim.start(),this.tim.addEventListener(egret.TimerEvent.TIMER,this.ontimer,this),this.tim.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.jishijieshu,this)},t.prototype.ontimer=function(){this.djs.width=this.w*((this.tim.repeatCount-this.tim.currentCount)/this.tim.repeatCount),this.tim.repeatCount-this.tim.currentCount==52&&(SoundManager.Instance.stopBgMusic(),SoundManager.Instance.playmiaoEffect())},t.prototype.jishijieshu=function(){var e=new EndScene(this.jin+"");SceneManager.Instance.changeScene(e)},t.prototype.weitutest=function(){var e=new egret.BitmapText;e.font=RES.getRes("font_fnt"),e.text="0",this.addChild(e),e.x=312,e.y=191,e.width=60,e.height=60,e.scaleX=2,e.scaleY=2,e.textAlign=egret.HorizontalAlign.CENTER,e.verticalAlign=egret.VerticalAlign.MIDDLE,this.bt=e},t.prototype.jiajin=function(){switch(this.jin++,this.bt.text=this.jin+"",this.jin){case 5:this.img_pz.source="role2_png";break;case 10:this.img_pz.source="role3_png"}},t}(Scene);__reflect(GameScene.prototype,"GameScene");var Hanbao=function(e){function t(){var t=e.call(this)||this;return t.shuzu=[],t.shuzu2=[],t.dj=0,t.skinName="resource/eui_skins/game/hanbao.exml",t.addEventListener(eui.UIEvent.CREATION_COMPLETE,t.oncomplete,t),t}return __extends(t,e),t.prototype.oncomplete=function(){this.suijidaan();for(var e=0;3>e;e++)this.gp_xx.getChildAt(e).addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontap,this)},t.prototype.ontap=function(e){if(SoundManager.Instance.playClickEffect(),this.dj++,this.dj<4){var t=this.gp_xs.getChildAt(this.dj+2);t.source=e.target.source,this.shuzu2.push(e.target.source);var n=t.y;t.y=0,egret.Tween.get(t).to({y:n},300)}3==this.dj&&(this.shuzu[0]==this.shuzu2[0]&&this.shuzu[1]==this.shuzu2[1]&&this.shuzu[2]==this.shuzu2[2]?(SoundManager.Instance.playlianjioverEffect(),this.parent.dispatchEvent(new egret.Event("JIAJIN"))):(SoundManager.Instance.playWrongEffect(),egret.Tween.get(this.img_cw).to({visible:!0}).wait(500).to({visible:!1})),this.chuangj())},t.prototype.suijidaan=function(){for(var e=["macaronsBule_png","macaronsGreen_png","macaronsRed_png"],t=0;t<e.length;t++){var n=Math.floor(Math.random()*e.length),i=this.gp_daa.getChildAt(3+t);i.source=e[n],this.shuzu.push(e[n])}},t.prototype.dajian=function(){var e=Math.floor(3*Math.random());switch(e){case 0:var n=new Bql;this.parent.addChild(n);break;case 1:var i=new Dangao;this.parent.addChild(i);break;case 2:var r=new t;this.parent.addChild(r)}},t.prototype.timerscene=function(){this.dajian(),this.parent.removeChild(this)},t.prototype.chuangj=function(){this.tim=new egret.Timer(500,1),this.tim.start(),this.tim.addEventListener(egret.TimerEvent.TIMER,this.timerscene,this)},t}(eui.Component);__reflect(Hanbao.prototype,"Hanbao");var SettingScene=function(e){function t(){var t=e.call(this)||this;return t.skinName="resource/eui_skins/game/settingScene.exml",t}return __extends(t,e),t.prototype.onComplete=function(){this.btn_bgmusic.currentState=SoundManager.Instance.isMusic?"up":"noPlay",this.btn_effect.currentState=SoundManager.Instance.isEffect?"up":"noPlay",this.btn_bgmusic.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapBgMusic,this),this.btn_effect.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapEffect,this),this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapOk,this)},t.prototype.onTapBgMusic=function(){SoundManager.Instance.isMusic=!SoundManager.Instance.isMusic,SoundManager.Instance.isMusic?this.btn_bgmusic.currentState="":this.btn_bgmusic.currentState="noPlay",SoundManager.Instance.playClickEffect()},t.prototype.onTapEffect=function(){SoundManager.Instance.isEffect=!SoundManager.Instance.isEffect,SoundManager.Instance.isEffect?this.btn_effect.currentState="":this.btn_effect.currentState="noPlay",SoundManager.Instance.playClickEffect()},t.prototype.onTapOk=function(){SoundManager.Instance.playClickEffect(),SceneManager.Instance.popScene()},t}(Scene);__reflect(SettingScene.prototype,"SettingScene");var StartScene=function(e){function t(){var t=e.call(this)||this;return t.skinName="resource/eui_skins/game/start.exml",t}return __extends(t,e),t.prototype.onComplete=function(){this.btn_ks.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onkaishi,this),this.btn_sz.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onshezhi,this)},t.prototype.onkaishi=function(){SoundManager.Instance.playBgMusic(),SoundManager.Instance.playClickEffect();var e=new TisScene;SceneManager.Instance.changeScene(e)},t.prototype.onshezhi=function(){SoundManager.Instance.playClickEffect();var e=new SettingScene;SceneManager.Instance.pushScene(e)},t}(Scene);__reflect(StartScene.prototype,"StartScene");var TisScene=function(e){function t(){var t=e.call(this)||this;return t.skinName="resource/eui_skins/game/tsScene.exml",t}return __extends(t,e),t.prototype.onComplete=function(){this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontap,this)},t.prototype.ontap=function(){SoundManager.Instance.playClickEffect();var e=new GameScene;SceneManager.Instance.changeScene(e)},t}(Scene);__reflect(TisScene.prototype,"TisScene");