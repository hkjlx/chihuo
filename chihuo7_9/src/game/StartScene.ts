class StartScene extends Scene{
	public btn_ks:eui.Button;	//游戏开始按钮
	public btn_sz:eui.Button;	//设置按钮

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/game/start.exml";
	}
	protected onComplete(){
		this.btn_ks.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onkaishi,this);
		this.btn_sz.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onshezhi,this);
	}
	//点击开始游戏按钮
	private onkaishi(){
		SoundManager.Instance.playBgMusic();
		SoundManager.Instance.playClickEffect();
		let ts:TisScene = new TisScene();
		SceneManager.Instance.changeScene(ts);
	}
	//点击设置按钮
	private onshezhi(){
		SoundManager.Instance.playClickEffect();
		let sz:SettingScene = new SettingScene();
		SceneManager.Instance.pushScene(sz);
	}
}