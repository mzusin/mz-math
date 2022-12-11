/* 
Tool Cool Math Helpers
Version: 1.0.4
Documentation: https://github.com/toolcool-org/toolcool-math
License: MIT License        
Author: Tool Cool, toolcool.org@gmail.com>                          
*/
var Q=Object.defineProperty;var Xt=Object.getOwnPropertyDescriptor;var Yt=Object.getOwnPropertyNames;var Zt=Object.prototype.hasOwnProperty;var jt=Math.pow;var Ft=(t,r)=>{for(var e in r)Q(t,e,{get:r[e],enumerable:!0})},Ot=(t,r,e,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of Yt(r))!Zt.call(t,n)&&n!==e&&Q(t,n,{get:()=>r[n],enumerable:!(o=Xt(r,n))||o.enumerable});return t};var Pt=t=>Ot(Q({},"__esModule",{value:!0}),t);var tr={};Ft(tr,{convertRange:()=>Dt,degreesToRadians:()=>Z,doRangesOverlap:()=>Ct,getRandom:()=>It,getRandomBoolean:()=>zt,getRandomInt:()=>j,getRandomItemFromArray:()=>Nt,getV2Angle:()=>h,identity2:()=>pt,identity3:()=>ft,identityN:()=>lt,isNumber:()=>Bt,m2Adjugate:()=>q,m2Determinant:()=>E,m2Inverse:()=>Rt,m2MulScalar:()=>T,m2Reset:()=>ct,m2Rotation:()=>D,m2Scale:()=>L,m2Sub:()=>ot,m2Sum:()=>rt,m2Transpose:()=>it,m2x2:()=>st,m3MulScalar:()=>at,m3Reset:()=>ut,m3RotationX:()=>C,m3RotationY:()=>B,m3RotationZ:()=>w,m3Scale:()=>A,m3Sub:()=>nt,m3Sum:()=>et,m3Transpose:()=>mt,m3x3:()=>xt,mEqual:()=>yt,mMul:()=>Mt,mMulScalar:()=>z,mMulVector:()=>u,mNxM:()=>vt,mReset:()=>N,mSub:()=>I,mSum:()=>R,mTranspose:()=>y,mod:()=>Tt,radiansToDegrees:()=>Y,setDecimalPlaces:()=>i,setV2Angle:()=>X,stringToNumber:()=>wt,v2:()=>$,v2CubicBezierCurve:()=>Et,v2DotProduct:()=>K,v2Length:()=>g,v2MulScalar:()=>k,v2Normalize:()=>V,v2QuadraticBezierCurve:()=>Lt,v2Rotate:()=>ht,v2Scale:()=>St,v2SetLength:()=>J,v2Sub:()=>P,v2Sum:()=>F,v3:()=>tt,v3CrossProduct:()=>_,v3CubicBezierCurve:()=>qt,v3DotProduct:()=>U,v3Length:()=>H,v3MulScalar:()=>G,v3Normalize:()=>l,v3QuadraticBezierCurve:()=>At,v3RotateX:()=>gt,v3RotateY:()=>bt,v3RotateZ:()=>Vt,v3Scale:()=>dt,v3Sub:()=>W,v3Sum:()=>O,vDotProduct:()=>x,vEqual:()=>d,vLength:()=>M,vMulScalar:()=>f,vN:()=>S,vNormalize:()=>b,vSub:()=>p,vSum:()=>v});module.exports=Pt(tr);var i=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=jt(10,r);return Math.round(t*e)/e};var h=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return i(e,r)},X=(t,r,e=1/0)=>{let o=g(t);return[i(Math.cos(r)*o,e),i(Math.sin(r)*o,e)]},Y=(t,r=1/0)=>{let e=t*(180/Math.PI);return i(e,r)},Z=(t,r=1/0)=>{let e=t*(Math.PI/180);return i(e,r)};var v=(t,r,e=1/0)=>{let o=[];for(let n=0;n<t.length;n++)o.push(i(t[n]+r[n],e));return o},F=(t,r,e=1/0)=>v(t,r,e),O=(t,r,e=1/0)=>v(t,r,e),p=(t,r,e=1/0)=>{let o=[];for(let n=0;n<t.length;n++)o.push(i(t[n]-r[n],e));return o},P=(t,r,e=1/0)=>p(t,r,e),W=(t,r,e=1/0)=>p(t,r,e),f=(t,r,e=1/0)=>{let o=[];for(let n=0;n<t.length;n++)o.push(i(t[n]*r,e));return o},k=(t,r,e=1/0)=>f(t,r,e),G=(t,r,e=1/0)=>f(t,r,e),M=(t,r=1/0)=>{let e=0;for(let o=0;o<t.length;o++)e+=t[o]*t[o];return i(Math.sqrt(e),r)},g=(t,r=1/0)=>M(t,r),H=(t,r=1/0)=>M(t,r),J=(t,r,e=1/0)=>{let o=h(t);return[i(Math.cos(o)*r,e),i(Math.sin(o)*r,e)]},b=(t,r=1/0)=>{let e=M(t),o=[];for(let n=0;n<t.length;n++)o.push(e===0?0:i(t[n]/e,r));return o},V=(t,r=1/0)=>b(t,r),l=(t,r=1/0)=>b(t,r),x=(t,r,e=1/0)=>{let o=0;for(let n=0;n<t.length;n++)o+=t[n]*r[n];return i(o,e)},K=(t,r,e=1/0)=>x(t,r,e),U=(t,r,e=1/0)=>x(t,r,e),_=(t,r,e=1/0)=>[i(t[1]*r[2]-t[2]*r[1],e),i(t[2]*r[0]-t[0]*r[2],e),i(t[0]*r[1]-t[1]*r[0],e)],$=(t=0)=>[t,t],tt=(t=0)=>[t,t,t],S=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let o=0;o<t;o++)e.push(r);return e},d=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0};var R=(t,r,e=1/0)=>{let o=[];for(let n=0;n<t.length;n++)o.push(v(t[n],r[n],e));return o},rt=(t,r,e=1/0)=>R(t,r,e),et=(t,r,e=1/0)=>R(t,r,e),I=(t,r,e=1/0)=>{let o=[];for(let n=0;n<t.length;n++)o.push(p(t[n],r[n],e));return o},ot=(t,r,e=1/0)=>I(t,r,e),nt=(t,r,e=1/0)=>I(t,r,e),z=(t,r,e=1/0)=>{let o=[];for(let n of t)o.push(f(n,r,e));return o},T=(t,r,e=1/0)=>z(t,r,e),at=(t,r,e=1/0)=>z(t,r,e),y=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let o=[];for(let n=0;n<e;n++)o.push([]);for(let n=0;n<r;n++)for(let a=0;a<e;a++)o[a].push(t[n][a]);return o},it=t=>y(t),mt=t=>y(t),N=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let o=0;o<t.length;o++){let n=t[o].length,a=[];for(let m=0;m<n;m++)a.push(r);e.push(a)}return e},ct=(t,r=0)=>N(t,r),ut=(t,r=0)=>N(t,r),st=(t=0)=>[[t,t],[t,t]],xt=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],vt=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let o=[];for(let n=0;n<t;n++)o.push(S(r,e));return o},pt=()=>[[1,0],[0,1]],ft=()=>[[1,0,0],[0,1,0],[0,0,1]],lt=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let o=[];for(let n=0;n<t;n++)o.push(e===n?1:0);r.push(o)}return r},Mt=(t,r,e=1/0)=>{let o=[];for(let a=0;a<t.length;a++)o.push([]);let n=y(r);if(o.length!==n.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let a=0;a<t.length;a++){let m=t[a];for(let c=0;c<n.length;c++){let s=n[c],Qt=x(m,s,e);o[a].push(Qt)}}return o},u=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let o=[];for(let n=0;n<t.length;n++)o[n]=x(t[n],r,e);return o},yt=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!d(t[e],r[e]))return!1;return!0},D=t=>[[Math.cos(t),-Math.sin(t)],[Math.sin(t),Math.cos(t)]],ht=(t,r)=>{let e=V(r);return u(D(t),e)},C=t=>[[1,0,0],[0,Math.cos(t),-Math.sin(t)],[0,Math.sin(t),Math.cos(t)]],gt=(t,r)=>{let e=l(r);return u(C(t),e)},B=t=>[[Math.cos(t),0,Math.sin(t)],[0,1,0],[-Math.sin(t),0,Math.cos(t)]],bt=(t,r)=>{let e=l(r);return u(B(t),e)},w=t=>[[Math.cos(t),-Math.sin(t),0],[Math.sin(t),Math.cos(t),0],[0,0,1]],Vt=(t,r)=>{let e=l(r);return u(w(t),e)},L=t=>[[t[0],0],[0,t[1]]],St=(t,r)=>u(L(t),r),A=t=>[[t[0],0,0],[0,t[1],0],[0,0,t[2]]],dt=(t,r)=>u(A(t),r),E=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},q=t=>[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]],Rt=(t,r=1/0)=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");let e=E(t);if(e===0)return null;let o=q(t);return T(o,1/e,r)};var It=(t,r,e=1/0)=>i(Math.random()*(r-t)+t,e),j=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),zt=()=>Math.random()<.5,Nt=t=>{let r=j(0,t.length-1);return t[r]};var Tt=(t,r)=>(t%r+r)%r,Dt=(t,r,e,o,n)=>(n-o)*(t-r)/(e-r)+o,Ct=(t,r,e,o)=>Math.max(t,e)<=Math.min(r,o),Bt=t=>!isNaN(parseFloat(t))&&isFinite(t);var wt=(t,r)=>{var o;if(t==null)return r;let e=(o=Number(t))!=null?o:r;return isNaN(e)?r:e};var Lt=(t,r,e,o)=>{let n=Math.pow(1-t,2),a=(1-t)*2*t,m=t*t;return[n*r[0]+a*e[0]+m*o[0],n*r[1]+a*e[1]+m*o[1]]},At=(t,r,e,o)=>{let n=Math.pow(1-t,2),a=(1-t)*2*t,m=t*t;return[n*r[0]+a*e[0]+m*o[0],n*r[1]+a*e[1]+m*o[1],n*r[2]+a*e[2]+m*o[2]]},Et=(t,r,e,o,n)=>{let a=Math.pow(1-t,3),m=Math.pow(1-t,2)*3*t,c=(1-t)*3*t*t,s=t*t*t;return[a*r[0]+m*e[0]+c*o[0]+s*n[0],a*r[1]+m*e[1]+c*o[1]+s*n[1]]},qt=(t,r,e,o,n)=>{let a=Math.pow(1-t,3),m=Math.pow(1-t,2)*3*t,c=(1-t)*3*t*t,s=t*t*t;return[a*r[0]+m*e[0]+c*o[0]+s*n[0],a*r[1]+m*e[1]+c*o[1]+s*n[1],a*r[2]+m*e[2]+c*o[2]+s*n[2]]};var $t={v2:$,v3:tt,vN:S,m2x2:st,m3x3:xt,mNxM:vt,identity2:pt,identity3:ft,identityN:lt,vEqual:d,mEqual:yt,vSum:v,v2Sum:F,v3Sum:O,vSub:p,v2Sub:P,v3Sub:W,vMulScalar:f,v2MulScalar:k,v3MulScalar:G,vLength:M,v2Length:g,v3Length:H,v2SetLength:J,vNormalize:b,v2Normalize:V,v3Normalize:l,vDotProduct:x,v2DotProduct:K,v3DotProduct:U,v3CrossProduct:_,mSum:R,m2Sum:rt,m3Sum:et,mSub:I,m2Sub:ot,m3Sub:nt,mMulScalar:z,m2MulScalar:T,m3MulScalar:at,mTranspose:y,m2Transpose:it,m3Transpose:mt,mMul:Mt,mMulVector:u,mReset:N,m2Reset:ct,m3Reset:ut,m2Rotation:D,v2Rotate:ht,m3RotationX:C,v3RotateX:gt,m3RotationY:B,v3RotateY:bt,m3RotationZ:w,v3RotateZ:Vt,m2Scale:L,v2Scale:St,m3Scale:A,v3Scale:dt,m2Determinant:E,m2Inverse:Rt,m2Adjugate:q,getV2Angle:h,setV2Angle:X,radiansToDegrees:Y,degreesToRadians:Z,setDecimalPlaces:i,getRandom:It,getRandomInt:j,getRandomBoolean:zt,getRandomItemFromArray:Nt,mod:Tt,convertRange:Dt,doRangesOverlap:Ct,isNumber:Bt,stringToNumber:wt,v2QuadraticBezierCurve:Lt,v3QuadraticBezierCurve:At,v2CubicBezierCurve:Et,v3CubicBezierCurve:qt};window.TCMath=window.TCMath||$t;0&&(module.exports={convertRange,degreesToRadians,doRangesOverlap,getRandom,getRandomBoolean,getRandomInt,getRandomItemFromArray,getV2Angle,identity2,identity3,identityN,isNumber,m2Adjugate,m2Determinant,m2Inverse,m2MulScalar,m2Reset,m2Rotation,m2Scale,m2Sub,m2Sum,m2Transpose,m2x2,m3MulScalar,m3Reset,m3RotationX,m3RotationY,m3RotationZ,m3Scale,m3Sub,m3Sum,m3Transpose,m3x3,mEqual,mMul,mMulScalar,mMulVector,mNxM,mReset,mSub,mSum,mTranspose,mod,radiansToDegrees,setDecimalPlaces,setV2Angle,stringToNumber,v2,v2CubicBezierCurve,v2DotProduct,v2Length,v2MulScalar,v2Normalize,v2QuadraticBezierCurve,v2Rotate,v2Scale,v2SetLength,v2Sub,v2Sum,v3,v3CrossProduct,v3CubicBezierCurve,v3DotProduct,v3Length,v3MulScalar,v3Normalize,v3QuadraticBezierCurve,v3RotateX,v3RotateY,v3RotateZ,v3Scale,v3Sub,v3Sum,vDotProduct,vEqual,vLength,vMulScalar,vN,vNormalize,vSub,vSum});
//# sourceMappingURL=tc-math.node.js.map
