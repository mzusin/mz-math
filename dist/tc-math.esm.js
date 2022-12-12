/* 
Tool Cool Math Helpers
Version: 1.0.13
Documentation: https://github.com/toolcool-org/toolcool-math
License: MIT License        
Author: Tool Cool, toolcool.org@gmail.com>                          
*/
var I=Math.pow;var u=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=I(10,r);return Math.round(t*e)/e};var w=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return u(e,r)},rt=(t,r,e=1/0)=>{let n=S(t);return[u(Math.cos(r)*n,e),u(Math.sin(r)*n,e)]},et=(t,r=1/0)=>{let e=t*(180/Math.PI);return u(e,r)},nt=(t,r=1/0)=>{let e=t*(Math.PI/180);return u(e,r)};var m=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]+r[o],e));return n},st=(t,r,e=1/0)=>m(t,r,e),ut=(t,r,e=1/0)=>m(t,r,e),M=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]-r[o],e));return n},xt=(t,r,e=1/0)=>M(t,r,e),at=(t,r,e=1/0)=>M(t,r,e),h=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]*r,e));return n},pt=(t,r,e=1/0)=>h(t,r,e),mt=(t,r,e=1/0)=>h(t,r,e),f=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(u(t[o]/r,e));return n},Mt=(t,r,e=1/0)=>f(t,r,e),ht=(t,r,e=1/0)=>f(t,r,e),b=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return u(Math.sqrt(e),r)},S=(t,r=1/0)=>b(t,r),ft=(t,r=1/0)=>b(t,r),Vt=(t,r,e=1/0)=>{let n=w(t);return[u(Math.cos(n)*r,e),u(Math.sin(n)*r,e)]},D=(t,r=1/0)=>{let e=b(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:u(t[o]/e,r));return n},E=(t,r=1/0)=>D(t,r),V=(t,r=1/0)=>D(t,r),p=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return u(n,e)},lt=(t,r,e=1/0)=>p(t,r,e),bt=(t,r,e=1/0)=>p(t,r,e),gt=(t,r,e=1/0)=>[u(t[1]*r[2]-t[2]*r[1],e),u(t[2]*r[0]-t[0]*r[2],e),u(t[0]*r[1]-t[1]*r[0],e)],vt=(t=0)=>[t,t],yt=(t=0)=>[t,t,t],T=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},z=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0};var d=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(m(t[o],r[o],e));return n},St=(t,r,e=1/0)=>d(t,r,e),Dt=(t,r,e=1/0)=>d(t,r,e),j=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(M(t[o],r[o],e));return n},Et=(t,r,e=1/0)=>j(t,r,e),Tt=(t,r,e=1/0)=>j(t,r,e),N=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(h(o,r,e));return n},zt=(t,r,e=1/0)=>N(t,r,e),dt=(t,r,e=1/0)=>N(t,r,e),g=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push(f(o,r,e));return n},Z=(t,r,e=1/0)=>g(t,r,e),jt=(t,r,e=1/0)=>g(t,r,e),l=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},Nt=t=>l(t),qt=t=>l(t),q=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let c=0;c<o;c++)i.push(r);e.push(i)}return e},Rt=(t,r=0)=>q(t,r),At=(t,r=0)=>q(t,r),Bt=(t=0)=>[[t,t],[t,t]],Lt=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],Ft=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(T(r,e));return n},Qt=()=>[[1,0],[0,1]],Xt=()=>[[1,0,0],[0,1,0],[0,0,1]],Yt=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},R=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},Zt=t=>R(t),Ht=t=>R(t),Ot=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=l(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let c=t[i];for(let s=0;s<o.length;s++){let x=o[s],Y=p(c,x,e);n[i].push(Y)}}return n},a=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=p(t[o],r,e);return n},kt=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!z(t[e],r[e]))return!1;return!0},H=t=>[[Math.cos(t),-Math.sin(t)],[Math.sin(t),Math.cos(t)]],Gt=(t,r)=>{let e=E(r);return a(H(t),e)},O=t=>[[1,0,0],[0,Math.cos(t),-Math.sin(t)],[0,Math.sin(t),Math.cos(t)]],Jt=(t,r)=>{let e=V(r);return a(O(t),e)},k=t=>[[Math.cos(t),0,Math.sin(t)],[0,1,0],[-Math.sin(t),0,Math.cos(t)]],Kt=(t,r)=>{let e=V(r);return a(k(t),e)},G=t=>[[Math.cos(t),-Math.sin(t),0],[Math.sin(t),Math.cos(t),0],[0,0,1]],Ut=(t,r)=>{let e=V(r);return a(G(t),e)},J=t=>[[t[0],0],[0,t[1]]],Wt=(t,r)=>a(J(t),r),K=t=>[[t[0],0,0],[0,t[1],0],[0,0,t[2]]],_t=(t,r)=>a(K(t),r),U=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let c=[];for(let s=0;s<n;s++)s!==e&&c.push(t[i][s]);o.push(c)}return o},A=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=U(t,r,e);return v(o)},v=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return B(t);let e=0;for(let n=0;n<r;n++){let o=A(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},B=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},$t=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return v(t)},L=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},Ct=t=>F(t),F=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return L(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let c=A(t,n,i),s=Math.pow(-1,n+i);o.push(s*c)}e.push(o)}return l(e)},Q=(t,r=1/0)=>{if(t.length<=0)return null;if(t.length!==t[0].length)throw new Error("The matrix must be square.");let e=B(t);if(e===0)return null;let n=L(t);return n===null?null:Z(n,e,r)},X=(t,r=1/0)=>y(t,r),y=(t,r=1/0)=>{let e=t.length;if(e<=0)return null;if(e!==t[0].length)throw new Error("The matrix must be square.");let n=v(t),o=F(t);return o===null?null:g(o,n,r)};var rr=(t,r,e=1/0)=>u(Math.random()*(r-t)+t,e),W=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),er=()=>Math.random()<.5,nr=t=>{let r=W(0,t.length-1);return t[r]};var ir=(t,r)=>(t%r+r)%r,cr=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,sr=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),ur=t=>!isNaN(parseFloat(t))&&isFinite(t);var ar=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var mr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,c=t*t;return[o*r[0]+i*e[0]+c*n[0],o*r[1]+i*e[1]+c*n[1]]},Mr=(t,r,e,n)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,c=t*t;return[o*r[0]+i*e[0]+c*n[0],o*r[1]+i*e[1]+c*n[1],o*r[2]+i*e[2]+c*n[2]]},hr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),c=Math.pow(1-t,2)*3*t,s=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+c*e[0]+s*n[0]+x*o[0],i*r[1]+c*e[1]+s*n[1]+x*o[1]]},fr=(t,r,e,n,o)=>{let i=Math.pow(1-t,3),c=Math.pow(1-t,2)*3*t,s=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+c*e[0]+s*n[0]+x*o[0],i*r[1]+c*e[1]+s*n[1]+x*o[1],i*r[2]+c*e[2]+s*n[2]+x*o[2]]};var br=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=Q(n);if(o===null)return null;let i=[t[2],r[2]];return a(o,i,e)},gr=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=X(o);if(i===null)return null;let c=[t[3],r[3],e[3]];return a(i,c,n)},vr=(t,r=1/0)=>{if(t.length<=0)return null;let e=[],n=t.length;for(let c=0;c<n;c++){let s=[];for(let x=0;x<n;x++)s.push(t[c][x]);e.push(s)}let o=y(e);if(o===null)return null;let i=[];for(let c=0;c<n;c++){let s=t[c];i.push(s[s.length-1])}return a(o,i,r)};export{cr as convertRange,nt as degreesToRadians,sr as doRangesOverlap,br as equationSystem2,gr as equationSystem3,vr as equationSystemN,rr as getRandom,er as getRandomBoolean,W as getRandomInt,nr as getRandomItemFromArray,w as getV2Angle,Qt as identity2,Xt as identity3,Yt as identityN,ur as isNumber,L as m2Adjugate,Zt as m2DeepCopy,B as m2Determinant,Z as m2DivideScalar,Q as m2Inverse,zt as m2MulScalar,Rt as m2Reset,H as m2Rotation,J as m2Scale,Et as m2Sub,St as m2Sum,Nt as m2Transpose,Bt as m2x2,Ct as m3Adjugate,Ht as m3DeepCopy,$t as m3Determinant,jt as m3DivideScalar,X as m3Inverse,dt as m3MulScalar,At as m3Reset,O as m3RotationX,k as m3RotationY,G as m3RotationZ,K as m3Scale,Tt as m3Sub,Dt as m3Sum,qt as m3Transpose,Lt as m3x3,F as mAdjugate,R as mDeepCopy,v as mDeterminant,g as mDivideScalar,kt as mEqual,y as mInverse,A as mMinor,Ot as mMul,N as mMulScalar,a as mMulVector,Ft as mNxM,q as mReset,j as mSub,d as mSum,l as mTranspose,ir as mod,et as radiansToDegrees,u as setDecimalPlaces,rt as setV2Angle,ar as stringToNumber,vt as v2,hr as v2CubicBezierCurve,Mt as v2DivideScalar,lt as v2DotProduct,S as v2Length,pt as v2MulScalar,E as v2Normalize,mr as v2QuadraticBezierCurve,Gt as v2Rotate,Wt as v2Scale,Vt as v2SetLength,xt as v2Sub,st as v2Sum,yt as v3,gt as v3CrossProduct,fr as v3CubicBezierCurve,ht as v3DivideScalar,bt as v3DotProduct,ft as v3Length,mt as v3MulScalar,V as v3Normalize,Mr as v3QuadraticBezierCurve,Jt as v3RotateX,Kt as v3RotateY,Ut as v3RotateZ,_t as v3Scale,at as v3Sub,ut as v3Sum,f as vDivideScalar,p as vDotProduct,z as vEqual,b as vLength,h as vMulScalar,T as vN,D as vNormalize,M as vSub,m as vSum};
//# sourceMappingURL=tc-math.esm.js.map
