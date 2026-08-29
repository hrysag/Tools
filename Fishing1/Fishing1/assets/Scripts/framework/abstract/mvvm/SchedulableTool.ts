/**
 * Created by EricHuang on 2023/12/11.
 * 
 * ps--情非得已..因為原本的AbstractView裡面已經有一個屬性id
 * 他跟ISchedulable裡面的id是衝突的..
 */
import {ISchedulable} from 'cc';

export class SchedulableTool implements ISchedulable
{
    id?: string;
    uuid?: string;

    constructor()
    {

    }
}