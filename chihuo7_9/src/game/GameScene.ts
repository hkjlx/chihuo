class GameScene extends Scene{
	public bt:egret.BitmapText;		//完成数量
	public djs:eui.Image;	//倒计时图片
	public img_pz:eui.Image;	//胖子图片


	public go:eui.Image;	//开始动画
	public ready:eui.Image;	//开始动画

	
	private tim:egret.Timer;//计时器
	private w :number;//倒计时图片宽度
	private jin:number = 0; //斤数

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/game/game.exml";
	}
	protected onComplete(){
		this.dajian();

		this.w = this.djs.width;
		
		
		egret.Tween.get(this.ready)
					.to({visible:1},300)
					.call(()=>{
						egret.Tween.get(this.go)
									.to({visible:1},300)
					},this)
					.to({visible:0},300)
					.call(()=>{
						egret.Tween.get(this.go)
									.to({visible:0},300)	
					},this);
		
		this.timerdjs();

		this.weitutest();
		this.addEventListener('JIAJIN',this.jiajin,this);
	}

	//获取随机出现的场景
	private dajian(){
		let sjs:number = Math.floor(Math.random()*3);
		switch (sjs){
			case 0:
				let a:Bql = new Bql();
				this.addChild(a);
				break;
			case 1:
				let b:Dangao = new Dangao();
				this.addChild(b);
				break;
			case 2:
				let c:Hanbao = new Hanbao();
				this.addChild(c);
				break;
		}
	}
	//倒计时
	private timerdjs(){
		this.tim = new egret.Timer(250,240);
		this.tim.start();
		this.tim.addEventListener(egret.TimerEvent.TIMER,this.ontimer,this);
		this.tim.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.jishijieshu,this);
	}
	
	private ontimer(){

		this.djs.width = this.w*((this.tim.repeatCount-this.tim.currentCount)/this.tim.repeatCount);
		if((this.tim.repeatCount-this.tim.currentCount)==52){
			SoundManager.Instance.stopBgMusic();
			SoundManager.Instance.playmiaoEffect();
		}
	}	
	private jishijieshu(){
		let end:EndScene = new EndScene(this.jin+'');
		SceneManager.Instance.changeScene(end);
	}
	//位图文本
	private weitutest(){
		let bt:egret.BitmapText = new egret.BitmapText();
		bt.font = RES.getRes('font_fnt');
		bt.text = '0';
		this.addChild(bt);
		bt.x = 312;
		bt.y = 191;
		bt.width = 60;
		bt.height =  60;
		bt.scaleX = 2;
		bt.scaleY = 2;
		bt.textAlign = egret.HorizontalAlign.CENTER;
		bt.verticalAlign = egret.VerticalAlign.MIDDLE;
		this.bt = bt;
	}
	//当完成一次时，斤数加一
	private jiajin(){
		this.jin++;
		this.bt.text = this.jin+'';
		switch (this.jin){
			case 5:
				this.img_pz.source = 'role2_png';
				break;
			case 10:
				this.img_pz.source = 'role3_png'
				break;
		}
	}
}