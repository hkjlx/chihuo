class EndScene extends Scene{
	public btn_cw:eui.Button;
	private wz:string;
	public img_pz:eui.Image;


	public constructor( wz:string) {
		super();
		this.skinName = "resource/eui_skins/game/end.exml";
		this.wz = wz;
	}
	protected onComplete(){
		SoundManager.Instance.playBgMusic();
		this.chuangjwz(this.wz,255,811);
		this.chuangjwz(this.wz,444,811);

		this.btn_cw.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onchongwan,this);
		let tp:number = Number(this.wz);
		if(tp>=5 && tp<10){
			this.img_pz.source = 'role2_png';
		}else if(tp>=10){
			this.img_pz.source = 'role3_png';
		}else if(tp<5){
			this.img_pz.source = 'role1_png';
		}
	}
	private onchongwan(){
		
		SoundManager.Instance.playClickEffect();
		let ts:StartScene = new StartScene();
		SceneManager.Instance.changeScene(ts);
	}
	//创建文图文字
	private chuangjwz(zt:string,x:number,y:number){
		let wz:egret.BitmapText = new egret.BitmapText();
		wz.font = RES.getRes("font_fnt");
		wz.text = zt;
		wz.x = x;
		wz.y = y;
		wz.width = 35;
		wz.height = 30;
		wz.textAlign = egret.HorizontalAlign.CENTER;
		wz.verticalAlign = egret.VerticalAlign.MIDDLE;
		this.addChild(wz);
	}
}