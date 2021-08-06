(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[264],{1233:function(e,n,l){"use strict";var t,i=l(7294);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e}).apply(this,arguments)}function r(e,n){if(null==e)return{};var l,t,i=function(e,n){if(null==e)return{};var l,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(i[l]=e[l]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}n.Z=function(e){var n=e.title,l=e.titleId,o=r(e,["title","titleId"]);return i.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",fill:"none","aria-labelledby":l},o),n?i.createElement("title",{id:l},n):null,t||(t=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.508 0a.5.5 0 010 1H4a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3v-1.496a.5.5 0 111 0V12a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h1.508zM15.5 0a.5.5 0 01.5.5v7a.5.5 0 01-1 0V1.713l-6.14 6.14a.502.502 0 01-.64.059l-.069-.058a.502.502 0 01-.058-.64l.058-.07L14.293 1H8.5a.5.5 0 010-1h7z",fill:"#007FFF"})))}},2688:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return p},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return m}});var t=l(2122),i=l(9756),a=(l(7294),l(3905));var r=l(1233),o=l(1322),d={id:"drill-admin",title:"Drill Admin"},s={unversionedId:"installation/drill-admin",id:"installation/drill-admin",isDocsHomePage:!1,title:"Drill Admin",description:"Using Docker-compose File",source:"@site/docs/installation/drill-admin.mdx",sourceDirName:"installation",slug:"/installation/drill-admin",permalink:"/docs/installation/drill-admin",version:"current",frontMatter:{id:"drill-admin",title:"Drill Admin"},sidebar:"docs",next:{title:"Java Agent",permalink:"/docs/installation/java-agent"}},m=[{value:"Using Docker-compose File",id:"using-docker-compose-file",children:[]},{value:"Using Jar",id:"using-jar",children:[{value:"Drill Admin Backend",id:"drill-admin-backend",children:[]}]},{value:"Using OpenShift",id:"using-openshift",children:[]},{value:"Using Kubernetes",id:"using-kubernetes",children:[]},{value:"HTTPS Setup",id:"https-setup",children:[]}],c={toc:m};function p(e){var n=e.components,l=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"using-docker-compose-file"},"Using Docker-compose File"),(0,a.kt)("a",{href:"https://github.com/Drill4J/example-configs/blob/main/docker/drill-admin/docker-compose.yml",target:"_black"},"Docker-compose File",(0,a.kt)(r.Z,{mdxType:"ExternalLinkIcon"})),(0,a.kt)("p",null,"Start Drill using the following command and wait a bit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker-compose up -d\n")),(0,a.kt)("h2",{id:"using-jar"},"Using Jar"),(0,a.kt)("h3",{id:"drill-admin-backend"},"Drill Admin Backend"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to artifactory: ",(0,a.kt)("a",{href:"https://drill4j.jfrog.io/artifactory/drill/com/epam/drill/admin-core/0.7.0/",target:"_black"},(0,a.kt)("a",{parentName:"li",href:"https://drill4j.jfrog.io/artifactory/drill/com/epam/drill/admin-core/0.7.0/"},"https://drill4j.jfrog.io/artifactory/drill/com/epam/drill/admin-core/0.7.0/"),(0,a.kt)(r.Z,{mdxType:"ExternalLinkIcon"})))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Find the necessary version and download it. You need a file with the name: ",(0,a.kt)("strong",{parentName:"li"},"admin-core-'verison'-all.jar"),".")),(0,a.kt)(o.r0,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,a.kt)("p",null,"E.g. admin-core-0.7.0-all.jar")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run it:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"}," java -jar admin-core-0.7.0-all.jar\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Drill Admin Backend is on ",(0,a.kt)("a",{href:"http://localhost:8090/apidocs/index.html?url=./openapi.json",target:"_black"},"\nlocalhost:8090",(0,a.kt)(r.Z,{mdxType:"ExternalLinkIcon"})))),(0,a.kt)("h2",{id:"using-openshift"},"Using OpenShift"),(0,a.kt)("p",null,"Yo can use the following template for Drill Admin:"),(0,a.kt)("a",{href:"https://github.com/Drill4J/example-configs/blob/main/openshift/drill-admin-example-openshift.yaml",target:"_black"},"Drill Admin Example Openshift",(0,a.kt)(r.Z,{mdxType:"ExternalLinkIcon"})),(0,a.kt)("h2",{id:"using-kubernetes"},"Using Kubernetes"),(0,a.kt)("p",null,"Yo can use the following config files for Drill Admin:"),(0,a.kt)("a",{href:"https://github.com/Drill4J/example-configs/blob/main/kubernetes/admin-ui-deployment.yaml",target:"_black"},"Drill Admin UI Deployment",(0,a.kt)(r.Z,{mdxType:"ExternalLinkIcon"})),(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/Drill4J/example-configs/blob/main/kubernetes/admin-ui-service.yaml",target:"_black"},"Drill Admin UI Service",(0,a.kt)(r.Z,{mdxType:"ExternalLinkIcon"})),(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/Drill4J/example-configs/blob/main/kubernetes/drill-admin-deployment.yaml",target:"_black"},"Drill Admin Deployment",(0,a.kt)(r.Z,{mdxType:"ExternalLinkIcon"})),(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/Drill4J/example-configs/blob/main/kubernetes/drill-admin-service.yaml",target:"_black"},"Drill Admin Service",(0,a.kt)(r.Z,{mdxType:"ExternalLinkIcon"})),(0,a.kt)("h2",{id:"https-setup"},"HTTPS Setup"),(0,a.kt)("p",null,"If your application uses ",(0,a.kt)("strong",{parentName:"p"},"https")," for access you need to deploy additional ",(0,a.kt)("strong",{parentName:"p"},"ssl-proxy")," service\nto Drill admin setup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"ssl-proxy-admin:\n    image: drill4j/ssl-proxy:0.1.0\n    ports:\n      - 8443:8443\n    environment:\n      DOMAIN: drill4j.example.com\n      SSL_PORT: 8443\n      TARGET_HOST: admin-ui\n      TARGET_PORT: 8080\n")),(0,a.kt)("p",null,"For example, full docker-compose file looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"version: '3'\n\nservices:\n  ssl-proxy-admin:\n    image: drill4j/ssl-proxy:0.1.0\n    ports:\n      - 8443:8443\n    environment:\n      DOMAIN: drill4j.example.com\n      SSL_PORT: 8443\n      TARGET_HOST: admin-ui\n      TARGET_PORT: 8080\n    networks:\n      drill4j:\n        ipv4_address: 10.250.0.2\n\n  drill-admin:\n    image: drill4j/admin:0.7.0\n    environment:\n      - TEST2CODE_PLUGIN_VERSION=0.7.0\n      - LOG_LEVEL=INFO\n    ports:\n      - 8090:8090\n    networks:\n      drill4j:\n        ipv4_address: 10.250.0.3\n\n  admin-ui:\n    image: drill4j/admin-ui:0.7.1\n    ports:\n      - 8091:8080\n    networks:\n      drill4j:\n        ipv4_address: 10.250.0.4\n\nnetworks:\n  drill4j:\n    driver: bridge\n    ipam:\n     config:\n       - subnet: 10.250.0.0/16\n         gateway: 10.250.0.1\n")),(0,a.kt)("p",null,"Drill Admin is available on ",(0,a.kt)("strong",{parentName:"p"},"https://drillAdminHost:8443")),(0,a.kt)(o.r0,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,a.kt)("p",null,"Accept self signed certificate")))}p.isMDXComponent=!0}}]);