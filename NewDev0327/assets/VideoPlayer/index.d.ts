declare module '*/waninplayer/index.mjs' {
  import { Material, RenderTexture, VideoClip, JsonAsset } from 'cc';

  enum PlayMode {
    /**
     * 單次播放。
     *
     * @description
     * 此播放模式會進行"插斷播放"。
     * 即立即中止上一部影片並播放此次影片。
     * 如不想插斷播放，請改用接續模式。
     */
    Once = 0,
    /**
     * 循環播放。
     *
     * @description
     * 此播放模式會進行"插斷播放"，
     * 並持續循環播放 playList 中所有影片。
     */
    RepeatAll = 1,
    /**
     * 循環播放列表最後一個檔案。
     *
     *
     * 此播放模式會進行"插斷播放"，
     * 並在播放一次 playList 中所有影片後，
     * 循環播放最後一個影片。
     *
     *  @example
     *  // 播放順序即為 0 1 2 3 3 3 3 ...。
     *  play(PlayMode.RepeatLast, {0 ,1 ,2 ,3 } )
     *
     */
    RepeatLast = 2,
    /**
     * 單次播放 (接續)。
     *
     * @description
     * 此播放模式會進行"插斷播放"，
     * 即等待上一次播放列表結束後，才接著播放此次影片。
     * 如不想接續播放，請改用插斷模式。
     */
    AppendOnce = 3,
    /**
     * 循環播放 (接續)。
     *
     * @description
     * 此播放模式會進行"接續播放"，
     * 並持續循環播放 playList 中所有影片。
     */
    AppendRepeatAll = 4,
    /**
     * 循環播放列表最後一個檔案 (接續)。
     *
     * @description
     * 此播放模式會進行"接續播放"，
     * 並在播放一次 playList 中所有影片後，
     * 循環播放最後一個影片。
     *
     * @example
     * // 播放順序即為 (上一次 playList 結束後) 0 1 2 3 3 3 3 ...。
     * play( PlayMode.AppendRepeatLast, {0,1,2,3} )
     */
    AppendRepeatLast = 5,
  }
  enum ErrorCode {
    /**
     * 預設錯誤碼。
     */
    UnknownError = 0,
    /**
     * 影片解碼錯誤。
     * @description 解碼器無法運行，常見原因是硬體資源不足或資料錯誤導。
     */
    DecoderError = 1,
    /**
     * 播放器設定了不可用的參數。
     */
    InvalidParameter = 2,
    DecoderIsNull = 3,
    /**
     * 播放器創建codec失敗。
     */
    CreateCodecFailed = 4,
    /**
     * 資料格式不正確
     */
    DataFormatError = 5,
  }
  interface WaninPlayerEvent {
    onStart: (() => void) | null;
    onEnd: (() => void) | null;
    onNext: (() => void) | null;
    onRepeat: (() => void) | null;
    onError: ((code: ErrorCode, msg: string) => void) | null;
    onDecoderReady: ((config: VideoDecoderConfig) => void) | null;
    onStartOnce: (() => void) | null;
    onEndOnce: (() => void) | null;
    onNextOnce: (() => void) | null;
    onRepeatOnce: (() => void) | null;
    onErrorOnce: ((code: ErrorCode, msg: string) => void) | null;
    onDecoderReadyOnce: ((config: VideoDecoderConfig) => void) | null;
    removeAllListeners(): void;
  }
  interface IMaterialManager {
    setBaseAlphaMaterial(material: Material): void;
    clearAllMaterial(): void;
    getAlphaMaterial(alphaUvOffsetX: number, alphaUvOffsetY: number): Material;
  }
  interface IWaninPlayer {
    event: WaninPlayerEvent;
    loadVideo(urls: RequestInfo[] | URL[]): Promise<void>;
    createDecoder(): Promise<void>;
    play(mode?: PlayMode, list?: number[]): void;
    pause(sw: boolean): void;
    GetRenderTexture(): RenderTexture | null;
    unloadVideo(): void;
    closeDecoder(callback?: VoidFunction): void;
    update(deltaTime: number): void;
    resetPlaybackState(): void;
    destroy(): void;
  }
  interface IVideoFrameExtractor {
    /**
     * 影片轉換為序列圖集
     * @param videoClip 影片
     * @param jsonAsset 分割資料
     */
    extractorVideo(videoClip: VideoClip, jsonAsset?: JsonAsset): void;
    /**
     * 完成轉換回呼
     */
    onExtractionComplete: ((frameSequence: FrameSequence[]) => void) | null;
    /**
     * 轉換完成序列圖集
     */
    frameSequences: FrameSequence[];
    event: WaninPlayerEvent;
  }
  interface FrameData {
    width: number;
    height: number;
    x: number;
    y: number;
    alphaData: number[];
    texture: RenderTexture;
  }
  interface FrameSequence {
    id: number;
    name: string;
    data: FrameData[];
  }

  class EventManager implements WaninPlayerEvent {
    onStart: (() => void) | null;
    onEnd: (() => void) | null;
    onNext: (() => void) | null;
    onRepeat: (() => void) | null;
    onError: ((code: ErrorCode, msg: string) => void) | null;
    onDecoderReady: ((config: VideoDecoderConfig) => void) | null;
    onStartOnce: (() => void) | null;
    onEndOnce: (() => void) | null;
    onNextOnce: (() => void) | null;
    onRepeatOnce: (() => void) | null;
    onErrorOnce: ((code: ErrorCode, msg: string) => void) | null;
    onDecoderReadyOnce: ((config: VideoDecoderConfig) => void) | null;
    sendStart(): void;
    sendDecoderReady(config: VideoDecoderConfig): void;
    sendEnd(): void;
    sendNext(): void;
    sendRepeat(): void;
    sendError(code: ErrorCode, msg: string): void;
    removeAllListeners(): void;
  }

  class WaninPlayer implements IWaninPlayer {
    #private;
    /**
     * prepare中的videoChunk
     */
    private videoChunks;
    event: EventManager;
    loadVideo(urls: RequestInfo[] | URL[]): Promise<void>;
    createDecoder(): Promise<void>;
    play(mode?: PlayMode, list?: number[]): void;
    update(deltaTime: number): void;
    resetPlaybackState(): void;
    /**
     * 暫停播放影片。
     * @param sw true 代表暫停播放，false 代表恢復播放
     */
    pause(sw: boolean): void;
    GetRenderTexture(): RenderTexture | null;
    unloadVideo(): void;
    closeDecoder(callback?: VoidFunction | null): void;
    destroy(): void;
  }

  class VideoFrameExtractor implements IVideoFrameExtractor {
    #private;
    frameSequences: FrameSequence[];
    event: EventManager;
    onExtractionComplete: ((frameSequence: FrameSequence[]) => void) | null;
    extractorVideo(videoClip: VideoClip, jsonAsset?: JsonAsset | null): void;
    /**
     * 依照 extractionVideoQueue 開始轉碼
     *
     * @param isContinue 是否接續轉碼
     * @returns
     */
    private extractor;
    private getRenderTexture;
    private closeDecoder;
    private checkVideoSegmentationData;
  }

  class MaterialManager implements IMaterialManager {
    private materials;
    private baseMaterial;
    constructor();
    setBaseAlphaMaterial(material: Material): void;
    clearAllMaterial(): void;
    getAlphaMaterial(alphaUvOffsetX: number, alphaUvOffsetY: number): Material;
  }

  export {
    ErrorCode,
    MaterialManager,
    PlayMode,
    VideoFrameExtractor,
    WaninPlayer as default,
  };
}
