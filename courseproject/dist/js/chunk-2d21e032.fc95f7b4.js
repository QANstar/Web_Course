(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e032"],{d46b:function(e,t,l){"use strict";l.r(t);var n=l("7a23"),d={class:"showAnim leftIntroDiv"},c=Object(n["createElementVNode"])("h2",null,"列表标签介绍",-1),a=Object(n["createElementVNode"])("p",null,"列表标签能产生一个工整的纵向列表（可通过css修改成横向），HTML支持有序和无序列表。",-1),i={class:"showBox"},o=Object(n["createElementVNode"])("h5",null,"代码样例：",-1),r=Object(n["createTextVNode"])("                  "),b={class:"lang-html"},s=Object(n["createTextVNode"])("\r\n              "),h=Object(n["createStaticVNode"])('<div><h5>样例结果:</h5><div class="tabBoxs"><h6>无序列表：</h6><ul><li>列一</li><li>列二</li></ul><h6>有序列表：</h6><ol><li>列一</li><li>列二</li></ol><h6>自定义列表：</h6><dl><dt>列一项目</dt><dd>列一项目描述</dd><dt>列二项目</dt><dd>列二项目描述</dd></dl></div></div>',1),m=Object(n["createElementVNode"])("h5",null,"表格标签解释:",-1);function u(e,t,l,u,j,O){var f=Object(n["resolveComponent"])("el-table-column"),v=Object(n["resolveComponent"])("el-table"),p=Object(n["resolveDirective"])("highlight");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",d,[c,a,Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("div",null,[o,Object(n["createElementVNode"])("div",null,[Object(n["withDirectives"])(Object(n["createElementVNode"])("pre",null,[r,Object(n["createElementVNode"])("code",b,"\r\n                      "+Object(n["toDisplayString"])(j.listExample)+"\r\n                  ",1),s],512),[[p]])])]),h,Object(n["createElementVNode"])("div",null,[m,Object(n["createElementVNode"])("div",null,[Object(n["createVNode"])(v,{data:j.listData,border:"",style:{width:"100%"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{prop:"name",label:"标签"}),Object(n["createVNode"])(f,{prop:"effect",label:"功能"})]})),_:1},8,["data"])])])])])}var j={name:"ListTag",data:function(){return{listExample:"\n        <div>\n          <h6>无序列表：</h6>\n          <ul>\n            <li>列一</li>\n            <li>列二</li>\n          </ul>\n          <h6>有序列表：</h6>\n          <ol>\n            <li>列一</li>\n            <li>列二</li>\n          </ol>\n          <h6>自定义列表：</h6>\n          <dl>\n            <dt>列一项目</dt>\n            <dd>列一项目描述</dd>\n            <dt>列二项目</dt>\n            <dd>列二项目描述</dd>\n          </dl>\n        </div>",listData:[{name:"<ol>",effect:"定义有序列表"},{name:"<ul>",effect:"定义无序列表"},{name:"<li>",effect:"定义列表项"},{name:"<dl>",effect:"定义列表"},{name:"<dt>",effect:"自定义列表项目"},{name:"<dd>",effect:"定义自定列表项的描述"}]}}};j.render=u;t["default"]=j}}]);
//# sourceMappingURL=chunk-2d21e032.fc95f7b4.js.map