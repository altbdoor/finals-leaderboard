(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const _ of o)if(_.type==="childList")for(const a of _.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const _={};return o.integrity&&(_.integrity=o.integrity),o.referrerPolicy&&(_.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?_.credentials="include":o.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function r(o){if(o.ep)return;o.ep=!0;const _=n(o);fetch(o.href,_)}})();var F,d,De,T,ge,Fe,_e,Ve,D={},fe=[],rt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Q=Array.isArray;function P(e,t){for(var n in t)e[n]=t[n];return e}function Me(e){var t=e.parentNode;t&&t.removeChild(e)}function C(e,t,n){var r,o,_,a={};for(_ in t)_=="key"?r=t[_]:_=="ref"?o=t[_]:a[_]=t[_];if(arguments.length>2&&(a.children=arguments.length>3?F.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)a[_]===void 0&&(a[_]=e.defaultProps[_]);return R(e,a,r,o,null)}function R(e,t,n,r,o){var _={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++De,__i:-1,__u:0};return o==null&&d.vnode!=null&&d.vnode(_),_}function ot(){return{current:null}}function k(e){return e.children}function S(e,t){this.props=e,this.context=t}function L(e,t){if(t==null)return e.__?L(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?L(e):null}function _t(e,t,n){var r,o=e.__v,_=o.__e,a=e.__P;if(a)return(r=P({},o)).__v=o.__v+1,d.vnode&&d.vnode(r),de(a,r,o,e.__n,a.ownerSVGElement!==void 0,32&o.__u?[_]:null,t,_??L(o),!!(32&o.__u),n),r.__.__k[r.__i]=r,r.__d=void 0,r.__e!=_&&je(r),r}function je(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return je(e)}}function ie(e){(!e.__d&&(e.__d=!0)&&T.push(e)&&!Y.__r++||ge!==d.debounceRendering)&&((ge=d.debounceRendering)||Fe)(Y)}function Y(){var e,t,n,r=[],o=[];for(T.sort(_e);e=T.shift();)e.__d&&(n=T.length,t=_t(e,r,o)||t,n===0||T.length>n?(ae(r,t,o),o.length=r.length=0,t=void 0,T.sort(_e)):t&&d.__c&&d.__c(t,fe));t&&ae(r,t,o),Y.__r=0}function Be(e,t,n,r,o,_,a,l,s,u,h){var i,p,f,g,x,b=r&&r.__k||fe,v=t.length;for(n.__d=s,it(n,t,b),s=n.__d,i=0;i<v;i++)(f=n.__k[i])!=null&&typeof f!="boolean"&&typeof f!="function"&&(p=f.__i===-1?D:b[f.__i]||D,f.__i=i,de(e,f,p,o,_,a,l,s,u,h),g=f.__e,f.ref&&p.ref!=f.ref&&(p.ref&&he(p.ref,null,f),h.push(f.ref,f.__c||g,f)),x==null&&g!=null&&(x=g),65536&f.__u||p.__k===f.__k?s=qe(f,s,e):typeof f.type=="function"&&f.__d!==void 0?s=f.__d:g&&(s=g.nextSibling),f.__d=void 0,f.__u&=-196609);n.__d=s,n.__e=x}function it(e,t,n){var r,o,_,a,l,s=t.length,u=n.length,h=u,i=0;for(e.__k=[],r=0;r<s;r++)(o=e.__k[r]=(o=t[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?R(null,o,null,null,o):Q(o)?R(k,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?R(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,l=at(o,n,a=r+i,h),o.__i=l,_=null,l!==-1&&(h--,(_=n[l])&&(_.__u|=131072)),_==null||_.__v===null?(l==-1&&i--,typeof o.type!="function"&&(o.__u|=65536)):l!==a&&(l===a+1?i++:l>a?h>s-a?i+=l-a:i--:i=l<a&&l==a-1?l-a:0,l!==r+i&&(o.__u|=65536))):(_=n[r])&&_.key==null&&_.__e&&(_.__e==e.__d&&(e.__d=L(_)),le(_,_,!1),n[r]=null,h--);if(h)for(r=0;r<u;r++)(_=n[r])!=null&&!(131072&_.__u)&&(_.__e==e.__d&&(e.__d=L(_)),le(_,_))}function qe(e,t,n){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=qe(r[o],t,n));return t}e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function $(e,t){return t=t||[],e==null||typeof e=="boolean"||(Q(e)?e.some(function(n){$(n,t)}):t.push(e)),t}function at(e,t,n,r){var o=e.key,_=e.type,a=n-1,l=n+1,s=t[n];if(s===null||s&&o==s.key&&_===s.type)return n;if(r>(s!=null&&!(131072&s.__u)?1:0))for(;a>=0||l<t.length;){if(a>=0){if((s=t[a])&&!(131072&s.__u)&&o==s.key&&_===s.type)return a;a--}if(l<t.length){if((s=t[l])&&!(131072&s.__u)&&o==s.key&&_===s.type)return l;l++}}return-1}function be(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||rt.test(t)?n:n+"px"}function B(e,t,n,r,o){var _;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||be(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||be(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")_=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,_?ke:we,_)):e.removeEventListener(t,_?ke:we,_);else{if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function we(e){if(this.l){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(d.event?d.event(e):e)}}function ke(e){if(this.l)return this.l[e.type+!0](d.event?d.event(e):e)}function de(e,t,n,r,o,_,a,l,s,u){var h,i,p,f,g,x,b,v,w,E,V,A,ye,M,ee,N=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),_=[l=t.__e=n.__e]),(h=d.__b)&&h(t);e:if(typeof N=="function")try{if(v=t.props,w=(h=N.contextType)&&r[h.__c],E=h?w?w.props.value:h.__:r,n.__c?b=(i=t.__c=n.__c).__=i.__E:("prototype"in N&&N.prototype.render?t.__c=i=new N(v,E):(t.__c=i=new S(v,E),i.constructor=N,i.render=ct),w&&w.sub(i),i.props=v,i.state||(i.state={}),i.context=E,i.__n=r,p=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),N.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=P({},i.__s)),P(i.__s,N.getDerivedStateFromProps(v,i.__s))),f=i.props,g=i.state,i.__v=t,p)N.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(N.getDerivedStateFromProps==null&&v!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(v,E),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(v,i.__s,E)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(i.props=v,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(j){j&&(j.__=t)}),V=0;V<i._sb.length;V++)i.__h.push(i._sb[V]);i._sb=[],i.__h.length&&a.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(v,i.__s,E),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,g,x)})}if(i.context=E,i.props=v,i.__P=e,i.__e=!1,A=d.__r,ye=0,"prototype"in N&&N.prototype.render){for(i.state=i.__s,i.__d=!1,A&&A(t),h=i.render(i.props,i.state,i.context),M=0;M<i._sb.length;M++)i.__h.push(i._sb[M]);i._sb=[]}else do i.__d=!1,A&&A(t),h=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++ye<25);i.state=i.__s,i.getChildContext!=null&&(r=P(P({},r),i.getChildContext())),p||i.getSnapshotBeforeUpdate==null||(x=i.getSnapshotBeforeUpdate(f,g)),Be(e,Q(ee=h!=null&&h.type===k&&h.key==null?h.props.children:h)?ee:[ee],t,n,r,o,_,a,l,s,u),i.base=t.__e,t.__u&=-161,i.__h.length&&a.push(i),b&&(i.__E=i.__=null)}catch(j){t.__v=null,s||_!=null?(t.__e=l,t.__u|=s?160:32,_[_.indexOf(l)]=null):(t.__e=n.__e,t.__k=n.__k),d.__e(j,t,n)}else _==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=lt(n.__e,t,n,r,o,_,a,s,u);(h=d.diffed)&&h(t)}function ae(e,t,n){for(var r=0;r<n.length;r++)he(n[r],n[++r],n[++r]);d.__c&&d.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(_){_.call(o)})}catch(_){d.__e(_,o.__v)}})}function lt(e,t,n,r,o,_,a,l,s){var u,h,i,p,f,g,x,b=n.props,v=t.props,w=t.type;if(w==="svg"&&(o=!0),_!=null){for(u=0;u<_.length;u++)if((f=_[u])&&"setAttribute"in f==!!w&&(w?f.localName===w:f.nodeType===3)){e=f,_[u]=null;break}}if(e==null){if(w===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",w):document.createElement(w,v.is&&v),_=null,l=!1}if(w===null)b===v||l&&e.data===v||(e.data=v);else{if(_=_&&F.call(e.childNodes),b=n.props||D,!l&&_!=null)for(b={},u=0;u<e.attributes.length;u++)b[(f=e.attributes[u]).name]=f.value;for(u in b)f=b[u],u=="children"||(u=="dangerouslySetInnerHTML"?i=f:u==="key"||u in v||B(e,u,null,f,o));for(u in v)f=v[u],u=="children"?p=f:u=="dangerouslySetInnerHTML"?h=f:u=="value"?g=f:u=="checked"?x=f:u==="key"||l&&typeof f!="function"||b[u]===f||B(e,u,f,b[u],o);if(h)l||i&&(h.__html===i.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(i&&(e.innerHTML=""),Be(e,Q(p)?p:[p],t,n,r,o&&w!=="foreignObject",_,a,_?_[0]:n.__k&&L(n,0),l,s),_!=null)for(u=_.length;u--;)_[u]!=null&&Me(_[u]);l||(u="value",g!==void 0&&(g!==e[u]||w==="progress"&&!g||w==="option"&&g!==b[u])&&B(e,u,g,b[u],!1),u="checked",x!==void 0&&x!==e[u]&&B(e,u,x,b[u],!1))}return e}function he(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){d.__e(r,n)}}function le(e,t,n){var r,o;if(d.unmount&&d.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||he(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(_){d.__e(_,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&le(r[o],t,n||typeof e.type!="function");n||e.__e==null||Me(e.__e),e.__=e.__e=e.__d=void 0}function ct(e,t,n){return this.constructor(e,n)}function I(e,t,n){var r,o,_,a;d.__&&d.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,_=[],a=[],de(t,e=(!r&&n||t).__k=C(k,null,[e]),o||D,D,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?F.call(t.childNodes):null,_,!r&&n?n:o?o.__e:t.firstChild,r,a),e.__d=void 0,ae(_,e,a)}function ze(e,t){I(e,t,ze)}function ut(e,t,n){var r,o,_,a,l=P({},e.props);for(_ in e.type&&e.type.defaultProps&&(a=e.type.defaultProps),t)_=="key"?r=t[_]:_=="ref"?o=t[_]:l[_]=t[_]===void 0&&a!==void 0?a[_]:t[_];return arguments.length>2&&(l.children=arguments.length>3?F.call(arguments,2):n),R(e.type,l,r||e.key,o||e.ref,null)}function st(e,t){var n={__c:t="__cC"+Ve++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,_;return this.getChildContext||(o=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&o.some(function(l){l.__e=!0,ie(l)})},this.sub=function(a){o.push(a);var l=a.componentWillUnmount;a.componentWillUnmount=function(){o.splice(o.indexOf(a),1),l&&l.call(a)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}F=fe.slice,d={__e:function(e,t,n,r){for(var o,_,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((_=o.constructor)&&_.getDerivedStateFromError!=null&&(o.setState(_.getDerivedStateFromError(e)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(l){e=l}throw e}},De=0,S.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},n),this.props)),e&&P(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ie(this))},S.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ie(this))},S.prototype.render=k,T=[],Fe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_e=function(e,t){return e.__v.__b-t.__v.__b},Y.__r=0,Ve=0;var O,m,te,Ne,H=0,Ge=[],q=[],y=d,xe=y.__b,Se=y.__r,Pe=y.diffed,$e=y.__c,Ce=y.unmount,Ee=y.__;function U(e,t){y.__h&&y.__h(m,e,H||t),H=0;var n=m.__H||(m.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:q}),n.__[e]}function J(e){return H=1,Ye(Ke,e)}function Ye(e,t,n){var r=U(O++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ke(void 0,t),function(l){var s=r.__N?r.__N[0]:r.__[0],u=r.t(s,l);s!==u&&(r.__N=[u,r.__[1]],r.__c.setState({}))}],r.__c=m,!m.u)){var o=function(l,s,u){if(!r.__c.__H)return!0;var h=r.__c.__H.__.filter(function(p){return!!p.__c});if(h.every(function(p){return!p.__N}))return!_||_.call(this,l,s,u);var i=!1;return h.forEach(function(p){if(p.__N){var f=p.__[0];p.__=p.__N,p.__N=void 0,f!==p.__[0]&&(i=!0)}}),!(!i&&r.__c.props===l)&&(!_||_.call(this,l,s,u))};m.u=!0;var _=m.shouldComponentUpdate,a=m.componentWillUpdate;m.componentWillUpdate=function(l,s,u){if(this.__e){var h=_;_=void 0,o(l,s,u),_=h}a&&a.call(this,l,s,u)},m.shouldComponentUpdate=o}return r.__N||r.__}function K(e,t){var n=U(O++,3);!y.__s&&me(n.__H,t)&&(n.__=e,n.i=t,m.__H.__h.push(n))}function X(e,t){var n=U(O++,4);!y.__s&&me(n.__H,t)&&(n.__=e,n.i=t,m.__h.push(n))}function Je(e){return H=5,pe(function(){return{current:e}},[])}function ft(e,t,n){H=6,X(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function pe(e,t){var n=U(O++,7);return me(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function dt(e,t){return H=8,pe(function(){return e},t)}function ht(e){var t=m.context[e.__c],n=U(O++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(m)),t.props.value):e.__}function pt(e,t){y.useDebugValue&&y.useDebugValue(t?t(e):e)}function mt(){var e=U(O++,11);if(!e.__){for(var t=m.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function vt(){for(var e;e=Ge.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(z),e.__H.__h.forEach(ce),e.__H.__h=[]}catch(t){e.__H.__h=[],y.__e(t,e.__v)}}y.__b=function(e){m=null,xe&&xe(e)},y.__=function(e,t){t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ee&&Ee(e,t)},y.__r=function(e){Se&&Se(e),O=0;var t=(m=e.__c).__H;t&&(te===m?(t.__h=[],m.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=q,n.__N=n.i=void 0})):(t.__h.forEach(z),t.__h.forEach(ce),t.__h=[],O=0)),te=m},y.diffed=function(e){Pe&&Pe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ge.push(t)!==1&&Ne===y.requestAnimationFrame||((Ne=y.requestAnimationFrame)||yt)(vt)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==q&&(n.__=n.__V),n.i=void 0,n.__V=q})),te=m=null},y.__c=function(e,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(r){return!r.__||ce(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],y.__e(r,n.__v)}}),$e&&$e(e,t)},y.unmount=function(e){Ce&&Ce(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{z(r)}catch(o){t=o}}),n.__H=void 0,t&&y.__e(t,n.__v))};var Oe=typeof requestAnimationFrame=="function";function yt(e){var t,n=function(){clearTimeout(r),Oe&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Oe&&(t=requestAnimationFrame(n))}function z(e){var t=m,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),m=t}function ce(e){var t=m;e.__c=e.__(),m=t}function me(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ke(e,t){return typeof t=="function"?t(e):t}function Qe(e,t){for(var n in t)e[n]=t[n];return e}function ue(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function se(e,t){this.props=e,this.context=t}function gt(e,t){function n(o){var _=this.props.ref,a=_==o.ref;return!a&&_&&(_.call?_(null):_.current=null),t?!t(this.props,o)||!a:ue(this.props,o)}function r(o){return this.shouldComponentUpdate=n,C(e,o)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(se.prototype=new S).isPureReactComponent=!0,se.prototype.shouldComponentUpdate=function(e,t){return ue(this.props,e)||ue(this.state,t)};var Te=d.__b;d.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Te&&Te(e)};var bt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function wt(e){function t(n){var r=Qe({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=bt,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Le=function(e,t){return e==null?null:$($(e).map(t))},kt={map:Le,forEach:Le,count:function(e){return e?$(e).length:0},only:function(e){var t=$(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:$},Nt=d.__e;d.__e=function(e,t,n,r){if(e.then){for(var o,_=t;_=_.__;)if((o=_.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}Nt(e,t,n,r)};var Ie=d.unmount;function Xe(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=Qe({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Xe(r,t,n)})),e}function Ze(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Ze(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function G(){this.__u=0,this.t=null,this.__b=null}function et(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function xt(e){var t,n,r;function o(_){if(t||(t=e()).then(function(a){n=a.default||a},function(a){r=a}),r)throw r;if(!n)throw t;return C(n,_)}return o.displayName="Lazy",o.__f=!0,o}function W(){this.u=null,this.o=null}d.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Ie&&Ie(e)},(G.prototype=new S).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=et(r.__v),_=!1,a=function(){_||(_=!0,n.__R=null,o?o(l):l())};n.__R=a;var l=function(){if(!--r.__u){if(r.state.__a){var s=r.state.__a;r.__v.__k[0]=Ze(s,s.__c.__P,s.__c.__O)}var u;for(r.setState({__a:r.__b=null});u=r.t.pop();)u.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a)},G.prototype.componentWillUnmount=function(){this.t=[]},G.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Xe(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&C(k,null,e.fallback);return o&&(o.__u&=-33),[C(k,null,t.__a?null:e.children),o]};var He=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function St(e){return this.getChildContext=function(){return e.context},e.children}function Pt(e){var t=this,n=e.i;t.componentWillUnmount=function(){I(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),I(C(St,{context:t.context},e.__v),t.l)}function $t(e,t){var n=C(Pt,{__v:e,i:t});return n.containerInfo=t,n}(W.prototype=new S).__a=function(e){var t=this,n=et(t.__v),r=t.o.get(e);return r[0]++,function(o){var _=function(){t.props.revealOrder?(r.push(o),He(t,e,r)):o()};n?n(_):_()}},W.prototype.render=function(e){this.u=null,this.o=new Map;var t=$(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},W.prototype.componentDidUpdate=W.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){He(e,n,t)})};var tt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Ct=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Et=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Ot=/[A-Z0-9]/g,Tt=typeof document<"u",Lt=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function It(e,t,n){return t.__k==null&&(t.textContent=""),I(e,t),typeof n=="function"&&n(),e?e.__c:null}function Ht(e,t,n){return ze(e,t),typeof n=="function"&&n(),e?e.__c:null}S.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(S.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Ue=d.event;function Ut(){}function At(){return this.cancelBubble}function Wt(){return this.defaultPrevented}d.event=function(e){return Ue&&(e=Ue(e)),e.persist=Ut,e.isPropagationStopped=At,e.isDefaultPrevented=Wt,e.nativeEvent=e};var ve,Rt={enumerable:!1,configurable:!0,get:function(){return this.class}},Ae=d.vnode;d.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,o={};for(var _ in n){var a=n[_];if(!(_==="value"&&"defaultValue"in n&&a==null||Tt&&_==="children"&&r==="noscript"||_==="class"||_==="className")){var l=_.toLowerCase();_==="defaultValue"&&"value"in n&&n.value==null?_="value":_==="download"&&a===!0?a="":l==="ondoubleclick"?_="ondblclick":l!=="onchange"||r!=="input"&&r!=="textarea"||Lt(n.type)?l==="onfocus"?_="onfocusin":l==="onblur"?_="onfocusout":Et.test(_)?_=l:r.indexOf("-")===-1&&Ct.test(_)?_=_.replace(Ot,"-$&").toLowerCase():a===null&&(a=void 0):l=_="oninput",l==="oninput"&&o[_=l]&&(_="oninputCapture"),o[_]=a}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=$(n.children).forEach(function(s){s.props.selected=o.value.indexOf(s.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=$(n.children).forEach(function(s){s.props.selected=o.multiple?o.defaultValue.indexOf(s.props.value)!=-1:o.defaultValue==s.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",Rt)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),t.props=o}(e),e.$$typeof=tt,Ae&&Ae(e)};var We=d.__r;d.__r=function(e){We&&We(e),ve=e.__c};var Re=d.diffed;d.diffed=function(e){Re&&Re(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),ve=null};var Dt={ReactCurrentDispatcher:{current:{readContext:function(e){return ve.__n[e.__c].props.value}}}};function Ft(e){return C.bind(null,e)}function Z(e){return!!e&&e.$$typeof===tt}function Vt(e){return Z(e)&&e.type===k}function Mt(e){return Z(e)?ut.apply(null,arguments):e}function jt(e){return!!e.__k&&(I(null,e),!0)}function Bt(e){return e&&(e.base||e.nodeType===1&&e)||null}var qt=function(e,t){return e(t)},zt=function(e,t){return e(t)},Gt=k;function nt(e){e()}function Yt(e){return e}function Jt(){return[!1,nt]}var Kt=X,Qt=Z;function Xt(e,t){var n=t(),r=J({h:{__:n,v:t}}),o=r[0].h,_=r[1];return X(function(){o.__=n,o.v=t,ne(o)&&_({h:o})},[e,n,t]),K(function(){return ne(o)&&_({h:o}),e(function(){ne(o)&&_({h:o})})},[e]),n}function ne(e){var t,n,r=e.v,o=e.__;try{var _=r();return!((t=o)===(n=_)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}var Zt={useState:J,useId:mt,useReducer:Ye,useEffect:K,useLayoutEffect:X,useInsertionEffect:Kt,useTransition:Jt,useDeferredValue:Yt,useSyncExternalStore:Xt,startTransition:nt,useRef:Je,useImperativeHandle:ft,useMemo:pe,useCallback:dt,useContext:ht,useDebugValue:pt,version:"17.0.2",Children:kt,render:It,hydrate:Ht,unmountComponentAtNode:jt,createPortal:$t,createElement:C,createContext:st,createFactory:Ft,cloneElement:Mt,createRef:ot,Fragment:k,isValidElement:Z,isElement:Qt,isFragment:Vt,findDOMNode:Bt,Component:S,PureComponent:se,memo:gt,forwardRef:wt,flushSync:zt,unstable_batchedUpdates:qt,StrictMode:Gt,Suspense:G,SuspenseList:W,lazy:xt,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Dt},en=0;function c(e,t,n,r,o,_){var a,l,s={};for(l in t)l=="ref"?a=t[l]:s[l]=t[l];var u={type:e,props:s,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--en,__i:-1,__u:0,__source:o,__self:_};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)s[l]===void 0&&(s[l]=a[l]);return d.vnode&&d.vnode(u),u}const tn=(e,t,n,r)=>{if(n==="length"||n==="prototype"||n==="arguments"||n==="caller")return;const o=Object.getOwnPropertyDescriptor(e,n),_=Object.getOwnPropertyDescriptor(t,n);!nn(o,_)&&r||Object.defineProperty(e,n,_)},nn=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},rn=(e,t)=>{const n=Object.getPrototypeOf(t);n!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,n)},on=(e,t)=>`/* Wrapped ${e}*/
${t}`,_n=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),an=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),ln=(e,t,n)=>{const r=n===""?"":`with ${n.trim()}() `,o=on.bind(null,r,t.toString());Object.defineProperty(o,"name",an),Object.defineProperty(e,"toString",{..._n,value:o})};function cn(e,t,{ignoreNonConfigurable:n=!1}={}){const{name:r}=e;for(const o of Reflect.ownKeys(t))tn(e,t,o,n);return rn(e,t),ln(e,t,r),e}const un=(e,t={})=>{if(typeof e!="function")throw new TypeError(`Expected the first argument to be a function, got \`${typeof e}\``);const{wait:n=0,maxWait:r=Number.POSITIVE_INFINITY,before:o=!1,after:_=!0}=t;if(n<0||r<0)throw new RangeError("`wait` and `maxWait` must not be negative.");if(!o&&!_)throw new Error("Both `before` and `after` are false, function wouldn't be called.");let a,l,s;const u=function(...h){const i=this,p=()=>{a=void 0,l&&(clearTimeout(l),l=void 0),_&&(s=e.apply(i,h))},f=()=>{l=void 0,a&&(clearTimeout(a),a=void 0),_&&(s=e.apply(i,h))},g=o&&!a;return clearTimeout(a),a=setTimeout(p,n),r>0&&r!==Number.POSITIVE_INFINITY&&!l&&(l=setTimeout(f,r)),g&&(s=e.apply(i,h)),s};return cn(u,e),u.cancel=()=>{a&&(clearTimeout(a),a=void 0),l&&(clearTimeout(l),l=void 0)},u};function sn(){return c("details",{children:[c("summary",{className:"text-center small text-muted",children:"Show attribution"}),c("p",{children:"Made with:"}),c("ul",{children:[c("li",{children:c("a",{href:"https://preactjs.com/",children:"Preact with Vite"})}),c("li",{children:c("a",{href:"https://github.com/sqlite/sqlite-wasm",children:"SQLite WASM"})}),c("li",{children:c("a",{href:"https://getbootstrap.com/",children:"Bootstrap"})}),c("li",{children:c("a",{href:"https://twemoji.twitter.com/",children:"Chequered flag from twemoji"})})]}),c("p",{children:["The"," ",c("a",{href:"https://www.reachthefinals.com/leaderboard",children:"original leaderboard"})," ","was probably done in haste, as it loads a JSON file with a whopping 10,000 entries. After that, all filtering was done client side, most likely iterating over the 10,000 items. Performance was"," ",c("em",{children:"horrible"})," to say the least."]}),c("p",{children:"So hey, why not try to do better?"}),c("p",{children:["For old times sake with classic React experience, I went with"," ",c("del",{children:"React"})," Preact and Vite."]}),c("p",{children:["For experimenting a little, I offloaded most of the heavy work to a"," ",c("code",{children:c("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker",children:"SharedWorker"})}),". Inside, I used ",c("code",{children:"fetch"})," to retrieve the JSON file, and loaded the data into"," ",c("a",{href:"https://github.com/sqlite/sqlite-wasm",children:"SQLite WASM"}),". After that, it is all database SQL magic."]}),c("p",{children:["For an even ",c("strong",{children:"better"})," leaderboard for THE FINALS, consider"," ",c("a",{href:"https://github.com/leonlarsson/the-finals-leaderboard",children:"leonlarsson/the-finals-leaderboard"}),", which served a lot as reference from the API standpoint."]})]})}const re=[{fame:0,name:"Bronze 4"},{fame:250,name:"Bronze 3"},{fame:500,name:"Bronze 2"},{fame:1e3,name:"Bronze 1"},{fame:1750,name:"Silver 4"},{fame:2500,name:"Silver 3"},{fame:3500,name:"Silver 2"},{fame:4500,name:"Silver 1"},{fame:6500,name:"Gold 4"},{fame:8500,name:"Gold 3"},{fame:10500,name:"Gold 2"},{fame:12500,name:"Gold 1"},{fame:15500,name:"Platinum 4"},{fame:18500,name:"Platinum 3"},{fame:21500,name:"Platinum 2"},{fame:24500,name:"Platinum 1"},{fame:28500,name:"Diamond 4"},{fame:32750,name:"Diamond 3"},{fame:37250,name:"Diamond 2"},{fame:42250,name:"Diamond 1"}];function fn(e){for(let t=re.length-1;t>=0;t--)if(e>=re[t].fame)return re[t]}function dn(e){const t=fn(e.fame);if(!t)return c(k,{});const n=t.name.toLowerCase().replace(/\s+/,"-"),r=e.fame.toLocaleString("en");return c("div",{className:"d-flex align-items-center gap-2",children:[c("img",{src:`https://storage.googleapis.com/embark-discovery-leaderboard/img/${n}.png`,width:48,height:48,alt:t.name}),c("div",{className:"small",children:[t.name," ",c("br",{}),c("span",{className:"tabular-nums",children:r})]})]})}const hn="/finals-leaderboard/assets/playstation-DpbIJ6GT.svg",pn="/finals-leaderboard/assets/steam-FJprpyV5.svg",mn="/finals-leaderboard/assets/xbox-kEtYYgKm.svg";function vn(e){return c(k,{children:[!!e.steam&&c(k,{children:[c("span",{className:"badge text-bg-dark",children:c("span",{className:"text-light d-flex align-items-center gap-2",children:[c("img",{src:pn,width:16,height:16,alt:"Steam"}),e.steam]})})," "]}),!!e.xbox&&c(k,{children:[c("span",{className:"badge text-bg-success",children:c("span",{className:"text-light d-flex align-items-center gap-2",children:[c("img",{src:mn,width:16,height:16,alt:"Xbox"}),e.xbox]})})," "]}),!!e.psn&&c(k,{children:[c("span",{className:"badge text-bg-primary",children:c("span",{className:"text-light d-flex align-items-center gap-2",children:[c("img",{src:hn,width:16,height:16,alt:"PSN"}),e.psn]})})," "]})]})}function yn(e){const t=Math.abs(e.diff);return e.diff>0?c("span",{className:"badge text-bg-success",children:["▲ ",t]}):e.diff<0?c("span",{className:"badge text-bg-danger",children:["▼ ",t]}):c(k,{})}function gn(e){return c("div",{className:"d-flex flex-column gap-2",children:e.persons.map(t=>c("div",{className:"card",children:c("div",{className:"card-body d-flex gap-3",children:[c("div",{className:"d-flex flex-column align-items-center gap-1",children:[c("h3",{className:"mb-0",children:["#",t.rank]}),c(yn,{diff:t.original_rank-t.rank})]}),c("div",{className:"d-flex flex-column flex-md-row w-100 gap-2",children:[c("div",{children:[c("div",{className:"mb-1",children:t.name}),c(vn,{steam:t.steam,xbox:t.xbox,psn:t.psn})]}),c("div",{className:"ms-md-auto",children:c(dn,{fame:t.fame})})]})]})},t.name))})}function oe(){return new URLSearchParams(window.location.hash.substring(1))}function bn(e){return new SharedWorker("/finals-leaderboard/assets/worker-B5WLr1Bl.js",{name:e==null?void 0:e.name})}function wn(){const e=Je(),[t,n]=J(-1),[r,o]=J([]),_=un(()=>{const l=oe();e.current.port.postMessage(l.get("query")??"")},{wait:300});K(()=>{const l=new bn;return l.port.onmessage=s=>{const u=s.data;if(u.status==="ready"){n(u.data),_();return}if(u.status==="result"){o(u.data);return}u.status==="error"&&(n(0),console.error("Error"))},e.current=l,()=>l.port.close()},[_]),K(()=>(window.addEventListener("hashchange",_),()=>window.removeEventListener("hashchange",_)),[_]);const a=l=>{const s=oe();s.set("query",l),window.history.replaceState(null,"","#"+s.toString()),_()};return c(k,{children:[c("div",{className:"sticky-top bg-white shadow-sm",children:c("div",{className:"container py-3",children:c("div",{className:"row",children:c("div",{className:"col-md-8 mx-auto text-center",children:[c("label",{className:"form-label d-none d-md-block",children:"Search by name"}),c("input",{type:"text",className:"form-control",defaultValue:oe().get("query")??"",onChange:l=>a(l.target.value),autoFocus:!0,placeholder:"Type to search by name"}),t>0&&c("div",{className:"form-text",children:["Showing ",r.length," / ",t," entries"]})]})})})}),c("div",{className:"container py-3",children:c("div",{className:"row",children:c("div",{className:"col-md-8 mx-auto",children:[t===-1&&c("div",{className:"alert alert-info",children:"Loading..."}),t===0&&c("div",{className:"alert alert-warning",children:"No data"}),t>0&&c(gn,{persons:r})]})})}),c("div",{className:"container",children:c("div",{className:"row",children:c("div",{className:"col-md-8 mx-auto pb-3",children:c(sn,{})})})})]})}I(c(Zt.StrictMode,{children:c(wn,{})}),document.getElementById("root"));
