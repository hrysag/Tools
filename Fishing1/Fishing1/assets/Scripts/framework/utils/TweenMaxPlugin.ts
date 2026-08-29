/**
 * Created by EricHuang on 2023/08/18.
 * 情非得已
 */
import {_decorator,math,Color,v3,v2,Vec3,Component, Node, UIOpacity, UITransform, SpriteRenderer, Sprite, color, Line, Vec2} from "cc";
import {log} from 'cc';

 export class TweenMaxCocosPlugin extends Component {
    
    public others:any;
    
    get x(): number {
        
        return this.node.position.x;
    }
 
    set x(value: number) {
        
        this.node.setPosition(value, this.node.position.y, this.node.position.z)
    }
 
    get y(): number {
        
        return this.node.position.y;
    }
 
    set y(value: number) {
        
        this.node.setPosition(this.node.position.x, value, this.node.position.z)
    }
 
    get scale(): number {
        
        return this.node.scale.x;
    }
 
     // get pos(): Vec2 {
     //     return v2(this.node.position.x, this.node.position.y);
     // }
     //
     // set pos(value: Vec2) {
     //     this.node.setPosition(v3(value.x, value.y));
     // }
 
    set scale(value: number) {
       
        this.node.setScale(value, value, value);
    }
 
    get scaleX(): number {
        
        return this.node.scale.x;
    }
 
    set scaleX(value: number) {
       this.node.setScale(value, this.node.scale.y, 1);
    }
 
    get scaleY(): number {
      return this.node.scale.y;
    }
 
    set scaleY(value: number) {
        this.node.setScale(this.node.scale.x, value, 1);
    }
 
    get width(): number {
        
        //const transform:UITransform;
        let transform = <UITransform>this.node.getComponent(UITransform);
        if(!transform)
        {
            transform=this.node.addComponent(UITransform);
        }

        return transform.width;
    }
 
    set width(value: number) {
        //const transform = <UITransform>this.node.getComponent(UITransform);
        let transform = <UITransform>this.node.getComponent(UITransform);
        if(!transform)
        {
            transform=this.node.addComponent(UITransform);
        }

        transform.width = value;
    }
 
    get height(): number {
        //const transform = <UITransform>this.node.getComponent(UITransform);
        let transform = <UITransform>this.node.getComponent(UITransform);
        if(!transform)
        {
            transform=this.node.addComponent(UITransform);
        }
        return transform.height;
    }
 
    set height(value: number) {
        //const transform = <UITransform>this.node.getComponent(UITransform);
        let transform = <UITransform>this.node.getComponent(UITransform);
        if(!transform)
        {
            transform=this.node.addComponent(UITransform);
        }
        transform.height = value;
    }
 
    //---這邊要自己加入component
    get opacity(): number {
        
        /*
        const render = this.node.getComponent(Renderable2D);
        if (render ) {
            return render.color.a;
        }*/
        
        const opacity: UIOpacity = <UIOpacity>this.node.getComponent(UIOpacity);
        if (opacity ) {
            return opacity.opacity;
        }
        return 255;
    }
 
     // get contentSize(): Size {
     //     const transform = <UITransform>this.node.getComponent(UITransform);
     //     return transform.contentSize;
     // }
     //
     // set contentSize(value: Size) {
     //     const transform = <UITransform>this.node.getComponent(UITransform);
     //     transform.setContentSize(value);
     // }
 
    set opacity(value: number) {
        
        /*
        const render = this.node.getComponent(Renderable2D);
        if (render ) 
        {
            render.color = new Color(render.color.r, render.color.g, render.color.b, value)
            return;
        }*/
        
        const opacity: UIOpacity = <UIOpacity>this.node.getComponent(UIOpacity);
        if (opacity )
        {
            opacity.opacity = value;
        }
     }
 
    get angle(): number {
        
        return this.node.angle;
    }
 
    set angle(value: number) {
        this.node.angle = value;
    }

    get fillRange():number
    {
        return this.node.getComponent(Sprite)?.fillRange;
    }

    set fillRange(value: number)
    {
        if(this.node.getComponent(Sprite))
        {
            this.node.getComponent(Sprite).fillRange=value;
        }
    }

    get fillCenterX():number
    {
        return this.node.getComponent(Sprite)?.fillCenter.x;
    }


    set fillCenterX(value: number)
    {
        if(this.node.getComponent(Sprite))
        {
            let fc=this.node.getComponent(Sprite).fillCenter;
            fc=v2(value,fc.y);
        }
    }


    get fillCenterY():number
    {
        return this.node.getComponent(Sprite)?.fillCenter.y;
    }


    set fillCenterY(value: number)
    {
        if(this.node.getComponent(Sprite))
        {
            let fc=this.node.getComponent(Sprite).fillCenter;
            fc=v2(fc.x,value);
        }
    }






    set sprColorAlpha(value:number)
    {
        if(this.node.getComponent(Sprite))
        {
            this.node.getComponent(Sprite).color=color(255,255,255,value);
        }
    }

    get sprColorAlpha():number
    {
        return this.node.getComponent(Sprite)?.color.a;
    }

    get linePosEndX():number
    {
        let value:number=-1;
        
        if(this.node.getComponent(Line))
        {
            let linePos=this.node.getComponent(Line).positions;
            
            let len:number=linePos.length;
            
            value=(linePos[len-1] as Vec3).x;
        }

        //log('check_linePosEndX',value);
        
        return value;
    }

    get linePosEndY():number
    {
        let value:number=-1;
        
        if(this.node.getComponent(Line))
        {
            let linePos=this.node.getComponent(Line).positions;
            
            let len:number=linePos.length;
            
            value=(linePos[len-1] as Vec3).y;
        }
        
       
        return value;
    }


    set linePosEndX(value:number)
    {
        if(this.node.getComponent(Line))
        {
            let linePos=this.node.getComponent(Line).positions;
            
            let len:number=linePos.length;

            //-- linecomponent.positions=posData as never;
            
            let pos:Vec3[]=[];

            for(let i:number=0;i<len;i++)
            {
               if(i==len-1)
               {

                pos.push(v3(value,(linePos[i] as Vec3).y));

               }else{
                    
                pos.push(<Vec3>linePos[i]);
               
               }
            }

            
            this.node.getComponent(Line).positions=pos as never;

            //(linePos[len-1] as Vec3)=v3(value,(linePos[len-1] as Vec3).y);
            
        }
    }


    set linePosEndY(value:number)
    {
        if(this.node.getComponent(Line))
        {
            let linePos=this.node.getComponent(Line).positions;
            
            let len:number=linePos.length;

            let pos:Vec3[]=[];

            for(let i:number=0;i<len;i++)
            {
               if(i==len-1)
               {

                pos.push(v3((linePos[i] as Vec3).x,value));

               }else{
                    
                pos.push(<Vec3>linePos[i]);
               
               }
            }

            this.node.getComponent(Line).positions=pos as never;

            //(linePos[len-1] as Vec3)=v3((linePos[len-1] as Vec3).x,value);
            
        }
    }

    get lineOffestX():number
    {
       return this.node.getComponent(Line)?.offset.x;
    }

    get lineOffestY():number
    {
       return this.node.getComponent(Line)?.offset.y;
    }

    set lineOffestX(value:number)
    {
        if(this.node.getComponent(Line))
        {
            //this.node.getComponent(Line).offset.x=value;
            let offset:Vec2=this.node.getComponent(Line).offset;

            this.node.getComponent(Line).offset=new Vec2(value,offset.y);
        }
    }

    set lineOffestY(value:number)
    {
        if(this.node.getComponent(Line))
        {
            let offset:Vec2=this.node.getComponent(Line).offset;

            this.node.getComponent(Line).offset=new Vec2(offset.x,value);
            
        }
    }




    
 
    static trans(node: Node): TweenMaxCocosPlugin {
        
        return <TweenMaxCocosPlugin>node.getComponent(TweenMaxCocosPlugin);
    }
 }