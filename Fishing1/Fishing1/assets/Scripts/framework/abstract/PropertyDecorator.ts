/**
 * Created by EricHuang on 2023/9/06.
 */
type Instantiable<T> = { new(...params: any[]): T }
/**
 * 在type的建構對象，向名稱name的array属性中添加string值property，
 * 在T的對象中(class),添加動態的屬性
 * @param name 要添加屬性的class名稱
 * @param type 添加到的目標抽象對象
 * @param property 屬性名稱
 */
export function PropertyDecorator<T>(name: string, type: Instantiable<T>, property: string) {
    if (!type.constructor.hasOwnProperty(name))
    {
        //type.connector 返回type的class，比喻type=AbstractViewModel，其中的type.constructor=login_view_model型別
        type.constructor[name] = [].concat(Object.getPrototypeOf(type).constructor[name] || [])
    }
    if (-1 === type.constructor[name].indexOf(property)) {
        type.constructor[name].push(property)
    }
}
