/* 
MZMath - a collection of TypeScript-based math helpers.
Version: 2.0.1
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-math
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var z=Math.pow;var c=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=z(10,r);return Math.round(t*e)/e};var d=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return c(e,r)},A=(t,r,e=1/0)=>{let n=j(t);return[c(Math.cos(r)*n,e),c(Math.sin(r)*n,e)]},Vt=(t,r=1/0)=>{let e=t*(180/Math.PI);return c(e,r)},bt=(t,r=1/0)=>{let e=t*(Math.PI/180);return c(e,r)},et=(t,r,e=1/0)=>{let n=y(t),o=y(r),i=b(n,o),s=Math.acos(i);return c(s,e)},gt=(t,r,e=1/0)=>{let n=M(t,r),o=Math.atan2(n[1],n[0]);return c(o,e)},yt=(t,r,e=1/0)=>et(t,r,e);var v=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]+r[o],e));return n},St=(t,r,e=1/0)=>v(t,r,e),wt=(t,r,e=1/0)=>v(t,r,e),M=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]-r[o],e));return n},B=(t,r,e=1/0)=>M(t,r,e),Rt=(t,r,e=1/0)=>M(t,r,e),I=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]*r,e));return n},Dt=(t,r,e=1/0)=>I(t,r,e),Lt=(t,r,e=1/0)=>I(t,r,e),S=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]/r,e));return n},Ct=(t,r,e=1/0)=>S(t,r,e),Ht=(t,r,e=1/0)=>S(t,r,e),g=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return c(Math.sqrt(e),r)},j=(t,r=1/0)=>g(t,r),Tt=(t,r=1/0)=>g(t,r),nt=(t,r,e=1/0)=>{let n=d(t);return[c(Math.cos(n)*r,e),c(Math.sin(n)*r,e)]},Et=(t,r,e=1/0)=>{let n=M(t,r);return g(n,e)},zt=(t,r,e=1/0)=>{let n=M(t,r);return g(n,e)},At=(t,r,e=1/0)=>{let n=M(t,r);return g(n,e)},y=(t,r=1/0)=>{let e=g(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:c(t[o]/e,r));return n},jt=(t,r=1/0)=>y(t,r),Bt=(t,r=1/0)=>y(t,r),b=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return c(n,e)},Nt=(t,r,e=1/0)=>b(t,r,e),qt=(t,r,e=1/0)=>b(t,r,e),Gt=(t,r,e=1/0)=>[c(t[1]*r[2]-t[2]*r[1],e),c(t[2]*r[0]-t[0]*r[2],e),c(t[0]*r[1]-t[1]*r[0],e)],Ft=(t=0)=>[t,t],Wt=(t=0)=>[t,t,t],$t=(t=0)=>[t,t,t,t],N=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},Qt=(t,r)=>{let e=[0,0];return e=nt(e,t),A(e,r)},q=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0};var G=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(v(t[o],r[o],e));return n},Jt=(t,r,e=1/0)=>G(t,r,e),Kt=(t,r,e=1/0)=>G(t,r,e),F=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(M(t[o],r[o],e));return n},Ut=(t,r,e=1/0)=>F(t,r,e),Xt=(t,r,e=1/0)=>F(t,r,e),W=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(I(o,r,e));return n},Yt=(t,r,e=1/0)=>W(t,r,e),Zt=(t,r,e=1/0)=>W(t,r,e),L=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(S(o,r,e));return n},ot=(t,r,e=1/0)=>L(t,r,e),_t=(t,r,e=1/0)=>L(t,r,e),w=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},Pt=t=>w(t),tr=t=>w(t),$=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let s=0;s<o;s++)i.push(r);e.push(i)}return e},rr=(t,r=0)=>$(t,r),er=(t,r=0)=>$(t,r),nr=(t=0)=>[[t,t],[t,t]],or=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],ir=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],sr=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(N(r,e));return n},cr=()=>[[1,0],[0,1]],ur=()=>[[1,0,0],[0,1,0],[0,0,1]],xr=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],ar=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},h=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},Q=t=>h(t),O=t=>h(t),pr=(t,r)=>{if(t.length<=0)return[];let e=h(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},mr=(t,r)=>{if(t.length<=0)return[];let e=h(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},fr=(t,r)=>{let e=h(t);return e.push(r),e},hr=(t,r)=>{let e=Q(t);return e.push(r),e},Mr=(t,r)=>{let e=O(t);return e.push(r),e},lr=(t,r)=>{let e=h(t);return e.unshift(r),e},Vr=(t,r)=>{let e=Q(t);return e.unshift(r),e},br=(t,r)=>{let e=O(t);return e.unshift(r),e},gr=t=>{if(t.length<=0)return[];let r=h(t);return r.pop(),r},yr=t=>{if(t.length<=0)return[];let r=h(t);return r.shift(),r},k=t=>{if(t.length<=0)return[];let r=h(t);for(let e=0;e<r.length;e++)r[e].pop();return r},dr=t=>{if(t.length<=0)return[];let r=h(t);for(let e=0;e<r.length;e++)r[e].shift();return r},vr=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},J=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},Ir=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},Sr=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=w(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let s=t[i];for(let u=0;u<o.length;u++){let x=o[u],a=b(s,x,e);n[i].push(a)}}return n},R=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=b(t[o],r,e);return n},wr=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!q(t[e],r[e]))return!1;return!0},it=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let s=[];for(let u=0;u<n;u++)u!==e&&s.push(t[i][u]);o.push(s)}return o},K=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=it(t,r,e);return D(o)},D=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return U(t);let e=0;for(let n=0;n<r;n++){let o=K(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},U=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},Rr=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return D(t)},X=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},Dr=t=>Y(t),Y=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return X(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let s=K(t,n,i),u=Math.pow(-1,n+i);o.push(u*s)}e.push(o)}return w(e)},Lr=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return D(t)===0},Z=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=U(t);if(e===0)return null;let n=X(t);return n===null?null:ot(n,e,r)},_=(t,r=1/0)=>C(t,r),C=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=D(t),o=Y(t);return o===null?null:L(o,n,r)};var p=(t,r,e=1/0)=>c(Math.random()*(r-t)+t,e),st=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),Tr=()=>Math.random()<.5,Er=t=>{let r=st(0,t.length-1);return t[r]};var H=(t,r)=>(t%r+r)%r,P=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,Ar=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),jr=t=>!isNaN(parseFloat(t))&&isFinite(t);var Nr=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var Gr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1]]},Fr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*e[0]+s*n[0],o*r[1]+i*e[1]+s*n[1],o*r[2]+i*e[2]+s*n[2]]},Wr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*e[0]+u*n[0]+x*o[0],i*r[1]+s*e[1]+u*n[1]+x*o[1]]},$r=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*e[0]+u*n[0]+x*o[0],i*r[1]+s*e[1]+u*n[1]+x*o[1],i*r[2]+s*e[2]+u*n[2]+x*o[2]]};var kr=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=Z(n);if(o===null)return null;let i=[t[2],r[2]];return R(o,i,e)},Jr=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=_(o);if(i===null)return null;let s=[t[3],r[3],e[3]];return R(i,s,n)},Kr=(t,r=1/0)=>{if(t.length<=0)return null;let e=k(t),n=C(e);if(n===null)return null;let o=J(t);return R(n,o,r)};var ct=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),_r=(t,r,e)=>{let n=B(t,r),o=d(n);return o=P(o,0,Math.PI*2,0,Math.PI),ct(r,o,e)},Pr=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),te=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]},re=(t,r,e,n,o,i,s)=>[t*Math.cos(n*e-i),r*Math.cos(o*e-s)];var se=()=>{let t=tt();return at(t)},ce=()=>{let t=tt();return pt(t)},tt=()=>{let t=p(1,360),r=p(0,100),e=p(0,100);return[t,r,e]},ue=t=>{let r=p(0,100),e=p(0,100);return[t,r,e]},xe=t=>{let r=p(1,360),e=p(0,100);return[r,t,e]},ae=t=>{let r=p(1,360),e=p(0,100);return[r,e,t]},pe=()=>[0,0,p(0,100)],me=(t=1,r=360,e=0,n=100,o=0,i=100)=>{let s=p(t,r),u=p(e,n),x=p(o,i);return[s,u,x]},T=t=>(t*=60,t<0&&(t+=360),t*100/360),ut=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:o===t?T((r-e)/(o-n)):o===r?T(2+(e-t)/(o-n)):o===e?T(4+(t-r)/(o-n)):0),rt=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,(n+o)/2*100),xt=(t,r,e,n=void 0,o=void 0,i=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:(i=i===void 0?rt(t,r,e):i,(i<=50?(o-n)/(o+n):(o-n)/(2-o-n))*100)),fe=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255,i=Math.min(e,n,o),s=Math.max(e,n,o),u=rt(e,n,o,i,s),x=xt(e,n,o,i,s,u),a=ut(e,n,o,i,s);return a>360||x>100||u>100?[0,0,100]:a<0||x<0||u<0?[0,0,0]:[c(a,r),c(x,r),c(u,r)]},E=(t,r,e)=>(e<0&&(e+=1),e>1&&(e-=1),e*6<1?r+(t-r)*6*e:e*2<1?t:e*3<2?r+(t-r)*(.666-e)*6:r),at=(t,r=1/0)=>{let e=t[0]/100,n=t[1]/100,o=t[2]/100;if(n===0){let m=o*255;return[m,m,m]}let i=o<.5?o*(1+n):o+n-o*n,s=2*o-i,u=e+.333,x=e,a=e-.333,l=E(i,s,u),f=E(i,s,x),V=E(i,s,a);return l*=255,f*=255,V*=255,l>255||f>255||V>255?[255,255,255]:l<0||f<0||V<0?[0,0,0]:[c(l,r),c(f,r),c(V,r)]},pt=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,e=t[1]/100,n=t[2]/100,o,i,s;if(e===0)o=i=s=n;else{let x=(f,V,m)=>(m<0&&(m+=1),m>1&&(m-=1),m<.16666666666666666?f+(V-f)*6*m:m<.5?V:m<.6666666666666666?f+(V-f)*(.6666666666666666-m)*6:f),a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;o=x(l,a,r+1/3),i=x(l,a,r),s=x(l,a,r-1/3)}let u=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${u(o)}${u(i)}${u(s)}`},he=(t,r=180)=>{let e=t[0];return e+=r,(e>360||e<0)&&(e=H(e,360)),[e,t[1],t[2]]},Me=(t,r=10)=>{let e=t[2];return e+=r,(e>100||e<0)&&(e=H(e,100)),[t[0],t[1],e]},le=(t,r=10)=>{let e=t[1];return e+=r,e>100&&(e-=100),e<0&&(e+=100),[t[0],e,t[2]]};var be=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=Math.random()*16|0;return(t=="x"?r:r&3|8).toString(16)}),ge=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var ve=(t,r=1/0)=>c(t*2/Math.sqrt(2),r);export{ct as circleMovement,_r as circleMovementAfterMouse,P as convertRange,bt as degreesToRadians,Ar as doRangesOverlap,Pr as ellipseMovement,kr as equationSystem2,Jr as equationSystem3,Kr as equationSystemN,p as getRandom,Tr as getRandomBoolean,pe as getRandomGrayscaleHSLColor,tt as getRandomHSLColor,ue as getRandomHSLColorWithHue,ae as getRandomHSLColorWithLightness,xe as getRandomHSLColorWithSaturation,me as getRandomHSLColorWithinRanges,ce as getRandomHexColor,st as getRandomInt,Er as getRandomItemFromArray,se as getRandomRGBColor,he as getShiftedHue,Me as getShiftedLightness,le as getShiftedSaturation,ve as getSquareInCircleSide,d as getV2Angle,gt as getV2AngleBetween,yt as getV3AngleBetween,et as getVNAngleBetween,be as guid,pt as hslToHex,at as hslToRgb,cr as identity2,ur as identity3,xr as identity4,ar as identityN,jr as isNumber,Lr as isSingularMatrix,re as lissajousCurve,X as m2Adjugate,hr as m2AppendRow,Q as m2DeepCopy,U as m2Determinant,ot as m2DivideScalar,Z as m2Inverse,Yt as m2MulScalar,Vr as m2PrependRow,rr as m2Reset,Ut as m2Sub,Jt as m2Sum,Pt as m2Transpose,nr as m2x2,Dr as m3Adjugate,Mr as m3AppendRow,O as m3DeepCopy,Rr as m3Determinant,_t as m3DivideScalar,_ as m3Inverse,Zt as m3MulScalar,br as m3PrependRow,er as m3Reset,Xt as m3Sub,Kt as m3Sum,tr as m3Transpose,or as m3x3,ir as m4x4,Y as mAdjugate,pr as mAppendCol,fr as mAppendRow,h as mDeepCopy,dr as mDelFirstColumn,yr as mDelFirstRow,k as mDelLastColumn,gr as mDelLastRow,D as mDeterminant,L as mDivideScalar,wr as mEqual,Ir as mGetColumn,vr as mGetFirstColumn,J as mGetLastColumn,C as mInverse,K as mMinor,Sr as mMul,W as mMulScalar,R as mMulVector,sr as mNxM,mr as mPrependCol,lr as mPrependRow,$ as mReset,F as mSub,G as mSum,w as mTranspose,H as mod,ge as newId,Vt as radiansToDegrees,fe as rgbToHsl,c as setDecimalPlaces,A as setV2Angle,te as sineWaveMovement,Nr as stringToNumber,Ft as v2,Wr as v2CubicBezierCurve,zt as v2Distance,Ct as v2DivideScalar,Nt as v2DotProduct,Qt as v2FromPolarCoords,j as v2Length,Dt as v2MulScalar,jt as v2Normalize,Gr as v2QuadraticBezierCurve,nt as v2SetLength,B as v2Sub,St as v2Sum,Wt as v3,Gt as v3CrossProduct,$r as v3CubicBezierCurve,At as v3Distance,Ht as v3DivideScalar,qt as v3DotProduct,Tt as v3Length,Lt as v3MulScalar,Bt as v3Normalize,Fr as v3QuadraticBezierCurve,Rt as v3Sub,wt as v3Sum,$t as v4,Et as vDistance,S as vDivideScalar,b as vDotProduct,q as vEqual,g as vLength,I as vMulScalar,N as vN,y as vNormalize,M as vSub,v as vSum};
//# sourceMappingURL=mz-math.esm.js.map
