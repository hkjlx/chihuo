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

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAdd,this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
    }
    // 当进度条添加到舞台上的时候，添加帧事件
    private onAdd(){
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
        this.addEventListener(egret.Event.ENTER_FRAME,this.onFrame,this);
    }
    // 每帧改变位图的rotation
    private onFrame(){
        if( this.bt ){
            this.bt.rotation += 5;
        }
    }
    // 当进度条从舞台上移除的时候 移除帧事件
    private onRemove(){
        if( this.hasEventListener(egret.Event.ENTER_FRAME)){
            this.removeEventListener( egret.Event.ENTER_FRAME,this.onFrame,this )
        }
    }
    private textField: egret.TextField;
    private bt:egret.Bitmap;

    private createView(): void {
        RES.getResByUrl("resource/images/loading2.png",(data,url)=>{
            this.bt = new egret.Bitmap();
            this.bt.texture = data;
            this.bt.anchorOffsetX = this.bt.width/2;
            this.bt.anchorOffsetY = this.bt.height/2;
            this.bt.x = this.width/2;
            this.bt.y = this.height/2;
            this.addChild( this.bt );

            this.textField = new egret.TextField();
            this.addChild(this.textField);
            
            this.textField.width = this.bt.width;
            this.textField.height = this.bt.height;
            this.textField.anchorOffsetX = this.textField.width/2;
            this.textField.anchorOffsetY = this.textField.height/2;
            this.textField.x = this.width/2;
            this.textField.y = this.height/2;
            this.textField.textAlign = egret.HorizontalAlign.CENTER;
            this.textField.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.textField.size = 16;
            
        },this,RES.ResourceItem.TYPE_IMAGE)


    }

    public onProgress(current: number, total: number): void {
        if( this.textField ){
            this.textField.text = `${current}/${total}`;
        }
        
    }
}
