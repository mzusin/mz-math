/* 
Tool Cool Math Helpers
Version: 1.0.19
Documentation: https://github.com/toolcool-org/toolcool-math
License: MIT License        
Author: Tool Cool, toolcool.org@gmail.com>                          
*/
var S=Math.pow;var s=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=S(10,r);return Math.round(t*e)/e};var M=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return s(e,r)},rt=(t,r,e=1/0)=>{let n=E(t);return[s(Math.cos(r)*n,e),s(Math.sin(r)*n,e)]},et=(t,r=1/0)=>{let e=t*(180/Math.PI);return s(e,r)},nt=(t,r=1/0)=>{let e=t*(Math.PI/180);return s(e,r)},D=(t,r,e=1/0)=>{let n=m(t),o=m(r),i=a(n,o),c=Math.acos(i);return s(c,e)},ot=(t,r,e=1/0)=>D(t,r,e),it=(t,r,e=1/0)=>D(t,r,e);var h=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]+r[o],e));return n},xt=(t,r,e=1/0)=>h(t,r,e),pt=(t,r,e=1/0)=>h(t,r,e),f=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]-r[o],e));return n},R=(t,r,e=1/0)=>f(t,r,e),at=(t,r,e=1/0)=>f(t,r,e),l=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]*r,e));return n},mt=(t,r,e=1/0)=>l(t,r,e),Mt=(t,r,e=1/0)=>l(t,r,e),V=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(s(t[o]/r,e));return n},ht=(t,r,e=1/0)=>V(t,r,e),ft=(t,r,e=1/0)=>V(t,r,e),v=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return s(Math.sqrt(e),r)},E=(t,r=1/0)=>v(t,r),lt=(t,r=1/0)=>v(t,r),Vt=(t,r,e=1/0)=>{let n=M(t);return[s(Math.cos(n)*r,e),s(Math.sin(n)*r,e)]},m=(t,r=1/0)=>{let e=v(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:s(t[o]/e,r));return n},gt=(t,r=1/0)=>m(t,r),bt=(t,r=1/0)=>m(t,r),a=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return s(n,e)},yt=(t,r,e=1/0)=>a(t,r,e),vt=(t,r,e=1/0)=>a(t,r,e),It=(t,r,e=1/0)=>[s(t[1]*r[2]-t[2]*r[1],e),s(t[2]*r[0]-t[0]*r[2],e),s(t[0]*r[1]-t[1]*r[0],e)],wt=(t=0)=>[t,t],St=(t=0)=>[t,t,t],Dt=(t=0)=>[t,t,t,t],d=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},T=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0};var z=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(h(t[o],r[o],e));return n},dt=(t,r,e=1/0)=>z(t,r,e),Tt=(t,r,e=1/0)=>z(t,r,e),A=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(f(t[o],r[o],e));return n},zt=(t,r,e=1/0)=>A(t,r,e),At=(t,r,e=1/0)=>A(t,r,e),N=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(l(o,r,e));return n},Nt=(t,r,e=1/0)=>N(t,r,e),jt=(t,r,e=1/0)=>N(t,r,e),I=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(V(o,r,e));return n},U=(t,r,e=1/0)=>I(t,r,e),qt=(t,r,e=1/0)=>I(t,r,e),g=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},Lt=t=>g(t),Bt=t=>g(t),j=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let c=0;c<o;c++)i.push(r);e.push(i)}return e},Ft=(t,r=0)=>j(t,r),Gt=(t,r=0)=>j(t,r),Qt=(t=0)=>[[t,t],[t,t]],Ht=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],Ot=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],Wt=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(d(r,e));return n},kt=()=>[[1,0],[0,1]],Jt=()=>[[1,0,0],[0,1,0],[0,0,1]],Kt=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Ut=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},x=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},q=t=>x(t),L=t=>x(t),Xt=(t,r)=>{if(t.length<=0)return[];let e=x(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},Yt=(t,r)=>{if(t.length<=0)return[];let e=x(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},Zt=(t,r)=>{let e=x(t);return e.push(r),e},_t=(t,r)=>{let e=q(t);return e.push(r),e},$t=(t,r)=>{let e=L(t);return e.push(r),e},Ct=(t,r)=>{let e=x(t);return e.unshift(r),e},Pt=(t,r)=>{let e=q(t);return e.unshift(r),e},tr=(t,r)=>{let e=L(t);return e.unshift(r),e},rr=t=>{if(t.length<=0)return[];let r=x(t);return r.pop(),r},er=t=>{if(t.length<=0)return[];let r=x(t);return r.shift(),r},B=t=>{if(t.length<=0)return[];let r=x(t);for(let e=0;e<r.length;e++)r[e].pop();return r},nr=t=>{if(t.length<=0)return[];let r=x(t);for(let e=0;e<r.length;e++)r[e].shift();return r},or=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},F=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},ir=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},cr=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=g(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let c=t[i];for(let u=0;u<o.length;u++){let p=o[u],K=a(c,p,e);n[i].push(K)}}return n},b=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=a(t[o],r,e);return n},sr=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!T(t[e],r[e]))return!1;return!0},X=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let c=[];for(let u=0;u<n;u++)u!==e&&c.push(t[i][u]);o.push(c)}return o},G=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=X(t,r,e);return y(o)},y=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return Q(t);let e=0;for(let n=0;n<r;n++){let o=G(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},Q=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},ur=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return y(t)},H=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},xr=t=>O(t),O=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return H(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let c=G(t,n,i),u=Math.pow(-1,n+i);o.push(u*c)}e.push(o)}return g(e)},pr=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return y(t)===0},W=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=Q(t);if(e===0)return null;let n=H(t);return n===null?null:U(n,e,r)},k=(t,r=1/0)=>w(t,r),w=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=y(t),o=O(t);return o===null?null:I(o,n,r)};var Mr=(t,r,e=1/0)=>s(Math.random()*(r-t)+t,e),Y=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),hr=()=>Math.random()<.5,fr=t=>{let r=Y(0,t.length-1);return t[r]};var Vr=(t,r)=>(t%r+r)%r,J=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,gr=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),br=t=>!isNaN(parseFloat(t))&&isFinite(t);var vr=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var wr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,c=t*t;return[o*r[0]+i*e[0]+c*n[0],o*r[1]+i*e[1]+c*n[1]]},Sr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,c=t*t;return[o*r[0]+i*e[0]+c*n[0],o*r[1]+i*e[1]+c*n[1],o*r[2]+i*e[2]+c*n[2]]},Dr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),c=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,p=t*t*t;return[i*r[0]+c*e[0]+u*n[0]+p*o[0],i*r[1]+c*e[1]+u*n[1]+p*o[1]]},Er=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),c=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,p=t*t*t;return[i*r[0]+c*e[0]+u*n[0]+p*o[0],i*r[1]+c*e[1]+u*n[1]+p*o[1],i*r[2]+c*e[2]+u*n[2]+p*o[2]]};var Tr=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=W(n);if(o===null)return null;let i=[t[2],r[2]];return b(o,i,e)},zr=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=k(o);if(i===null)return null;let c=[t[3],r[3],e[3]];return b(i,c,n)},Ar=(t,r=1/0)=>{if(t.length<=0)return null;let e=B(t),n=w(e);if(n===null)return null;let o=F(t);return b(n,o,r)};var Z=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),Br=(t,r,e)=>{let n=R(t,r),o=M(n);return o=J(o,0,Math.PI*2,0,Math.PI),Z(r,o,e)},Fr=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),Gr=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]};export{Z as circleMovement,Br as circleMovementAfterMouse,J as convertRange,nt as degreesToRadians,gr as doRangesOverlap,Fr as ellipseMovement,Tr as equationSystem2,zr as equationSystem3,Ar as equationSystemN,Mr as getRandom,hr as getRandomBoolean,Y as getRandomInt,fr as getRandomItemFromArray,M as getV2Angle,ot as getV2AngleBetween,it as getV3AngleBetween,D as getVNAngleBetween,kt as identity2,Jt as identity3,Kt as identity4,Ut as identityN,br as isNumber,pr as isSingularMatrix,H as m2Adjugate,_t as m2AppendRow,q as m2DeepCopy,Q as m2Determinant,U as m2DivideScalar,W as m2Inverse,Nt as m2MulScalar,Pt as m2PrependRow,Ft as m2Reset,zt as m2Sub,dt as m2Sum,Lt as m2Transpose,Qt as m2x2,xr as m3Adjugate,$t as m3AppendRow,L as m3DeepCopy,ur as m3Determinant,qt as m3DivideScalar,k as m3Inverse,jt as m3MulScalar,tr as m3PrependRow,Gt as m3Reset,At as m3Sub,Tt as m3Sum,Bt as m3Transpose,Ht as m3x3,Ot as m4x4,O as mAdjugate,Xt as mAppendCol,Zt as mAppendRow,x as mDeepCopy,nr as mDelFirstColumn,er as mDelFirstRow,B as mDelLastColumn,rr as mDelLastRow,y as mDeterminant,I as mDivideScalar,sr as mEqual,ir as mGetColumn,or as mGetFirstColumn,F as mGetLastColumn,w as mInverse,G as mMinor,cr as mMul,N as mMulScalar,b as mMulVector,Wt as mNxM,Yt as mPrependCol,Ct as mPrependRow,j as mReset,A as mSub,z as mSum,g as mTranspose,Vr as mod,et as radiansToDegrees,s as setDecimalPlaces,rt as setV2Angle,Gr as sineWaveMovement,vr as stringToNumber,wt as v2,Dr as v2CubicBezierCurve,ht as v2DivideScalar,yt as v2DotProduct,E as v2Length,mt as v2MulScalar,gt as v2Normalize,wr as v2QuadraticBezierCurve,Vt as v2SetLength,R as v2Sub,xt as v2Sum,St as v3,It as v3CrossProduct,Er as v3CubicBezierCurve,ft as v3DivideScalar,vt as v3DotProduct,lt as v3Length,Mt as v3MulScalar,bt as v3Normalize,Sr as v3QuadraticBezierCurve,at as v3Sub,pt as v3Sum,Dt as v4,V as vDivideScalar,a as vDotProduct,T as vEqual,v as vLength,l as vMulScalar,d as vN,m as vNormalize,f as vSub,h as vSum};
//# sourceMappingURL=tc-math.esm.js.map
