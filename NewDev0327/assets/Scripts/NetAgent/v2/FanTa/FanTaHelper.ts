/**
 * FanTa URL 解碼器
 * 提供URL參數的Base64解碼功能和參數解析功能
 */
export class FanTaHelper {
    /**
     * 解碼URL中經過特殊編碼的參數
     * @param url 輸入的URL字串
     * @returns 解碼後的URL字串
     */
    static decodeUrl(url: string): string {
        try {
            // 檢查URL是否包含?分隔符
            const questionMarkIndex = url.indexOf('?');
            if (questionMarkIndex === -1) {
                // 沒有查詢參數，直接返回原URL
                return url;
            }

            // 分離基礎URL和查詢參數
            const baseUrl = url.substring(0, questionMarkIndex + 1);
            const encodedParams = url.substring(questionMarkIndex + 1);

            // 解碼過程：UrlDecode -> Base64Decode -> UTF8ToString
            let decodedParams = encodedParams;

            // 1. 先進行URL解碼（解除UrlEncode）
            decodedParams = decodeURIComponent(decodedParams);

            // 2. 進行Base64解碼
            decodedParams = this.base64Decode(decodedParams);

            // 組合完整的解碼URL
            return baseUrl + decodedParams;

        } catch (error) {
            console.error('FanTaHelper.decodeUrl error:', error);
            return url; // 解碼失敗時返回原URL
        }
    }

    /**
     * 從解碼後的URL中解析所有參數
     * @param decodedUrl 解碼後的URL
     * @returns 參數物件
     */
    private static parseUrlParameters(decodedUrl: string): { [key: string]: string } {
        const params: { [key: string]: string } = {};

        try {
            const questionMarkIndex = decodedUrl.indexOf('?');
            if (questionMarkIndex === -1) return params;

            const queryString = decodedUrl.substring(questionMarkIndex + 1);

            // 使用智能參數解析，正確處理包含 URL、JSON 等複雜內容的參數值
            this.parseComplexUrlParameters(queryString, params);

        } catch (error) {
            console.error('FanTaHelper.parseUrlParameters error:', error);
        }

        return params;
    }

    /**
     * 智能解析複雜的URL參數，正確處理包含URL、JSON等內容的參數值
     * @param queryString 查詢字符串
     * @param params 輸出的參數物件
     */
    private static parseComplexUrlParameters(queryString: string, params: { [key: string]: string }): void {
        let i = 0;
        const length = queryString.length;

        while (i < length) {
            // 跳過開頭的 & 符號
            while (i < length && queryString[i] === '&') {
                i++;
            }

            if (i >= length) break;

            // 尋找參數名稱（找到第一個 = 號）
            const keyStart = i;
            while (i < length && queryString[i] !== '=') {
                i++;
            }

            if (i >= length) break; // 沒有找到 = 號

            const key = queryString.substring(keyStart, i);
            i++; // 跳過 = 號

            // 解析參數值（處理複雜內容）
            const valueStart = i;
            const value = this.parseParameterValue(queryString, i);

            // 更新位置
            i = valueStart + value.length;

            // 找到下一個參數的開始位置（下一個 & 符號）
            while (i < length && queryString[i] !== '&') {
                i++;
            }

            // 存儲參數
            try {
                params[decodeURIComponent(key.trim())] = decodeURIComponent(value);
            }
            catch (decodeError) {
                // 如果解碼失敗，保留原始值
                console.warn(`Failed to decode parameter: ${key}=${value}`, decodeError);
                params[key.trim()] = value;
            }
        }
    }

    /**
     * 解析單個參數的值，正確處理包含特殊字符的複雜內容
     * @param queryString 完整的查詢字符串
     * @param startIndex 參數值的開始位置
     * @returns 參數值
     */
    private static parseParameterValue(queryString: string, startIndex: number): string {
        const length = queryString.length;
        let i = startIndex;
        let bracketCount = 0;
        let quoteCount = 0;
        let inQuote = false;

        while (i < length) {
            const char = queryString[i];

            // 處理引號狀態
            if (char === '"' && (i === 0 || queryString[i - 1] !== '\\')) {
                inQuote = !inQuote;
                quoteCount++;
            }

            // 如果在引號內，繼續讀取
            if (inQuote) {
                i++;
                continue;
            }

            // 處理方括號（JSON 數組）
            if (char === '[') {
                bracketCount++;
            }
            else if (char === ']') {
                bracketCount--;
            }
            // 如果遇到 & 且不在任何容器內，則結束當前參數
            else if (char === '&' && bracketCount === 0 && !inQuote) {
                break;
            }

            i++;
        }

        return queryString.substring(startIndex, i);
    }



    /**
     * 取得基本遊戲參數
     * @param encodedUrl 加密的URL
     * @returns 基本遊戲參數物件
     */
    static getBasicGameParams(encodedUrl: string): {
        game_code: string;
        lang: string;
        awkey: string;
        platform: string;
        demo: boolean;
        serviceid: string;
        decimal: number;
    } {
        try {
            const decodedUrl = this.decodeUrl(encodedUrl);
            const params = this.parseUrlParameters(decodedUrl);

            return {
                game_code: params['game_code'] || '',
                lang: params['lang'] || '',
                awkey: params['awkey'] || '',
                platform: params['platform'] || '',
                demo: params['demo'] === 'True' || params['demo'] === 'true',
                serviceid: params['serviceid'] || '',
                decimal: parseInt(params['decimal'] || '0', 10)
            };
        } catch (error) {
            console.error('FanTaHelper.getBasicGameParams error:', error);
            return {
                game_code: '',
                lang: '',
                awkey: '',
                platform: '',
                demo: false,
                serviceid: '',
                decimal: 0
            };
        }
    }

    /**
     * 取得連線設定參數
     * @param encodedUrl 加密的URL
     * @returns 連線設定參數物件
     */
    static getConnectionParams(encodedUrl: string): {
        ClientKey: string;
        Client_GameEvent_API: string;
        Client_GameIssue_API: string;
        ConnectSetting: string[];
        LifeSecond: number;
        CustomData: string;
        ESAPIHistory_UrlList: string[];
    } {
        try {
            const decodedUrl = this.decodeUrl(encodedUrl);
            const params = this.parseUrlParameters(decodedUrl);

            let connectSetting: string[] = [];
            try {
                connectSetting = JSON.parse(params['ConnectSetting'] || '[]');
            } catch { /* ignore */ }

            let esapiHistoryUrlList: string[] = [];
            try {
                esapiHistoryUrlList = JSON.parse(params['ESAPIHistory_UrlList'] || '[]');
            } catch { /* ignore */ }

            return {
                ClientKey: params['ClientKey'] || '',
                Client_GameEvent_API: params['Client_GameEvent_API'] || '',
                Client_GameIssue_API: params['Client_GameIssue_API'] || '',
                ConnectSetting: connectSetting,
                LifeSecond: parseInt(params['LifeSecond'] || '0', 10),
                CustomData: params['CustomData'] || '',
                ESAPIHistory_UrlList: esapiHistoryUrlList
            };
        } catch (error) {
            console.error('FanTaHelper.getConnectionParams error:', error);
            return {
                ClientKey: '',
                Client_GameEvent_API: '',
                Client_GameIssue_API: '',
                ConnectSetting: [],
                LifeSecond: 0,
                CustomData: '',
                ESAPIHistory_UrlList: []
            };
        }
    }

    /**
     * 取得API相關URL參數
     * @param encodedUrl 加密的URL
     * @returns API URL參數物件
     */
    static getApiUrls(encodedUrl: string): {
        GameRule_Url: string;
        PayTable_Url: string;
        PlayerHistory_Url: string;
        CustomData: string;
    } {
        try {
            const decodedUrl = this.decodeUrl(encodedUrl);
            const params = this.parseUrlParameters(decodedUrl);

            return {
                GameRule_Url: params['GameRule_Url'] || '',
                PayTable_Url: params['PayTable_Url'] || '',
                PlayerHistory_Url: params['PlayerHistory_Url'] || '',
                CustomData: params['CustomData'] || ''
            };
        } catch (error) {
            console.error('FanTaHelper.getApiUrls error:', error);
            return {
                GameRule_Url: '',
                PayTable_Url: '',
                PlayerHistory_Url: '',
                CustomData: ''
            };
        }
    }

    /**
     * 取得平台設定參數
     * @param encodedUrl 加密的URL
     * @returns 平台設定參數物件
     */
    static getPlatformSettings(encodedUrl: string): {
        LoadingLogoType: string;
        GameBottomLogoType: string;
        BuyFeatureLogoType: string;
        ThousandPlace: string;
    } {
        try {
            const decodedUrl = this.decodeUrl(encodedUrl);
            const params = this.parseUrlParameters(decodedUrl);

            return {
                LoadingLogoType: params['LoadingLogoType'] || '',
                GameBottomLogoType: params['GameBottomLogoType'] || '',
                BuyFeatureLogoType: params['BuyFeatureLogoType'] || '',
                ThousandPlace: params['ThousandPlace'] || ''
            };
        } catch (error) {
            console.error('FanTaHelper.getPlatformSettings error:', error);
            return {
                LoadingLogoType: '',
                GameBottomLogoType: '',
                BuyFeatureLogoType: '',
                ThousandPlace: ''
            };
        }
    }

    /**
     * 取得選項設定參數
     * @param encodedUrl 加密的URL
     * @returns 選項設定參數物件
     */
    static getOptionSettings(encodedUrl: string): {
        back_url: string;
        logo_page_url: string;
        timezone: string;
    } {
        try {
            const decodedUrl = this.decodeUrl(encodedUrl);
            const params = this.parseUrlParameters(decodedUrl);

            return {
                back_url: params['back_url'] || '',
                logo_page_url: params['logo_page_url'] || '',
                timezone: params['timezone'] || '+08:00'
            };
        } catch (error) {
            console.error('FanTaHelper.getOptionSettings error:', error);
            return {
                back_url: '',
                logo_page_url: '',
                timezone: '+08:00'
            };
        }
    }

    /**
     * 取得所有參數
     * @param encodedUrl 加密的URL
     * @returns 所有參數的物件
     */
    static getAllParameters(encodedUrl: string): { [key: string]: string } {
        try {
            const decodedUrl = this.decodeUrl(encodedUrl);
            return this.parseUrlParameters(decodedUrl);
        } catch (error) {
            console.error('FanTaHelper.getAllParameters error:', error);
            return {};
        }
    }

    /**
     * Base64解碼
     * @param base64String Base64編碼的字串
     * @returns 解碼後的字串
     */
    private static base64Decode(base64String: string): string {
        try {
            // 使用瀏覽器內建的atob函數進行Base64解碼
            const decodedString = atob(base64String);

            // 使用現代方式處理UTF-8字符
            // 將字符串轉換為字節數組，然後用TextDecoder解碼
            const bytes = new Uint8Array(decodedString.length);
            for (let i = 0; i < decodedString.length; i++) {
                bytes[i] = decodedString.charCodeAt(i);
            }

            // 使用TextDecoder進行UTF-8解碼
            const decoder = new TextDecoder('utf-8', { fatal: false });
            return decoder.decode(bytes);

        } catch (error) {
            console.error('FanTaHelper.base64Decode error:', error);
            throw new Error('Base64解碼失敗');
        }
    }

    /**
     * 測試複雜參數解析功能（開發階段使用）
     * @param testUrl 測試用的URL
     * @returns 解析結果
     */
    static testComplexParameterParsing(testUrl: string): { [key: string]: string } {
        console.log('Testing URL:', testUrl);
        const result = this.getAllParameters(testUrl);
        console.log('Parsed parameters:', result);
        return result;
    }
}