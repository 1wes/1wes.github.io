(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(17),l=a.n(r),o=a(0),n=a.n(o),c=a(4),s=a(10),i=a(11),u=a(14),m=a(12),g=a(15),S=(a(26),a(13)),d=a(41);function v(e){return n.a.createElement("button",{type:"button",className:"square",onClick:e.onClick},e.value)}S.a.initialize("G-1R65DNZP1P");var p,I=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(i.a)(t,[{key:"displaySquare",value:function(e){var t=this;return n.a.createElement(v,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"board-row"},this.displaySquare(0),this.displaySquare(1),this.displaySquare(2)),n.a.createElement("div",{className:"board-row"},this.displaySquare(3),this.displaySquare(4),this.displaySquare(5)),n.a.createElement("div",{className:"board-row"},this.displaySquare(6),this.displaySquare(7),this.displaySquare(8)))}}]),t}(n.a.Component),C=localStorage.getItem("localStoragexCounter"),w=parseInt(C,10);p=isNaN(w)?0:w;var f,h=localStorage.getItem("localStorageoCounter"),N=parseInt(h,10);f=isNaN(N)?0:N;var E,y=localStorage.getItem("localStorageDrawCounter"),b=parseInt(y,10);E=isNaN(b)?0:b;var x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){var t=a.state.squares.slice();q(t)||t[e]||(t[e]=a.state.xIsNext?"X":"O",a.setState({squares:t,xIsNext:!a.state.xIsNext}))},a.state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(g.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){S.a.pageview(window.location.pathname)}},{key:"render",value:function(){var e,t=this,a=q(this.state.squares);return e=a&&"draw"!==a?"Winner is: "+a+" !":a&&"draw"===a?"It is a "+a+" !":"Next player is: "+(this.state.xIsNext?"X":"O"),n.a.createElement("div",null,n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement("div",{className:"nextPlayer"},e),n.a.createElement(I,{squares:this.state.squares,onClick:function(e){return t.handleClick(e)}})),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null,n.a.createElement("div",{className:"winner-count-header"},"Winner count"),n.a.createElement("div",{className:"winner-counter"},n.a.createElement("div",{className:"display-counter"},"X: ",n.a.createElement("span",null,p)),n.a.createElement("div",{className:"display-counter"},"Draw: ",n.a.createElement("span",null,E)),n.a.createElement("div",{className:"display-counter"},"O: ",n.a.createElement("span",null,f)," ")),n.a.createElement("div",{className:"reset-counter-button"},n.a.createElement(d.a,{variant:"outlined",size:"small",color:"error",id:"reset-button",fullWidth:!0},"Reset Counter"))),n.a.createElement("div",{className:""}))))}}]),t}(n.a.Component);function q(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(c.a)(t[a],3),l=r[0],o=r[1],n=r[2];if(e[l]&&e[l]===e[o]&&e[l]===e[n]){if("X"===e[l]){if(null===localStorage.getItem("localStoragexCounter"))localStorage.setItem("localStoragexCounter","0");else{var s=localStorage.getItem("localStoragexCounter");localStorage.setItem("localStoragexCounter",s.toString())}var i=parseInt(localStorage.getItem("localStoragexCounter"),10);i+=1,localStorage.setItem("localStoragexCounter",i.toString())}else{if(null===localStorage.getItem("localStorageoCounter"))localStorage.setItem("localStorageoCounter","0");else{var u=localStorage.getItem("localStorageoCounter");localStorage.setItem("localStorageoCounter",u.toString())}var m=parseInt(localStorage.getItem("localStorageoCounter"),10);m+=1,localStorage.setItem("localStorageoCounter",m.toString())}return setInterval(function(){window.location.reload(!0)},1e3),e[l]}if(!e.includes(null)){if(null===localStorage.getItem("localStorageDrawCounter"))localStorage.setItem("localStorageDrawCounter","0");else{var g=localStorage.getItem("localStorageDrawCounter");localStorage.setItem("localStorageDrawCounter",g.toString())}var S=parseInt(localStorage.getItem("localStorageDrawCounter"),10);return S+=1,localStorage.setItem("localStorageDrawCounter",S.toString()),setInterval(function(){window.location.reload(!0)},1e3),"draw"}}return null}l.a.render(n.a.createElement(x,null),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.38de5de9.chunk.js.map