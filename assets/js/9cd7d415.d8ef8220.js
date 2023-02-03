"use strict";(self.webpackChunkrestyle=self.webpackChunkrestyle||[]).push([[218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={id:"defining-your-theme",title:"Defining your theme"},i=void 0,l={unversionedId:"fundamentals/defining-your-theme",id:"fundamentals/defining-your-theme",title:"Defining your theme",description:'Any project using this library should have a global theme object which specifies a set of values for spacing, colors, breakpoints, and more. These values are made available to Restyle components, so that you can for example write backgroundColor="cardPrimary" to use the named color from your theme. In fact, TypeScript enforces the backgroundColor property to only accept colors that have been defined in your theme, and autocompletes values for you in a modern editor.',source:"@site/docs/fundamentals/defining-your-theme.md",sourceDirName:"fundamentals",slug:"/fundamentals/defining-your-theme",permalink:"/restyle/fundamentals/defining-your-theme",draft:!1,editUrl:"https://github.com/shopify/restyle/edit/master/docusaurus/docs/fundamentals/defining-your-theme.md",tags:[],version:"current",lastUpdatedBy:"Marek Fo\u0159t",lastUpdatedAt:1675423234,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{id:"defining-your-theme",title:"Defining your theme"},sidebar:"docs",previous:{title:"Fundamentals",permalink:"/restyle/fundamentals"},next:{title:"Colors",permalink:"/restyle/fundamentals/colors"}},s={},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Any project using this library should have a global theme object which specifies a set of values for spacing, colors, breakpoints, and more. These values are made available to Restyle components, so that you can for example write ",(0,o.kt)("inlineCode",{parentName:"p"},'backgroundColor="cardPrimary"')," to use the named color from your theme. In fact, TypeScript enforces the ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundColor")," property to ",(0,o.kt)("em",{parentName:"p"},"only")," accept colors that have been defined in your theme, and autocompletes values for you in a modern editor."),(0,o.kt)("p",null,"Below is an example of how a basic theme could look. Make sure to read the other sections in ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals"},"Fundamentals")," for more details on how to set up your different theme values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {createTheme} from '@shopify/restyle';\n\nconst palette = {\n  purpleLight: '#8C6FF7',\n  purplePrimary: '#5A31F4',\n  purpleDark: '#3F22AB',\n\n  greenLight: '#56DCBA',\n  greenPrimary: '#0ECD9D',\n  greenDark: '#0A906E',\n\n  black: '#0B0B0B',\n  white: '#F0F2F3',\n};\n\nconst theme = createTheme({\n  colors: {\n    mainBackground: palette.white,\n    cardPrimaryBackground: palette.purplePrimary,\n  },\n  spacing: {\n    s: 8,\n    m: 16,\n    l: 24,\n    xl: 40,\n  },\n  breakpoints: {\n    phone: 0,\n    tablet: 768,\n  },\n});\n\nexport type Theme = typeof theme;\nexport default theme;\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: ",(0,o.kt)("inlineCode",{parentName:"em"},"createTheme")," doesn't do anything except enforcing the theme to have the same shape as the BaseTheme, but it preserves the types of your user specific values (e.g. what colors the theme has) so you don't lose typesafety as a result of the ",(0,o.kt)("inlineCode",{parentName:"em"},"{ [key:string]: any }")," in BaseTheme")),(0,o.kt)("p",null,"This theme should be passed to a ",(0,o.kt)("inlineCode",{parentName:"p"},"ThemeProvider")," at the top of your React tree:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {ThemeProvider} from '@shopify/restyle';\nimport theme from './theme';\n\nconst App = () => (\n  <ThemeProvider theme={theme}>{/* Rest of the app */}</ThemeProvider>\n);\n")))}m.isMDXComponent=!0}}]);