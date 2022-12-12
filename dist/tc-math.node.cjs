/* 
Tool Cool Math Helpers
Version: 1.0.14
Documentation: https://github.com/toolcool-org/toolcool-math
License: MIT License        
Author: Tool Cool, toolcool.org@gmail.com>                          
*/
var w=Object.defineProperty;var tt=Object.getOwnPropertyDescriptor;var rt=Object.getOwnPropertyNames;var et=Object.prototype.hasOwnProperty;var O=Math.pow;var nt=(t,r)=>{for(var e in r)w(t,e,{get:r[e],enumerable:!0})},ot=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of rt(r))!et.call(t,o)&&o!==e&&w(t,o,{get:()=>r[o],enumerable:!(n=tt(r,o))||n.enumerable});return t};var it=t=>ot(w({},"__esModule",{value:!0}),t);var dr={};nt(dr,{convertRange:()=>fr,degreesToRadians:()=>ut,doRangesOverlap:()=>lr,equationSystem2:()=>wr,equationSystem3:()=>Sr,equationSystemN:()=>Dr,getRandom:()=>pr,getRandomBoolean:()=>mr,getRandomInt:()=>C,getRandomItemFromArray:()=>Mr,getV2Angle:()=>S,identity2:()=>Gt,identity3:()=>Qt,identityN:()=>Xt,isNumber:()=>Vr,m2Adjugate:()=>X,m2AppendRow:()=>Ot,m2DeepCopy:()=>L,m2Determinant:()=>Q,m2DivideScalar:()=>k,m2Inverse:()=>Z,m2MulScalar:()=>Tt,m2PrependRow:()=>Kt,m2Reset:()=>At,m2Rotation:()=>J,m2Scale:()=>_,m2Sub:()=>dt,m2Sum:()=>St,m2Transpose:()=>Nt,m2x2:()=>qt,m3Adjugate:()=>ar,m3AppendRow:()=>kt,m3DeepCopy:()=>q,m3Determinant:()=>xr,m3DivideScalar:()=>Rt,m3Inverse:()=>H,m3MulScalar:()=>zt,m3PrependRow:()=>Ut,m3Reset:()=>Lt,m3RotationX:()=>K,m3RotationY:()=>U,m3RotationZ:()=>W,m3Scale:()=>$,m3Sub:()=>Et,m3Sum:()=>Dt,m3Transpose:()=>jt,m3x3:()=>Ft,mAdjugate:()=>Y,mAppendCol:()=>Yt,mAppendRow:()=>Ht,mDeepCopy:()=>x,mDelFirstColumn:()=>$t,mDelFirstRow:()=>_t,mDelLastColumn:()=>F,mDelLastRow:()=>Wt,mDeterminant:()=>v,mDivideScalar:()=>y,mEqual:()=>rr,mGetColumn:()=>Pt,mGetFirstColumn:()=>Ct,mGetLastColumn:()=>B,mInverse:()=>I,mMinor:()=>G,mMul:()=>tr,mMulScalar:()=>j,mMulVector:()=>a,mNxM:()=>Bt,mPrependCol:()=>Zt,mPrependRow:()=>Jt,mReset:()=>A,mSub:()=>N,mSum:()=>R,mTranspose:()=>b,mod:()=>hr,radiansToDegrees:()=>st,setDecimalPlaces:()=>s,setV2Angle:()=>ct,stringToNumber:()=>br,v2:()=>It,v2CubicBezierCurve:()=>vr,v2DivideScalar:()=>ft,v2DotProduct:()=>gt,v2Length:()=>D,v2MulScalar:()=>Mt,v2Normalize:()=>E,v2QuadraticBezierCurve:()=>gr,v2Rotate:()=>er,v2Scale:()=>cr,v2SetLength:()=>bt,v2Sub:()=>pt,v2Sum:()=>xt,v3:()=>wt,v3CrossProduct:()=>vt,v3CubicBezierCurve:()=>Ir,v3DivideScalar:()=>lt,v3DotProduct:()=>yt,v3Length:()=>Vt,v3MulScalar:()=>ht,v3Normalize:()=>V,v3QuadraticBezierCurve:()=>yr,v3RotateX:()=>nr,v3RotateY:()=>or,v3RotateZ:()=>ir,v3Scale:()=>sr,v3Sub:()=>mt,v3Sum:()=>at,vDivideScalar:()=>l,vDotProduct:()=>m,vEqual:()=>z,vLength:()=>g,vMulScalar:()=>f,vN:()=>T,vNormalize:()=>d,vSub:()=>h,vSum:()=>M});module.exports=it(dr);var s=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=O(10,r);return Math.round(t*e)/e};var S=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return s(e,r)},ct=(t,r,e=1/0)=>{let n=D(t);return[s(Math.cos(r)*n,e),s(Math.sin(r)*n,e)]},st=(t,r=1/0)=>{let e=t*(180/Math.PI);return s(e,r)},ut=(t,r=1/0)=>{let e=t*(Math.PI/180);return s(e,r)};var M=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]+r[o],e));return n},xt=(t,r,e=1/0)=>M(t,r,e),at=(t,r,e=1/0)=>M(t,r,e),h=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]-r[o],e));return n},pt=(t,r,e=1/0)=>h(t,r,e),mt=(t,r,e=1/0)=>h(t,r,e),f=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]*r,e));return n},Mt=(t,r,e=1/0)=>f(t,r,e),ht=(t,r,e=1/0)=>f(t,r,e),l=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]/r,e));return n},ft=(t,r,e=1/0)=>l(t,r,e),lt=(t,r,e=1/0)=>l(t,r,e),g=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return s(Math.sqrt(e),r)},D=(t,r=1/0)=>g(t,r),Vt=(t,r=1/0)=>g(t,r),bt=(t,r,e=1/0)=>{let n=S(t);return[s(Math.cos(n)*r,e),s(Math.sin(n)*r,e)]},d=(t,r=1/0)=>{let e=g(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:s(t[o]/e,r));return n},E=(t,r=1/0)=>d(t,r),V=(t,r=1/0)=>d(t,r),m=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return s(n,e)},gt=(t,r,e=1/0)=>m(t,r,e),yt=(t,r,e=1/0)=>m(t,r,e),vt=(t,r,e=1/0)=>[s(t[1]*r[2]-t[2]*r[1],e),s(t[2]*r[0]-t[0]*r[2],e),s(t[0]*r[1]-t[1]*r[0],e)],It=(t=0)=>[t,t],wt=(t=0)=>[t,t,t],T=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},z=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0};var R=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(M(t[o],r[o],e));return n},St=(t,r,e=1/0)=>R(t,r,e),Dt=(t,r,e=1/0)=>R(t,r,e),N=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(h(t[o],r[o],e));return n},dt=(t,r,e=1/0)=>N(t,r,e),Et=(t,r,e=1/0)=>N(t,r,e),j=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(f(o,r,e));return n},Tt=(t,r,e=1/0)=>j(t,r,e),zt=(t,r,e=1/0)=>j(t,r,e),y=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(l(o,r,e));return n},k=(t,r,e=1/0)=>y(t,r,e),Rt=(t,r,e=1/0)=>y(t,r,e),b=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},Nt=t=>b(t),jt=t=>b(t),A=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let c=0;c<o;c++)i.push(r);e.push(i)}return e},At=(t,r=0)=>A(t,r),Lt=(t,r=0)=>A(t,r),qt=(t=0)=>[[t,t],[t,t]],Ft=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],Bt=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(T(r,e));return n},Gt=()=>[[1,0],[0,1]],Qt=()=>[[1,0,0],[0,1,0],[0,0,1]],Xt=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},x=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},L=t=>x(t),q=t=>x(t),Yt=(t,r)=>{if(t.length<=0)return[];let e=x(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},Zt=(t,r)=>{if(t.length<=0)return[];let e=x(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},Ht=(t,r)=>{let e=x(t);return e.push(r),e},Ot=(t,r)=>{let e=L(t);return e.push(r),e},kt=(t,r)=>{let e=q(t);return e.push(r),e},Jt=(t,r)=>{let e=x(t);return e.unshift(r),e},Kt=(t,r)=>{let e=L(t);return e.unshift(r),e},Ut=(t,r)=>{let e=q(t);return e.unshift(r),e},Wt=t=>{if(t.length<=0)return[];let r=x(t);return r.pop(),r},_t=t=>{if(t.length<=0)return[];let r=x(t);return r.shift(),r},F=t=>{if(t.length<=0)return[];let r=x(t);for(let e=0;e<r.length;e++)r[e].pop();return r},$t=t=>{if(t.length<=0)return[];let r=x(t);for(let e=0;e<r.length;e++)r[e].shift();return r},Ct=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},B=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},Pt=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},tr=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=b(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let c=t[i];for(let u=0;u<o.length;u++){let p=o[u],P=m(c,p,e);n[i].push(P)}}return n},a=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=m(t[o],r,e);return n},rr=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!z(t[e],r[e]))return!1;return!0},J=t=>[[Math.cos(t),-Math.sin(t)],[Math.sin(t),Math.cos(t)]],er=(t,r)=>{let e=E(r);return a(J(t),e)},K=t=>[[1,0,0],[0,Math.cos(t),-Math.sin(t)],[0,Math.sin(t),Math.cos(t)]],nr=(t,r)=>{let e=V(r);return a(K(t),e)},U=t=>[[Math.cos(t),0,Math.sin(t)],[0,1,0],[-Math.sin(t),0,Math.cos(t)]],or=(t,r)=>{let e=V(r);return a(U(t),e)},W=t=>[[Math.cos(t),-Math.sin(t),0],[Math.sin(t),Math.cos(t),0],[0,0,1]],ir=(t,r)=>{let e=V(r);return a(W(t),e)},_=t=>[[t[0],0],[0,t[1]]],cr=(t,r)=>a(_(t),r),$=t=>[[t[0],0,0],[0,t[1],0],[0,0,t[2]]],sr=(t,r)=>a($(t),r),ur=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let c=[];for(let u=0;u<n;u++)u!==e&&c.push(t[i][u]);o.push(c)}return o},G=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=ur(t,r,e);return v(o)},v=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return Q(t);let e=0;for(let n=0;n<r;n++){let o=G(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},Q=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},xr=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return v(t)},X=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},ar=t=>Y(t),Y=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return X(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let c=G(t,n,i),u=Math.pow(-1,n+i);o.push(u*c)}e.push(o)}return b(e)},Z=(t,r=1/0)=>{if(t.length<=0)return null;if(t.length!==t[0].length)throw new Error("The matrix must be square.");let e=Q(t);if(e===0)return null;let n=X(t);return n===null?null:k(n,e,r)},H=(t,r=1/0)=>I(t,r),I=(t,r=1/0)=>{let e=t.length;if(e<=0)return null;if(e!==t[0].length)throw new Error("The matrix must be square.");let n=v(t),o=Y(t);return o===null?null:y(o,n,r)};var pr=(t,r,e=1/0)=>s(Math.random()*(r-t)+t,e),C=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),mr=()=>Math.random()<.5,Mr=t=>{let r=C(0,t.length-1);return t[r]};var hr=(t,r)=>(t%r+r)%r,fr=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,lr=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),Vr=t=>!isNaN(parseFloat(t))&&isFinite(t);var br=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var gr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,c=t*t;return[o*r[0]+i*e[0]+c*n[0],o*r[1]+i*e[1]+c*n[1]]},yr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,c=t*t;return[o*r[0]+i*e[0]+c*n[0],o*r[1]+i*e[1]+c*n[1],o*r[2]+i*e[2]+c*n[2]]},vr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),c=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,p=t*t*t;return[i*r[0]+c*e[0]+u*n[0]+p*o[0],i*r[1]+c*e[1]+u*n[1]+p*o[1]]},Ir=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),c=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,p=t*t*t;return[i*r[0]+c*e[0]+u*n[0]+p*o[0],i*r[1]+c*e[1]+u*n[1]+p*o[1],i*r[2]+c*e[2]+u*n[2]+p*o[2]]};var wr=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=Z(n);if(o===null)return null;let i=[t[2],r[2]];return a(o,i,e)},Sr=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=H(o);if(i===null)return null;let c=[t[3],r[3],e[3]];return a(i,c,n)},Dr=(t,r=1/0)=>{if(t.length<=0)return null;let e=F(t),n=I(e);if(n===null)return null;let o=B(t);return a(n,o,r)};0&&(module.exports={convertRange,degreesToRadians,doRangesOverlap,equationSystem2,equationSystem3,equationSystemN,getRandom,getRandomBoolean,getRandomInt,getRandomItemFromArray,getV2Angle,identity2,identity3,identityN,isNumber,m2Adjugate,m2AppendRow,m2DeepCopy,m2Determinant,m2DivideScalar,m2Inverse,m2MulScalar,m2PrependRow,m2Reset,m2Rotation,m2Scale,m2Sub,m2Sum,m2Transpose,m2x2,m3Adjugate,m3AppendRow,m3DeepCopy,m3Determinant,m3DivideScalar,m3Inverse,m3MulScalar,m3PrependRow,m3Reset,m3RotationX,m3RotationY,m3RotationZ,m3Scale,m3Sub,m3Sum,m3Transpose,m3x3,mAdjugate,mAppendCol,mAppendRow,mDeepCopy,mDelFirstColumn,mDelFirstRow,mDelLastColumn,mDelLastRow,mDeterminant,mDivideScalar,mEqual,mGetColumn,mGetFirstColumn,mGetLastColumn,mInverse,mMinor,mMul,mMulScalar,mMulVector,mNxM,mPrependCol,mPrependRow,mReset,mSub,mSum,mTranspose,mod,radiansToDegrees,setDecimalPlaces,setV2Angle,stringToNumber,v2,v2CubicBezierCurve,v2DivideScalar,v2DotProduct,v2Length,v2MulScalar,v2Normalize,v2QuadraticBezierCurve,v2Rotate,v2Scale,v2SetLength,v2Sub,v2Sum,v3,v3CrossProduct,v3CubicBezierCurve,v3DivideScalar,v3DotProduct,v3Length,v3MulScalar,v3Normalize,v3QuadraticBezierCurve,v3RotateX,v3RotateY,v3RotateZ,v3Scale,v3Sub,v3Sum,vDivideScalar,vDotProduct,vEqual,vLength,vMulScalar,vN,vNormalize,vSub,vSum});
//# sourceMappingURL=tc-math.node.cjs.map
