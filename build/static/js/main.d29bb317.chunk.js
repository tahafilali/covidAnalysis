(this["webpackJsonp@ibm-watson/speech-to-text-code-pattern"]=this["webpackJsonp@ibm-watson/speech-to-text-code-pattern"]||[]).push([[0],{101:function(e,a,t){e.exports=t(177)},106:function(e,a,t){},115:function(e,a){},117:function(e,a){},125:function(e,a){},127:function(e,a){},161:function(e,a){},163:function(e,a){},168:function(e,a){},170:function(e,a){},177:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(86),s=t.n(o),i=(t(106),t(185)),l=t(181),d=t(92),u=t.n(d),c=t(93),p=t.n(c),m=t(96),f=t.n(m),b=t(95),g=t.n(b),h=t(94),_=t.n(h),w=t(180),v=function(e){var a=e.description,t=e.links,r=e.title;return n.a.createElement(w.a,{className:"header"},n.a.createElement("div",{className:"title-container"},n.a.createElement("h2",{className:"header-title"},r),n.a.createElement("p",null,a)),n.a.createElement("div",{className:"link-container"},n.a.createElement("div",{className:"link-wrapper"},t.map((function(e){return e})))))};v.defaultProps={description:"",links:[],title:""};var y=v,k=t(4),S=t(5),E=t.n(S),x=t(10),N=t(8),C=t(51),P=t.n(C),R=t(87),B=t.n(R),A=t(182),O=t(186),M=t(183),j=t(184),T=t(189),I=t(88),D=t.n(I),U=t(30),z=function(e){var a=e.isRecording,t=e.isSamplePlaying,o=e.isUploadPlaying,s=e.keywordText,i=e.modelName,d=e.onError,u=e.onStartPlayingFileUpload,c=e.onStopPlayingFileUpload,p=e.onStartPlayingSample,m=e.onStopPlayingSample,f=e.onStartRecording,b=e.onStopRecording,g=e.useSpeakerLabels,h=Object(r.useState)([]),_=Object(N.a)(h,2),w=_[0],v=_[1];Object(r.useEffect)((function(){var e=[];s.length>0&&(e=s.split(",").map((function(e){return e.trim()}))),v(e)}),[s]);var y=U.find((function(e){return e.name===i})),S=y?y.filename:null,C=function(){var e=Object(x.a)(E.a.mark((function e(){var a,t,r,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()("/api/auth");case 2:return a=e.sent,e.next=5,a.json();case 5:if(t=e.sent,a.ok){e.next=9;break}return d(t),e.abrupt("return",{error:t});case 9:return r={},n=w.map((function(e){return e.toLowerCase()})),r=Object(k.a)(Object(k.a)({},r),{},{url:t.url||void 0,accessToken:t.accessToken,format:!0,keywords:w.length>0?n:void 0,keywordsThreshold:w.length>0?.01:void 0,model:i,objectMode:!0,play:!0,realtime:!0,resultsBySpeaker:g,speakerlessInterim:!0,timestamps:!0}),e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(x.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return a=e.sent,e.abrupt("return",Object(k.a)(Object(k.a)({},a),{},{file:"audio/".concat(S)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(x.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return a=e.sent,e.abrupt("return",Object(k.a)(Object(k.a)({},a),{},{resultsBySpeaker:!1}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(x.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return t=e.sent,e.abrupt("return",Object(k.a)(Object(k.a)({},t),{},{file:a,resultsBySpeaker:!1}));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"submit-container"},t?n.a.createElement(l.a,{className:"submit-button",kind:"tertiary",onClick:m},"Stop audio sample"):n.a.createElement(l.a,{className:"submit-button",disabled:!i,kind:"tertiary",onClick:Object(x.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:(a=e.sent).error||p(a);case 4:case"end":return e.stop()}}),e)})))},"Play audio sample"),a?n.a.createElement(l.a,{className:"submit-button",kind:"tertiary",onClick:b},"Stop recording"):n.a.createElement(l.a,{className:"submit-button",disabled:!i,kind:"tertiary",onClick:Object(x.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:(a=e.sent).error||f(a);case 4:case"end":return e.stop()}}),e)})))},"Record your own"),o?n.a.createElement(l.a,{className:"submit-button",kind:"tertiary",onClick:c},"Stop playing"):n.a.createElement(T.a,{accept:["audio/wav","audio/mpeg","audio/flac","audio/opus"],buttonKind:"tertiary",className:"submit-button",disabled:!i,disableLabelChanges:!0,labelText:"Upload file",onChange:function(){var e=Object(x.a)(E.a.mark((function e(a){var t,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.currentTarget.files[0],e.next=3,B(t);case 3:(r=e.sent).error||u(r);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}))};z.defaultProps={isRecording:!1,isSamplePlaying:!1,isUploadPlaying:!1,keywordText:"",modelName:null,onError:function(){},onStartPlayingFileUpload:function(){},onStopPlayingFileUpload:function(){},onStartPlayingSample:function(){},onStopPlayingSample:function(){},onStartRecording:function(){},onStopRecording:function(){},useSpeakerLabels:!1};var W=z,F=function(e){var a=e.isRecording,t=e.isSamplePlaying,o=e.isUploadPlaying,s=e.onError,i=e.onSelectNewModel,l=e.onStartPlayingFileUpload,d=e.onStopPlayingFileUpload,u=e.onStartPlayingSample,c=e.onStopPlayingSample,p=e.onStartRecording,m=e.onStopRecording,f=U.map((function(e){return{id:e.name,label:e.description,supportsSpeakerLabels:e.supported_features.speaker_labels}})),b=Object(r.useState)(f[0]),g=Object(N.a)(b,2),h=g[0],_=g[1],v=Object(r.useState)(U[0].keywords),y=Object(N.a)(v,2),k=y[0],S=y[1],E=Object(r.useState)(!1),x=Object(N.a)(E,2),C=x[0],P=x[1];return n.a.createElement(w.a,{className:"control-container"},n.a.createElement("h3",{className:"container-title"},"Input"),n.a.createElement(A.a,{legendText:"Language model"},n.a.createElement(O.a,{id:"language-model-dropdown",label:"Select a language model",onChange:function(e){_(e.selectedItem);var a=U.find((function(a){return a.name===e.selectedItem.id})).keywords;S(a),C&&!e.selectedItem.supportsSpeakerLabels&&P(!1),i()},items:f,selectedItem:h&&h.label,defaultText:"Select a language model",ariaLabel:"Language selection dropdown",light:!0})),n.a.createElement(A.a,{legendText:"Keywords to spot"},n.a.createElement(M.a,{id:"custom-keyword-input",labelText:"Custom language keyword input",placeholder:"Enter custom language keywords",hideLabel:!0,invalidText:"Invalid keywords provided",value:k,onChange:function(e){S(e.target.value)},light:!0})),n.a.createElement(A.a,{legendText:"Detect multiple speakers (only supported with sample audio)"},n.a.createElement(j.a,{id:"speaker-label-toggle","aria-label":"Speaker label toggle",disabled:!h||!h.supportsSpeakerLabels,toggled:C,onToggle:function(){P(!C)}})),n.a.createElement(W,{isRecording:a,isSamplePlaying:t,isUploadPlaying:o,keywordText:k,modelName:h&&h.id,onError:s,onStartPlayingFileUpload:l,onStopPlayingFileUpload:d,onStartPlayingSample:u,onStopPlayingSample:c,onStartRecording:p,onStopRecording:m,useSpeakerLabels:C}))};F.defaultProps={isRecording:!1,isSamplePlaying:!1,isUploadPlaying:!1,onError:function(){},onSelectNewModel:function(){},onStartPlayingFileUpload:function(){},onStopPlayingFileUpload:function(){},onStartPlayingSample:function(){},onStopPlayingSample:function(){},onStartRecording:function(){},onStopRecording:function(){}};var L=F,G=t(89),K=t(90),J=t(43),X=t(98),q=t(97),Y=function(e){Object(X.a)(t,e);var a=Object(q.a)(t);function t(e){var r;return Object(G.a)(this,t),(r=a.call(this,e)).audioWaveCanvasRef=n.a.createRef(),r.audioWaveCanvasCtx=null,r.animationFrameId=null,r.draw=r.draw.bind(Object(J.a)(r)),r.state={startingTimestamp:0,microphoneData:new Uint8Array(1024)},r}return Object(K.a)(t,[{key:"componentDidMount",value:function(){this.audioWaveCanvasCtx=this.audioWaveCanvasRef.current.getContext("2d"),this.audioWaveCanvasCtx.lineCap="round",this.initializeCanvasDimensions()}},{key:"componentDidUpdate",value:function(e){Object(N.a)(e.data,1)[0]!==Object(N.a)(this.props.data,1)[0]&&this.drawInitialAudioWave(),!1===e.isTranscribing&&!0===this.props.isTranscribing?(this.setStartingTimestamp(),this.draw()):!0===e.isTranscribing&&!1===this.props.isTranscribing&&this.stopDrawing()}},{key:"setStartingTimestamp",value:function(){this.setState({startingTimestamp:Date.now()})}},{key:"initializeCanvasDimensions",value:function(){var e=this.audioWaveCanvasRef.current,a=this.props.audioWaveContainerRef.current;e.width=a.clientWidth,e.height=100}},{key:"drawInitialAudioWave",value:function(){this.resetCanvasForNewFrame(),this.drawEmptyDataPoints()}},{key:"drawEmptyDataPoints",value:function(){var e=this;this.props.data.forEach((function(a,t){e.audioWaveCanvasCtx.beginPath(),e.audioWaveCanvasCtx.fillStyle="rgba(0, 98, 255, 0.5)",e.audioWaveCanvasCtx.fillRect(2*t,50,1,50*a),e.audioWaveCanvasCtx.fillRect(2*t,50,1,-50*a),e.audioWaveCanvasCtx.stroke(),e.audioWaveCanvasCtx.closePath()}))}},{key:"drawMicrophoneDataPoints",value:function(){var e=this;this.props.audioAnalyzer.getByteFrequencyData(this.state.microphoneData);var a=this.state.microphoneData;[].slice.call(a).map((function(e){return e/255})).forEach((function(a,t){e.audioWaveCanvasCtx.beginPath(),e.audioWaveCanvasCtx.fillStyle="rgba(0, 98, 255, 1)",e.audioWaveCanvasCtx.fillRect(2*t,50,1,50*a),e.audioWaveCanvasCtx.fillRect(2*t,50,1,-50*a),e.audioWaveCanvasCtx.stroke(),e.audioWaveCanvasCtx.closePath()}))}},{key:"drawAudioDataPoints",value:function(){var e=this,a=this.props,t=a.data,r=a.duration,n=(Date.now()-this.state.startingTimestamp)/r,o=t.length*n,s=Math.floor(o),i=o-s;i>1&&(i=1),i<.5&&(i=.5),t.forEach((function(a,t){e.audioWaveCanvasCtx.beginPath();var r="rgba(0, 98, 255, 1)";t>s&&(r="rgba(0, 98, 255, 0.5)"),t-1===s&&(r="rgba(0, 98, 255, ".concat(i.toFixed(2),")")),e.audioWaveCanvasCtx.fillStyle=r,e.audioWaveCanvasCtx.fillRect(2*t,50,1,50*a),e.audioWaveCanvasCtx.fillRect(2*t,50,1,-50*a),e.audioWaveCanvasCtx.stroke(),e.audioWaveCanvasCtx.closePath()}))}},{key:"draw",value:function(){this.resetCanvasForNewFrame(),this.props.audioSource&&"microphone"===this.props.audioSource?this.drawMicrophoneDataPoints():this.drawAudioDataPoints(),this.animationFrameId=requestAnimationFrame(this.draw)}},{key:"resetCanvasForNewFrame",value:function(){var e=this.audioWaveCanvasRef.current;this.audioWaveCanvasCtx.clearRect(0,0,e.width,e.height)}},{key:"stopDrawing",value:function(){this.animationFrameId&&cancelAnimationFrame(this.animationFrameId)}},{key:"render",value:function(){return n.a.createElement("div",{ref:this.props.audioWaveContainerRef,className:"audiowave"},n.a.createElement("canvas",{ref:this.audioWaveCanvasRef}))}}]),t}(n.a.Component);Y.defaultProps={audioSource:null,audioAnalyzer:null};var H=Y,V=t(187),Z=function(e){var a=e.confidence,t=e.startTime,r=e.endTime;return n.a.createElement("div",{className:"keyword-tooltip"},n.a.createElement("p",null,"Confidence: ",a),n.a.createElement("p",null,t,"s - ",r,"s"))},Q=t(36),$=function(e,a,t){var r=[];if(a.length>0){var n=function(e){var a=[];e.forEach((function(e){a=[].concat(Object(Q.a)(a),Object(Q.a)(Object.keys(e)))}));var t=a.map((function(e,t){return t!==a.length-1?"".concat(e,"|"):e})).reduce((function(e,a){return e+a}),"");return new RegExp("(".concat(t,")(?!')"),"gi")}(a);r=e.split(n)}if(0===r.length)return[{text:e,type:"normal"}];var o={};return r.map((function(e,r){var n=e.toLowerCase();if(r%2===0)return{text:e,type:"normal"};var s=a[t]&&a[t][n],i=0;o[n]?(i=o[n],o[n]+=1):o[n]=1;var l=s&&s[i];return l?{text:e,type:"keyword",startTime:l.start_time,endTime:l.end_time,confidence:l.confidence}:{}}))},ee=function(e){var a=e.keywordInfo,t=e.transcriptArray;return n.a.createElement("div",{className:"transcript-box"},t.map((function(e,t){var r=e.speaker,o=e.text,s=$(o,a,t);return n.a.createElement("div",{key:"transcript-".concat(t)},null!==r&&n.a.createElement("span",{className:"speaker-label--".concat(r)},"Speaker ".concat(r,": ")),s.map((function(e,a){return e?"normal"===e.type?n.a.createElement("span",{key:"transcript-text-".concat(t,"-").concat(a)},"".concat(e.text)):"keyword"===e.type?n.a.createElement(V.a,{align:"center",direction:"top",key:"transcript-keyword-".concat(t,"-").concat(a),tooltipText:n.a.createElement(Z,{confidence:e.confidence,startTime:e.startTime,endTime:e.endTime}),triggerClassName:"keyword-info-trigger"},e.text):null:null})))})))};ee.defaultProps={keywordInfo:[],transcriptArray:[]};var ae=ee,te=function(e){var a=e.audioAnalyzer,t=e.audioDataArray,r=e.audioDuration,o=e.audioSource,s=e.audioWaveContainerRef,i=e.isTranscribing,l=e.keywordInfo,d=e.transcriptArray;return n.a.createElement(w.a,{className:"output-container"},n.a.createElement("h3",{className:"container-title"},"Output"),n.a.createElement(A.a,{legendText:"Audio"},n.a.createElement(H,{audioWaveContainerRef:s,data:t,duration:r,isTranscribing:i,audioSource:o,audioAnalyzer:a})),n.a.createElement(A.a,{legendText:"Transcript"},n.a.createElement(ae,{keywordInfo:l,transcriptArray:d})))};te.defaultProps={audioDataArray:[],audioDuration:0,audioSource:"",isTranscribing:!1,keywordInfo:[],transcriptArray:[]};var re=te,ne=t(188),oe=function(e){var a=e.caption,t=e.children,o=e.className,s=e.hideAfterFirstDisplay,i=e.hideCloseButton,l=e.iconDescription,d=e.kind,u=e.lowContrast,c=e.onCloseButtonClick,p=e.role,m=e.subtitle,f=e.timeout,b=e.title,g=Object(r.useState)(),h=Object(N.a)(g,2),_=h[0],w=h[1],v=Object(r.useState)(!1),y=Object(N.a)(v,2),k=y[0],S=y[1];return Object(r.useEffect)((function(){w(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))}),[]),Object(r.useEffect)((function(){var e=document.querySelector(".custom-toast-".concat(_));e&&(e.className+="enter")}),[_]),Object(r.useEffect)((function(){s&&void 0!==typeof window&&void 0!==typeof window.localStorage&&"true"===window.localStorage.getItem("notificationHasBeenSeen")&&S(!0)}),[s]),k?null:n.a.createElement(ne.a,{caption:a,className:"custom-toast-".concat(_," ").concat(o),hideCloseButton:i,iconDescription:l,kind:d,lowContrast:u,onCloseButtonClick:function(){s&&void 0!==typeof window&&void 0!==typeof window.localStorage&&window.localStorage.setItem("notificationHasBeenSeen","true"),c()},role:p,subtitle:m,timeout:f,title:b},t)};oe.defaultProps={caption:"",children:null,className:"",hideAfterFirstDisplay:!0,hideCloseButton:!1,iconDescription:"closes notification",kind:"error",lowContrast:!1,onCloseButtonClick:function(){},role:"alert",subtitle:"",timeout:0,title:""};var se=oe,ie="SET_AUDIO_ANALYZER",le="SET_AUDIO_CONTEXT",de="SET_AUDIO_SOURCE",ue="SET_AUDIO_STREAM",ce="SET_AUDIO_VISUALIZATION_DATA",pe="SET_ERROR",me="SET_SPEAKER_LABELS",fe="SET_IS_RECORDING",be="SET_IS_SAMPLE_PLAYING",ge="SET_IS_TRANSCRIBING",he="SET_IS_UPLOAD_PLAYING",_e="UPDATE_RESULTS",we={audioAnalyzer:{},audioContext:null,audioDataArray:[],audioDurationInMs:0,audioSource:"",audioStream:null,error:null,isRecording:!1,isSamplePlaying:!1,isTranscribing:!1,isUploadPlaying:!1,keywordInfo:[],speakerLabels:[],transcript:[]},ve=function(e,a){switch(a.type){case"SET_AUDIO_ANALYZER":return Object(k.a)(Object(k.a)({},e),{},{audioAnalyzer:a.audioAnalyzer});case"SET_AUDIO_CONTEXT":return Object(k.a)(Object(k.a)({},e),{},{audioContext:a.audioContext});case"SET_AUDIO_SOURCE":return Object(k.a)(Object(k.a)({},e),{},{audioSource:a.audioSource});case"SET_AUDIO_STREAM":return Object(k.a)(Object(k.a)({},e),{},{audioStream:a.audioStream});case"SET_AUDIO_VISUALIZATION_DATA":return Object(k.a)(Object(k.a)({},e),{},{audioDataArray:a.audioDataArray,audioDurationInMs:a.audioDurationInMs});case"SET_ERROR":return Object(k.a)(Object(k.a)({},e),{},{error:a.error});case"SET_IS_RECORDING":return Object(k.a)(Object(k.a)({},e),{},{isRecording:a.isRecording});case"SET_IS_SAMPLE_PLAYING":return Object(k.a)(Object(k.a)({},e),{},{isSamplePlaying:a.isSamplePlaying});case"SET_IS_TRANSCRIBING":return Object(k.a)(Object(k.a)({},e),{},{isTranscribing:a.isTranscribing});case"SET_IS_UPLOAD_PLAYING":return Object(k.a)(Object(k.a)({},e),{},{isUploadPlaying:a.isUploadPlaying});case"SET_SPEAKER_LABELS":return Object(k.a)(Object(k.a)({},e),{},{speakerLabels:a.speakerLabels});case"UPDATE_RESULTS":var t=Object(Q.a)(e.transcript);return 0===a.resultIndex?t=a.transcript:t[a.resultIndex]=a.transcript[0],Object(k.a)(Object(k.a)({},e),{},{keywordInfo:a.keywordInfo,transcript:t});default:throw new Error}},ye=2,ke=function(e){var a=new FileReader;return new Promise((function(t,r){a.onload=function(){var e=a.result;t(e)},a.onerror=function(){a.abort(),r(new Error("failed to process file"))},a.readAsArrayBuffer(e)}))},Se=function(){var e=Object(x.a)(E.a.mark((function e(a,t,r){var n,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke(a);case 2:return n=e.sent,o=new Uint8Array(n.slice(0)),e.abrupt("return",new Promise((function(e,a){t.decodeAudioData(n,(function(a){for(var t=a.duration,n=r-2*ye,s=Math.floor(n/2),i=o.length/s,l=[],d=1;d<s;d+=1){var u=d-1;u<0&&(u=0),l.push(o.slice(u*i,d*i))}var c=l.map((function(e){return e.reduce((function(e,a){return e+a}))/(255*i)}));e({duration:t,reducedFloatArray:c})}),(function(){a(new Error("failed to chunk audio"))}))})));case 5:case"end":return e.stop()}}),e)})));return function(a,t,r){return e.apply(this,arguments)}}(),Ee=function(e,a){return{title:e,description:a}},xe=function(){var e=Object(r.useReducer)(ve,we),a=Object(N.a)(e,2),t=a[0],o=a[1],s=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=new(window.AudioContext||window.webkitAudioContext),a=e.createAnalyser();o({audioAnalyzer:a,type:ie}),o({audioContext:e,type:le})}),[]);var i=function(e){if(e.speaker_labels)o({speakerLabels:e.speaker_labels,type:me});else{var a=function(e){var a=e.results,t=e.result_index,r=[],n=[],o=!1;return a.forEach((function(e){var a=e.final,t=null,s=null,i=null;a?(t=e.alternatives,s=e.speaker,i=e.keywords_result):(t=e.alternatives,s=e.speaker);var l=t,d=Object(N.a)(l,1)[0].transcript;void 0===s&&(s=null),n.push({final:a,speaker:s,text:d}),o=a,i&&r.push(i)})),{transcript:n,keywordInfo:r,resultIndex:t,final:o}}(e),t=a.transcript,r=a.keywordInfo,n=a.resultIndex;o({keywordInfo:r,resultIndex:n,transcript:t,type:_e})}},l=function(){t.audioStream&&t.audioStream.stop(),o({isTranscribing:!1,type:ge}),o({isUploadPlaying:!1,type:he}),o({isSamplePlaying:!1,type:be}),o({isRecording:!1,type:fe})},d=function(){var e=Object(x.a)(E.a.mark((function e(a){var r,n,i,l,d,u,c,p;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null,s&&s.current&&s.current.clientWidth&&(r=s.current.clientWidth),n=r||300,i=a instanceof File,e.prev=4,l=null,!i){e.next=10;break}l=a,e.next=16;break;case 10:return e.next=12,fetch(a);case 12:return d=e.sent,e.next=15,d.blob();case 15:l=e.sent;case 16:return e.next=18,Se(l,t.audioContext,n);case 18:u=e.sent,c=u.reducedFloatArray,p=u.duration,o({audioDataArray:c,audioDurationInMs:1e3*p,type:ce}),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(4),o({error:Ee("File upload error","There was a problem trying to read the file."),type:pe});case 27:case"end":return e.stop()}}),e,null,[[4,24]])})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(x.a)(E.a.mark((function e(a){var r,n,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null,e.prev=1,e.next=4,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 4:r=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),o({error:Ee("No microphone detected","Cannot transcribe from microphone."),type:pe});case 10:return n=B()(Object(k.a)(Object(k.a)({},a),{},{mediaStream:r,keepMic:!0})),r&&((s=t.audioAnalyzer).fttSize=2048,o({audioAnalyzer:s,type:ie}),t.audioContext.createMediaStreamSource(r).connect(t.audioAnalyzer)),e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a){return e.apply(this,arguments)}}(),c=function(e){e.on("data",(function(e){i(e)})).on("end",(function(){l()})).on("error",(function(){o({error:Ee("Audio transcription error","There was an error trying to read the audio data. Please try again."),type:pe}),l()})),o({isTranscribing:!0,type:ge})},p=function(){t.audioStream&&(t.audioStream.stop(),t.audioStream.removeAllListeners(),t.audioStream.recognizeStream.removeAllListeners()),t.audioContext&&"suspended"===t.audioContext.state&&t.audioContext.resume()},m=function(){var e=Object(x.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(),t=P()(a),e.next=4,d(a.file);case 4:o({isUploadPlaying:!0,type:he}),o({isSamplePlaying:!1,type:be}),o({isRecording:!1,type:fe}),o({audioSource:"upload",type:de}),o({audioStream:t,type:ue}),c(t);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),f=function(){var e=Object(x.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(),t=P()(a),e.next=4,d(a.file);case 4:o({isSamplePlaying:!0,type:be}),o({isUploadPlaying:!1,type:he}),o({isRecording:!1,type:fe}),o({audioSource:"sample",type:de}),o({audioStream:t,type:ue}),c(t);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),b=function(){var e=Object(x.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(),e.next=3,u(a);case 3:t=e.sent,o({isRecording:!0,type:fe}),o({isSamplePlaying:!1,type:be}),o({isUploadPlaying:!1,type:he}),o({audioSource:"microphone",type:de}),o({audioStream:t,type:ue}),c(t);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"service-container"},n.a.createElement(se,{kind:"info",subtitle:"This system is for demonstration purposes only and is not intended to process Personal Data. No Personal Data is to be entered into this system as it may not have the necessary controls in place to meet the requirements of the General Data Protection Regulation (EU) 2016/679."}),t.error&&n.a.createElement(se,{kind:"error",title:t.error.title,subtitle:t.error.description,hideAfterFirstDisplay:!1,timeout:5e3,onCloseButtonClick:function(){return o({error:null,type:pe})}}),n.a.createElement(L,{isRecording:t.isRecording,isSamplePlaying:t.isSamplePlaying,isUploadPlaying:t.isUploadPlaying,onError:function(e){o({error:e,type:pe})},onSelectNewModel:function(){o({audioDataArray:[],audioDurationInMs:0,type:ce}),o({keywordInfo:[],resultIndex:0,transcript:[],type:_e})},onStartPlayingFileUpload:m,onStopPlayingFileUpload:function(){l(),o({isUploadPlaying:!1,type:he})},onStartPlayingSample:f,onStopPlayingSample:function(){l(),o({isSamplePlaying:!1,type:be})},onStartRecording:b,onStopRecording:function(){l(),o({isRecording:!1,type:fe})}}),n.a.createElement(re,{audioAnalyzer:t.audioAnalyzer,audioDataArray:t.audioDataArray,audioDuration:t.audioDurationInMs,audioSource:t.audioSource,audioWaveContainerRef:s,isTranscribing:t.isTranscribing,keywordInfo:t.keywordInfo,transcriptArray:t.transcript}))},Ne=function(e){Object(r.useEffect)((function(){var a=document.createElement("script");return a.src=e,a.async=!0,document.body.appendChild(a),function(){document.body.removeChild(a)}}),[e])},Ce=[n.a.createElement(i.a,{className:"link",key:"api-link",target:"_blank",rel:"noopener noreferrer",href:"https://cloud.ibm.com/apidocs/speech-to-text"},n.a.createElement("p",{className:"link-text"},"API reference"),n.a.createElement(u.a,{className:"link-icon"})),n.a.createElement(i.a,{className:"link",key:"docs-link",target:"_blank",rel:"noopener noreferrer",href:"https://cloud.ibm.com/docs/services/speech-to-text?topic=speech-to-text-gettingStarted"},n.a.createElement("p",{className:"link-text"},"Documentation"),n.a.createElement(p.a,{className:"link-icon"})),n.a.createElement(i.a,{className:"link",key:"github-link",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/IBM/speech-to-text-code-pattern"},n.a.createElement("p",{className:"link-text"},"GitHub"),n.a.createElement(_.a,{className:"link-icon"})),n.a.createElement(i.a,{className:"link getting-started",key:"ibm-cloud-link",target:"_blank",rel:"noopener noreferrer",href:"https://cloud.ibm.com/registration?target=%2Fcatalog%2Fservices%2Fspeech-to-text%3FhideTours%3Dtrue%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmca1%3D000000OF%26cm_mmca2%3D10000409&_ga=2.158846578.918027017.1572271296-1405764752.1539884377&_gac=1.250083700.1571850605.Cj0KCQjw3JXtBRC8ARIsAEBHg4m4g1PSkKQRoI6YUe4A-6ysul0ziiWU0DVbqlbWAQpq3721u-bxkd0aAkV3EALw_wcB&cm_mc_uid=83381689395615475202389&cm_mc_sid_50200000=82214471572470185115&cm_mc_sid_52640000=21949701572470185117&cm_mmc=Earned-_-Watson%20Core%20-%20Platform-_-WW_WW-_-intercom&cm_mmca1=000000OF&cm_mmca2=10000409"},n.a.createElement(l.a,{className:"link-button",kind:"tertiary",renderIcon:g.a},"Start for free on IBM Cloud"),n.a.createElement(f.a,{className:"link-icon"}))],Pe=function(){return Ne("https://cdn.jsdelivr.net/gh/watson-developer-cloud/watson-developer-cloud.github.io@master/analytics.js"),n.a.createElement("div",{className:"app-container"},n.a.createElement(y,{description:"IBM Watson Speech to Text is a cloud-native API that transforms voice into written text.",links:Ce,title:"Watson Speech to Text"}),n.a.createElement(xe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},30:function(e){e.exports=JSON.parse('[{"name":"en-US_BroadbandModel","language":"en-US","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/en-US_BroadbandModel","rate":16000,"filename":"en-US_Broadband-sample.wav","keywords":"IBM, admired, AI, transformations, cognitive","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"US English (16khz Broadband)"},{"name":"en-US_NarrowbandModel","language":"en-US","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/en-US_NarrowbandModel","rate":8000,"filename":"en-US_Narrowband-sample.wav","keywords":"course online, four hours, help","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"US English (8khz Narrowband)"},{"name":"en-US_ShortForm_NarrowbandModel","language":"en-US","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/en-US_ShortForm_NarrowbandModel","rate":8000,"filename":"en-US_ShortForm_Narrowband-sample.wav","keywords":"twenty thousand dollars, filled out, car","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"US English Short Form (8khz Narrowband)"},{"name":"fr-FR_BroadbandModel","language":"fr-FR","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/fr-FR_BroadbandModel","rate":16000,"filename":"fr-FR_Broadband-sample.wav","keywords":"dur\xe9e du travail, loisirs","supported_features":{"custom_language_model":true,"speaker_labels":false},"description":"French (16khz Broadband)"},{"name":"fr-FR_NarrowbandModel","language":"fr-FR","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/fr-FR_NarrowbandModel","rate":8000,"filename":"fr-FR_Narrowband-sample.wav","keywords":"dur\xe9e du travail, loisirs","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"French (8khz Narrowband)"},{"name":"pt-BR_BroadbandModel","language":"pt-BR","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/pt-BR_BroadbandModel","rate":16000,"filename":"pt-BR_Broadband-sample.wav","keywords":"sistema da ibm, setor banc\xe1rio, qualidade, necessidades dos clientes","supported_features":{"custom_language_model":true,"speaker_labels":false},"description":"Brazilian Portuguese (16khz Broadband)"},{"name":"pt-BR_NarrowbandModel","language":"pt-BR","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/pt-BR_NarrowbandModel","rate":8000,"filename":"pt-BR_Narrowband-sample.wav","keywords":"cozinha, inovadoras receitas, criatividade","supported_features":{"custom_language_model":true,"speaker_labels":false},"description":"Brazilian Portuguese (8khz Narrowband)"},{"name":"ja-JP_BroadbandModel","language":"ja-JP","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/ja-JP_BroadbandModel","rate":16000,"filename":"ja-JP_Broadband-sample.wav","keywords":"\u97f3\u58f0\u8a8d\u8b58, \u30c7\u30a3\u30fc\u30d7\u30e9\u30fc\u30cb\u30f3\u30b0, \u6280\u8853","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"Japanese (16khz Broadband)"},{"name":"ja-JP_NarrowbandModel","language":"ja-JP","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/ja-JP_NarrowbandModel","rate":8000,"filename":"ja-JP_Narrowband-sample.wav","keywords":"\u3054\u4f4f\u6240, \u3054\u672c\u4eba, \u751f\u5e74\u6708\u65e5","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"Japanese (8khz Narrowband)"},{"name":"zh-CN_BroadbandModel","language":"zh-CN","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/zh-CN_BroadbandModel","rate":16000,"filename":"zh-CN_Broadband-sample.wav","keywords":"\u6c83 \u68ee \u662f \u8ba4\u77e5 , \u5927 \u6570\u636e \u5206\u6790 \u80fd\u529b","supported_features":{"custom_language_model":false,"speaker_labels":false},"description":"Mandarin (16khz Broadband)"},{"name":"zh-CN_NarrowbandModel","language":"zh-CN","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/zh-CN_NarrowbandModel","rate":8000,"filename":"zh-CN_Narrowband-sample.wav","keywords":"\u516c\u53f8 \u7684 \u652f\u6301 , \u7406\u8d22 \u8ba1\u5212","supported_features":{"custom_language_model":false,"speaker_labels":false},"description":"Mandarin (8khz Narrowband)"},{"name":"ko-KR_BroadbandModel","language":"ko-KR","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/ko-KR_BroadbandModel","rate":16000,"filename":"ko-KR_Broadband-sample.wav","keywords":"\ub124 \uba85, \uc219\ubc15, \ud638\ud154, \uc2f1\uae00\ub8f8, \ub450\uac1c, \uc608\uc57d","supported_features":{"custom_language_model":true,"speaker_labels":false},"description":"Korean (16khz Broadband)"},{"name":"ko-KR_NarrowbandModel","language":"ko-KR","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/ko-KR_NarrowbandModel","rate":8000,"filename":"ko-KR_Narrowband-sample.wav","keywords":"\uc0dd\uba85\ubcf4\ud5d8\uc0ac, \uc0c1\ub2f4\uc6d0, \ubcf8\uc778 \ud655\uc778, \uc131\ud568, \uc0dd\ub144\uc6d4\uc77c, \ud734\ub300\ud3f0 \ubc88\ud638","supported_features":{"custom_language_model":true,"speaker_labels":false},"description":"Korean (8khz Narrowband)"},{"name":"es-ES_BroadbandModel","language":"es-ES","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/es-ES_BroadbandModel","rate":16000,"filename":"es-ES_Broadband-sample.wav","keywords":"Roberto, Pedro","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"Spanish (16khz Broadband)"},{"name":"es-ES_NarrowbandModel","language":"es-ES","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/es-ES_NarrowbandModel","rate":8000,"filename":"es-ES_Narrowband-sample.wav","keywords":"M\xe9xico, Grecia, diciembre","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"Spanish (8khz Narrowband)"},{"name":"ar-AR_BroadbandModel","language":"ar-AR","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/ar-AR_BroadbandModel","rate":16000,"filename":"ar-AR_Broadband-sample.wav","keywords":"\u0627\u0644\u0637\u0642\u0633 , \u0631\u064a\u0627\u062d \u0645\u0639\u062a\u062f\u0644\u0629","supported_features":{"custom_language_model":false,"speaker_labels":false},"description":"Modern Standard Arabic (16khz Broadband)"},{"name":"en-GB_BroadbandModel","language":"en-GB","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/en-GB_BroadbandModel","rate":16000,"filename":"en-GB_Broadband-sample.wav","keywords":"important industry, affordable travel, business","supported_features":{"custom_language_model":true,"speaker_labels":false},"description":"GB English (16khz Broadband)"},{"name":"en-GB_NarrowbandModel","language":"en-GB","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/en-GB_NarrowbandModel","rate":8000,"filename":"en-GB_Narrowband-sample.wav","keywords":"heavy rain, northwest, UK","supported_features":{"custom_language_model":true,"speaker_labels":false},"description":"GB English (8khz Narrowband)"},{"name":"de-DE_BroadbandModel","language":"de-DE","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/de-DE_BroadbandModel","rate":16000,"filename":"de-DE_Broadband-sample.wav","keywords":"diskussion, k\xfcnstlicher intelligenz, m\xf6glichkeiten, grundprinzipien","supported_features":{"custom_language_model":true,"speaker_labels":false},"description":"German (16khz Broadband)"},{"name":"de-DE_NarrowbandModel","language":"de-DE","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/de-DE_NarrowbandModel","rate":8000,"filename":"de-DE_Narrowband-sample.wav","keywords":"Augen, linden b\xe4umen, T\xfcrme von Wien","supported_features":{"custom_language_model":true,"speaker_labels":false},"description":"German (8khz Narrowband)"},{"name":"es-AR_BroadbandModel","language":"es-AR","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/es-AR_BroadbandModel","rate":16000,"filename":"es-ES_Broadband-sample.wav","keywords":"Roberto, Pedro","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"Argentinian Spanish (16khz Broadband)"},{"name":"es-AR_NarrowbandModel","language":"es-AR","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/es-AR_NarrowbandModel","rate":8000,"filename":"es-ES_Narrowband-sample.wav","keywords":"Roberto, Pedro","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"Argentinian Spanish (8khz Narrowband)"},{"name":"es-CL_BroadbandModel","language":"es-CL","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/es-CL_BroadbandModel","rate":16000,"filename":"es-ES_Broadband-sample.wav","keywords":"Roberto, Pedro","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"Chilean Spanish (16khz Broadband)"},{"name":"es-CL_NarrowbandModel","language":"es-CL","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/es-CL_NarrowbandModel","rate":8000,"filename":"es-ES_Narrowband-sample.wav","keywords":"Roberto, Pedro","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"Chilean Spanish (8khz Narrowband)"},{"name":"es-CO_BroadbandModel","language":"es-CO","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/es-CO_BroadbandModel","rate":16000,"filename":"es-ES_Broadband-sample.wav","keywords":"Roberto, Pedro","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"Colombian Spanish (16khz Broadband)"},{"name":"es-CO_NarrowbandModel","language":"es-CO","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/es-CO_NarrowbandModel","rate":8000,"filename":"es-ES_Narrowband-sample.wav","keywords":"Roberto, Pedro","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"Colombian Spanish (8khz Narrowband)"},{"name":"es-MX_BroadbandModel","language":"es-MX","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/es-MX_BroadbandModel","rate":16000,"filename":"es-ES_Broadband-sample.wav","keywords":"Roberto, Pedro","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"Mexican Spanish (16khz Broadband)"},{"name":"es-MX_NarrowbandModel","language":"es-MX","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/es-MX_NarrowbandModel","rate":8000,"filename":"es-ES_Narrowband-sample.wav","keywords":"Roberto, Pedro","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"Mexican Spanish (8khz Narrowband)"},{"name":"es-PE_BroadbandModel","language":"es-PE","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/es-PE_BroadbandModel","rate":16000,"filename":"es-ES_Broadband-sample.wav","keywords":"Roberto, Pedro","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"Peruvian Spanish (16khz Broadband)"},{"name":"es-PE_NarrowbandModel","language":"es-PE","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/es-PE_NarrowbandModel","rate":8000,"filename":"es-ES_Narrowband-sample.wav","keywords":"Roberto, Pedro","supported_features":{"custom_language_model":true,"speaker_labels":true},"description":"Peruvian Spanish (8khz Narrowband)"},{"name":"nl-NL_BroadbandModel","language":"nl-NL","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/nl-NL_BroadbandModel","rate":16000,"filename":"nl-NL_Broadband-sample.wav","keywords":"bestelling, voertuig, auto, aanvraag","supported_features":{"custom_language_model":false,"speaker_labels":false},"description":"Dutch (16khz Broadband)"},{"name":"nl-NL_NarrowbandModel","language":"nl-NL","url":"https://stream.watsonplatform.net/speech-to-text/api/v1/models/nl-NL_NarrowbandModel","rate":8000,"filename":"nl-NL_Narrowband-sample.wav","keywords":"bestelling, voertuig, auto, aanvraag","supported_features":{"custom_language_model":false,"speaker_labels":true},"description":"Dutch (8khz Narrowband)"}]')}},[[101,1,2]]]);
//# sourceMappingURL=main.d29bb317.chunk.js.map