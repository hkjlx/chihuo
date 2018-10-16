class SoundManager {
	private static _manager:SoundManager;
	public static get Instance(){
		if( !SoundManager._manager){
			SoundManager._manager = new SoundManager();
		}
		return SoundManager._manager;
	}

	private bgMusic:egret.Sound;	//背景音乐
	private bgMusic_channel:egret.SoundChannel;
	private isbgMusicComplete:boolean = false;//背景音乐是否加载完成

	private click:egret.Sound;		//点击冰淇淋时的声音
	private isClickComplete:boolean = false;

	private lianji01:egret.Sound;	//连击
	private islianji01Complete:boolean = false;

	private lianjiover:egret.Sound;	//连击成功
	private islianjioverComplete:boolean = false;

	private wrong:egret.Sound;		//错误音效
	private isWrongComplete:boolean = false;

	private miao:egret.Sound;		//最后的时间
	private ismiaoComplete:boolean = false;

	private _isMusic:boolean = true;// 背景音乐是否播放
	private _isEffect:boolean = true;//音效是否播放

	// private _voluem:number = 1;//音量


	public constructor() {
		this.bgMusic = new egret.Sound();
		this.bgMusic.load("resource/images/music/gameBG101.mp3");
		this.bgMusic.addEventListener(egret.Event.COMPLETE,()=>{
			this.isbgMusicComplete = true;
		},this);

		this.click = new egret.Sound();
		this.click.load("resource/images/music/lianji101.mp3");
		this.click.addEventListener(egret.Event.COMPLETE,()=>{
			this.isClickComplete = true;
		},this);

		this.lianji01 = new egret.Sound();
		this.lianji01.load("resource/images/music/lianji102.mp3");
		this.lianji01.addEventListener(egret.Event.COMPLETE,()=>{
			this.islianji01Complete = true;
		},this);

		this.lianjiover = new egret.Sound();
		this.lianjiover.load("resource/images/music/lianjiover101.mp3");
		this.lianjiover.addEventListener(egret.Event.COMPLETE,()=>{
			this.islianjioverComplete = true;
		},this);

		this.wrong = new egret.Sound();
		this.wrong.load("resource/images/music/wrong01.mp3");
		this.wrong.addEventListener(egret.Event.COMPLETE,()=>{
			this.isWrongComplete = true;
		},this);

		this.miao = new egret.Sound();
		this.miao.load("resource/images/music/10sec01.mp3");
		this.miao.addEventListener(egret.Event.COMPLETE,()=>{
			this.ismiaoComplete = true;
		},this);

		
	}
	private cs:number = 1;	//控制背景音乐不会重复添加
	//播放背景音乐
	public playBgMusic(){
		if( this.isbgMusicComplete && this.isMusic && this.cs){
			this.bgMusic_channel = this.bgMusic.play(0,0);
			this.cs = 0;
		}
	}
	//停止背景音乐
	public stopBgMusic(){
		if(this.bgMusic_channel){
			this.bgMusic_channel.stop();
			this.bgMusic_channel = null;
			this.cs = 1;
		}
	}
	//播放音效
	public playClickEffect(){
		// this.isEffect 调用getter方法
		if(this.isClickComplete && this.isEffect ){
			 this.click.play(0,1);
		}
	}
	//播放成功音效
	public playlianji01Effect(){
		if(this.islianji01Complete && this.isEffect){
			this.lianji01.play(0,1);
		}
	}
	//播放结算音效
	public playlianjioverEffect(){
		if( this.islianjioverComplete && this.isEffect){
			this.lianjiover.play(0,1);
		}
	}
	//播放错误音效
	public playWrongEffect(){
		if(this.isWrongComplete && this.isEffect){
			this.wrong.play(0,1);
		}
	}
	//播放时间快结束时的音效
	public playmiaoEffect(){
		if(this.ismiaoComplete && this.isMusic){
			this.miao.play(0,1);
		}
	}
	//设置音量
	private setVolume(v:number){
		if(this.bgMusic_channel){
			this.bgMusic_channel.volume = v;
		}
	}

	public get isMusic(){
		let ret = egret.localStorage.getItem("isMusic");
		if(ret=="true"||!ret){
			this._isMusic = true;
		}else{
			this._isMusic = false;
		}
		return this._isMusic;
	}

	public set isMusic(b:boolean){
		this._isMusic = b;
		egret.localStorage.setItem("isMusic",b.toString());
		if(b){
			//播放声音
			this.playBgMusic();
		}else{
			//关闭声音
			this.stopBgMusic();
		}
	}
	//设置_isEffect属性的值
	public set isEffect(b:boolean){
		this._isEffect = b;
		egret.localStorage.setItem("isEffect",b.toString());
	}

	//获取_isEffect属性的值
	public get isEffect(){
		let ret = egret.localStorage.getItem("isEffect");
		if(ret == "true"||ret == null){
			this._isEffect = true;
		}else{
			this._isEffect = false;
		}
		return this._isEffect;
	}



	/*public set volume(v:number){
		this._voluem = v;
		egret.localStorage.setItem("volume",v.toString());
		this.setVolume(v);
	}

	public get volume(){
		let ret =  egret.localStorage.getItem("volume");
		if(ret==null){
			this._voluem = 1;
		}else{
			this._voluem = Number(ret);
		}
		return this._voluem;
	}*/


}