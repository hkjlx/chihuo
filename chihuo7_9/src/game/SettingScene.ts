class SettingScene extends Scene{
	public btn_bgmusic:eui.Button;//背景音乐按钮
	public btn_effect:eui.Button;//音效按钮
	public btn_ok:eui.Button;//确认按钮

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/game/settingScene.exml";
	}
	protected onComplete(){
		this.btn_bgmusic.currentState = SoundManager.Instance.isMusic?"up":"noPlay";
		this.btn_effect.currentState = SoundManager.Instance.isEffect?"up":"noPlay";

		this.btn_bgmusic.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapBgMusic,this);
		this.btn_effect.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapEffect,this);
		this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTapOk,this);
	}
	//点击背景音乐按钮时
	private onTapBgMusic(){
		SoundManager.Instance.isMusic = !SoundManager.Instance.isMusic;
		if(!SoundManager.Instance.isMusic){
			this.btn_bgmusic.currentState = "noPlay";
		}else{
			this.btn_bgmusic.currentState = "";
		}
		SoundManager.Instance.playClickEffect();
	}
	//点击音效按钮时
	private onTapEffect(){
		SoundManager.Instance.isEffect = !SoundManager.Instance.isEffect;
		if(!SoundManager.Instance.isEffect){
			this.btn_effect.currentState = "noPlay";
		}else{
			this.btn_effect.currentState = "";
		}
		SoundManager.Instance.playClickEffect();
	}
	//点击确认按钮时
	private onTapOk(){
		SoundManager.Instance.playClickEffect();
		SceneManager.Instance.popScene();
	}
}
