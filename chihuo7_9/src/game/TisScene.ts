class TisScene extends Scene{
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/game/tsScene.exml";
	}
	protected onComplete(){
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontap,this);
	}
	private ontap(){
		// console.log('点击了');
		SoundManager.Instance.playClickEffect();
		let game:GameScene = new GameScene();
		SceneManager.Instance.changeScene(game);
	}
}