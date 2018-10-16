class Hanbao extends Scene{
	public gp_daa:eui.Group;//显示答案
	public gp_xs:eui.Group;//显示自己选择的物品
	public gp_xx:eui.Group;//提供选择的物品
	public img_cw:eui.Image;//错误图片

	private shuzu:string[]=[];//存放答案的数组
	private shuzu2:string[] = [];//存放点击的数组

	private tim:egret.Timer;//延迟界面的切换
	
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/game/hanbao.exml";
	}
	protected onComplete(){
		this.addEventListener(eui.UIEvent.CREATION_COMPLETE,this.oncomplete,this);	
	}	
	private oncomplete(){
		this.suijidaan();
		
		for(let i:number = 0;i<3;i++){
			this.gp_xx.getChildAt(i).addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontap,this);
		}	
	}
	
	private dj:number=0;	//点击次数
	private ontap(e:egret.TouchEvent){
		SoundManager.Instance.playClickEffect();
		this.dj++;
		if(this.dj<4){
			let img = <eui.Image>this.gp_xs.getChildAt(this.dj+2);
			img.source = e.target.source;
			this.shuzu2.push(e.target.source);
			let tpy = img.y;
			img.y = 0;
			egret.Tween.get(img)
						
						.to({y:tpy},300);
						
		}
		if(this.dj == 3){
			if(this.shuzu[0] == this.shuzu2[0] && this.shuzu[1] == this.shuzu2[1] && this.shuzu[2] == this.shuzu2[2]){
				SoundManager.Instance.playlianjioverEffect();
				this.parent.dispatchEvent(new egret.Event('JIAJIN'));
			}else{
				SoundManager.Instance.playWrongEffect();
				egret.Tween.get(this.img_cw)
							.to({visible:true})
							.wait(500)
							.to({visible:false});
				
			}
			this.chuangj();
		
		}	
	}
	//设置显示答案的容器
	private suijidaan(){
		let arr = ['macaronsBule_png','macaronsGreen_png','macaronsRed_png'];
		
		// console.log(arr);
		for(let i:number=0;i<arr.length;i++){
			let sjs:number = Math.floor(Math.random()*arr.length);
			let dx = <eui.Image>this.gp_daa.getChildAt(3+i);
			dx.source = arr[sjs];
			this.shuzu.push(arr[sjs]);
		}
		
	}
	//获取随机出现的场景
	private dajian(){
		let sjs:number = Math.floor(Math.random()*3);
		switch (sjs) {
			case 0:
				let a: Bql = new Bql();
				SceneManager.Instance.pushScene(a);
				break;
			case 1:
				let b: Dangao = new Dangao();
				SceneManager.Instance.pushScene(b);
				break;
			case 2:
				let c: Hanbao = new Hanbao();
				SceneManager.Instance.pushScene(c);
				break;
		}
	}
	//延迟界面的切换
	private timerscene(){
		this.dajian();
		SceneManager.Instance.popScene();
	}
	//创建计时器
	private chuangj(){
		this.tim = new egret.Timer(500,1);
		this.tim.start();
		this.tim.addEventListener(egret.TimerEvent.TIMER,this.timerscene,this);
	}
}