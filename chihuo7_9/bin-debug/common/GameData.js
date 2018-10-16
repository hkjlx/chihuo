var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 游戏数据类
 */
var GameData = (function () {
    function GameData() {
    }
    Object.defineProperty(GameData, "GUANQIA", {
        //关卡数据  获取--从本地读取   保存-- 数据保存到本地
        get: function () {
            var ret = egret.localStorage.getItem("guanqia");
            //
            if (ret == null || ret == "") {
                GameData._GUANQIA = 1;
            }
            else {
                GameData._GUANQIA = Number(ret);
            }
            return GameData._GUANQIA;
        },
        set: function (v) {
            egret.localStorage.setItem("guanqia", v.toString());
            GameData._GUANQIA = v;
        },
        enumerable: true,
        configurable: true
    });
    // 获取游戏中所有的关卡数据
    GameData.getGameLevelData = function () {
        RES.getResAsync("questions_json", function (data) {
            GameData.GameLevelData = data;
            GameData.GameLevels = data.length;
        }, this);
    };
    GameData.getLevelData = function (level) {
        if (level <= GameData.GameLevels) {
            return GameData.GameLevelData[level - 1];
        }
        else {
            console.log("你太厉害了，通关啦！");
        }
    };
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map