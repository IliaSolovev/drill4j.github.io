(self.webpackChunkdrill4j_github_io=self.webpackChunkdrill4j_github_io||[]).push([[327],{8424:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return r},toc:function(){return p},default:function(){return m}});var a=t(2122),i=t(9756),s=(t(7294),t(3905)),o=t(1322),l={id:"js-agent-admin-be-communication",title:"JS Agent / Admin Backend Communication"},r={unversionedId:"for-development/java-script-agent/js-agent-admin-be-communication",id:"for-development/java-script-agent/js-agent-admin-be-communication",isDocsHomePage:!1,title:"JS Agent / Admin Backend Communication",description:"Messages",source:"@site/docs/for-development/java-script-agent/js-agent-admin-be-communication.mdx",sourceDirName:"for-development/java-script-agent",slug:"/for-development/java-script-agent/js-agent-admin-be-communication",permalink:"/drill4j.github.io/docs/for-development/java-script-agent/js-agent-admin-be-communication",version:"current",frontMatter:{id:"js-agent-admin-be-communication",title:"JS Agent / Admin Backend Communication"},sidebar:"docs",previous:{title:"Switch Scope Event Flow",permalink:"/drill4j.github.io/docs/for-development/java-agent/java-switch-scope-event-flow"},next:{title:"Builds Summary",permalink:"/drill4j.github.io/docs/api/builds-summary"}},p=[{value:"Messages",id:"messages",children:[{value:"Admin",id:"admin",children:[]},{value:"Plugin",id:"plugin",children:[]}]},{value:"Agent Registration &amp; Test2Code Plugin Initialization",id:"agent-registration--test2code-plugin-initialization",children:[]},{value:"Start Session",id:"start-session",children:[]},{value:"Send Coverage",id:"send-coverage",children:[]},{value:"Stop/Cancel Session",id:"stopcancel-session",children:[]},{value:"Init Active Scope",id:"init-active-scope",children:[]}],d={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"messages"},"Messages"),(0,s.kt)("h3",{id:"admin"},"Admin"),(0,s.kt)("p",null,"Admin backend sends messages in the following format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "MESSAGE",\n  "destination": "/agent/change-header-name",\n  "text": ""\n}\n')),(0,s.kt)(o.r0,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,s.kt)(o.Ct,{mdxType:"Badge"},'"text"')," field is stringified."),(0,s.kt)("p",null,"Admin backend expects to get a response ",(0,s.kt)("strong",{parentName:"p"},"for each message"),', called "delivery confirmation" in the following format:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "MESSAGE_DELIVERED",\n  "destination": "/agent/change-header-name"\n}\n')),(0,s.kt)("p",null,"Some messages aren't used in JS agent initialization, so no actions are performed on JS agent side, ",(0,s.kt)("strong",{parentName:"p"},"but delivery confirmation is still sent"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)(o.Ct,{mdxType:"Badge"},"/agent/change-header-name")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)(o.Ct,{mdxType:"Badge"},"/agent/set-packages-prefixes")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)(o.Ct,{mdxType:"Badge"},"/agent/load-classes-data"))),(0,s.kt)("h3",{id:"plugin"},"Plugin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "PLUGIN_DATA",\n  "text": {\n    "pluginId": "test2code",\n    "drillMessage": {\n      "content": "" // set to stringified plugin message\n    }\n  }\n}\n')),(0,s.kt)(o.r0,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,s.kt)(o.Ct,{mdxType:"Badge"},'"content"')," field is stringified."),(0,s.kt)("h2",{id:"agent-registration--test2code-plugin-initialization"},"Agent Registration & Test2Code Plugin Initialization"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Open WS connection to Admin backend API on the ",(0,s.kt)(o.Ct,{mdxType:"Badge"},"/agent/attach")," route (e.g. ",(0,s.kt)(o.Ct,{mdxType:"Badge"},"http://localhost:8090/agent/attach"),") with the following headers specified:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "AgentConfig": {\n    "id": "sample-agent-id",\n    "serviceGroupId": "sample-group-id",\n    "buildVersion": "0.0.1",\n    "agentType": "NODEJS",\n    "instanceId": ""\n  },\n  "needSync": true // is set to "true" during the initial connect ("false" if the agent establishes connection after a restart)\n}\n')))),(0,s.kt)(o.r0,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,s.kt)("p",null,"At that point, agent should appear in Admin Panel. Register it, make sure to enable Test2Code plugin at step 3.")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Wait for the following message:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "MESSAGE",\n  "destination": "/agent/load",\n  "text": {\n    "meta": {\n      "id": "test2code",\n      "name": "Test2Code",\n      "description": "Test2Code plugin minimizes your regression suite via Test Impact Analytics by suggesting only affected subset of tests to run, and highlight  untested areas via Test Gap Analysis, providing evidence of how changes are tested and which areas and not tested at all.",\n      "type": "Custom",\n      "family": "INSTRUMENTATION",\n      "enabled": true,\n      "config": "{\\"message\\": \\"hello from default plugin config... This is \'plugin_config.json file\\"}",\n      "checkSum": "da39a3ee5e6b4b0d3255bfef95601890afd80709",\n      "isNative": false\n    },\n    "data": []\n  }\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In response to ",(0,s.kt)("strong",{parentName:"p"},"that particular message")," JS agent sends 2 delivery confirmations:"),(0,s.kt)("p",{parentName:"li"},"send that first:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "MESSAGE_DELIVERED",\n  "destination": "/agent/plugin/test2code/loaded"\n}\n')),(0,s.kt)("p",{parentName:"li"},"send delivery confirmation for the original destination:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "MESSAGE_DELIVERED",\n  "destination": "/agent/load"\n}\n')))),(0,s.kt)(o.r0,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,s.kt)("p",null,'"AST" data (metadata on packages, classes, methods) are sent during the next steps.')),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Wait for the following message:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "destination": "/plugin/togglePlugin",\n  "data": {\n    "text": {\n      "pluginId": "test2code"\n    }\n  }\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Send containing ",(0,s.kt)("strong",{parentName:"p"},'"AST"')," data:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // this is a plugin message, wrap it into plugin message format (stringify, set result to "content" field, see "Messages/Plugin" above)\n  "type": "INIT_DATA_PART",\n  "astEntities": [\n    // each array entry represents a class\n    {\n      "path": "js/directives", // admin groups classes into packages based on that value\n      "name": "TodoBlur.ts",\n      "methods": [\n        {\n          "name": "GLOBAL",\n          "params": [],\n          "returnType": "void",\n          "probes": [3, 4, 17],\n          "count": 3\n        },\n        {\n          "name": "todoBlur",\n          "params": [],\n          "returnType": "void",\n          "probes": [9, 10, 15, 16],\n          "count": 4,\n          "checksum": "9381a3cce26fc23fbbe4e5650486ee0d5454af9792b51cfdfe4361436d2ecfc5"\n        }\n      ]\n    },\n    {\n      /* next class entry */\n    }\n  ]\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Send delivery confirmation for ",(0,s.kt)("inlineCode",{parentName:"p"},"/plugin/togglePlugin"),":"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "MESSAGE_DELIVERED",\n  "destination": "/plugin/togglePlugin"\n}\n')))),(0,s.kt)(o.r0,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,s.kt)("p",null,"At that point, test2code plugin dashboard should be available in the Admin Panel. Check that methods table reflects actual packages, classes and methods.")),(0,s.kt)("h2",{id:"start-session"},"Start Session"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Wait for the ",(0,s.kt)("strong",{parentName:"p"},'"Start agent session"')," message:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "MESSAGE",\n  "destination": "/plugin/action",\n  "text": {\n    "id": "test2code",\n    "message": {\n      "type": "START_AGENT_SESSION", // "STOP" in case of stop session action\n      "payload": {\n        "sessionId": "4867e838-51ca-4999-83c6-f68a7c7f279a",\n        "testType": "MANUAL",\n        "testName": "add1",\n        "isRealtime": true,\n        "isGlobal": false\n      }\n    }\n  }\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Send ",(0,s.kt)("strong",{parentName:"p"},'"Session started"')," message:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// this is a plugin message, wrap it into plugin message format (stringify, set result to "content" field, see "Messages/Plugin" above)\n{\n  "type": "SESSION_STARTED",\n  "sessionId": "4867e838-51ca-4999-83c6-f68a7c7f279a",\n  "testType": "MANUAL",\n  "ts": "1616679452533"\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Send delivery confirmation:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "MESSAGE_DELIVERED",\n  "destination": "/plugin/action"\n}\n')))),(0,s.kt)("h2",{id:"send-coverage"},"Send Coverage"),(0,s.kt)(o.r0,{className:"space-y-2",mdxType:"AdditionalInformation"},(0,s.kt)("p",null,"That might be better to implement it differently for the .NET agent, we've got to discuss that.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Send coverage data part message:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// this is a plugin message, wrap it into plugin message format (stringify, set result to "content" field, see "Messages/Plugin" above)\n{\n  "type": "COVERAGE_DATA_PART",\n  "sessionId": "4867e838-51ca-4999-83c6-f68a7c7f279a",\n  "data": [\n    {\n      "className": "js/controllers/TodoCtrl.ts",\n      // concatenated array of all class probes (from all methods)\n      "probes": [true, true, true, false, false, false, true, false, false, true],\n      "testName": "Add todo item"\n    },\n    {\n      "className": "js/directives/TodoBlur.ts",\n      // concatenated array of all class probes (from all methods)\n      "probes": [false, false, true, true, true, false, false, false, true, false, false, true],\n      "testName": "Add todo item"\n    },\n    {\n      /*next class coverage entry*/\n    }\n  ]\n}\n')))),(0,s.kt)("h2",{id:"stopcancel-session"},"Stop/Cancel Session"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Wait for the ",(0,s.kt)("strong",{parentName:"p"},'"Stop agent session"')," message:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "MESSAGE",\n  "destination": "/plugin/action",\n  "text": {\n    "id": "test2code",\n    "message": {\n      "type": "STOP", // "CANCEL"\n      "payload": {\n        "sessionId": "4867e838-51ca-4999-83c6-f68a7c7f279a"\n      }\n    }\n  }\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Send ",(0,s.kt)("strong",{parentName:"p"},'"Session finished"')," message:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// this is a plugin message, wrap it into plugin message format (stringify, set result to "content" field, see "Messages/Plugin" above)\n{\n  "type": "SESSION_FINISHED", // "SESSION_CANCELLED"\n  "sessionId": "4867e838-51ca-4999-83c6-f68a7c7f279a",\n  "ts": "1616679452533"\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Send delivery confirmation:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "MESSAGE_DELIVERED",\n  "destination": "/plugin/action"\n}\n')))),(0,s.kt)("h2",{id:"init-active-scope"},"Init Active Scope"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Wait for the ",(0,s.kt)("strong",{parentName:"p"},'"Init active scope"')," message:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "MESSAGE",\n  "destination": "/plugin/action",\n  "message": {\n    "id": "test2code",\n    "message": {\n      "type": "INIT_ACTIVE_SCOPE",\n      "payload": {\n        "id": "d525c728-eccb-4eaf-b0a9-be4a2281cafd",\n        "name": "New Scope 2",\n        "prevId": "97bfc5dc-d09d-4240-bf35-dbd999103818"\n      }\n    }\n  }\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Send the ",(0,s.kt)("strong",{parentName:"p"},'"Scope initialized"')," message:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'// this is a plugin message, wrap it into plugin message format (stringify, set result to "content" field, see "Messages/Plugin" above)\n{\n  "type": "SCOPE_INITIALIZED",\n  "id": "d525c728-eccb-4eaf-b0a9-be4a2281cafd",\n  "name": "New Scope 2",\n  "prevId": "97bfc5dc-d09d-4240-bf35-dbd999103818",\n  "ts": "1616680302751"\n}\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Send delivery confirmation:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "MESSAGE_DELIVERED",\n  "destination": "/plugin/action"\n}\n')))))}m.isMDXComponent=!0}}]);