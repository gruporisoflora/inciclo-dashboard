(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(25),i=n.n(s),o=(n(70),n(18)),c=n.n(o),l=n(32),u=n(7),p=n(8),d=n(10),f=n(9),h=n(11),m=(n(72),n(59)),y=n.n(m);function v(){return(v=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("http://inciclo.us-east-2.elasticbeanstalk.com/podas",{headers:{mode:"cors"}});case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}))).apply(this,arguments)}var b=function(){return v.apply(this,arguments)},E=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cLevel,n=(e.status,e.shouldIDisplay),a=e.stepName;return r.a.createElement("div",{style:{flex:1,height:50,marginLeft:"4px",marginRight:"4px",backgroundColor:n?function(e){return"LOW"===e?"#56C577":"MEDIUM"===e?"#FF9C50":"HIGH"===e?"#FF6060":"#56C577"}(t):"grey",alignItems:"center",justifyContent:"center",color:"#2A1725",fontWeight:"bold",fontSize:"0.5em",paddingLeft:"2px",paddingRight:"2px",display:"flex"}},a)}}]),t}(r.a.Component),g=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.step,n=e.cLevel,a=e.status;return r.a.createElement("div",{style:{flex:1,display:"flex",flexDirection:"collumn",justifyContent:"center"}},r.a.createElement(E,{shouldIDisplay:"NEXT_TO_CABLE"===t,stepName:"Crescimento",cLevel:n,status:a}),r.a.createElement(E,{shouldIDisplay:"IN_INPECTION"===t,stepName:"Inspe\xe7\xe3o",cLevel:n,status:a}),r.a.createElement(E,{shouldIDisplay:"CHECKED_TO_CUT"===t,stepName:"Poda",cLevel:n,status:a}),r.a.createElement(E,{shouldIDisplay:"GROWING"===t,stepName:"Status da \xc1rea",cLevel:n,status:a}))}}]),t}(r.a.Component),j=n(63),O=n.n(j),x=n(64),C=n.n(x),w=n(60),I=n.n(w),k=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",fontSize:26,color:"#515151",marginLeft:16,fontWeight:"600"}},this.props.areaName?"\xc1rea "+this.props.areaName:null),r.a.createElement("div",{style:{display:"flex",alignItems:"center",flex:1}},r.a.createElement("div",{style:{flex:1,display:"flex",justifyContent:"flex-start",color:"#D2D2D2",fontSize:110}},"["),this.props.children||r.a.createElement("div",{style:{flex:10,display:"flex",fontWeight:"bold",fontSize:26,color:"#AEACAC",marginTop:16,justifyContent:"center"}},"CLIQUE NA \xc1REA DESEJADA"),r.a.createElement("div",{style:{flex:1,display:"flex",justifyContent:"flex-end",color:"#D2D2D2",fontSize:110}},"]")))}}]),t}(r.a.Component),D=n(61),L=n.n(D),N=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.poda,t=e.id,n=e.cLevel;return r.a.createElement(L.a,{style:{width:80,height:80,borderRadius:20,backgroundColor:function(e){return"LOW"===e?"#56C577":"MEDIUM"===e?"#FF9C50":"HIGH"===e?"#FF6060":"#56C577"}(n),color:"#2A1725",fontWeight:"bold",margin:16},onClick:this.props.onPress},r.a.createElement("div",null," \xc1rea ",t," "))}}]),t}(r.a.Component);function F(e){var t=e.data.map(function(t,n){return r.a.createElement(N,{onPress:function(){return e.onPress(n)},poda:t,key:n})});return r.a.createElement("div",{style:{flexWrap:"wrap",display:"flex",justifyContent:"space-between",marginTop:32}},t)}var A=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={inFocus:null,results:{}},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,console.log("Resultado",t),this.setState({results:t});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header",style:{backgroundImage:"url(".concat(I.a,")"),backgroundSize:"cover",overflow:"hidden"}},r.a.createElement(O.a,{className:"App-card-wrapper",style:{justifyContent:"center",justifyItems:"center",alignItens:"center"}},r.a.createElement(C.a,{style:{marginLeft:32,marginRight:32}},r.a.createElement(k,{areaName:this.state.inFocus?this.state.results.data[this.state.inFocus-1].id:null},this.state.inFocus&&r.a.createElement("div",{style:{flex:10,display:"flex",marginTop:16}},r.a.createElement(g,{step:this.state.results.data[this.state.inFocus-1].step,cLevel:this.state.results.data[this.state.inFocus-1].cLevel,status:this.state.results.data[this.state.inFocus-1].status}))),this.state.results.data?r.a.createElement(F,{onPress:function(t){return e.setState({inFocus:t+1})},data:this.state.results.data}):null))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},60:function(e,t,n){e.exports=n.p+"static/media/background.4db2b979.png"},65:function(e,t,n){e.exports=n(178)},70:function(e,t,n){},72:function(e,t,n){}},[[65,1,2]]]);
//# sourceMappingURL=main.7002375a.chunk.js.map