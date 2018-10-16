//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAdd, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemove, _this);
        return _this;
    }
    // 当进度条添加到舞台上的时候，添加帧事件
    LoadingUI.prototype.onAdd = function () {
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
    };
    // 每帧改变位图的rotation
    LoadingUI.prototype.onFrame = function () {
        if (this.bt) {
            this.bt.rotation += 5;
        }
    };
    // 当进度条从舞台上移除的时候 移除帧事件
    LoadingUI.prototype.onRemove = function () {
        if (this.hasEventListener(egret.Event.ENTER_FRAME)) {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
        }
    };
    LoadingUI.prototype.createView = function () {
        var _this = this;
        RES.getResByUrl("resource/images/loading2.png", function (data, url) {
            _this.bt = new egret.Bitmap();
            _this.bt.texture = data;
            _this.bt.anchorOffsetX = _this.bt.width / 2;
            _this.bt.anchorOffsetY = _this.bt.height / 2;
            _this.bt.x = _this.width / 2;
            _this.bt.y = _this.height / 2;
            _this.addChild(_this.bt);
            _this.textField = new egret.TextField();
            _this.addChild(_this.textField);
            _this.textField.width = _this.bt.width;
            _this.textField.height = _this.bt.height;
            _this.textField.anchorOffsetX = _this.textField.width / 2;
            _this.textField.anchorOffsetY = _this.textField.height / 2;
            _this.textField.x = _this.width / 2;
            _this.textField.y = _this.height / 2;
            _this.textField.textAlign = egret.HorizontalAlign.CENTER;
            _this.textField.verticalAlign = egret.VerticalAlign.MIDDLE;
            _this.textField.size = 16;
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        if (this.textField) {
            this.textField.text = current + "/" + total;
        }
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//# sourceMappingURL=LoadingUI.js.map