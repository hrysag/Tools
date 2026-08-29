import {AbstractViewModel,viewModel,Bindable} from'../abstract/mvvm/AbstractViewModel';
import {TestModel} from'./TestModel';
import {log} from 'cc';

//@viewModel('AbstractViewModel',TestModel)
@viewModel('AbstractViewModel')
export class TestViewModel extends AbstractViewModel
{
   @Bindable _testTestModeValue2:string;//--這個就是寫你要拿model裡面那些屬性
   @Bindable _testTestModeValue3:any;//--這個就是寫你要拿model裡面那些屬性
   
   constructor()
   {
      super();
      log('he@@@@@@@@@@@@@@@@@TestView');
   }

   protected onLoad():void
   {
      //log('WTF',);
      super.onLoad();
      //---可能不要放在onloaded去拿,因為base-node在初始會去call一次this._onHierarchyChanged(oldParent);
      //--初始後就只會進行一次
      log('check_data VM from Modole',this);
      //log('check_data VM from Modole2',this._testTestModeValue2);
   }
}


