"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2163],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},f=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(u,r(r({ref:t},f),{},{components:a})):n.createElement(u,r({ref:t},f))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8404:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_position:6,description:"scaffolding your home view"},r="Scaffolding Home View \ud83c\udfe0",s={unversionedId:"static-scaffolding/scaffolding-home",id:"static-scaffolding/scaffolding-home",title:"Scaffolding Home View \ud83c\udfe0",description:"scaffolding your home view",source:"@site/docs/static-scaffolding/scaffolding-home.md",sourceDirName:"static-scaffolding",slug:"/static-scaffolding/scaffolding-home",permalink:"/docs/static-scaffolding/scaffolding-home",draft:!1,editUrl:"https://github.com/scaffoldinghub-dev/scaffoldinghub-dev.github.io/tree/main/docs/static-scaffolding/scaffolding-home.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"scaffolding your home view"},sidebar:"tutorialSidebar",previous:{title:"Scaffolding Tests \ud83e\uddea",permalink:"/docs/static-scaffolding/scaffolding-tests"},next:{title:"Scaffolding Home Tests \ud83e\uddea\ud83c\udfe1",permalink:"/docs/static-scaffolding/scaffolding-home-tests"}},l={},c=[{value:"Adding Scaffolding Home brick to the project",id:"adding-scaffolding-home-brick-to-the-project",level:2},{value:"Making more than one feature",id:"making-more-than-one-feature",level:2}],f={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scaffolding-home-view-"},"Scaffolding Home View \ud83c\udfe0"),(0,o.kt)("p",null,"Generating a route and read/list view was a great bootstrap step, but it can be helpful to provide a home page and main function to immediately see you application running. "),(0,o.kt)("p",null,"This is where the scaffolding_home mason brick helps out. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/sjhorn/mason_bricks/scaffolding_home"},"scaffolding_home")," is a option mason brick that is called when the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--generate-home")," is true. "),(0,o.kt)("p",null,"The challenge with only use the ",(0,o.kt)("inlineCode",{parentName:"p"},"scaffolding")," brick is that it is designed to generate one feature. So it only call ",(0,o.kt)("inlineCode",{parentName:"p"},"scaffolding_home")," with a single route. "),(0,o.kt)("p",null,"If you are scaffolding many features - you can take advantage of the scaffolding_home brick directly. "),(0,o.kt)("p",null,"To do this lets add the brick on our project. "),(0,o.kt)("h2",{id:"adding-scaffolding-home-brick-to-the-project"},"Adding Scaffolding Home brick to the project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# \ud83c\udfe0 add the scaffolding_home brick\nmason add scaffolding_home \\\n    --git-url https://github.com/sjhorn/mason_bricks \\\n    --git-path bricks/scaffolding_home\n")),(0,o.kt)("h2",{id:"making-more-than-one-feature"},"Making more than one feature"),(0,o.kt)("p",null,"Based on on the feature we already have, lets add another one, but leave the home generation to aftewards"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'mason make scaffolding --package static_scaffolding_sample \\\n    --feature feature2 --properties "String name, bool complete=false" \\\n    --generate-home false --generate-tests false \n')),(0,o.kt)("p",null,"Now we have 2 features - ",(0,o.kt)("em",{parentName:"p"},"contact")," and ",(0,o.kt)("em",{parentName:"p"},"todo")," so lets scaffold them both into the home view. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mason make scaffolding_home --package static_scaffolding_sample \\\n    --features feature1, feature2\n")),(0,o.kt)("p",null,"This will generate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"You have the following features: [feature1, feature2]\nconflict .../static_scaffolding_sample/lib/scaffold_app.dart\nOverwrite scaffold_app.dart? (Yyna)  Y\n\u2713 Made brick scaffolding_home (4.3s)\n\u2713 Generated 2 file(s):\n  .../static_scaffolding_sample/lib/main.dart (identical)\n  .../static_scaffolding_sample/lib/scaffold_app.dart (new)\n")),(0,o.kt)("p",null,"As you can see the brick takes a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"features")," seperated by a ",(0,o.kt)("inlineCode",{parentName:"p"},"comma"),". "),(0,o.kt)("p",null,"The new home view will now look like the view below and you can navigate to either the ",(0,o.kt)("inlineCode",{parentName:"p"},"feature1")," or the ",(0,o.kt)("inlineCode",{parentName:"p"},"feature2")," views. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"home 2 features",src:a(132).Z,width:"799",height:"348"}),"\n",(0,o.kt)("img",{alt:"feature1",src:a(2549).Z,width:"798",height:"596"}),"\n",(0,o.kt)("img",{alt:"feature2",src:a(2693).Z,width:"794",height:"624"})),(0,o.kt)("p",null,"While this is just an example names like ",(0,o.kt)("inlineCode",{parentName:"p"},"Contacts")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"Feature1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Todo")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"Feature2")," would yield a better scaffold, but I used these simple names for demonstration purposes. "),(0,o.kt)("p",null,"With our new scaffolding_home we next need to consider scaffolding_home_tests."))}d.isMDXComponent=!0},2549:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/feature1-1f531569c3444581f27be3650b54efda.png"},2693:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/feature2-9c4f8e9bea1a544b66ea4239b6a45d20.png"},132:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/home_2feature_scaffold-a476f53d1e26e789f534a0ac163b4d37.png"}}]);