class Dangao extends Scene {
	public gp_daa: eui.Group;//显示答案
	public gp_xs: eui.Group;//显示自己选择的物品
	public gp_xx: eui.Group;//提供选择的物品
	public img_cw: eui.Image;//错误图片


	private shuzu: string[] = [];//存放答案的数组
	private shuzu2: string[] = [];//存放点击的数组
	private sjtm: number;	//随机生成题目个数

	private tim: egret.Timer;//延迟界面的切换

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/game/dangao.exml";
	
	}
	protected onComplete(){
		this.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.oncomplete, this);
	}	
	private oncomplete() {
		this.sjtm = Math.floor(Math.random() * 3 + 2);
		this.suijidaan();


		for (let i: number = 0; i < 3; i++) {
			this.gp_xx.getChildAt(i).addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontap, this);
		}


	}
	private dj: number = 0;	//点击次数
	private ontap(e: egret.TouchEvent) {
		SoundManager.Instance.playClickEffect();
		// console.log(e.target.source);
		this.dj++;
		// console.log(this.dj);
		if (this.dj < this.sjtm + 1) {
			let img = <eui.Image>this.gp_xs.getChildAt(this.dj);
			let tpy = img.y;
			img.y = 0;
			img.source = e.target.source;
			this.shuzu2.push(e.target.source);

			egret.Tween.get(img)
				.to({ y: tpy}, 300)
				

		}
		let sfcg: boolean = true;
		if (this.dj == this.sjtm) {
			for (let i: number = 0; i < this.sjtm; i++) {
				if (this.shuzu[i] != this.shuzu2[i]) {
					sfcg = false;
				}
			}
			if (sfcg) {
				//成功
				SoundManager.Instance.playlianjioverEffect();
				this.parent.dispatchEvent(new egret.Event('JIAJIN'));
			} else {
				//失败
				SoundManager.Instance.playWrongEffect();
				// this.parent.removeChild(this);
				egret.Tween.get(this.img_cw)
					.to({ visible: true })
					.wait(500)
					.to({ visible: false });

			}
			this.chuangj();

		}

	}
	//设置显示答案的容器
	private suijidaan() {

		let arr = ['cakeGreen_png', 'cakeBlue_png', 'cakeRed_png'];

		// console.log(sj);

		for (let i: number = 0; i < this.sjtm; i++) {
			let sjs: number = Math.floor(Math.random() * arr.length);
			let dx = <eui.Image>this.gp_daa.getChildAt(i + 1);
			dx.source = arr[sjs];
			this.shuzu.push(arr[sjs]);
		}

	}
	//获取随机出现的场景
	private dajian() {
		let sjs: number = Math.floor(Math.random() * 3);
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
	private timerscene() {
		this.dajian();
		SceneManager.Instance.popScene();
	}
	//创建计时器
	private chuangj() {
		this.tim = new egret.Timer(500, 1);
		this.tim.start();
		this.tim.addEventListener(egret.TimerEvent.TIMER, this.timerscene, this);
	}
}