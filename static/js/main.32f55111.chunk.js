(this.webpackJsonpperso=this.webpackJsonpperso||[]).push([[0],[,function(e,t,a){e.exports={mainDiv:"music_mainDiv__1ne5q",trackList:"music_trackList__1QpGt",elapsedTime:"music_elapsedTime__sA2Gt",totalTime:"music_totalTime__2vp10",listName:"music_listName__1Ax9l",buttons:"music_buttons__19OBj",insideB:"music_insideB__hXE8b",timebar:"music_timebar__2OIcM",playButton:"music_playButton__3HZwr",pauseButton:"music_pauseButton__3p4Vx",prevButton:"music_prevButton__1In1n",stopButton:"music_stopButton__H-1IA",nextButton:"music_nextButton__1SC7O"}},function(e,t,a){e.exports={info:"main_info__3tNpm",title:"main_title__JVlfq",flicker:"main_flicker__3l_BN",pictureI:"main_pictureI__2pOMW",para:"main_para__2PCH5",typing:"main_typing__1Okef","blink-caret":"main_blink-caret__ZJGMG",list:"main_list__3LE-b",introchange:"main_introchange__3MGOV",new_para:"main_new_para__2xWlN",fadein:"main_fadein__3saib",exp:"main_exp__1ebIa",wrapper:"main_wrapper__2zMv7",list_f:"main_list_f__Jj79l"}},,,,,function(e,t,a){e.exports={closeButton:"table_closeButton__1IACF",mainList:"table_mainList__DPhFQ",draw_border:"table_draw_border__30RSY",picture:"table_picture__3C2NF",Picture:"table_Picture__3RGjK",Proj:"table_Proj__3sewc","alert-success":"table_alert-success__1GYc8",blogMain:"table_blogMain__17Bj7",projMain:"table_projMain__1PVT4",musicPop:"table_musicPop__1chQX"}},function(e,t,a){e.exports={main:"image_main__3BEdV",body:"image_body__1rP-V",item:"image_item__cqq0v",indivImage:"image_indivImage__vTML5",fullScreen:"image_fullScreen__1T5uY",imgbg:"image_imgbg__2g8qL",button:"image_button__X1npj"}},function(e,t,a){e.exports={start:"start_start__1sOv4",ball:"start_ball__25VGj",smallball:"start_smallball__11oq9"}},,,,function(e,t,a){e.exports={mainDiv:"project_mainDiv__V1APY"}},function(e,t,a){e.exports={app:"app_app__3SHiL"}},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(10),s=a.n(l),r=(a(20),a(3)),c=a(4),o=a(6),m=a(5),u=a(9),p=a.n(u),h=a(2),d=a.n(h),g=a(1),_=a.n(g);function E(e){if(!isNaN(e))return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)}var f=[{id:1,title:"a jig"},{id:2,title:"\u0916\u094b\u0907"},{id:3,title:"\u092b\u0947\u0930\u0940"},{id:4,title:"shin"},{id:5,title:"Crystalize"},{id:6,title:"i_six"},{id:7,title:"LLVM"},{id:8,title:"E>O>L"},{id:9,title:"mornings"}];function v(e){for(var t=e.currentTime,a=e.duration,n=e.setTime,l=E(t),s=E(a),r=[],c=0;c<a;)r.push(c),c++;var o=r.map((function(e){return i.a.createElement("div",{key:e,onClick:function(){return n(e)},style:{float:"left",cursor:"pointer",height:"10px",borderBottomRightRadius:"80%",width:"".concat(300/Math.round(a),"px"),background:t&&Math.round(t)===e?"black":"white",transition:"all 0.5s ease-in-out"}})}));return i.a.createElement("div",{className:_.a.timebar},t?i.a.createElement("text",null,i.a.createElement("text",{className:_.a.elapsedTime},l)):"",i.a.createElement("div",{className:_.a.ntimebar},o,t?i.a.createElement("text",null,i.a.createElement("text",{className:_.a.totalTime},s)):""))}var k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={selectedTrack:null,player:"stopped",currentTime:null,duration:null},e.handleSkip=function(t){var a=f.findIndex((function(t){return t.title===e.state.selectedTrack})),n=f.length-1;if("previous"===t){var i=f[0===a?n:a-1];e.setState({selectedTrack:i.title})}else if("next"===t){var l=f[a===n?0:a+1];e.setState({selectedTrack:l.title,duration:null})}},e.setTime=function(t){e.player.currentTime=t},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.player.addEventListener("timeupdate",(function(t){e.setState({currentTime:t.target.currentTime,duration:t.target.duration})}))}},{key:"componentWillUnmount",value:function(){this.player.removeEventListener("timeupdate",(function(){}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.state.selectedTrack!==t.selectedTrack){var n;switch(this.state.selectedTrack){case"i_six":n="musics/i_six.mp3";break;case"\u0916\u094b\u0907":n="musics/khoi.mp3";break;case"shin":n="musics/shin(henka).mp3";break;case"Crystalize":n="musics/Crystalize.mp3";break;case"\u092b\u0947\u0930\u0940":n="musics/Pheri.mp3";break;case"a jig":n="musics/a_jig.mp3";break;case"LLVM":n="musics/llvm.mp3";break;case"E>O>L":n="musics/eol.mp3";break;case"mornings":n="musics/oval.mp3"}n&&(this.player.src=n,this.player.play(),this.setState({player:"playing",duration:this.player.duration}))}(this.state.player!==t.player&&("paused"===this.state.player?this.player.pause():"stopped"===this.state.player?(this.player.pause(),this.player.currentTime=0,this.setState({selectedTrack:null})):"playing"===this.state.player&&"paused"===t.player&&this.player.play()),this.state.duration&&!isNaN(this.state.duration)&&this.state.duration===this.state.currentTime)&&(f.findIndex((function(e){return e.title===a.state.selectedTrack}))===f.length-1?this.setState({selectedTrack:null,player:"stopped",currentTime:null,duration:null}):this.handleSkip("next"))}},{key:"render",value:function(){var e=this,t=f.map((function(t){return t.title===e.state.selectedTrack?i.a.createElement("li",{className:_.a.listName,key:t.id,onClick:function(){return e.setState({selectedTrack:t.title})},style:{fontWeight:t.title===e.state.selectedTrack&&"bold"}},"\ud83d\udd0a  ",t.title):i.a.createElement("li",{className:_.a.listName,key:t.id,onClick:function(){return e.setState({selectedTrack:t.title})}},t.title)}));E(this.state.currentTime),E(this.state.duration);return i.a.createElement("div",null,i.a.createElement("div",{className:_.a.mainDiv},i.a.createElement("h2",{style:{paddingLeft:"30%",width:"inherit",margin:"auto",fontFamily:"Inconsolata"}},"Music Lists"),i.a.createElement("ul",{className:_.a.trackList},t),i.a.createElement(v,{className:_.a.timebar,setTime:this.setTime,currentTime:this.state.currentTime,duration:this.state.duration}),"stopped"!==this.state.player&&i.a.createElement("div",{className:_.a.buttons},i.a.createElement("div",{className:_.a.insideB},i.a.createElement("button",{className:_.a.prevButton,onClick:function(){return e.handleSkip("previous")}},"|\u25c1"),"paused"===this.state.player&&i.a.createElement("button",{className:this.playButton,onClick:function(){return e.setState({player:"playing"})}},"\u25b7"),"playing"===this.state.player&&i.a.createElement("button",{className:_.a.pauseButton,onClick:function(){return e.setState({player:"paused"})}},"| |"),i.a.createElement("button",{className:_.a.stopButton,onClick:function(){return e.setState({player:"stopped"})}},"\u25a2"),i.a.createElement("button",{className:_.a.nextButton,onClick:function(){return e.handleSkip("next")}},"\u25b7|")))),i.a.createElement("audio",{ref:function(t){return e.player=t}}))}}]),a}(i.a.Component),b=a(12),y=a.n(b),N=a(8),w=a.n(N),j=function(){for(var e=[],t=1;t<17;t++)e.push("pictures/".concat(t,"-min.jpg")),console.log();return e}(),T=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={fullscreen:!1,fullScreenImage:null},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.fullscreen,a=this.state.fullScreenImage,n=j.map((function(t){return i.a.createElement("div",{className:w.a.galleryContainer},i.a.createElement("div",{className:w.a.item},i.a.createElement("div",{key:t,className:w.a.indivImage},i.a.createElement("img",{className:w.a.imageSpan,src:t,onClick:function(){e.setState({fullscreen:!0,fullScreenImage:t})}}))))}));return i.a.createElement("div",{className:w.a.body},i.a.createElement("div",{className:w.a.main},n),i.a.createElement("div",null,t?i.a.createElement("div",{className:w.a.fullScreen},i.a.createElement("button",{className:w.a.button,onClick:function(){e.setState({fullscreen:!1,fullScreenImage:null})},style:{}},"Close"),i.a.createElement("img",{src:a}),i.a.createElement("div",{className:w.a.imgbg})):i.a.createElement("span",null)))}}]),a}(n.Component),x=a(13),S=a.n(x),M=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:S.a.mainDiv},i.a.createElement("img",{src:"https://img.icons8.com/officel/100/000000/under-construction.png"}))}}]),a}(n.Component),C=a(7),O=a.n(C),B=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={toggle:!0,api_res:"",musicThere:!1,picturePreview:!1,projectThere:!1},n.state={apiResponse:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.musicThere,a=this.state.projectThere,n=this.state.picturePreview;return i.a.createElement("div",{className:d.a.info},i.a.createElement("div",{className:d.a.wrapper},i.a.createElement("div",null,i.a.createElement("div",{className:O.a.mainList},i.a.createElement("button",{className:O.a.draw_border,onClick:function(){e.setState({projectThere:!0})}},"Projects"),i.a.createElement("button",{className:O.a.draw_border,onClick:function(){e.setState({musicThere:!0})}},"Wierd Music I Wrote"),i.a.createElement("button",{className:O.a.draw_border,onClick:function(){e.setState({picturePreview:!0})}},"Pictures I took")))),i.a.createElement("div",{className:O.a.musicPop},t?i.a.createElement(y.a,null,i.a.createElement("div",null,i.a.createElement("button",{className:O.a.closeButton,onClick:function(){e.setState({musicThere:!1})}},"x"),i.a.createElement(k,null))):i.a.createElement("span",null)),i.a.createElement("div",{className:O.a.Picture},n?i.a.createElement("div",{className:O.a.picture},i.a.createElement("button",{className:O.a.closeButton,onClick:function(){e.setState({picturePreview:!1})}},"x"),i.a.createElement(T,null)):i.a.createElement("span",null)),i.a.createElement("div",{className:O.a.Proj},a?i.a.createElement("div",{className:O.a.Proj},i.a.createElement(M,null)):i.a.createElement("span",null)),i.a.createElement("div",{className:d.a.picture},i.a.createElement("h1",{className:d.a.title},i.a.createElement("ul",{className:d.a.list},i.a.createElement("li",null,"Hello I'm Sagar"),i.a.createElement("li",null," \u092e \u0938\u093e\u0917\u0930\u0964"),i.a.createElement("li",null,"\u3055\u304c\u3089 \u3067\u3059"))),i.a.createElement("img",{height:"40%",className:d.a.pictureI,src:"me.svg"})),i.a.createElement("p",{className:d.a.para},"I am currently a student studying computer at CUNY. I enjoy doing stuff like these(coding and stuff), making music and drinking coffee."),i.a.createElement("p",{className:d.a.new_para},"My prior experience revolved around data engineering and full stack development and these are the stack that I have experience in::",i.a.createElement("ul",{className:d.a.exp},i.a.createElement("li",{className:d.a.list_f}," ",i.a.createElement("u",null,"Technologies"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://img.icons8.com/officel/40/000000/react.png"})," React"),i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg"})),i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg"}),"Apache Kafka"),i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"})," "),i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg"})," "),i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://img.icons8.com/ultraviolet/40/000000/selenium-test-automation.png"})," Selenium"),i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://upload.wikimedia.org/wikipedia/commons/1/1d/Dask_logo.svg"})," Dask "))),i.a.createElement("li",{className:d.a.list_f}," ",i.a.createElement("u",null,"Languages"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://img.icons8.com/dusk/64/000000/python.png"})," Python"),i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://img.icons8.com/dusk/64/000000/javascript.png"})," JavaScript"),i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://img.icons8.com/dusk/64/000000/java.png"})," Java"),i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg"})," Rust"),i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://img.icons8.com/ios/50/000000/golang.png"})," Go"))),i.a.createElement("li",{className:d.a.list_f}," ",i.a.createElement("u",null,"Database"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"})," PostGreSQL"),i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://upload.wikimedia.org/wikipedia/en/e/ee/MySQL_Logo.png"})," "),i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg"})," "),i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"})," "))),i.a.createElement("li",{className:d.a.list_f}," ",i.a.createElement("u",null,"Cloud"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://img.icons8.com/windows/64/000000/amazon-web-services.png"})),i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://img.icons8.com/color/48/000000/google-cloud-platform.png"})," GCP"),i.a.createElement("li",null,i.a.createElement("img",{height:"40",src:"https://img.icons8.com/color/48/000000/azure-1.png"})," Azure"))))))}},{key:"player",value:function(){return i.a.createElement("div",null,i.a.createElement(k,null))}}]),a}(n.Component),L=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={x:500,y:500,angle:0,running:!1},e.mousefollow=function(t){e.setState({x:t.clientX,y:t.clientY})},e.follow=function(t){setInterval((function(){e.setState({angle:e.state.angle+.01})}),30)},e}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:p.a.start,onMouseMove:this.mousefollow,onMouseEnter:this.follow,onTouchStart:this.mousefollow},i.a.createElement("div",{className:p.a.ball,style:{top:this.state.y+200*Math.cos(this.state.angle),left:this.state.x+200*Math.sin(this.state.angle),background:"linear-gradient(".concat(this.state.angle,"deg,black,yellow)")}}),i.a.createElement("div",{className:p.a.smallball,style:{top:this.state.y+100*Math.cos(this.state.angle-20)+40*Math.cos(this.state.angle-20),left:this.state.x+100*Math.sin(this.state.angle)+40*Math.sin(this.state.angle),width:"10px",height:"10px",background:"linear-gradient(".concat(this.state.angle,"deg,black,grey,white)")}}),i.a.createElement("div",{className:p.a.smallball,style:{top:this.state.y+100*Math.cos(this.state.angle-60)+40*Math.cos(this.state.angle-60),left:this.state.x+100*Math.sin(this.state.angle)+40*Math.cos(this.state.angle),width:"20px",height:"20px",background:"linear-gradient(".concat(this.state.angle,"deg,black,blue,white)")}}),i.a.createElement(B,null))}}]),a}(n.Component),I=a(14),P=a.n(I),D=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:P.a.app},i.a.createElement(L,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.32f55111.chunk.js.map