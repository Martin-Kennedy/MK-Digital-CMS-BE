(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{741:function(e,t,i){"use strict";i.r(t);var a=i(17),n=i(8),s=i(35),r=i(329),l=i.n(r),c=function e(t,i,r){var c=this,u=i.readViews,h=i.preloadViews,o=i.getListByKey,d=t.label,p=t.path,f=t.type,b=t.access,y=t.isOrderable,O=t.isPrimaryKey,w=t.isRequired,g=t.isReadOnly,j=t.adminDoc,m=t.defaultValue,V=Object(n.a)(t,["label","path","type","access","isOrderable","isPrimaryKey","isRequired","isReadOnly","adminDoc","defaultValue"]);Object(s.a)(this,e),Object(a.a)(this,"getQueryFragment",(function(){return c.path})),Object(a.a)(this,"serialize",(function(e){return e[c.path]||null})),Object(a.a)(this,"validateInput",(function(){})),Object(a.a)(this,"deserialize",(function(e){return e[c.path]})),Object(a.a)(this,"hasChanged",(function(e,t){return!l()(e[c.path],t[c.path])})),Object(a.a)(this,"getDefaultValue",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.originalInput,i=void 0===t?{}:t,a=e.prefill,n=void 0===a?{}:a;return c._getDefaultValue({originalInput:i,prefill:n})})),Object(a.a)(this,"initCellView",(function(){var e=c.views.Cell;e&&c.readViews([e])})),Object(a.a)(this,"initFieldView",(function(){var e=c.views.Field;e&&c.readViews([e])})),Object(a.a)(this,"initFilterView",(function(){var e=c.views.Filter;e&&c.readViews([e])})),Object(a.a)(this,"getFilterTypes",(function(){return[]})),Object(a.a)(this,"getFilterValue",(function(e){return e})),this.config=V,this.label=d,this.path=p,this.type=f,this.maybeAccess=b,this.isOrderable=y,this.isPrimaryKey=O,this.isRequired=w,this.isReadOnly=g,this.adminDoc=j,this.readViews=u,this.preloadViews=h,this.getListByKey=o,this.views=r,this._getDefaultValue="function"!=typeof m?function(e){return e.prefill[c.path]||m}:m};t.default=class extends c{constructor(...e){super(...e),Object(a.a)(this,"getQueryFragment",()=>`\n    ${this.path} {\n      id\n      path\n      filename\n      originalFilename\n      mimetype\n      encoding\n      publicUrlTransformed(transformation: { width: "120" crop: "limit" })\n    }\n  `),Object(a.a)(this,"serialize",e=>{const{path:t}=this;return e&&e[t]?e[t]:null}),Object(a.a)(this,"getFilterTypes",()=>[])}}}}]);