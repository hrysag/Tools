System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd, AudioSourceList, MusicList, SoundList;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5060ezbDp5PDq1QhK55ZztF", "SoundList1016", undefined);

      //import { AudioManager } from "db://assets/Scripts/Audio/AudioManager";
      __checkObsolete__(['assetManager', 'AudioClip', 'AudioSource', 'Node']);

      _export("AudioSourceList", AudioSourceList = /*#__PURE__*/function (AudioSourceList) {
        AudioSourceList[AudioSourceList["BasicAS"] = 0] = "BasicAS";
        AudioSourceList[AudioSourceList["BtnAS"] = 1] = "BtnAS";
        AudioSourceList[AudioSourceList["Voice"] = 2] = "Voice";
        AudioSourceList[AudioSourceList["WildAS"] = 3] = "WildAS";
        AudioSourceList[AudioSourceList["RsAs"] = 4] = "RsAs";
        AudioSourceList[AudioSourceList["RsVs"] = 5] = "RsVs";
        AudioSourceList[AudioSourceList["SP_ReadyHands_0"] = 6] = "SP_ReadyHands_0";
        AudioSourceList[AudioSourceList["SP_ReadyHands_1"] = 7] = "SP_ReadyHands_1";
        AudioSourceList[AudioSourceList["SP_ReadyHands_2"] = 8] = "SP_ReadyHands_2";
        AudioSourceList[AudioSourceList["SP_ReadyHands_3"] = 9] = "SP_ReadyHands_3";
        AudioSourceList[AudioSourceList["SP_ReadyHands_4"] = 10] = "SP_ReadyHands_4";
        return AudioSourceList;
      }({}));

      _export("MusicList", MusicList = /*#__PURE__*/function (MusicList) {
        MusicList[MusicList["ngBgm"] = 0] = "ngBgm";
        MusicList[MusicList["RespinBgm"] = 1] = "RespinBgm";
        MusicList[MusicList["FgBgm"] = 2] = "FgBgm";
        return MusicList;
      }({}));

      _export("SoundList", SoundList = /*#__PURE__*/function (SoundList) {
        SoundList[SoundList["Spin"] = 0] = "Spin";
        SoundList[SoundList["SpinStop"] = 1] = "SpinStop";
        SoundList[SoundList["symWin1"] = 2] = "symWin1";
        SoundList[SoundList["symWin2"] = 3] = "symWin2";
        SoundList[SoundList["symWin3"] = 4] = "symWin3";
        SoundList[SoundList["wild_move"] = 5] = "wild_move";
        SoundList[SoundList["wild_in"] = 6] = "wild_in";
        SoundList[SoundList["Sc_in"] = 7] = "Sc_in";
        SoundList[SoundList["Sc_get"] = 8] = "Sc_get";
        SoundList[SoundList["Sc_Ready"] = 9] = "Sc_Ready";
        SoundList[SoundList["respin_in"] = 10] = "respin_in";
        SoundList[SoundList["frame_open"] = 11] = "frame_open";
        SoundList[SoundList["light_move"] = 12] = "light_move";
        SoundList[SoundList["number_increase"] = 13] = "number_increase";
        SoundList[SoundList["fgEnterPage_In"] = 14] = "fgEnterPage_In";
        SoundList[SoundList["fgExitPage_In"] = 15] = "fgExitPage_In";
        SoundList[SoundList["Start_01"] = 16] = "Start_01";
        SoundList[SoundList["Start_02"] = 17] = "Start_02";
        SoundList[SoundList["Start_03"] = 18] = "Start_03";
        SoundList[SoundList["Score_01"] = 19] = "Score_01";
        SoundList[SoundList["Score_03"] = 20] = "Score_03";
        SoundList[SoundList["Score_04"] = 21] = "Score_04";
        SoundList[SoundList["Score_05"] = 22] = "Score_05";
        SoundList[SoundList["Score_06"] = 23] = "Score_06";
        SoundList[SoundList["Score_07"] = 24] = "Score_07";
        SoundList[SoundList["Score_08"] = 25] = "Score_08";
        SoundList[SoundList["Score_09"] = 26] = "Score_09";
        SoundList[SoundList["Respin_01"] = 27] = "Respin_01";
        SoundList[SoundList["Respin_02"] = 28] = "Respin_02";
        SoundList[SoundList["Respin_03"] = 29] = "Respin_03";
        SoundList[SoundList["Respin_04"] = 30] = "Respin_04";
        SoundList[SoundList["Respin_05"] = 31] = "Respin_05";
        SoundList[SoundList["Respin_06"] = 32] = "Respin_06";
        SoundList[SoundList["Respin_07"] = 33] = "Respin_07";
        SoundList[SoundList["FG_In_01"] = 34] = "FG_In_01";
        SoundList[SoundList["FG_In_02"] = 35] = "FG_In_02";
        SoundList[SoundList["FG_In_03"] = 36] = "FG_In_03";
        SoundList[SoundList["FG_In_04"] = 37] = "FG_In_04";
        SoundList[SoundList["FG_In_05"] = 38] = "FG_In_05";
        SoundList[SoundList["FG_Out_01"] = 39] = "FG_Out_01";
        SoundList[SoundList["FG_Out_03"] = 40] = "FG_Out_03";
        SoundList[SoundList["FG_Out_04"] = 41] = "FG_Out_04";
        SoundList[SoundList["FG_Out_05"] = 42] = "FG_Out_05";
        SoundList[SoundList["FG_Out_06"] = 43] = "FG_Out_06";
        SoundList[SoundList["FG_Out_07"] = 44] = "FG_Out_07";
        SoundList[SoundList["FG_SpinAdd_01"] = 45] = "FG_SpinAdd_01";
        SoundList[SoundList["FG_SpinAdd_02"] = 46] = "FG_SpinAdd_02";
        SoundList[SoundList["FG_SpinAdd_03"] = 47] = "FG_SpinAdd_03";
        SoundList[SoundList["Wild_Ready"] = 48] = "Wild_Ready";
        return SoundList;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b1d69f766dd4f306da2e214d2d1bb73946ad778.js.map