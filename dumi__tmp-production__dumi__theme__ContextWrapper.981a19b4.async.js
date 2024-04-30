"use strict";(self.webpackChunksuid_supplement=self.webpackChunksuid_supplement||[]).push([[923],{26520:function(R,i,e){e.r(i),e.d(i,{default:function(){return A}});var T=e(27424),h=e.n(T),b=e(42122),v=e.n(b),t=e(67294),s=e(85045),U=e(38024),C=e(64236),a={Upload:{type:"COMPONENT",id:"Upload",title:"Upload",propsConfig:{className:"IUploadProps",type:"object",required:[],properties:{type:{type:"string",enum:["drag","select"],className:"UploadType"},name:{type:"string"},defaultFileList:{type:"array",className:"Array<UploadFile>",items:{type:"object",required:["uid","size","name","type"],className:"UploadFile",properties:{uid:{type:"string"},size:{type:"number"},name:{type:"string"},fileName:{type:"string"},lastModified:{type:"number"},lastModifiedDate:{type:"object",required:["toString","toDateString","toTimeString","toLocaleString","toLocaleDateString","toLocaleTimeString","valueOf","getTime","getFullYear","getUTCFullYear","getMonth","getUTCMonth","getDate","getUTCDate","getDay","getUTCDay","getHours","getUTCHours","getMinutes","getUTCMinutes","getSeconds","getUTCSeconds","getMilliseconds","getUTCMilliseconds","getTimezoneOffset","setTime","setMilliseconds","setUTCMilliseconds","setSeconds","setUTCSeconds","setMinutes","setUTCMinutes","setHours","setUTCHours","setDate","setUTCDate","setMonth","setUTCMonth","setFullYear","setUTCFullYear","toUTCString","toISOString","toJSON","__@toPrimitive@89"],className:"Date",properties:{toString:{type:"function",signature:{isAsync:!1,returnType:{type:"string"},arguments:[]},description:"Returns a string representation of a date. The format of the string depends on the locale.",className:"toString"},toDateString:{type:"function",signature:{isAsync:!1,returnType:{type:"string"},arguments:[]},description:"Returns a date as a string value.",className:"toDateString"},toTimeString:{type:"function",signature:{isAsync:!1,returnType:{type:"string"},arguments:[]},description:"Returns a time as a string value.",className:"toTimeString"},toLocaleString:{type:"function",signature:{oneOf:[{isAsync:!1,returnType:{type:"string"},arguments:[]},{isAsync:!1,returnType:{type:"string"},arguments:[{key:"locales",type:"string | string[] | undefined",hasQuestionToken:!0},{key:"options",type:"Intl.DateTimeFormatOptions | undefined",hasQuestionToken:!0}]}]},description:"Returns a value as a string value appropriate to the host environment's current locale.",className:"toLocaleString"},toLocaleDateString:{type:"function",signature:{oneOf:[{isAsync:!1,returnType:{type:"string"},arguments:[]},{isAsync:!1,returnType:{type:"string"},arguments:[{key:"locales",type:"string | string[] | undefined",hasQuestionToken:!0},{key:"options",type:"Intl.DateTimeFormatOptions | undefined",hasQuestionToken:!0}]}]},description:"Returns a date as a string value appropriate to the host environment's current locale.",className:"toLocaleDateString"},toLocaleTimeString:{type:"function",signature:{oneOf:[{isAsync:!1,returnType:{type:"string"},arguments:[]},{isAsync:!1,returnType:{type:"string"},arguments:[{key:"locales",type:"string | string[] | undefined",hasQuestionToken:!0},{key:"options",type:"Intl.DateTimeFormatOptions | undefined",hasQuestionToken:!0}]}]},description:"Returns a time as a string value appropriate to the host environment's current locale.",className:"toLocaleTimeString"},valueOf:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.",className:"valueOf"},getTime:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the time value in milliseconds.",className:"getTime"},getFullYear:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the year, using local time.",className:"getFullYear"},getUTCFullYear:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the year using Universal Coordinated Time (UTC).",className:"getUTCFullYear"},getMonth:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the month, using local time.",className:"getMonth"},getUTCMonth:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the month of a Date object using Universal Coordinated Time (UTC).",className:"getUTCMonth"},getDate:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the day-of-the-month, using local time.",className:"getDate"},getUTCDate:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the day-of-the-month, using Universal Coordinated Time (UTC).",className:"getUTCDate"},getDay:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the day of the week, using local time.",className:"getDay"},getUTCDay:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the day of the week using Universal Coordinated Time (UTC).",className:"getUTCDay"},getHours:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the hours in a date, using local time.",className:"getHours"},getUTCHours:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the hours value in a Date object using Universal Coordinated Time (UTC).",className:"getUTCHours"},getMinutes:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the minutes of a Date object, using local time.",className:"getMinutes"},getUTCMinutes:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the minutes of a Date object using Universal Coordinated Time (UTC).",className:"getUTCMinutes"},getSeconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the seconds of a Date object, using local time.",className:"getSeconds"},getUTCSeconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the seconds of a Date object using Universal Coordinated Time (UTC).",className:"getUTCSeconds"},getMilliseconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the milliseconds of a Date, using local time.",className:"getMilliseconds"},getUTCMilliseconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the milliseconds of a Date object using Universal Coordinated Time (UTC).",className:"getUTCMilliseconds"},getTimezoneOffset:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).",className:"getTimezoneOffset"},setTime:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"time",type:"number",isRequired:!0}]},description:"Sets the date and time value in the Date object.",tags:{param:"time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT."},className:"setTime"},setMilliseconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"ms",type:"number",isRequired:!0}]},description:"Sets the milliseconds value in the Date object using local time.",tags:{param:"ms A numeric value equal to the millisecond value."},className:"setMilliseconds"},setUTCMilliseconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"ms",type:"number",isRequired:!0}]},description:"Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).",tags:{param:"ms A numeric value equal to the millisecond value."},className:"setUTCMilliseconds"},setSeconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"sec",type:"number",isRequired:!0},{key:"ms",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the seconds value in the Date object using local time.",tags:{param:"ms A numeric value equal to the milliseconds value."},className:"setSeconds"},setUTCSeconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"sec",type:"number",isRequired:!0},{key:"ms",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the seconds value in the Date object using Universal Coordinated Time (UTC).",tags:{param:"ms A numeric value equal to the milliseconds value."},className:"setUTCSeconds"},setMinutes:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"min",type:"number",isRequired:!0},{key:"sec",type:"number | undefined",hasQuestionToken:!0},{key:"ms",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the minutes value in the Date object using local time.",tags:{param:"ms A numeric value equal to the milliseconds value."},className:"setMinutes"},setUTCMinutes:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"min",type:"number",isRequired:!0},{key:"sec",type:"number | undefined",hasQuestionToken:!0},{key:"ms",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the minutes value in the Date object using Universal Coordinated Time (UTC).",tags:{param:"ms A numeric value equal to the milliseconds value."},className:"setUTCMinutes"},setHours:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"hours",type:"number",isRequired:!0},{key:"min",type:"number | undefined",hasQuestionToken:!0},{key:"sec",type:"number | undefined",hasQuestionToken:!0},{key:"ms",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the hour value in the Date object using local time.",tags:{param:"ms A numeric value equal to the milliseconds value."},className:"setHours"},setUTCHours:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"hours",type:"number",isRequired:!0},{key:"min",type:"number | undefined",hasQuestionToken:!0},{key:"sec",type:"number | undefined",hasQuestionToken:!0},{key:"ms",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the hours value in the Date object using Universal Coordinated Time (UTC).",tags:{param:"ms A numeric value equal to the milliseconds value."},className:"setUTCHours"},setDate:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"date",type:"number",isRequired:!0}]},description:"Sets the numeric day-of-the-month value of the Date object using local time.",tags:{param:"date A numeric value equal to the day of the month."},className:"setDate"},setUTCDate:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"date",type:"number",isRequired:!0}]},description:"Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).",tags:{param:"date A numeric value equal to the day of the month."},className:"setUTCDate"},setMonth:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"month",type:"number",isRequired:!0},{key:"date",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the month value in the Date object using local time.",tags:{param:"date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used."},className:"setMonth"},setUTCMonth:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"month",type:"number",isRequired:!0},{key:"date",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the month value in the Date object using Universal Coordinated Time (UTC).",tags:{param:"date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used."},className:"setUTCMonth"},setFullYear:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"year",type:"number",isRequired:!0},{key:"month",type:"number | undefined",hasQuestionToken:!0},{key:"date",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the year of the Date object using local time.",tags:{param:"date A numeric value equal for the day of the month."},className:"setFullYear"},setUTCFullYear:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"year",type:"number",isRequired:!0},{key:"month",type:"number | undefined",hasQuestionToken:!0},{key:"date",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the year value in the Date object using Universal Coordinated Time (UTC).",tags:{param:"date A numeric value equal to the day of the month."},className:"setUTCFullYear"},toUTCString:{type:"function",signature:{isAsync:!1,returnType:{type:"string"},arguments:[]},description:"Returns a date converted to a string using Universal Coordinated Time (UTC).",className:"toUTCString"},toISOString:{type:"function",signature:{isAsync:!1,returnType:{type:"string"},arguments:[]},description:"Returns a date as a string value in ISO format.",className:"toISOString"},toJSON:{},"__@toPrimitive@89":{type:"function",signature:{oneOf:[{isAsync:!1,returnType:{type:"string"},arguments:[{key:"hint",type:'"default"',isRequired:!0}]},{isAsync:!1,returnType:{type:"string"},arguments:[{key:"hint",type:'"string"',isRequired:!0}]},{isAsync:!1,returnType:{type:"number"},arguments:[{key:"hint",type:'"number"',isRequired:!0}]},{isAsync:!1,returnType:{oneOf:[{type:"string"},{type:"number"}]},arguments:[{key:"hint",type:"string",isRequired:!0}]}]},description:"Converts a Date object to a string.",className:"__@toPrimitive@89"}}},url:{type:"string"},status:{type:"string",enum:["error","success","done","uploading","removed"],className:"UploadFileStatus"},percent:{type:"number"},thumbUrl:{type:"string"},originFileObj:{type:"any"},response:{type:"any",className:"T"},error:{type:"any"},linkProps:{type:"any"},type:{type:"string"},xhr:{type:"any",className:"T"},preview:{type:"string"}}}},fileList:{type:"array",className:"Array<UploadFile>",items:{type:"object",required:["uid","size","name","type"],className:"UploadFile",properties:{uid:{type:"string"},size:{type:"number"},name:{type:"string"},fileName:{type:"string"},lastModified:{type:"number"},lastModifiedDate:{type:"object",required:["toString","toDateString","toTimeString","toLocaleString","toLocaleDateString","toLocaleTimeString","valueOf","getTime","getFullYear","getUTCFullYear","getMonth","getUTCMonth","getDate","getUTCDate","getDay","getUTCDay","getHours","getUTCHours","getMinutes","getUTCMinutes","getSeconds","getUTCSeconds","getMilliseconds","getUTCMilliseconds","getTimezoneOffset","setTime","setMilliseconds","setUTCMilliseconds","setSeconds","setUTCSeconds","setMinutes","setUTCMinutes","setHours","setUTCHours","setDate","setUTCDate","setMonth","setUTCMonth","setFullYear","setUTCFullYear","toUTCString","toISOString","toJSON","__@toPrimitive@89"],className:"Date",properties:{toString:{type:"function",signature:{isAsync:!1,returnType:{type:"string"},arguments:[]},description:"Returns a string representation of a date. The format of the string depends on the locale.",className:"toString"},toDateString:{type:"function",signature:{isAsync:!1,returnType:{type:"string"},arguments:[]},description:"Returns a date as a string value.",className:"toDateString"},toTimeString:{type:"function",signature:{isAsync:!1,returnType:{type:"string"},arguments:[]},description:"Returns a time as a string value.",className:"toTimeString"},toLocaleString:{type:"function",signature:{oneOf:[{isAsync:!1,returnType:{type:"string"},arguments:[]},{isAsync:!1,returnType:{type:"string"},arguments:[{key:"locales",type:"string | string[] | undefined",hasQuestionToken:!0},{key:"options",type:"Intl.DateTimeFormatOptions | undefined",hasQuestionToken:!0}]}]},description:"Returns a value as a string value appropriate to the host environment's current locale.",className:"toLocaleString"},toLocaleDateString:{type:"function",signature:{oneOf:[{isAsync:!1,returnType:{type:"string"},arguments:[]},{isAsync:!1,returnType:{type:"string"},arguments:[{key:"locales",type:"string | string[] | undefined",hasQuestionToken:!0},{key:"options",type:"Intl.DateTimeFormatOptions | undefined",hasQuestionToken:!0}]}]},description:"Returns a date as a string value appropriate to the host environment's current locale.",className:"toLocaleDateString"},toLocaleTimeString:{type:"function",signature:{oneOf:[{isAsync:!1,returnType:{type:"string"},arguments:[]},{isAsync:!1,returnType:{type:"string"},arguments:[{key:"locales",type:"string | string[] | undefined",hasQuestionToken:!0},{key:"options",type:"Intl.DateTimeFormatOptions | undefined",hasQuestionToken:!0}]}]},description:"Returns a time as a string value appropriate to the host environment's current locale.",className:"toLocaleTimeString"},valueOf:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.",className:"valueOf"},getTime:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the time value in milliseconds.",className:"getTime"},getFullYear:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the year, using local time.",className:"getFullYear"},getUTCFullYear:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the year using Universal Coordinated Time (UTC).",className:"getUTCFullYear"},getMonth:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the month, using local time.",className:"getMonth"},getUTCMonth:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the month of a Date object using Universal Coordinated Time (UTC).",className:"getUTCMonth"},getDate:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the day-of-the-month, using local time.",className:"getDate"},getUTCDate:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the day-of-the-month, using Universal Coordinated Time (UTC).",className:"getUTCDate"},getDay:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the day of the week, using local time.",className:"getDay"},getUTCDay:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the day of the week using Universal Coordinated Time (UTC).",className:"getUTCDay"},getHours:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the hours in a date, using local time.",className:"getHours"},getUTCHours:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the hours value in a Date object using Universal Coordinated Time (UTC).",className:"getUTCHours"},getMinutes:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the minutes of a Date object, using local time.",className:"getMinutes"},getUTCMinutes:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the minutes of a Date object using Universal Coordinated Time (UTC).",className:"getUTCMinutes"},getSeconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the seconds of a Date object, using local time.",className:"getSeconds"},getUTCSeconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the seconds of a Date object using Universal Coordinated Time (UTC).",className:"getUTCSeconds"},getMilliseconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the milliseconds of a Date, using local time.",className:"getMilliseconds"},getUTCMilliseconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the milliseconds of a Date object using Universal Coordinated Time (UTC).",className:"getUTCMilliseconds"},getTimezoneOffset:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[]},description:"Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).",className:"getTimezoneOffset"},setTime:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"time",type:"number",isRequired:!0}]},description:"Sets the date and time value in the Date object.",tags:{param:"time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT."},className:"setTime"},setMilliseconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"ms",type:"number",isRequired:!0}]},description:"Sets the milliseconds value in the Date object using local time.",tags:{param:"ms A numeric value equal to the millisecond value."},className:"setMilliseconds"},setUTCMilliseconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"ms",type:"number",isRequired:!0}]},description:"Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).",tags:{param:"ms A numeric value equal to the millisecond value."},className:"setUTCMilliseconds"},setSeconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"sec",type:"number",isRequired:!0},{key:"ms",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the seconds value in the Date object using local time.",tags:{param:"ms A numeric value equal to the milliseconds value."},className:"setSeconds"},setUTCSeconds:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"sec",type:"number",isRequired:!0},{key:"ms",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the seconds value in the Date object using Universal Coordinated Time (UTC).",tags:{param:"ms A numeric value equal to the milliseconds value."},className:"setUTCSeconds"},setMinutes:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"min",type:"number",isRequired:!0},{key:"sec",type:"number | undefined",hasQuestionToken:!0},{key:"ms",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the minutes value in the Date object using local time.",tags:{param:"ms A numeric value equal to the milliseconds value."},className:"setMinutes"},setUTCMinutes:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"min",type:"number",isRequired:!0},{key:"sec",type:"number | undefined",hasQuestionToken:!0},{key:"ms",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the minutes value in the Date object using Universal Coordinated Time (UTC).",tags:{param:"ms A numeric value equal to the milliseconds value."},className:"setUTCMinutes"},setHours:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"hours",type:"number",isRequired:!0},{key:"min",type:"number | undefined",hasQuestionToken:!0},{key:"sec",type:"number | undefined",hasQuestionToken:!0},{key:"ms",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the hour value in the Date object using local time.",tags:{param:"ms A numeric value equal to the milliseconds value."},className:"setHours"},setUTCHours:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"hours",type:"number",isRequired:!0},{key:"min",type:"number | undefined",hasQuestionToken:!0},{key:"sec",type:"number | undefined",hasQuestionToken:!0},{key:"ms",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the hours value in the Date object using Universal Coordinated Time (UTC).",tags:{param:"ms A numeric value equal to the milliseconds value."},className:"setUTCHours"},setDate:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"date",type:"number",isRequired:!0}]},description:"Sets the numeric day-of-the-month value of the Date object using local time.",tags:{param:"date A numeric value equal to the day of the month."},className:"setDate"},setUTCDate:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"date",type:"number",isRequired:!0}]},description:"Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).",tags:{param:"date A numeric value equal to the day of the month."},className:"setUTCDate"},setMonth:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"month",type:"number",isRequired:!0},{key:"date",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the month value in the Date object using local time.",tags:{param:"date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used."},className:"setMonth"},setUTCMonth:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"month",type:"number",isRequired:!0},{key:"date",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the month value in the Date object using Universal Coordinated Time (UTC).",tags:{param:"date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used."},className:"setUTCMonth"},setFullYear:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"year",type:"number",isRequired:!0},{key:"month",type:"number | undefined",hasQuestionToken:!0},{key:"date",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the year of the Date object using local time.",tags:{param:"date A numeric value equal for the day of the month."},className:"setFullYear"},setUTCFullYear:{type:"function",signature:{isAsync:!1,returnType:{type:"number"},arguments:[{key:"year",type:"number",isRequired:!0},{key:"month",type:"number | undefined",hasQuestionToken:!0},{key:"date",type:"number | undefined",hasQuestionToken:!0}]},description:"Sets the year value in the Date object using Universal Coordinated Time (UTC).",tags:{param:"date A numeric value equal to the day of the month."},className:"setUTCFullYear"},toUTCString:{type:"function",signature:{isAsync:!1,returnType:{type:"string"},arguments:[]},description:"Returns a date converted to a string using Universal Coordinated Time (UTC).",className:"toUTCString"},toISOString:{type:"function",signature:{isAsync:!1,returnType:{type:"string"},arguments:[]},description:"Returns a date as a string value in ISO format.",className:"toISOString"},toJSON:{},"__@toPrimitive@89":{type:"function",signature:{oneOf:[{isAsync:!1,returnType:{type:"string"},arguments:[{key:"hint",type:'"default"',isRequired:!0}]},{isAsync:!1,returnType:{type:"string"},arguments:[{key:"hint",type:'"string"',isRequired:!0}]},{isAsync:!1,returnType:{type:"number"},arguments:[{key:"hint",type:'"number"',isRequired:!0}]},{isAsync:!1,returnType:{oneOf:[{type:"string"},{type:"number"}]},arguments:[{key:"hint",type:"string",isRequired:!0}]}]},description:"Converts a Date object to a string.",className:"__@toPrimitive@89"}}},url:{type:"string"},status:{type:"string",enum:["error","success","done","uploading","removed"],className:"UploadFileStatus"},percent:{type:"number"},thumbUrl:{type:"string"},originFileObj:{type:"any"},response:{type:"any",className:"T"},error:{type:"any"},linkProps:{type:"any"},type:{type:"string"},xhr:{type:"any",className:"T"},preview:{type:"string"}}}},action:{oneOf:[{type:"string"},{type:"function",signature:{isAsync:!1,returnType:{type:"string"},arguments:[{key:"file",type:'import("/node_modules/antd/lib/upload/interface").RcFile',isRequired:!0}]},className:"__type"},{type:"function",signature:{isAsync:!1,returnType:{type:"object",properties:{then:{type:"function",signature:{isAsync:!1,returnType:{$ref:"#/definition/PromiseLike_1"},arguments:[{key:"onfulfilled",type:"((value: T) => TResult1 | PromiseLike<TResult1>) | null | undefined",hasQuestionToken:!0},{key:"onrejected",type:"((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined",hasQuestionToken:!0}]},description:"Attaches callbacks for the resolution and/or rejection of the Promise.",tags:{param:"onrejected The callback to execute when the Promise is rejected.",returns:"A Promise for the completion of which ever callback is executed."},className:"then"}},required:["then"],className:"PromiseLike"},arguments:[{key:"file",type:'import("/node_modules/antd/lib/upload/interface").RcFile',isRequired:!0}]},className:"__type"}]},directory:{type:"boolean"},data:{oneOf:[{type:"object"},{type:"function",signature:{isAsync:!1,returnType:{type:"object"},arguments:[{key:"file",type:'import("/node_modules/antd/lib/upload/interface").UploadFile<any>',isRequired:!0}]},className:"__type"}]},method:{type:"string",enum:["POST","PUT","post","put"]},headers:{type:"object",required:[],className:"HttpRequestHeader",additionalProperties:{type:"string"}},showUploadList:{oneOf:[{type:"boolean"},{type:"object",properties:{showRemoveIcon:{type:"boolean"},showPreviewIcon:{type:"boolean"},showDownloadIcon:{type:"boolean"}},required:[],className:"ShowUploadListInterface"}]},multiple:{type:"boolean"},accept:{type:"string"},beforeUpload:{type:"function",signature:{isAsync:!1,returnType:{oneOf:[{type:"object",properties:{then:{type:"function",signature:{isAsync:!1,returnType:{$ref:"#/definition/PromiseLike_1"},arguments:[{key:"onfulfilled",type:"((value: T) => TResult1 | PromiseLike<TResult1>) | null | undefined",hasQuestionToken:!0},{key:"onrejected",type:"((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined",hasQuestionToken:!0}]},description:"Attaches callbacks for the resolution and/or rejection of the Promise.",tags:{param:"onrejected The callback to execute when the Promise is rejected.",returns:"A Promise for the completion of which ever callback is executed."},className:"then"}},required:["then"],className:"PromiseLike"},{type:"boolean"}]},arguments:[{key:"file",type:'import("/node_modules/antd/lib/upload/interface").RcFile',isRequired:!0},{key:"FileList",type:'import("/node_modules/antd/lib/upload/interface").RcFile[]',isRequired:!0}]},className:"__type"},onChange:{type:"function",signature:{isAsync:!1,returnType:{type:"void"},arguments:[{key:"info",type:'import("/node_modules/antd/lib/upload/interface").UploadChangeParam<import("/node_modules/antd/lib/upload/interface").UploadFile<any>>',isRequired:!0}]},className:"__type"},listType:{type:"string",enum:["text","picture","picture-card"],className:"UploadListType"},className:{type:"string"},onPreview:{type:"function",signature:{isAsync:!1,returnType:{type:"void"},arguments:[{key:"file",type:'import("/node_modules/antd/lib/upload/interface").UploadFile<any>',isRequired:!0}]},className:"__type"},onDownload:{type:"function",signature:{isAsync:!1,returnType:{type:"void"},arguments:[{key:"file",type:'import("/node_modules/antd/lib/upload/interface").UploadFile<any>',isRequired:!0}]},className:"__type"},onRemove:{type:"function",signature:{isAsync:!1,returnType:{oneOf:[{type:"void"},{type:"promise",className:"Promise"},{type:"boolean"}]},arguments:[{key:"file",type:'import("/node_modules/antd/lib/upload/interface").UploadFile<any>',isRequired:!0}]},className:"__type"},supportServerRender:{type:"boolean"},style:{type:"object",className:"CSSProperties"},disabled:{type:"boolean"},prefixCls:{type:"string"},customRequest:{type:"function",signature:{isAsync:!1,returnType:{type:"void"},arguments:[{key:"options",type:'import("/node_modules/antd/lib/upload/interface").RcCustomRequestOptions',isRequired:!0}]},className:"__type"},withCredentials:{type:"boolean"},openFileDialogOnClick:{type:"boolean"},locale:{type:"object",required:[],className:"UploadLocale",properties:{uploading:{type:"string"},removeFile:{type:"string"},downloadFile:{type:"string"},uploadError:{type:"string"},previewFile:{type:"string"}}},id:{type:"string"},previewFile:{type:"function",signature:{isAsync:!1,returnType:{type:"object",properties:{then:{type:"function",signature:{isAsync:!1,returnType:{$ref:"#/definition/PromiseLike_1"},arguments:[{key:"onfulfilled",type:"((value: T) => TResult1 | PromiseLike<TResult1>) | null | undefined",hasQuestionToken:!0},{key:"onrejected",type:"((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined",hasQuestionToken:!0}]},description:"Attaches callbacks for the resolution and/or rejection of the Promise.",tags:{param:"onrejected The callback to execute when the Promise is rejected.",returns:"A Promise for the completion of which ever callback is executed."},className:"then"}},required:["then"],className:"PromiseLike"},arguments:[{key:"file",type:"any",isRequired:!0}]},className:"PreviewFileHandler"},transformFile:{type:"function",signature:{isAsync:!1,returnType:{type:"any"},arguments:[{key:"file",type:'import("/node_modules/antd/lib/upload/interface").RcFile',isRequired:!0}]},className:"TransformFileHandler"},uploadType:{type:'"file" | "btn"',enum:["file","btn"],className:"uploadType",description:"\u9ED8\u8BA4\u7684\u4E0A\u4F20\u6309\u94AE\u89E6\u53D1\u6837\u5F0F",tags:{description:"\u9ED8\u8BA4\u7684\u4E0A\u4F20\u6309\u94AE\u89E6\u53D1\u6837\u5F0F",type:'"file" | "btn"',default:'"file"'},default:"file"},loading:{type:"boolean",description:"\u4E0A\u4F20\u4E2D\u72B6\u6001\uFF0C\u5305\u88F9\u6574\u4E2A\u7EC4\u4EF6",tags:{description:"\u4E0A\u4F20\u4E2D\u72B6\u6001\uFF0C\u5305\u88F9\u6574\u4E2A\u7EC4\u4EF6",type:"boolean",default:"false"},default:!1},pastePower:{type:"boolean",description:"\u662F\u5426\u5F00\u542F\u7C98\u8D34\u4E0A\u4F20",tags:{description:"\u662F\u5426\u5F00\u542F\u7C98\u8D34\u4E0A\u4F20",type:"boolean",default:"true"},default:!0},dragPower:{type:"boolean",description:"\u662F\u5426\u5F00\u542F\u62D6\u62FD\u4E0A\u4F20",tags:{description:"\u662F\u5426\u5F00\u542F\u62D6\u62FD\u4E0A\u4F20",type:"boolean",default:"true"},default:!0},uploadHandlerRender:{type:"undefined | ReactNode | (({ uploadType, dragPower, pastePower }: { uploadType: uploadType; dragPower: boolean; pastePower: boolean; }) => ReactNode)",signature:{isAsync:!1,returnType:{type:"reactNode",className:"ReactNode"},arguments:[{key:"__0",type:"{ uploadType: uploadType; dragPower: boolean; pastePower: boolean; }",isRequired:!0}]},className:"__type",description:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u533A\u57DF",tags:{description:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u533A\u57DF",type:"undefined | ReactNode | (({ uploadType, dragPower, pastePower }: { uploadType: uploadType; dragPower: boolean; pastePower: boolean; }) => ReactNode)",default:"null"},default:null},uploadHandlerShow:{type:"boolean",description:"\u662F\u5426\u5C55\u793A\u4E0A\u4F20\u533A\u57DF",tags:{description:"\u662F\u5426\u5C55\u793A\u4E0A\u4F20\u533A\u57DF",type:"boolean",default:"true"},default:!0},areaStyle:{type:"React.CSSProperties",className:"CSSProperties",description:"\u4E0A\u4F20\u533A\u57DF\u6837\u5F0F",tags:{description:"\u4E0A\u4F20\u533A\u57DF\u6837\u5F0F",type:"React.CSSProperties",default:"undefined"},default:null}}}}},r=e(90482),k=e(83194),u=v()({},k),o={name:"suid-supplement",description:"\u4E00\u4E2A\u57FA\u4E8Edumi\u5F00\u53D1\u7684\uFF0Cantd3\u7684\u6269\u5C55\u4ED3\u5E93",version:"0.1.30",license:"MIT",repository:{type:"git",url:"https://github.com/bLeeKKK/suid-supplement"},authors:["1961774471@qq.com"]},l="browser",p=void 0,y={footer:'Copyright \xA9 2024 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,name:"suid-supplement",sourceLink:"https://github.com/bLeeKKK/suid-supplement/tree/main/{fileName}#L{line}",editLink:"https://github.com/bLeeKKK/suid-supplement/edit/main/{filename}"},m=!0;function A(){var N=(0,s.pC)(),S=(0,t.useState)(!1),c=h()(S,2),d=c[0],g=c[1],f=(0,t.useRef)(s.m8.location.pathname);(0,t.useEffect)(function(){return s.m8.listen(function(n){n.location.pathname!==f.current&&(f.current=n.location.pathname,document.documentElement.scrollTo(0,0))})},[]);var D=t.useMemo(function(){var n={pkg:o,historyType:l,entryExports:u,demos:null,components:a,locales:r.k,loading:d,setLoading:g,hostname:p,themeConfig:y,_2_level_nav_available:m};return Object.defineProperty(n,"demos",{get:function(){return(0,U.Kp)(!1,"`demos` return empty in latest version, please use `useDemo` instead."),{}}}),n},[o,l,u,a,r.k,d,g,p,y,m]);return t.createElement(C.D.Provider,{value:D},N)}}}]);
