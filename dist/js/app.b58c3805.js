(function(){"use strict";var o={808:function(o,t,n){var e=n(9242),a=n(3396);function i(o,t,n,e,i,u){const r=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(r)}var u={name:"App"},r=n(89);const l=(0,r.Z)(u,[["render",i]]);var p=l,c=n(678),v=n(7139);const d={id:"titulo"},s={id:"compositor"},m=(0,a.uE)('<option value="C">C</option><option value="Db">Db</option><option value="D">D</option><option value="Eb">Eb</option><option value="E">E</option><option value="F">F</option><option value="Gb">F#</option><option value="G">G</option><option value="Ab">Ab</option><option value="A">A</option><option value="Bb">Bb</option><option value="B">B</option>',12),f=[m],b=(0,a._)("button",null,"Editar",-1);function w(o,t,n,i,u,r){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(l,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Voltar")])),_:1}),(0,a._)("h1",d,(0,v.zw)(i.nota.titulo),1),(0,a._)("p",s,(0,v.zw)(i.nota.compositor),1),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[0]||(t[0]=o=>i.nota.tom=o),onChange:t[1]||(t[1]=o=>i.alteraTom(i.nota.tom))},f,544),[[e.bM,i.nota.tom]]),(0,a.Wm)(l,{to:"/editar/"+i.nota.id},{default:(0,a.w5)((()=>[b])),_:1},8,["to"]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.nota.conteudo,((o,t)=>((0,a.wg)(),(0,a.iD)("p",{id:"conteudo",key:t},(0,v.zw)(o),1)))),128))])}var h=n(70);const g=h.ZP.create({baseURL:"https://chord-notepad-api.herokuapp.com/cifras/"});var _=g,y=n(4870),O={name:"VisualizaNota",setup(){const o=(0,c.yj)(),t=o.params.id,n=(0,y.iH)([]),e=()=>_.get(t).then((o=>{n.value=o.data,n.value.conteudo=n.value.conteudo.split("\n"),n.value.tom=n.value.tomOriginal}));(0,a.bv)(e);const i=o=>{_.get(t+"?tom="+o).then((t=>{n.value=t.data,n.value.conteudo=n.value.conteudo.split("\n"),n.value.tom=o}))};return{nota:n,alteraTom:i}}};const D=(0,r.Z)(O,[["render",w]]);var k=D;const E=(0,a._)("h1",null,"Notas",-1),C=(0,a._)("button",null,"Criar nota",-1);function j(o,t,n,e,i,u){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[E,(0,a.Wm)(r,{to:"/editar"},{default:(0,a.w5)((()=>[C])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.notas,(o=>((0,a.wg)(),(0,a.iD)("div",{key:o.id},[(0,a.Wm)(r,{to:"/nota/"+o.id},{default:(0,a.w5)((()=>[(0,a._)("p",null,(0,v.zw)(o.titulo),1)])),_:2},1032,["to"])])))),128))])}var A={name:"ListaNotas",setup(){const o=(0,y.iH)([]),t=()=>_.get().then((t=>o.value=t.data));return(0,a.bv)(t),{notas:o}}};const B=(0,r.Z)(A,[["render",j]]);var U=B;const V=(0,a._)("label",{for:"titulo"},"Titulo:",-1),x=(0,a._)("label",{for:"compositor"},"Compositor:",-1),F=(0,a.uE)('<option value="C">C</option><option value="Db">Db</option><option value="D">D</option><option value="Eb">Eb</option><option value="E">E</option><option value="F">F</option><option value="Gb">F#</option><option value="G">G</option><option value="Ab">Ab</option><option value="A">A</option><option value="Bb">Bb</option><option value="B">B</option>',12),G=[F],W=(0,a._)("button",null,"Salvar",-1);function z(o,t,n,i,u,r){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(l,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Voltar")])),_:1}),V,(0,a.wy)((0,a._)("input",{type:"text",id:"titulo",name:"titulo","onUpdate:modelValue":t[0]||(t[0]=o=>i.nota.titulo=o)},null,512),[[e.nr,i.nota.titulo]]),x,(0,a.wy)((0,a._)("input",{type:"text",id:"compositor",name:"compositor","onUpdate:modelValue":t[1]||(t[1]=o=>i.nota.compositor=o)},null,512),[[e.nr,i.nota.compositor]]),(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[2]||(t[2]=o=>i.nota.tomOriginal=o)},G,512),[[e.bM,i.nota.tomOriginal]]),(0,a.wy)((0,a._)("textarea",{id:"conteudo",name:"conteudo",rows:"20",cols:"50","onUpdate:modelValue":t[3]||(t[3]=o=>i.nota.conteudo=o)},null,512),[[e.nr,i.nota.conteudo]]),(0,a.Wm)(l,{to:"/",onClick:t[4]||(t[4]=o=>i.salvar())},{default:(0,a.w5)((()=>[W])),_:1})])}var H={name:"EditaNota",setup(){const o=(0,c.yj)(),t=o.params.id,n=(0,y.iH)([]),e=()=>{t?_.put(t,{titulo:n.value.titulo,compositor:n.value.compositor,tomOriginal:n.value.tomOriginal,conteudo:n.value.conteudo}):_.post(t,{titulo:n.value.titulo,compositor:n.value.compositor,tomOriginal:n.value.tomOriginal,conteudo:n.value.conteudo})},i=()=>{t&&_.get(t).then((o=>{n.value=o.data}))};return(0,a.bv)(i),{nota:n,salvar:e}}};const T=(0,r.Z)(H,[["render",z]]);var Z=T;const N=[{path:"/",name:"lista",component:U},{path:"/nota/:id",name:"nota",component:k},{path:"/editar",name:"criacao",component:Z},{path:"/editar/:id",name:"edicao",component:Z}],P=(0,c.p7)({history:(0,c.PO)(),routes:N});var M=P;(0,e.ri)(p).use(M).mount("#app")}},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var i=t[e]={exports:{}};return o[e](i,i.exports,n),i.exports}n.m=o,function(){var o=[];n.O=function(t,e,a,i){if(!e){var u=1/0;for(c=0;c<o.length;c++){e=o[c][0],a=o[c][1],i=o[c][2];for(var r=!0,l=0;l<e.length;l++)(!1&i||u>=i)&&Object.keys(n.O).every((function(o){return n.O[o](e[l])}))?e.splice(l--,1):(r=!1,i<u&&(u=i));if(r){o.splice(c--,1);var p=a();void 0!==p&&(t=p)}}return t}i=i||0;for(var c=o.length;c>0&&o[c-1][2]>i;c--)o[c]=o[c-1];o[c]=[e,a,i]}}(),function(){n.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return n.d(t,{a:t}),t}}(),function(){n.d=function(o,t){for(var e in t)n.o(t,e)&&!n.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:t[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){n.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={143:0};n.O.j=function(t){return 0===o[t]};var t=function(t,e){var a,i,u=e[0],r=e[1],l=e[2],p=0;if(u.some((function(t){return 0!==o[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var c=l(n)}for(t&&t(e);p<u.length;p++)i=u[p],n.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return n.O(c)},e=self["webpackChunkchord_notepad_app"]=self["webpackChunkchord_notepad_app"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(808)}));e=n.O(e)})();
//# sourceMappingURL=app.b58c3805.js.map