"use strict";
/**
 * 若插件功能需要與 cc API 互動，請依照以下步驟進行:
 * 1.在外部透過 Editor API 呼叫 SceneScript
 * const functionResult = await Editor.Message.request('scene', 'execute-scene-script', {
 *     name: packageJSON.name,
 *     method: 'mySceneFunction', // 必須對應到 SceneScript.ts 中的 methods
 *     args: <傳入必要的參數>,
 * });
 *
 * 2.在 SceneScript.ts 中實作 mySceneFunction 方法，並視需要將執行結果回傳，由 functionResult 接收
 */
// import { join } from 'path';
// module.paths.push(join(Editor.App.path, 'node_modules'));
// import { Component, director, Node } from "cc";
// export const methods: { [key: string]: (...any: any) => any } = {
//     mySceneFunction() {
//         // 在這裡實作會和場景交互的方法
//         // 可以像寫遊戲腳本一樣直接調用 cc 的 API
//     },
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NlbmVTY3JpcHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvU2NlbmVTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFFSCwrQkFBK0I7QUFDL0IsNERBQTREO0FBQzVELGtEQUFrRDtBQUVsRCxvRUFBb0U7QUFDcEUsMEJBQTBCO0FBQzFCLDRCQUE0QjtBQUM1QixxQ0FBcUM7QUFDckMsU0FBUztBQUNULEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6Iul5o+S5Lu25Yqf6IO96ZyA6KaB6IiHIGNjIEFQSSDkupLli5XvvIzoq4vkvp3nhafku6XkuIvmraXpqZ/pgLLooYw6XHJcbiAqIDEu5Zyo5aSW6YOo6YCP6YGOIEVkaXRvciBBUEkg5ZG85Y+rIFNjZW5lU2NyaXB0XHJcbiAqIGNvbnN0IGZ1bmN0aW9uUmVzdWx0ID0gYXdhaXQgRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnc2NlbmUnLCAnZXhlY3V0ZS1zY2VuZS1zY3JpcHQnLCB7XHJcbiAqICAgICBuYW1lOiBwYWNrYWdlSlNPTi5uYW1lLFxyXG4gKiAgICAgbWV0aG9kOiAnbXlTY2VuZUZ1bmN0aW9uJywgLy8g5b+F6aCI5bCN5oeJ5YiwIFNjZW5lU2NyaXB0LnRzIOS4reeahCBtZXRob2RzXHJcbiAqICAgICBhcmdzOiA85YKz5YWl5b+F6KaB55qE5Y+D5pW4PixcclxuICogfSk7XHJcbiAqXHJcbiAqIDIu5ZyoIFNjZW5lU2NyaXB0LnRzIOS4reWvpuS9nCBteVNjZW5lRnVuY3Rpb24g5pa55rOV77yM5Lim6KaW6ZyA6KaB5bCH5Z+36KGM57WQ5p6c5Zue5YKz77yM55SxIGZ1bmN0aW9uUmVzdWx0IOaOpeaUtlxyXG4gKi9cclxuXHJcbi8vIGltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcclxuLy8gbW9kdWxlLnBhdGhzLnB1c2goam9pbihFZGl0b3IuQXBwLnBhdGgsICdub2RlX21vZHVsZXMnKSk7XHJcbi8vIGltcG9ydCB7IENvbXBvbmVudCwgZGlyZWN0b3IsIE5vZGUgfSBmcm9tIFwiY2NcIjtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBtZXRob2RzOiB7IFtrZXk6IHN0cmluZ106ICguLi5hbnk6IGFueSkgPT4gYW55IH0gPSB7XHJcbi8vICAgICBteVNjZW5lRnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgLy8g5Zyo6YCZ6KOh5a+m5L2c5pyD5ZKM5aC05pmv5Lqk5LqS55qE5pa55rOVXHJcbi8vICAgICAgICAgLy8g5Y+v5Lul5YOP5a+r6YGK5oiy6IWz5pys5LiA5qij55u05o6l6Kq/55SoIGNjIOeahCBBUElcclxuLy8gICAgIH0sXHJcbi8vIH07Il19