(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},27:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var r=a(18),l=a.n(r),n=a(0),o=a.n(n),c=a(4),s=a(7),i=a(8),u=a(5),m=a(10),g=a(9),d=a(11),S=(a(27),a(16)),v=a(44),p=(a(31),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",{style:{color:"whitesmoke"}},o.a.createElement("a",{href:"#"},"tic-tac-toe"))))}}]),t}(o.a.Component));function h(e){return o.a.createElement("button",{type:"button",className:"square",onClick:e.onClick},e.value)}S.a.initialize("G-1R65DNZP1P");var C,I=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"displaySquare",value:function(e){var t=this;return o.a.createElement(h,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.displaySquare(0),this.displaySquare(1),this.displaySquare(2)),o.a.createElement("div",{className:"board-row"},this.displaySquare(3),this.displaySquare(4),this.displaySquare(5)),o.a.createElement("div",{className:"board-row"},this.displaySquare(6),this.displaySquare(7),this.displaySquare(8)))}}]),t}(o.a.Component),f=localStorage.getItem("localStoragexCounter"),w=parseInt(f,10);C=isNaN(w)?0:w;var E,b=localStorage.getItem("localStorageoCounter"),N=parseInt(b,10);E=isNaN(N)?0:N;var y,O=localStorage.getItem("localStorageDrawCounter"),x=parseInt(O,10);y=isNaN(x)?0:x;var j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).handleClick=function(e){var t=a.state.squares.slice();q(t)||t[e]||(t[e]=a.state.xIsNext?"X":"O",a.setState({squares:t,xIsNext:!a.state.xIsNext}))},a.handleCounterReset=function(){localStorage.length>0?!0===window.confirm("This action will reset the Counter to 0 !")&&(localStorage.clear(),window.location.reload(!0)):alert("The counter is already at 0!")},a.state={squares:Array(9).fill(null),xIsNext:!0},a.handleCounterReset=a.handleCounterReset.bind(Object(s.a)(Object(s.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){S.a.pageview(window.location.pathname)}}]),Object(u.a)(t,[{key:"render",value:function(){var e,t=this,a=q(this.state.squares);return e=a&&"draw"!==a?"Winner is: "+a+" !":a&&"draw"===a?"It is a "+a+" !":"Next player is: "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement("div",{className:"nextPlayer"},e),o.a.createElement(I,{squares:this.state.squares,onClick:function(e){return t.handleClick(e)}})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null,o.a.createElement("div",{className:"winner-count-header"},"Winner count"),o.a.createElement("div",{className:"winner-counter"},o.a.createElement("div",{className:"display-counter"},"X: ",o.a.createElement("span",null,C)),o.a.createElement("div",{className:"display-counter"},"Draw: ",o.a.createElement("span",null,y)),o.a.createElement("div",{className:"display-counter"},"O: ",o.a.createElement("span",null,E)," ")),o.a.createElement("div",{className:"reset-counter-button"},o.a.createElement(v.a,{variant:"outlined",size:"small",color:"error",id:"reset-button",fullWidth:!0,onClick:this.handleCounterReset},"Reset Counter"))),o.a.createElement("div",{className:""}))))}}]),t}(o.a.Component);function q(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(c.a)(t[a],3),l=r[0],n=r[1],o=r[2];if(e[l]&&e[l]===e[n]&&e[l]===e[o]){if("X"===e[l]){if(null===localStorage.getItem("localStoragexCounter"))localStorage.setItem("localStoragexCounter","0");else{var s=localStorage.getItem("localStoragexCounter");localStorage.setItem("localStoragexCounter",s.toString())}var i=parseInt(localStorage.getItem("localStoragexCounter"),10);i+=1,localStorage.setItem("localStoragexCounter",i.toString())}else{if(null===localStorage.getItem("localStorageoCounter"))localStorage.setItem("localStorageoCounter","0");else{var u=localStorage.getItem("localStorageoCounter");localStorage.setItem("localStorageoCounter",u.toString())}var m=parseInt(localStorage.getItem("localStorageoCounter"),10);m+=1,localStorage.setItem("localStorageoCounter",m.toString())}return setInterval(function(){window.location.reload(!0)},1e3),e[l]}if(!e.includes(null)){if(null===localStorage.getItem("localStorageDrawCounter"))localStorage.setItem("localStorageDrawCounter","0");else{var g=localStorage.getItem("localStorageDrawCounter");localStorage.setItem("localStorageDrawCounter",g.toString())}var d=parseInt(localStorage.getItem("localStorageDrawCounter"),10);return d+=1,localStorage.setItem("localStorageDrawCounter",d.toString()),setInterval(function(){window.location.reload(!0)},1e3),"draw"}}return null}l.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.fb3ca92d.chunk.js.map