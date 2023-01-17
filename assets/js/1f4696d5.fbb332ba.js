"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),f=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=f(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=f(n),m=r,u=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(u,s(s({ref:t},l),{},{components:n})):a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var f=2;f<o;f++)s[f]=n[f];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>f});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:7,description:"scaffolding tests for your home view"},s="Scaffolding Home Tests \ud83e\uddea\ud83c\udfe1",i={unversionedId:"static-scaffolding/scaffolding-home-tests",id:"static-scaffolding/scaffolding-home-tests",title:"Scaffolding Home Tests \ud83e\uddea\ud83c\udfe1",description:"scaffolding tests for your home view",source:"@site/docs/static-scaffolding/scaffolding-home-tests.md",sourceDirName:"static-scaffolding",slug:"/static-scaffolding/scaffolding-home-tests",permalink:"/docs/static-scaffolding/scaffolding-home-tests",draft:!1,editUrl:"https://github.com/scaffoldinghub-dev/scaffoldinghub-dev.github.io/tree/main/docs/static-scaffolding/scaffolding-home-tests.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"scaffolding tests for your home view"},sidebar:"tutorialSidebar",previous:{title:"Scaffolding Home View \ud83c\udfe0",permalink:"/docs/static-scaffolding/scaffolding-home"},next:{title:"Editing Scaffolding Templates \u270f\ufe0f",permalink:"/docs/static-scaffolding/editing-templates"}},c={},f=[],l={toc:f};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scaffolding-home-tests-"},"Scaffolding Home Tests \ud83e\uddea\ud83c\udfe1"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sjhorn/mason_bricks/scaffolding_home_test"},"scaffolding_home_test")," is the simplest scaffolding brick designed to unit test the home view brick. It takes the same parameters as the previous scaffolding_home brick. "),(0,r.kt)("p",null,"So to add test to many features from the previous example we would first add the brick"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# \ud83c\udfe0 add the scaffolding_home_test brick\nmason add scaffolding_home_test\n")),(0,r.kt)("p",null,"and then running with the same parameters as scaffolding_home_test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mason make scaffolding_home_test --package static_scaffolding_sample \\\n    --features feature1,feature2\n")),(0,r.kt)("p",null,"Which will overwrite the test that only coverage one feature with output similar to below. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"You have the following features: [feature1, feature2]\nconflict .../static_scaffolding_sample/test/scaffold_app_test.dart\nOverwrite scaffold_app_test.dart? (Yyna)  Y\n\u2713 Made brick scaffolding_home_test (2.5s)\n\u2713 Generated 1 file:\n  .../static_scaffolding_sample/test/scaffold_app_test.dart (new)\n")),(0,r.kt)("p",null,"Now we have all the fundamentals \ud83d\udd25 , next we learn how we can edit the scaffolding templates if we want to customise."))}d.isMDXComponent=!0}}]);