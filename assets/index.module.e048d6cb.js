var u=Object.defineProperty;var i=(e,t)=>u(e,"name",{value:t,configurable:!0});import{_ as d}from"./extends.946277fc.js";import{r}from"./index.132d91ce.js";function x(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}i(x,"$6ed0406888f73fc4$var$setRef");function $(...e){return t=>e.forEach(n=>x(n,t))}i($,"$6ed0406888f73fc4$export$43e446d32b3d21af");const m=r.exports.forwardRef((e,t)=>{const{children:n,...o}=e,l=r.exports.Children.toArray(n),s=l.find(E);if(s){const c=s.props.children,f=l.map(a=>a===s?r.exports.Children.count(c)>1?r.exports.Children.only(null):r.exports.isValidElement(c)?c.props.children:null:a);return r.exports.createElement(p,d({},o,{ref:t}),r.exports.isValidElement(c)?r.exports.cloneElement(c,void 0,f):null)}return r.exports.createElement(p,d({},o,{ref:t}),n)});m.displayName="Slot";const p=r.exports.forwardRef((e,t)=>{const{children:n,...o}=e;return r.exports.isValidElement(n)?r.exports.cloneElement(n,{...y(o,n.props),ref:$(t,n.ref)}):r.exports.Children.count(n)>1?r.exports.Children.only(null):null});p.displayName="SlotClone";const h=i(({children:e})=>r.exports.createElement(r.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function E(e){return r.exports.isValidElement(e)&&e.type===h}i(E,"$5e63c961fc1ce211$var$isSlottable");function y(e,t){const n={...t};for(const o in t){const l=e[o],s=t[o];/^on[A-Z]/.test(o)?l&&s?n[o]=(...f)=>{s(...f),l(...f)}:l&&(n[o]=l):o==="style"?n[o]={...l,...s}:o==="className"&&(n[o]=[l,s].filter(Boolean).join(" "))}return{...e,...n}}i(y,"$5e63c961fc1ce211$var$mergeProps");export{m as $};
//# sourceMappingURL=index.module.e048d6cb.js.map