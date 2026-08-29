import { Component } from "cc";
export interface IBasicPoolObject extends Component {
    beforeDestroy(): void;
    resetData(): void;
}