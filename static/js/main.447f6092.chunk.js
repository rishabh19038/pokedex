(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n(10),i=n(4),s=n(6),l=n(7),u=n(8),p=n(11),m=n(9),d=n(12),h=n(16),v=n(17);v.a.initialize("UA-112044218-9");var O=v.a,E=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.pokemon;return r.a.createElement("div",{className:"pokemon"},r.a.createElement("button",{type:"button",className:"pokemon__sprite",onClick:function(){O.event({category:"pokemon",action:"click",label:e.id})},style:{backgroundImage:"url(".concat("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.id,".png"),")")}}),r.a.createElement("p",{className:"pokemon__name"},e.name))}}]),t}(a.PureComponent),k=function(e){var t=e.onChange,n=e.value;return r.a.createElement("input",{type:"text",onChange:t,value:n,placeholder:"Enter pokemon name...",autoFocus:!0})},b=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={searchString:"",pokemonsIds:[],error:null},n.handleSearch=function(e){var t=e.currentTarget.value.toLowerCase().trim(),a=n.props.collection;if(h.a.set("searchString",t,{maxAge:"31536000"}),""===t)return n.setState({pokemonsIds:Object.keys(a),searchString:t});var r=Object.keys(a).filter(function(e){return a[e].name.includes(t)});n.setState({pokemonsIds:r,searchString:t})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.getPokemons().then(function(t){if(t.error)return e.setState({error:t.payload.message});var n=h.a.get("searchString"),a=e.props.collection;if(!n)return e.setState({pokemonsIds:Object.keys(a)});var r=Object.keys(a).filter(function(e){return a[e].name.includes(n)});e.setState({pokemonsIds:r,searchString:n})}),O.pageview("/")}},{key:"render",value:function(){var e=this.state,t=e.searchString,n=e.pokemonsIds,a=e.error,o=this.props,c=o.collection,i=o.isFetched,s=n.map(function(e){var t=c[e];return r.a.createElement("li",{className:"pokemons__item",key:t.id},r.a.createElement(E,{pokemon:t}))});return r.a.createElement("div",{className:"page"},a&&r.a.createElement("div",{className:"page__error"},a),r.a.createElement("div",{className:"page__search"},r.a.createElement(k,{onChange:this.handleSearch,value:t})),i?r.a.createElement("p",null,"Loading..."):r.a.createElement("ul",{className:"pokemons"},s))}}]),t}(a.Component);var g={getPokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.limit,a=void 0===n?784:n;return t(Object(i.a)({},s.RSAA,{endpoint:"https://pokeapi.co/api/v2/pokemon/?limit=".concat(a),method:"GET",types:["GET_POKEMONS_REQUEST","GET_POKEMONS_SUCCESS","GET_POKEMONS_FAILURE"]}))}}},f=Object(c.b)(function(e){return{collection:e.pokemons.collection}},g)(b),S=n(2),j=n(22),_=(n(35),n(3)),y={collection:{},isFetched:!1},N=Object(S.c)({pokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POKEMONS_REQUEST":return Object(_.a)({},e,{isFetched:!0});case"GET_POKEMONS_SUCCESS":return Object(_.a)({},e,{collection:Object(_.a)({},e.collection,t.payload.results.reduce(function(e,t){var n=t.url,a=n.substring(34,n.length-1);return Object(_.a)({},e,Object(i.a)({},a,Object(_.a)({id:a},t)))},{})),isFetched:!1});case"GET_POKEMONS_FAILURE":return Object(_.a)({},e,{isFetched:!1});default:return e}}});n(36);var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[j.a,s.apiMiddleware],n=S.d;return Object(S.e)(N,e,n(S.a.apply(void 0,t)))}();Object(o.render)(r.a.createElement(c.a,{store:w},r.a.createElement(f,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.447f6092.chunk.js.map