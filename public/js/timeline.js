!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s(s.s=6)}({6:function(t,e,s){t.exports=s("KqaD")},"9tPo":function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var s=e.protocol+"//"+e.host,n=s+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?s+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},I1BE:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var s=function(t,e){var s=t[1]||"",n=t[3];if(!n)return s;if(e&&"function"==typeof btoa){var i=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[s].concat(o).concat([i]).join("\n")}var a;return[s].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+s+"}":s}).join("")},e.i=function(t,s){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(s&&!a[2]?a[2]=s:s&&(a[2]="("+a[2]+") and ("+s+")"),e.push(a))}},e}},J87L:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.text-lighter[data-v-d2886c68] {\n\tcolor:#B8C2CC !important;\n}\n.postPresenterContainer[data-v-d2886c68] {\n\tdisplay: flex;\n\talign-items: center;\n\tbackground: #fff;\n}\n.cursor-pointer[data-v-d2886c68] {\n\tcursor: pointer;\n}\n.word-break[data-v-d2886c68] {\n\tword-break: break-all;\n}\n.small .custom-control-label[data-v-d2886c68] {\n\tpadding-top: 3px;\n}\n",""])},"KHd+":function(t,e,s){"use strict";function n(t,e,s,n,i,o,a,r){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):i&&(c=r?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}s.d(e,"a",function(){return n})},KhVi:function(t,e,s){"use strict";s.r(e);function n(t){return function(t){if(Array.isArray(t)){for(var e=0,s=new Array(t.length);e<t.length;e++)s[e]=t[e];return s}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i={data:function(){return{page:2,feed:[],profile:{},scope:"/"==window.location.pathname?"home":"local",min_id:0,max_id:0,notifications:{},stories:{},suggestions:{},loading:!0,replies:[],replyId:null,optionMenuState:!1,modes:{mod:!1,dark:!1,notify:!0,infinite:!1}}},beforeMount:function(){this.fetchTimelineApi(),this.fetchProfile()},mounted:function(){this.$nextTick(function(){$('[data-toggle="tooltip"]').tooltip();var t=window.ls.get("pixelfed-classicui-settings");t.hasOwnProperty("notify")?this.modes=t:window.ls.set("pixelfed-classicui-settings",this.modes)})},updated:function(){pixelfed.readmore()},methods:{fetchProfile:function(){var t=this;axios.get("/api/v1/accounts/verify_credentials").then(function(e){t.profile=e.data,$(".profile-card .loader").addClass("d-none"),$(".profile-card .contents").removeClass("d-none"),$(".profile-card .card-footer").removeClass("d-none"),t.fetchNotifications()}).catch(function(t){swal("Oops, something went wrong","Please reload the page.","error")})},fetchTimelineApi:function(){var t=this,e="home"==this.scope?"/api/v1/timelines/home?page=1":"/api/v1/timelines/public?page=1";axios.get(e).then(function(e){var s,i=e.data;(s=t.feed).push.apply(s,n(i));var o=i.map(function(t){return t.id});t.min_id=Math.min.apply(Math,n(o)),1==t.page&&(t.max_id=Math.max.apply(Math,n(o))),$(".timeline .pagination").removeClass("d-none"),t.loading=!1}).catch(function(t){})},infiniteTimeline:function(t){var e=this,s="home"==this.scope?"/api/v1/timelines/home":"/api/v1/timelines/public";axios.get(s,{params:{page:this.page}}).then(function(s){if(s.data.length&&0==e.loading){var i,o=s.data;(i=e.feed).push.apply(i,n(o));var a=o.map(function(t){return t.id});e.min_id=Math.min.apply(Math,n(a)),1==e.page&&(e.max_id=Math.max.apply(Math,n(a))),e.page+=1,t.loaded(),e.loading=!1}else t.complete()})},loadMore:function(){var t=this,e="home"==this.scope?"/api/v1/timelines/home":"/api/v1/timelines/public";axios.get(e,{params:{page:this.page}}).then(function(e){if(e.data.length&&0==t.loading){var s,i=e.data;(s=t.feed).push.apply(s,n(i));var o=i.map(function(t){return t.id});t.min_id=Math.min.apply(Math,n(o)),1==t.page&&(t.max_id=Math.max.apply(Math,n(o))),t.page+=1,t.loading=!1}})},fetchNotifications:function(){var t=this;axios.get("/api/v1/notifications").then(function(e){t.notifications=e.data,$(".notification-card .loader").addClass("d-none"),$(".notification-card .contents").removeClass("d-none")})},reportUrl:function(t){return"/i/report?type="+(t.in_reply_to?"comment":"post")+"&id="+t.id},commentFocus:function(t,e){this.replyId!=t.id&&(this.replies={},this.replyId=t.id,this.fetchStatusComments(t,""))},likeStatus:function(t,e){0!=$("body").hasClass("loggedIn")&&axios.post("/i/like",{item:t.id}).then(function(e){t.favourites_count=e.data.count,t.favourited=!t.favourited}).catch(function(t){swal("Error","Something went wrong, please try again later.","error")})},shareStatus:function(t,e){0!=$("body").hasClass("loggedIn")&&axios.post("/i/share",{item:t.id}).then(function(e){t.reblogs_count=e.data.count,t.reblogged=!t.reblogged}).catch(function(t){swal("Error","Something went wrong, please try again later.","error")})},timestampFormat:function(t){var e=new Date(t);return e.toDateString()+" "+e.toLocaleTimeString()},editUrl:function(t){return t.url+"/edit"},redirect:function(t){window.location.href=t},replyUrl:function(t){return"/p/"+this.profile.username+"/"+(t.account.id==this.profile.id?t.id:t.in_reply_to_id)},mentionUrl:function(t){return"/p/"+t.account.username+"/"+t.id},statusOwner:function(t){return t.account.id==this.profile.id},fetchStatusComments:function(t,e){var s=this;axios.get("/api/v2/status/"+t.id+"/replies").then(function(t){var e=t.data;s.replies=_.reverse(e)}).catch(function(t){})},muteProfile:function(t){var e=this;0!=$("body").hasClass("loggedIn")&&axios.post("/i/mute",{type:"user",item:t.account.id}).then(function(s){e.feed=e.feed.filter(function(e){return e.account.id!==t.account.id}),swal("Success","You have successfully muted "+t.account.acct,"success")}).catch(function(t){swal("Error","Something went wrong. Please try again later.","error")})},blockProfile:function(t){var e=this;0!=$("body").hasClass("loggedIn")&&axios.post("/i/block",{type:"user",item:t.account.id}).then(function(s){e.feed=e.feed.filter(function(e){return e.account.id!==t.account.id}),swal("Success","You have successfully blocked "+t.account.acct,"success")}).catch(function(t){swal("Error","Something went wrong. Please try again later.","error")})},deletePost:function(t,e){var s=this;0!=$("body").hasClass("loggedIn")&&t.account.id===this.profile.id&&axios.post("/i/delete",{type:"status",item:t.id}).then(function(t){s.feed.splice(e,1),swal("Success","You have successfully deleted this post","success")}).catch(function(t){swal("Error","Something went wrong. Please try again later.","error")})},commentSubmit:function(t,e){var s=this,n=t.id,i=e.target,o=$(i).find('input[name="comment"]').val();i.parentElement.parentElement.getElementsByClassName("comments")[0];axios.post("/i/comment",{item:n,comment:o}).then(function(t){i.reset(),i.blur(),s.replies.push(t.data.entity)})},moderatePost:function(t,e,s){var n=t.account.username;switch(console.log("action: "+e+" status id"+t.id),e){case"autocw":var i="Are you sure you want to enforce CW for "+n+" ?";swal({title:"Confirm",text:i,icon:"warning",buttons:!0,dangerMode:!0}).then(function(s){s&&axios.post("/api/v2/moderator/action",{action:e,item_id:t.id,item_type:"status"}).then(function(t){swal("Success","Successfully enforced CW for "+n,"success")}).catch(function(t){swal("Error","Something went wrong, please try again later.","error")})});break;case"noautolink":i="Are you sure you want to disable auto linking for "+n+" ?",swal({title:"Confirm",text:i,icon:"warning",buttons:!0,dangerMode:!0}).then(function(s){s&&axios.post("/api/v2/moderator/action",{action:e,item_id:t.id,item_type:"status"}).then(function(t){swal("Success","Successfully disabled autolinking for "+n,"success")}).catch(function(t){swal("Error","Something went wrong, please try again later.","error")})});break;case"unlisted":i="Are you sure you want to unlist from timelines for "+n+" ?",swal({title:"Confirm",text:i,icon:"warning",buttons:!0,dangerMode:!0}).then(function(s){s&&axios.post("/api/v2/moderator/action",{action:e,item_id:t.id,item_type:"status"}).then(function(t){swal("Success","Successfully unlisted for "+n,"success")}).catch(function(t){swal("Error","Something went wrong, please try again later.","error")})});break;case"disable":i="Are you sure you want to disable "+n+"'s account ?",swal({title:"Confirm",text:i,icon:"warning",buttons:!0,dangerMode:!0}).then(function(s){s&&axios.post("/api/v2/moderator/action",{action:e,item_id:t.id,item_type:"status"}).then(function(t){swal("Success","Successfully disabled "+n+"'s account","success")}).catch(function(t){swal("Error","Something went wrong, please try again later.","error")})});break;case"suspend":i="Are you sure you want to suspend "+n+"'s account ?",swal({title:"Confirm",text:i,icon:"warning",buttons:!0,dangerMode:!0}).then(function(s){s&&axios.post("/api/v2/moderator/action",{action:e,item_id:t.id,item_type:"status"}).then(function(t){swal("Success","Successfully suspend "+n+"'s account","success")}).catch(function(t){swal("Error","Something went wrong, please try again later.","error")})})}},toggleOptionsMenu:function(){this.optionMenuState=!this.optionMenuState},modeModToggle:function(){this.modes.mod=!this.modes.mod,window.ls.set("pixelfed-classicui-settings",this.modes)},modeNotifyToggle:function(){this.modes.notify=!this.modes.notify,window.ls.set("pixelfed-classicui-settings",this.modes)},modeDarkToggle:function(){if(1==this.modes.dark){this.modes.dark=!1,$("link[rel=stylesheet]").remove();var t=document.head,e=document.createElement("link");e.type="text/css",e.rel="stylesheet",e.href="/css/app.css",t.appendChild(e)}else{this.modes.dark=!0,$("link[rel=stylesheet]").remove();var s=document.head,n=document.createElement("link");n.id="darkModeSheet",n.type="text/css",n.rel="stylesheet",n.href="/css/appdark.css",s.appendChild(n)}window.ls.set("pixelfed-classicui-settings",this.modes)},modeInfiniteToggle:function(){this.modes.infinite=!this.modes.infinite,window.ls.set("pixelfed-classicui-settings",this.modes)}}},o=(s("eLCL"),s("KHd+")),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 col-lg-8 pt-2 px-0 my-3 timeline order-2 order-md-1"},[t.loading?s("div",{staticClass:"text-center"},[t._m(0)]):t._e(),t._v(" "),t._l(t.feed,function(e,n){return s("div",{key:e.id,staticClass:"card mb-4 status-card card-md-rounded-0",attrs:{"data-status-id":e.id}},[s("div",{staticClass:"card-header d-inline-flex align-items-center bg-white"},[s("img",{staticStyle:{"border-radius":"32px"},attrs:{src:e.account.avatar,width:"32px",height:"32px"}}),t._v(" "),s("a",{staticClass:"username font-weight-bold pl-2 text-dark",attrs:{href:e.account.url}},[t._v("\n\t\t\t\t\t\t"+t._s(e.account.username)+"\n\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"text-right",staticStyle:{"flex-grow":"1"}},[t._m(1,!0),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("a",{staticClass:"dropdown-item font-weight-bold",attrs:{href:e.url}},[t._v("Go to post")]),t._v(" "),0==t.statusOwner(e)?s("span",[s("a",{staticClass:"dropdown-item font-weight-bold",attrs:{href:t.reportUrl(e)}},[t._v("Report")]),t._v(" "),s("a",{staticClass:"dropdown-item font-weight-bold",on:{click:function(s){return t.muteProfile(e)}}},[t._v("Mute Profile")]),t._v(" "),s("a",{staticClass:"dropdown-item font-weight-bold",on:{click:function(s){return t.blockProfile(e)}}},[t._v("Block Profile")])]):t._e(),t._v(" "),1==t.statusOwner(e)?s("span",[s("a",{staticClass:"dropdown-item font-weight-bold text-danger",on:{click:function(s){return t.deletePost(e)}}},[t._v("Delete")])]):t._e(),t._v(" "),1==t.profile.is_admin&&1==t.modes.mod?s("span",[s("div",{staticClass:"dropdown-divider"}),t._v(" "),t.statusOwner(e)?t._e():s("a",{staticClass:"dropdown-item font-weight-bold text-danger",on:{click:function(s){return t.deletePost(e)}}},[t._v("Delete")]),t._v(" "),s("div",{staticClass:"dropdown-divider"}),t._v(" "),s("h6",{staticClass:"dropdown-header"},[t._v("Mod Tools")]),t._v(" "),s("a",{staticClass:"dropdown-item font-weight-bold",on:{click:function(s){return t.moderatePost(e,"autocw")}}},[s("p",{staticClass:"mb-0",attrs:{"data-toggle":"tooltip","data-placement":"bottom",title:"Adds a CW to every post made by this account."}},[t._v("Enforce CW")])]),t._v(" "),s("a",{staticClass:"dropdown-item font-weight-bold",on:{click:function(s){return t.moderatePost(e,"noautolink")}}},[s("p",{staticClass:"mb-0",attrs:{title:"Do not transform mentions, hashtags or urls into HTML."}},[t._v("No Autolinking")])]),t._v(" "),s("a",{staticClass:"dropdown-item font-weight-bold",on:{click:function(s){return t.moderatePost(e,"unlisted")}}},[s("p",{staticClass:"mb-0",attrs:{title:"Removes account from public/network timelines."}},[t._v("Unlisted Posts")])]),t._v(" "),s("a",{staticClass:"dropdown-item font-weight-bold",on:{click:function(s){return t.moderatePost(e,"disable")}}},[s("p",{staticClass:"mb-0",attrs:{title:"Temporarily disable account until next time user log in."}},[t._v("Disable Account")])]),t._v(" "),s("a",{staticClass:"dropdown-item font-weight-bold",on:{click:function(s){return t.moderatePost(e,"suspend")}}},[s("p",{staticClass:"mb-0",attrs:{title:"This prevents any new interactions, without deleting existing data."}},[t._v("Suspend Account")])])]):t._e()])])]),t._v(" "),s("div",{staticClass:"postPresenterContainer"},["photo"===e.pf_type?s("div",{staticClass:"w-100"},[s("photo-presenter",{attrs:{status:e}})],1):"video"===e.pf_type?s("div",{staticClass:"w-100"},[s("video-presenter",{attrs:{status:e}})],1):"photo:album"===e.pf_type?s("div",{staticClass:"w-100"},[s("photo-album-presenter",{attrs:{status:e}})],1):"video:album"===e.pf_type?s("div",{staticClass:"w-100"},[s("video-album-presenter",{attrs:{status:e}})],1):"photo:video:album"===e.pf_type?s("div",{staticClass:"w-100"},[s("mixed-album-presenter",{attrs:{status:e}})],1):s("div",{staticClass:"w-100"},[s("p",{staticClass:"text-center p-0 font-weight-bold text-white"},[t._v("Error: Problem rendering preview.")])])]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"reactions my-1"},[s("h3",{class:[e.favourited?"fas fa-heart text-danger pr-3 m-0 cursor-pointer":"far fa-heart pr-3 m-0 like-btn cursor-pointer"],attrs:{title:"Like"},on:{click:function(s){return t.likeStatus(e,s)}}}),t._v(" "),s("h3",{staticClass:"far fa-comment pr-3 m-0 cursor-pointer",attrs:{title:"Comment"},on:{click:function(s){return t.commentFocus(e,s)}}}),t._v(" "),s("h3",{class:[e.reblogged?"far fa-share-square pr-3 m-0 text-primary cursor-pointer":"far fa-share-square pr-3 m-0 share-btn cursor-pointer"],attrs:{title:"Share"},on:{click:function(s){return t.shareStatus(e,s)}}})]),t._v(" "),s("div",{staticClass:"likes font-weight-bold"},[s("span",{staticClass:"like-count"},[t._v(t._s(e.favourites_count))]),t._v(" "+t._s(1==e.favourites_count?"like":"likes")+"\n\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"caption"},[s("p",{staticClass:"mb-2 read-more",staticStyle:{overflow:"hidden"}},[s("span",{staticClass:"username font-weight-bold"},[s("bdi",[s("a",{staticClass:"text-dark",attrs:{href:e.account.url}},[t._v(t._s(e.account.username))])])]),t._v(" "),s("span",{domProps:{innerHTML:t._s(e.content)}})])]),t._v(" "),e.id==t.replyId?s("div",{staticClass:"comments"},t._l(t.replies,function(e,n){return s("p",{staticClass:"mb-0 d-flex justify-content-between align-items-top read-more",staticStyle:{"overflow-y":"hidden"}},[s("span",[s("a",{staticClass:"text-dark font-weight-bold mr-1",attrs:{href:e.account.url}},[t._v(t._s(e.account.username))]),t._v(" "),s("span",{domProps:{innerHTML:t._s(e.content)}})]),t._v(" "),s("span",{staticClass:"mb-0",staticStyle:{"min-width":"38px"}},[s("span",{on:{click:function(s){return t.likeStatus(e,s)}}},[s("i",{class:[e.favourited?"fas fa-heart fa-sm text-danger":"far fa-heart fa-sm text-lighter"]})]),t._v(" "),s("post-menu",{staticClass:"d-inline-flex pl-2",attrs:{status:e,profile:t.profile,size:"sm",modal:"true",feed:t.feed}})],1)])}),0):t._e(),t._v(" "),s("div",{staticClass:"timestamp mt-2"},[s("p",{staticClass:"small text-uppercase mb-0"},[s("a",{staticClass:"text-muted",attrs:{href:e.url}},[s("timeago",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],attrs:{datetime:e.created_at,"auto-update":60,"converter-options":{includeSeconds:!0},title:t.timestampFormat(e.created_at)}})],1)])])]),t._v(" "),e.id==t.replyId?s("div",{staticClass:"card-footer bg-white"},[s("form",{on:{submit:function(s){return s.preventDefault(),t.commentSubmit(e,s)}}},[s("input",{attrs:{type:"hidden",name:"item",value:""}}),t._v(" "),s("input",{staticClass:"form-control status-reply-input",attrs:{name:"comment",placeholder:"Add a comment…",autocomplete:"off"}})])]):t._e()])}),t._v(" "),1==t.modes.infinite&&!t.loading&&t.feed.length>0?s("div",[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("infinite-loading",{on:{infinite:t.infiniteTimeline}},[s("div",{staticClass:"font-weight-bold",attrs:{slot:"no-more"},slot:"no-more"},[t._v("No more posts to load")]),t._v(" "),s("div",{staticClass:"font-weight-bold",attrs:{slot:"no-results"},slot:"no-results"},[t._v("No posts found")])])],1)])]):t._e(),t._v(" "),0==t.modes.infinite&&!t.loading&&t.feed.length>0?s("div",{staticClass:"pagination d-none"},[s("p",{staticClass:"btn btn-outline-secondary font-weight-bold btn-block",on:{click:t.loadMore}},[t._v("Load more posts")])]):t._e(),t._v(" "),t.loading||"home"!=t.scope||0!=t.feed.length?t._e():s("div",[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body text-center"},[s("p",{staticClass:"h2 font-weight-lighter p-5"},[t._v("Hello, "+t._s(t.profile.acct))]),t._v(" "),t._m(2),t._v(" "),s("p",{staticClass:"h3 font-weight-lighter p-5"},[t._v("Start following people to build your timeline.")]),t._v(" "),t._m(3)])])])],2),t._v(" "),s("div",{staticClass:"col-md-4 col-lg-4 pt-2 my-3 order-1 order-md-2"},[s("div",{staticClass:"mb-4"},[s("div",{staticClass:"card profile-card"},[t._m(4),t._v(" "),s("div",{staticClass:"card-body contents d-none"},[s("div",{staticClass:"media d-flex align-items-center"},[s("a",{attrs:{href:t.profile.url}},[s("img",{staticClass:"mr-3 rounded-circle box-shadow",attrs:{src:t.profile.avatar||"/storage/avatars/default.png",alt:"avatar",width:"64px",height:"64px"}})]),t._v(" "),s("div",{staticClass:"media-body d-flex justify-content-between"},[s("div",[s("p",{staticClass:"mb-0 px-0 font-weight-bold"},[s("a",{staticClass:"text-dark",attrs:{href:t.profile.url}},[t._v("@"+t._s(t.profile.username))])]),t._v(" "),s("p",{staticClass:"my-0 text-muted text-truncate pb-0"},[t._v(t._s(t.profile.display_name))])]),t._v(" "),s("div",[s("a",{class:[1==t.optionMenuState?"text-primary":"text-muted"],on:{click:function(e){return t.toggleOptionsMenu()}}},[s("i",{staticClass:"fas fa-cog"})])])])])]),t._v(" "),s("div",{staticClass:"card-footer bg-white py-1 d-none"},[s("div",{staticClass:"d-flex justify-content-between text-center"},[s("span",{staticClass:"pl-3 cursor-pointer",on:{click:function(e){return t.redirect(t.profile.url)}}},[s("p",{staticClass:"mb-0 font-weight-bold"},[t._v(t._s(t.profile.statuses_count))]),t._v(" "),s("p",{staticClass:"mb-0 small text-muted"},[t._v("Posts")])]),t._v(" "),s("span",{staticClass:"cursor-pointer",on:{click:function(e){return t.redirect(t.profile.url+"/followers")}}},[s("p",{staticClass:"mb-0 font-weight-bold"},[t._v(t._s(t.profile.followers_count))]),t._v(" "),s("p",{staticClass:"mb-0 small text-muted"},[t._v("Followers")])]),t._v(" "),s("span",{staticClass:"pr-3 cursor-pointer",on:{click:function(e){return t.redirect(t.profile.url+"/following")}}},[s("p",{staticClass:"mb-0 font-weight-bold"},[t._v(t._s(t.profile.following_count))]),t._v(" "),s("p",{staticClass:"mb-0 small text-muted"},[t._v("Following")])])])])])]),t._v(" "),1==t.optionMenuState?s("div",{staticClass:"mb-4"},[s("div",{staticClass:"card options-card"},[s("div",{staticClass:"card-body small"},[t.profile.is_admin?s("div",{staticClass:"custom-control custom-switch mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.modes.mod,expression:"modes.mod"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"mode-mod"},domProps:{checked:Array.isArray(t.modes.mod)?t._i(t.modes.mod,null)>-1:t.modes.mod},on:{click:function(e){return t.modeModToggle()},change:function(e){var s=t.modes.mod,n=e.target,i=!!n.checked;if(Array.isArray(s)){var o=t._i(s,null);n.checked?o<0&&t.$set(t.modes,"mod",s.concat([null])):o>-1&&t.$set(t.modes,"mod",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.modes,"mod",i)}}}),t._v(" "),s("label",{staticClass:"custom-control-label font-weight-bold",attrs:{for:"mode-mod"}},[t._v("Moderator Mode")])]):t._e(),t._v(" "),s("div",{staticClass:"custom-control custom-switch mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:!t.modes.notify,expression:"!modes.notify"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"mode-notify"},domProps:{checked:Array.isArray(!t.modes.notify)?t._i(!t.modes.notify,null)>-1:!t.modes.notify},on:{click:function(e){return t.modeNotifyToggle()},change:function(e){var s=!t.modes.notify,n=e.target,i=!!n.checked;if(Array.isArray(s)){var o=t._i(s,null);n.checked?o<0&&t.$set(!t.modes,"notify",s.concat([null])):o>-1&&t.$set(!t.modes,"notify",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(!t.modes,"notify",i)}}}),t._v(" "),s("label",{staticClass:"custom-control-label font-weight-bold",attrs:{for:"mode-notify"}},[t._v("Disable Notifications")])]),t._v(" "),s("div",{staticClass:"custom-control custom-switch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.modes.infinite,expression:"modes.infinite"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"mode-infinite"},domProps:{checked:Array.isArray(t.modes.infinite)?t._i(t.modes.infinite,null)>-1:t.modes.infinite},on:{click:function(e){return t.modeInfiniteToggle()},change:function(e){var s=t.modes.infinite,n=e.target,i=!!n.checked;if(Array.isArray(s)){var o=t._i(s,null);n.checked?o<0&&t.$set(t.modes,"infinite",s.concat([null])):o>-1&&t.$set(t.modes,"infinite",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.modes,"infinite",i)}}}),t._v(" "),s("label",{staticClass:"custom-control-label font-weight-bold",attrs:{for:"mode-infinite"}},[t._v("Enable Infinite Scroll")])])])])]):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.modes.notify,expression:"modes.notify == true"}],staticClass:"mb-4"},[s("div",{staticClass:"card notification-card"},[t._m(5),t._v(" "),t._m(6),t._v(" "),s("div",{staticClass:"card-body pt-2 contents",staticStyle:{"max-height":"170px","overflow-y":"scroll"}},[t._l(t.notifications,function(e,n){return t.notifications.length>0?s("div",{staticClass:"media mb-3 align-items-center"},[s("img",{staticClass:"mr-2 rounded-circle",staticStyle:{border:"1px solid #ccc"},attrs:{src:e.account.avatar,alt:"",width:"32px",height:"32px"}}),t._v(" "),s("div",{staticClass:"media-body font-weight-light small"},["favourite"==e.type?s("div",[s("p",{staticClass:"my-0"},[s("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:e.account.url}},[t._v(t._s(e.account.username))]),t._v(" liked your "),s("a",{staticClass:"font-weight-bold",attrs:{href:t.replyUrl(e.status)}},[t._v("post")]),t._v(".\n\t\t\t\t\t\t\t\t\t")])]):"comment"==e.type?s("div",[s("p",{staticClass:"my-0"},[s("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:e.account.url}},[t._v(t._s(e.account.username))]),t._v(" commented on your "),s("a",{staticClass:"font-weight-bold",attrs:{href:t.replyUrl(e.status)}},[t._v("post")]),t._v(".\n\t\t\t\t\t\t\t\t\t")])]):"mention"==e.type?s("div",[s("p",{staticClass:"my-0"},[s("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:e.account.url}},[t._v(t._s(e.account.username))]),t._v(" "),s("a",{staticClass:"font-weight-bold",attrs:{href:t.mentionUrl(e.status)}},[t._v("mentioned")]),t._v(" you.\n\t\t\t\t\t\t\t\t\t")])]):"follow"==e.type?s("div",[s("p",{staticClass:"my-0"},[s("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:e.account.url}},[t._v(t._s(e.account.username))]),t._v(" followed you.\n\t\t\t\t\t\t\t\t\t")])]):"share"==e.type?s("div",[s("p",{staticClass:"my-0"},[s("a",{staticClass:"font-weight-bold text-dark word-break",attrs:{href:e.account.url}},[t._v(t._s(e.account.username))]),t._v(" shared your "),s("a",{staticClass:"font-weight-bold",attrs:{href:e.status.reblog.url}},[t._v("post")]),t._v(".\n\t\t\t\t\t\t\t\t\t")])]):t._e()])]):t._e()}),t._v(" "),0==t.notifications.length?s("div",{staticClass:"text-lighter text-center py-3"},[t._m(7),t._v(" "),s("p",{staticClass:"mb-0 small font-weight-bold"},[t._v("0 Notifications!")])]):t._e()],2)])]),t._v(" "),t._m(8)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[this._v("Loading...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-link text-dark no-caret dropdown-toggle py-0",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",title:"Post options"}},[e("span",{staticClass:"fas fa-ellipsis-v fa-lg text-muted"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text-lighter"},[e("i",{staticClass:"fas fa-camera-retro fa-5x"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{staticClass:"btn btn-primary font-weight-bold py-0",attrs:{href:"/discover"}},[this._v("Discover new people and posts")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-body loader text-center"},[e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[this._v("Loading...")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header bg-white"},[e("p",{staticClass:"mb-0 d-flex align-items-center justify-content-between"},[e("span",{staticClass:"text-muted font-weight-bold"},[this._v("Notifications")]),this._v(" "),e("a",{staticClass:"text-dark small",attrs:{href:"/account/activity"}},[this._v("See All")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-body loader text-center",staticStyle:{height:"170px"}},[e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[this._v("Loading...")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-0"},[e("i",{staticClass:"fas fa-inbox fa-3x"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"container pb-5"},[s("p",{staticClass:"mb-0 text-uppercase font-weight-bold text-muted small"},[s("a",{staticClass:"text-dark pr-2",attrs:{href:"/site/about"}},[t._v("About Us")]),t._v(" "),s("a",{staticClass:"text-dark pr-2",attrs:{href:"/site/help"}},[t._v("Help")]),t._v(" "),s("a",{staticClass:"text-dark pr-2",attrs:{href:"/site/open-source"}},[t._v("Open Source")]),t._v(" "),s("a",{staticClass:"text-dark pr-2",attrs:{href:"/site/language"}},[t._v("Language")]),t._v(" "),s("a",{staticClass:"text-dark pr-2",attrs:{href:"/site/terms"}},[t._v("Terms")]),t._v(" "),s("a",{staticClass:"text-dark pr-2",attrs:{href:"/site/privacy"}},[t._v("Privacy")]),t._v(" "),s("a",{staticClass:"text-dark pr-2",attrs:{href:"/site/platform"}},[t._v("API")])]),t._v(" "),s("p",{staticClass:"mb-0 text-uppercase font-weight-bold text-muted small"},[s("a",{staticClass:"text-muted",attrs:{href:"http://pixelfed.org",rel:"noopener",title:"","data-toggle":"tooltip"}},[t._v("Powered by PixelFed")])])])])}],!1,null,"d2886c68",null);e.default=a.exports},KqaD:function(t,e,s){Vue.component("timeline",s("KhVi").default)},"aET+":function(t,e,s){var n,i,o={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=n.apply(this,arguments)),i}),r=function(t){var e={};return function(t,s){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,s);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,l=0,d=[],u=s("9tPo");function f(t,e){for(var s=0;s<t.length;s++){var n=t[s],i=o[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(_(n.parts[a],e))}else{var r=[];for(a=0;a<n.parts.length;a++)r.push(_(n.parts[a],e));o[n.id]={id:n.id,refs:1,parts:r}}}}function p(t,e){for(var s=[],n={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],r={css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(r):s.push(n[a]={id:a,parts:[r]})}return s}function m(t,e){var s=r(t.insertInto);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=d[d.length-1];if("top"===t.insertAt)n?n.nextSibling?s.insertBefore(e,n.nextSibling):s.appendChild(e):s.insertBefore(e,s.firstChild),d.push(e);else if("bottom"===t.insertAt)s.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=r(t.insertAt.before,s);s.insertBefore(e,i)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return s.nc}();n&&(t.attrs.nonce=n)}return g(e,t.attrs),m(t,e),e}function g(t,e){Object.keys(e).forEach(function(s){t.setAttribute(s,e[s])})}function _(t,e){var s,n,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var a=l++;s=c||(c=v(e)),n=w.bind(null,s,a,!1),i=w.bind(null,s,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(s=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),m(t,e),e}(e),n=function(t,e,s){var n=s.css,i=s.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(n=u(n));i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([n],{type:"text/css"}),r=t.href;t.href=URL.createObjectURL(a),r&&URL.revokeObjectURL(r)}.bind(null,s,e),i=function(){h(s),s.href&&URL.revokeObjectURL(s.href)}):(s=v(e),n=function(t,e){var s=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}.bind(null,s),i=function(){h(s)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var s=p(t,e);return f(s,e),function(t){for(var n=[],i=0;i<s.length;i++){var a=s[i];(r=o[a.id]).refs--,n.push(r)}t&&f(p(t,e),e);for(i=0;i<n.length;i++){var r;if(0===(r=n[i]).refs){for(var c=0;c<r.parts.length;c++)r.parts[c]();delete o[r.id]}}}};var b,y=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function w(t,e,s,n){var i=s?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},"d/Z2":function(t,e,s){var n=s("J87L");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,i);n.locals&&(t.exports=n.locals)},eLCL:function(t,e,s){"use strict";var n=s("d/Z2");s.n(n).a}});