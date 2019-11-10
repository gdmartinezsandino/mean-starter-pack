/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare var moment: any;

interface JQuery {
  sassToJs(element:any, params?:any): any;
}