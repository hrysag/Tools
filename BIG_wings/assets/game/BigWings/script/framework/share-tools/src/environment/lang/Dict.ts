// import { LZMA } from "../../lzma/LZMA";
import { URLParameter } from "../url/URLParameter";


type DictObject = Record<string, string>;


export class DictImpl {

    set lang(value: string) {
        this._lang = value;
        this.load();
    }

    set origin(value: string) {
        this._origin = value;
    }

    private _origin: string;
    private _lang: string;

    private dict: Record<string, string> = {};

    constructor(origin: string, lang: string) {
        this._origin = origin;
        this._lang = lang;
        this.load();
    }

    async load() {
        if (this.dict) return;

        const url = `${this._origin}/ipl/app/flash/pig/game/common/dict/${this._lang}.json`;

        return fetch(url)
            .then(res => {
                if (res.ok) return res.json();
            })
            .then((json: DictObject) => {
                this.dict = json;
            });
    }


    get(key: string) {
        const result = this.dict?.[key];
        return result ?? key;
    }

    has(key: string) {
        return !!this.dict?.[key];
    }


}

export const Dict = new DictImpl(location.origin, URLParameter.iplLang);