/**
 * Created by EricHuang on 2023/9/28.
 */

/**
 * 
 *  遊戲基本設定
 * @export
 * @class GameSetting
 */
export class CocosGameSetting
{
    static GameApp:any;
    static DEBUG:boolean = true;
    static Game_Width:number;
    static Game_Height:number;
    static Game_LeastWidth:number;
    static Game_Orientation:number;
    static GameType:number;
    static Game_Lang:string;
    static Orginal_Lang:string;
    static RootPath:string;
    static isLocal:boolean;
    static localPathData:any;//--{domain:string,gsSubDomain:string}
    static host:string;


    //---rd7新增參數
    static Game_Cid:number;//--company id(平台id)
    static Game_GsSubdomain:string;
    static Game_ExitOption:number;
    static Game_OriginDomain:string;
    static Game_RulePath:string;
    static Game_Sid:string;
    static Game_WagersPath:string;

 
    /**
    *
    * @param urlLang
    * @returns string
    */
    static GetGameLang(urlLang:string):string
    {
        switch (urlLang)
        {
            case 'tw':case 'zh-tw':
            return'tw'
            
            case 'cn':case 'zh-cn':case 'ug':
            return 'cn';
            
            case 'vi':case 'vn':
            return 'vi';
            
            case 'th':
            return 'th';    
            default:
            return 'en';
        }
    }
    //private static ipl:IPL.UrlParameter;

    /**
     *
     * @param gametype
     * @param width
     * @param height
     */
    constructor(gametype:number,width:number , height:number)
    {
        CocosGameSetting.Game_Width = width;
        CocosGameSetting.Game_Height = height;
        CocosGameSetting.GameType = gametype;
        //GameSetting.ipl  = new IPL.UrlParameter();
        CocosGameSetting.Orginal_Lang = this.getURLLang();
        CocosGameSetting.Game_Lang = CocosGameSetting.GetGameLang(CocosGameSetting.Orginal_Lang); 
        //GameSetting.DEBUG = IPL.UrlParameter.isLocal;
        CocosGameSetting.RootPath = this.getRootPath();
        this.configLogFunction();
        this.configGameOrientation();

    }

    private getRootPath():string
    {
        let herf = window.location.href;

        return herf.split('index')[0];
    }

    private getURLLang():string
    {
        let ary:Array< string > = window.location.href.split( "?" ) ; // url帶參數格式

        if ( ary.length == 1 )return 'en';

        let splitAnd:Array< string > = ary[ 1 ].split( "&" ) ;

        for ( var i = 0 ; i < splitAnd.length ; i ++ ) {

            let splitAry:Array<string> = splitAnd[ i ].split(  "=" ) ;

            let paraName = splitAry[ 0 ].substring( 0, splitAry[ 0 ].length ) ;

            if(paraName =='lang') return splitAry[1];
        }
        return 'en';

    }

    private configLogFunction():void
    {
        if(!CocosGameSetting.DEBUG){
            // window['console']['log'] = function() {};
        }
    }

    private configGameOrientation():void
    {
        if(CocosGameSetting.Game_Width > CocosGameSetting.Game_Height)
        {
            CocosGameSetting.Game_Orientation = 0;
        }
        else {
            CocosGameSetting.Game_Orientation = 1;
        }
    }
 
 
 
}
 
 