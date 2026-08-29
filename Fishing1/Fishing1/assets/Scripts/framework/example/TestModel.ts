import {AbstractModel,Mutable} from'../abstract/mvvm/AbstractModel';
import {log} from 'cc';

export class TestModel extends AbstractModel
{

  
   @Mutable _testTestModeValue2:string;
   @Mutable _testTestModeValue3:any;
   
   constructor()
   {
      super();
      log('helllo_TestModel');
      
   }
  
   public loaded():void
   {
     super.loaded();  
    
   }

   public testChangeValue(value):void
   {
      //this['_testTestModeValue2']='hehheheheehhehehe';
      log('set__testTestModeValue2',value);
      this._testTestModeValue2=value;
      
   }

   public testChangeValue2(value):void
   {
      //this['_testTestModeValue2']='hehheheheehhehehe';
      log('set__testTestModeValue3',value);
      this._testTestModeValue3=value;

      
   }


   public sendServer(key:string,value:any): void 
   {
      if(key=='0')
      {
         this.testChangeValue(value);
      
      }else{
         
         this.testChangeValue2(value);
         
      }
      
   }

   
}