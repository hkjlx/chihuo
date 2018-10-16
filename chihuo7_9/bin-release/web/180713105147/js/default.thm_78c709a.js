window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/bql.exml'] = window.bql = (function (_super) {
	__extends(bql, _super);
	function bql() {
		_super.call(this);
		this.skinParts = ["gp_daa","img_cw","gp_xs","gp_xx"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.gp_daa_i(),this.gp_xs_i(),this.gp_xx_i()];
	}
	var _proto = bql.prototype;

	_proto.gp_daa_i = function () {
		var t = new eui.Group();
		this.gp_daa = t;
		t.height = 455;
		t.width = 260;
		t.x = 52;
		t.y = 470;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "iceBottom_png";
		t.y = 329;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 114;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 126;
		t.y = 252.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 121;
		t.height = 114;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 126;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 163;
		t.height = 114;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 126;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 200;
		t.height = 114;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 126;
		return t;
	};
	_proto.gp_xs_i = function () {
		var t = new eui.Group();
		this.gp_xs = t;
		t.height = 455;
		t.width = 260;
		t.x = 330;
		t.y = 470;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this.img_cw_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "iceBottom_png";
		t.y = 329;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 114;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 126;
		t.x = -73;
		t.y = 255;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 114;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 126;
		t.x = -73;
		t.y = 220;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 114;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 126;
		t.x = -73;
		t.y = 178;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 114;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 126;
		t.x = -73;
		t.y = 141;
		return t;
	};
	_proto.img_cw_i = function () {
		var t = new eui.Image();
		this.img_cw = t;
		t.source = "wrongMark_png";
		t.visible = false;
		t.x = 67;
		t.y = 292;
		return t;
	};
	_proto.gp_xx_i = function () {
		var t = new eui.Group();
		this.gp_xx = t;
		t.height = 158;
		t.horizontalCenter = 0;
		t.width = 636;
		t.y = 976;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 81;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "iceBule_png";
		t.x = 35;
		t.y = 32;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "iceGreen_png";
		t.x = 217;
		t.y = 31;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "iceRed_png";
		t.x = 436;
		t.y = 33;
		return t;
	};
	return bql;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/dangao.exml'] = window.dangao = (function (_super) {
	__extends(dangao, _super);
	function dangao() {
		_super.call(this);
		this.skinParts = ["gp_daa","img_cw","gp_xs","gp_xx"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.gp_daa_i(),this.gp_xs_i(),this.gp_xx_i()];
	}
	var _proto = dangao.prototype;

	_proto.gp_daa_i = function () {
		var t = new eui.Group();
		this.gp_daa = t;
		t.height = 455;
		t.width = 260;
		t.x = 52;
		t.y = 470;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cakeButtom_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 73;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 140;
		t.y = 355.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 96;
		t.height = 73;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 140;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 163;
		t.height = 73;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 140;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 232;
		t.height = 73;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 140;
		return t;
	};
	_proto.gp_xs_i = function () {
		var t = new eui.Group();
		this.gp_xs = t;
		t.height = 455;
		t.width = 260;
		t.x = 330;
		t.y = 470;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this.img_cw_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cakeButtom_png";
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 73;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 140;
		t.y = 355.5;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 73;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 140;
		t.y = 286;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 73;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 140;
		t.y = 219;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 73;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 140;
		t.y = 150;
		return t;
	};
	_proto.img_cw_i = function () {
		var t = new eui.Image();
		this.img_cw = t;
		t.source = "wrongMark_png";
		t.visible = false;
		t.x = 69;
		t.y = 266;
		return t;
	};
	_proto.gp_xx_i = function () {
		var t = new eui.Group();
		this.gp_xx = t;
		t.height = 158;
		t.horizontalCenter = 0;
		t.width = 636;
		t.y = 976;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 81;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "cakeBlue_png";
		t.x = 35;
		t.y = 32;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "cakeGreen_png";
		t.x = 217;
		t.y = 31;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "cakeRed_png";
		t.x = 436;
		t.y = 33;
		return t;
	};
	return dangao;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/end.exml'] = window.end = (function (_super) {
	__extends(end, _super);
	var end$Skin1 = 	(function (_super) {
		__extends(end$Skin1, _super);
		function end$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = end$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btnAgain_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return end$Skin1;
	})(eui.Skin);

	function end() {
		_super.call(this);
		this.skinParts = ["img_pz","btn_cw"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.img_pz_i(),this.btn_cw_i()];
	}
	var _proto = end.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "background_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "dialogBg_png";
		t.y = 748.39;
		return t;
	};
	_proto.img_pz_i = function () {
		var t = new eui.Image();
		this.img_pz = t;
		t.horizontalCenter = 0;
		t.source = "role2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_cw_i = function () {
		var t = new eui.Button();
		this.btn_cw = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 967;
		t.skinName = end$Skin1;
		return t;
	};
	return end;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/game.exml'] = window.game = (function (_super) {
	__extends(game, _super);
	function game() {
		_super.call(this);
		this.skinParts = ["img_pz","djs","ready","go"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.img_pz_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this.djs_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this.ready_i(),this.go_i(),this._Image12_i()];
	}
	var _proto = game.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "background_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 699;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(10,71,26,123);
		t.source = "toumingdi_png";
		t.width = 578.24;
		t.y = 261;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "buttomBg_png";
		t.x = -1;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(31,1,106,79);
		t.source = "banzi_png";
		t.y = 328;
		return t;
	};
	_proto.img_pz_i = function () {
		var t = new eui.Image();
		this.img_pz = t;
		t.bottom = 796;
		t.source = "role1_png";
		t.x = 52;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "xinxi_png";
		t.x = 286;
		t.y = 179;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "time_png";
		t.x = 83.5;
		t.y = 383.5;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "progressBarBg_png";
		t.x = 142;
		t.y = 404;
		return t;
	};
	_proto.djs_i = function () {
		var t = new eui.Image();
		this.djs = t;
		t.source = "progressBar_png";
		t.width = 443;
		t.x = 144;
		t.y = 406;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 455;
		t.scale9Grid = new egret.Rectangle(14,14,84,84);
		t.source = "wordBg_png";
		t.width = 260;
		t.x = 330;
		t.y = 470;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "diban_png";
		t.x = 334.96;
		t.y = 907;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 455;
		t.scale9Grid = new egret.Rectangle(14,14,84,84);
		t.source = "wordBg_png";
		t.width = 260;
		t.x = 52;
		t.y = 470;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "diban_png";
		t.x = 57.41;
		t.y = 907;
		return t;
	};
	_proto.ready_i = function () {
		var t = new eui.Image();
		this.ready = t;
		t.horizontalCenter = 0;
		t.source = "ready_png";
		t.visible = false;
		t.y = 353;
		return t;
	};
	_proto.go_i = function () {
		var t = new eui.Image();
		this.go = t;
		t.horizontalCenter = 0;
		t.source = "go_png";
		t.visible = false;
		t.y = 455.5;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "01_png";
		t.x = 422;
		t.y = 227.5;
		return t;
	};
	return game;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/hanbao.exml'] = window.hanbao = (function (_super) {
	__extends(hanbao, _super);
	function hanbao() {
		_super.call(this);
		this.skinParts = ["gp_daa","img_cw","gp_xs","gp_xx"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.gp_daa_i(),this.gp_xs_i(),this.gp_xx_i()];
	}
	var _proto = hanbao.prototype;

	_proto.gp_daa_i = function () {
		var t = new eui.Group();
		this.gp_daa = t;
		t.height = 455;
		t.width = 260;
		t.x = 52;
		t.y = 470;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "macaronsButtom_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 151;
		t.horizontalCenter = 0.5;
		t.source = "macaronsMiddle_png";
		t.y = 253.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "macaronsTop_png";
		t.y = 202;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "";
		t.width = 142;
		t.y = 339;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "";
		t.width = 142;
		t.y = 276;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "";
		t.width = 142;
		t.y = 216;
		return t;
	};
	_proto.gp_xs_i = function () {
		var t = new eui.Group();
		this.gp_xs = t;
		t.height = 455;
		t.width = 260;
		t.x = 330;
		t.y = 470;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this.img_cw_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "macaronsButtom_png";
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 149;
		t.horizontalCenter = 0.5;
		t.source = "macaronsMiddle_png";
		t.y = 253;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "macaronsTop_png";
		t.y = 202;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.horizontalCenter = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 142;
		t.x = -81;
		t.y = 339;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.horizontalCenter = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 142;
		t.x = -81;
		t.y = 276;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.horizontalCenter = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.width = 142;
		t.x = -81;
		t.y = 216;
		return t;
	};
	_proto.img_cw_i = function () {
		var t = new eui.Image();
		this.img_cw = t;
		t.source = "wrongMark_png";
		t.visible = false;
		t.x = 70;
		t.y = 282;
		return t;
	};
	_proto.gp_xx_i = function () {
		var t = new eui.Group();
		this.gp_xx = t;
		t.height = 158;
		t.horizontalCenter = 0;
		t.width = 636;
		t.y = 976;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 81;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "macaronsBule_png";
		t.x = 35;
		t.y = 32;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "macaronsGreen_png";
		t.x = 217;
		t.y = 31;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "macaronsRed_png";
		t.x = 436;
		t.y = 33;
		return t;
	};
	return hanbao;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/settingScene.exml'] = window.settingScene = (function (_super) {
	__extends(settingScene, _super);
	var settingScene$Skin2 = 	(function (_super) {
		__extends(settingScene$Skin2, _super);
		function settingScene$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_music_down_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("noPlay",
					[
						new eui.SetProperty("_Image2","visible",true)
					])
			];
		}
		var _proto = settingScene$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_music_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.percentHeight = 100;
			t.source = "btn_disable_png";
			t.visible = false;
			t.percentWidth = 100;
			return t;
		};
		return settingScene$Skin2;
	})(eui.Skin);

	var settingScene$Skin3 = 	(function (_super) {
		__extends(settingScene$Skin3, _super);
		function settingScene$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_sound_down_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("noPlay",
					[
						new eui.SetProperty("_Image2","visible",true)
					])
			];
		}
		var _proto = settingScene$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_sound_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.percentHeight = 100;
			t.source = "btn_disable_png";
			t.visible = false;
			t.percentWidth = 100;
			return t;
		};
		return settingScene$Skin3;
	})(eui.Skin);

	var settingScene$Skin4 = 	(function (_super) {
		__extends(settingScene$Skin4, _super);
		function settingScene$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","YesBtn1_jpg")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = settingScene$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "YesBtn_jpg";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return settingScene$Skin4;
	})(eui.Skin);

	function settingScene() {
		_super.call(this);
		this.skinParts = ["btn_bgmusic","btn_effect","btn_ok"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.btn_bgmusic_i(),this.btn_effect_i(),this.btn_ok_i()];
	}
	var _proto = settingScene.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 336;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(19,15,79,81);
		t.source = "wordBg_png";
		t.verticalCenter = 16;
		t.width = 435;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 0;
		t.right = 0;
		t.size = 40;
		t.text = "设置";
		t.textAlign = "center";
		t.y = 467;
		return t;
	};
	_proto.btn_bgmusic_i = function () {
		var t = new eui.Button();
		this.btn_bgmusic = t;
		t.label = "";
		t.left = 150;
		t.verticalCenter = 0;
		t.skinName = settingScene$Skin2;
		return t;
	};
	_proto.btn_effect_i = function () {
		var t = new eui.Button();
		this.btn_effect = t;
		t.label = "";
		t.right = 150;
		t.verticalCenter = 0;
		t.skinName = settingScene$Skin3;
		return t;
	};
	_proto.btn_ok_i = function () {
		var t = new eui.Button();
		this.btn_ok = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 648;
		t.skinName = settingScene$Skin4;
		return t;
	};
	return settingScene;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/start.exml'] = window.start = (function (_super) {
	__extends(start, _super);
	var start$Skin5 = 	(function (_super) {
		__extends(start$Skin5, _super);
		function start$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = start$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btnNewGame_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return start$Skin5;
	})(eui.Skin);

	var start$Skin6 = 	(function (_super) {
		__extends(start$Skin6, _super);
		function start$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = start$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wordBg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return start$Skin6;
	})(eui.Skin);

	function start() {
		_super.call(this);
		this.skinParts = ["btn_ks","btn_sz"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.btn_ks_i(),this.btn_sz_i()];
	}
	var _proto = start.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "background_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "gameLogo_png";
		t.y = 154.68;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "login_ice_png";
		t.y = 299.68;
		return t;
	};
	_proto.btn_ks_i = function () {
		var t = new eui.Button();
		this.btn_ks = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 945;
		t.skinName = start$Skin5;
		return t;
	};
	_proto.btn_sz_i = function () {
		var t = new eui.Button();
		this.btn_sz = t;
		t.anchorOffsetY = 0;
		t.height = 52.91;
		t.label = "设置";
		t.x = 515;
		t.y = 72.98;
		t.skinName = start$Skin6;
		return t;
	};
	return start;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/tsScene.exml'] = window.tsScene = (function (_super) {
	__extends(tsScene, _super);
	function tsScene() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = tsScene.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "guide_png";
		t.top = 0;
		return t;
	};
	return tsScene;
})(eui.Skin);