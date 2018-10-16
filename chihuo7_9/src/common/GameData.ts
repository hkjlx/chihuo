/**
 * 游戏数据类
 */
class GameData {
	public constructor() {
	}

	private static _GUANQIA:number;//关卡
	public static STAGEWIDTH:number;//舞台的宽
	public static STAGEHEIGHT:number;//舞台的高

	//关卡数据  获取--从本地读取   保存-- 数据保存到本地
	public static get GUANQIA(){
		let ret = egret.localStorage.getItem("guanqia");
		
		//
		if(ret==null||ret==""){
			GameData._GUANQIA = 1;
		}else{
			GameData._GUANQIA = Number(ret);
		}
		return GameData._GUANQIA;

	}

	public static set GUANQIA(v:number){
		egret.localStorage.setItem("guanqia",v.toString());
		GameData._GUANQIA = v;
	}

	public static GameLevels:number;//关卡数
	public static GameLevelData:any[];//关卡数据

	// 获取游戏中所有的关卡数据
	public static getGameLevelData(){
		RES.getResAsync("questions_json",(data)=>{
			GameData.GameLevelData = data;
			GameData.GameLevels = data.length;
		},this)
	}

	public static getLevelData(level:number){
		if(level<=GameData.GameLevels){
			return GameData.GameLevelData[level-1];
		}else{
			console.log("你太厉害了，通关啦！");
			
		}
		
	}


}