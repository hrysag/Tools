System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ServerSendCode, ServerResCode;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea08eJwxbZEA7U2HV8ZXatO", "ConnectBaseDefinitions", undefined);

      /**
       * Created by EricHuang on 2023/9/19.
       * call Pomelo 
       */

      /*
      export enum ServerSendCode 
      {
          ChoiceLobby :'fh.fhHandler.ChoiceLobby',  //--選房
          GetBalance : 'fh.fhHandler.GetBalance',   //--取餘額
          Exchange : 'fh.fhHandler.Exchange',       //--開分
          CashOut : 'fh.fhHandler.Recompensate',    //--洗分
          LeaveRoom : 'fh.fhHandler.LeaveRoom',     //--離開房間
          shootBullet:'fh.fhHandler.Shoot',         //--擊發
          changBullet:'fh.fhHandler.WeaponChange',  //--換子彈(不需要用)
          hitFish:'fh.fhHandler.Spin',              //--打到魚
          useProp:'fh.fhHandler.UseProp',           //--使用道具
      }
      
      //--server respondes code
      export enum ServerResCode 
      {
          LoginInfo='-1',                     // login資訊
          EnterLobby = '1',                   // 進入大廳
          EnterRoom = '2',                    // 進房結果通知
          WeaponSettings = '3',               // 武器設定
          FishSettings = '4',                 // 魚隻設定
          InitPlayerInfo = '5',               // 更新房內玩家資訊
          SerialNumber = '6',                 // 更新局號
          Balance = '7',                      // 更新資產/餘額
          Exchange = '8',                     // 換分結果通知
          Point = '9',                        // 更新分數
          LeaveRoom = '10',                   // 離開房間
          CashOut = '11',                     // 洗分結果通知
          NewFish = '12'                      // 新增魚隻
      }*/
      //=======================================================

      /**
       * 這邊只定義基本的行為用法,如果超出基本定義的情況下,
       * 使用者可以動態新增屬性增加定義
       */
      //=======================================================
      _export("ServerSendCode", ServerSendCode = {
        InitLocalDebug: '',
        //--local debug init
        EnterRoomLocalDebug: '',
        //local debug init
        InitPlayerInfoLocalDebug: '',
        //local debug init
        UpdateRoomStsteLocalDebug: '',
        //local debug UpdateRoomStste
        UpdatePropLocalDebug: '',
        //local debug UpdateProp
        NewFishLocalDebug: '',
        //local debug newFish
        ChoiceLobby: '',
        //--選房
        GetBalance: '',
        //--取餘額
        Exchange: '',
        //--開分
        CashOut: '',
        //--洗分
        LeaveRoom: '',
        //--離開房間
        ShootBullet: '',
        //--擊發
        changBullet: '',
        //--換子彈(不需要用)
        hitFish: '',
        //--打到魚
        useProp: '' //--使用道具

      });
      /**
       * 讓使用者自己去定義server回來的資料
       */


      _export("ServerResCode", ServerResCode = {
        InitLocalDebug: '',
        //local debug init
        EnterRoomLocalDebug: '',
        //local debug init
        LoginInfo: '',
        // login資訊
        EnterLobby: '',
        // 進入大廳
        EnterRoom: '',
        // 進房結果通知
        WeaponSettings: '',
        // 武器設定
        FishSettings: '',
        // 魚隻設定
        InitPlayerInfo: '',
        // 更新房內玩家資訊
        SerialNumber: '',
        // 更新局號
        Balance: '',
        // 更新資產/餘額
        RefundBullet: '',
        // 回收子彈退分通知(call balance後,會再送這個出來)
        Exchange: '',
        // 換分結果通知
        Point: '',
        // 更新分數
        LeaveRoom: '',
        // 離開房間
        CashOut: '',
        // 洗分結果通知
        NewFish: '',
        // 新增魚隻
        ShootBullet: '',
        // 射擊
        HitFish: '',
        // 擊中魚隻
        UpdateProp: '',
        //更新道具
        UpdateRoomStatus: '',
        //更新房間狀態??
        UseProp: '',
        //使用道具
        BossWillComeIn: '',
        //boss即將來襲
        ErrorCode: '' //--gameserver送來的錯誤訊息 

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d30505fc7698022d2bef8fdb2bcac98d0ef6526.js.map