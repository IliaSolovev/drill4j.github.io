(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85,173],{4908:function(e,t,l){"use strict";var n=l(7294),a=l(6742),r=l(6700),c=l(4996),m=l(6010),o=l(1370);t.Z=function(){var e=(0,r.LU)().footer.links;return n.createElement("footer",{className:"bg-monochrome-light-tint"},n.createElement("div",{className:"container"},n.createElement("section",{className:"grid py-16 grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-y-12 gap-x-5"},n.createElement("a",{href:"https://github.com/Drill4J",target:"_blank",rel:"noreferrer noopener",className:"col-span-full lg:col-span-4"},n.createElement("img",{src:(0,c.Z)("img/drill4j-logo-grayscale.svg"),alt:"drill4j github"})),e.map((function(e,t){var l=e.title,r=void 0===l?"":l,c=e.items;return n.createElement("div",{className:(0,m.Z)("space-y-3","md:col-span-"+(2===t?2:3)+" lg:col-span-3 lg:col-start-"+(5+3*t))},n.createElement("h5",null,r),n.createElement("ul",null,c.map((function(e){var t=e.label,l=e.href;return n.createElement("li",{className:"mb-2"},n.createElement(a.Z,{className:"gray-link",to:l},t))}))))}))),n.createElement("section",{className:"flex flex-col gap-y-4 py-6 border-t border-monochrome-medium-tint sm:flex-row justify-between"},n.createElement("span",{className:"flex flex-col gap-y-2 items-center gap-x-2 text-16 leading-24 text-monochrome-default sm:flex-row"},"Sponsored by",n.createElement(a.Z,{to:"https://www.epam-group.ru/"},n.createElement("img",{src:(0,c.Z)("img/epam-logo.svg"),alt:"Epam"})),"Licensed under Apache v2.0"),n.createElement("ul",{className:"flex justify-center gap-x-4 items-center"},o.K.map((function(e){var t=e.bg,l=e.link;return n.createElement("li",null,n.createElement(a.Z,{to:l,className:t+" block w-6 h-6 cursor-pointer"}))}))))))}},3252:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return i}});var n=l(7294),a=l(4565),r=l(3905),c=l(6203),m=l(6933),o=function(){return n.createElement("div",{className:"flex justify-center items-center flex-wrap gap-6 py-10 px-5 text-center",style:{background:"linear-gradient(172.73deg, #68ADF4 5.66%, #3F88E2 94.34%)"}},n.createElement("p",{className:"text-monochrome-white"},n.createElement("strong",null,"Still have questions with installation?")," Chat with us in Telegram channel"),n.createElement("a",{className:"flex items-center gap-x-2 py-1 px-8 text-blue-default bg-monochrome-white rounded-3xl font-bold hover:outline-none",href:"https://t.me/drill4j"},n.createElement(m.JO,{src:"img/telegram-logo.svg"})," Telegram"))};var i=function(e){var t=e.content,l=t.frontMatter,i=t.metadata,s=l.title,u=l.description,g=l.wrapperClassName,p=i.permalink;return n.createElement(a.Z,{title:s,description:u,permalink:p,wrapperClassName:g},n.createElement("main",null,n.createElement(m.jL,{backgroundSrc:"img/banner-background.png"},n.createElement("h1",{className:"text-monochrome-white text-32"},s)),n.createElement("div",{className:"container pt-12 pb-24"},n.createElement("div",{className:"markdown"},n.createElement(r.Zo,{components:c.Z},n.createElement(t,null)))),"3 Easy steps to integrate Drill4J"===s&&n.createElement(o,null)))}},5752:function(e,t,l){"use strict";l.d(t,{Z:function(){return g}});var n=l(7294),a=l(4996),r=l(5977),c=l(6742),m=l(6700),o=l(1839),i=l(1370),s="activeTab_bgKI",u="tab_WL9E",g=function(){var e=(0,m.LU)().navbar.items,t=(0,r.TH)().pathname,l=(0,n.useState)(!1),g=l[0],p=l[1];(0,o.Z)(g);var b=[].concat(e),d=b.splice(-1,1)[0];return n.createElement("header",{className:"sticky top-0 z-50 h-22"},n.createElement("div",{className:"absolute top-0 left-0 z-40 w-full bg-monochrome-white shadow"},n.createElement("nav",{className:"flex items-center justify-between py-5 container"},n.createElement(c.Z,{to:(0,a.Z)("/")},n.createElement("img",{src:(0,a.Z)("/img/drill4j-logo.svg"),alt:"drill-logo"})),n.createElement("div",{className:"md:flex items-center"},n.createElement("ul",{className:"invisible md:visible fixed md:static flex flex-row gap-6 items-center"},b.map((function(e){var l=e.to,r=void 0===l?"":l,m=e.label,o=void 0===m?"":m;return n.createElement("li",null,n.createElement(c.Z,{style:{textDecoration:"none"},className:"\n                      text-16 font-normal leading-24 text-monochrome-default hover:text-blue-default \n                      "+(t.includes(r)?s:u)+"\n                      ",to:(0,a.Z)(r)},o))})),n.createElement("li",null,n.createElement(c.Z,{style:{textDecoration:"none"},className:"button-primary w-44 ml-5",to:(0,a.Z)(d.to)},d.label))),n.createElement("button",{"aria-label":"menu button",className:"flex items-center justify-center w-9 h-9 md:hidden text-monochrome-black fill-current "+(g?"bg-close":"bg-menu")+" bg-no-repeat",type:"button",onClick:function(){return p(!g)}})))),g&&n.createElement("nav",{className:"visible md:invisible fixed w-full h-full left-0 top-22"},n.createElement("div",{className:"bg-monochrome-white"},n.createElement("div",{className:"container pt-2 pb-6"},n.createElement("ul",null,b.map((function(e){var t=e.to,l=void 0===t?"":t,r=e.label,m=void 0===r?"":r;return n.createElement("li",{className:"text-16 leading-24 border-b border-monochrome-medium-tint"},n.createElement(c.Z,{style:{textDecoration:"none"},className:"gray-link inline-flex py-4 w-full h-full",to:(0,a.Z)(l)},m))})),n.createElement("div",{className:"flex gap-x-6 mt-9 mb-30"},i.K.map((function(e){var t=e.bg,l=e.link;return n.createElement("li",null,n.createElement(c.Z,{to:l,className:t+" bg-no-repeat bg-center transform scale-150 block w-9 h-9 cursor-pointer"}))}))),n.createElement("li",null,n.createElement(c.Z,{style:{textDecoration:"none"},className:"button-primary w-full",to:(0,a.Z)(d.to)},d.label))))),n.createElement("div",{className:"w-full h-full bg-monochrome-black bg-opacity-50",onClick:function(){return p(!g)}})))}},1370:function(e,t,l){"use strict";l.d(t,{K:function(){return n}});var n=[{bg:"bg-git-hub",link:"https://github.com/Drill4J"},{bg:"bg-telegram",link:"https://t.me/drill4j"},{bg:"bg-twiter",link:"https://twitter.com/"},{bg:"bg-youtube",link:"https://www.youtube.com/channel/UCJtegUnUHr0bO6icF1CYjKw/featured"}]}}]);