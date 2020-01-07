(this["webpackJsonpreact-youtube-app"]=this["webpackJsonpreact-youtube-app"]||[]).push([[0],{25:function(e,t,a){e.exports=a(53)},53:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(23),o=a.n(c),i=a(16),s=a.n(i),l=a(10),u=a(11),m=a(13),d=a(12),p=a(14),h=a(57),b=a(58),v=a(65),E=a(59),f=a(54),S=a(55),y=a(56),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:""},a.onInputChange=function(e){a.setState({searchTerm:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),a.props.onFormSubmit(a.state.searchTerm)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{className:"border p-4 rounded  mb-3 shadow-sm",onSubmit:this.onFormSubmit},r.a.createElement(S.a,null,r.a.createElement(y.a,{for:"search"},"Youtube Videos"),r.a.createElement(h.a,null,r.a.createElement(b.a,{type:"text",name:"text",id:"search",placeholder:"Search Videos",value:this.state.searchTerm,onChange:this.onInputChange}),r.a.createElement(v.a,{addonType:"prepend"},r.a.createElement(E.a,{color:"primary",className:"search-button rounded-right"},"Search")))))}}]),t}(r.a.Component),g=a(24),V=a.n(g).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyDkbJkGxV-sEd4heur22JBW-s0T4kzd7I0"}}),k=a(62),j=a(63),O=a(64),x=a(60),N=function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement(x.a,{style:{cursor:"pointer"},onClick:function(){return a(t)}},r.a.createElement("img",{className:"img-thumbnail border shadow-sm ",src:t.snippet.thumbnails.medium.url,alt:"thumbnail"}),t.snippet.title)},C=a(61),I=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return r.a.createElement(N,{key:e.id.videoId,onVideoSelect:a,video:e})}));return r.a.createElement(C.a,null,n)},T=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading..");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement("div",null,r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{title:"video player",className:"embed-responsive-item",src:a})),r.a.createElement("div",{className:"border p-3"},r.a.createElement("h4",null," ",t.snippet.title),r.a.createElement("hr",null),r.a.createElement("p",null,t.snippet.description)))},J=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={videos:[],selectedVideo:null},a.onSearchSubmit=function(e){var t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(V.get("/search",{params:{q:e}}));case 2:t=n.sent,a.setState({videos:t.data.items,selectedVideo:t.data.items[0]});case 4:case"end":return n.stop()}}))},a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onSearchSubmit("Learn React JS")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k.a,{className:"mt-4"},r.a.createElement(w,{onFormSubmit:this.onSearchSubmit}),r.a.createElement(j.a,null,r.a.createElement(O.a,{xs:"8"},r.a.createElement(T,{video:this.state.selectedVideo})),r.a.createElement(O.a,null,r.a.createElement(I,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),t}(r.a.Component);a(52);o.a.render(r.a.createElement(J,null),document.querySelector("#root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.a1822617.chunk.js.map