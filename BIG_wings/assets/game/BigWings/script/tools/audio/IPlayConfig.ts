 interface IPlayConfig {
    volume: number;
    loop: boolean;
    /**
     * 使用 play method 
     * 
     * - play method 存在最大同時播放數量限制 AudioSource.maxAudioChannel
     * 
     * - playOneShot method 不能暫停
     */
    usePlay: boolean;
}

export default IPlayConfig;