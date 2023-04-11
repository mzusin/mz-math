/* 
mzMath - a collection of TypeScript-based math helpers.
Version: 3.0.2
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-math
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var z=Object.defineProperty;var Rt=Object.getOwnPropertyDescriptor;var wt=Object.getOwnPropertyNames;var Ht=Object.prototype.hasOwnProperty;var st=Math.pow;var Dt=(t,r)=>{for(var n in r)z(t,n,{get:r[n],enumerable:!0})},Ct=(t,r,n,e)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of wt(r))!Ht.call(t,o)&&o!==n&&z(t,o,{get:()=>r[o],enumerable:!(e=Rt(r,o))||e.enumerable});return t};var Lt=t=>Ct(z({},"__esModule",{value:!0}),t);var se={};Dt(se,{circleMovement:()=>It,circleMovementAfterMouse:()=>qn,convertRange:()=>et,degreesToRadians:()=>Tt,doRangesOverlap:()=>$n,ellipseMovement:()=>Gn,equationSystem2:()=>Xn,equationSystem3:()=>Yn,equationSystemN:()=>jn,getRandom:()=>m,getRandomBoolean:()=>Cn,getRandomGrayscaleHSLColor:()=>Kn,getRandomHSLColor:()=>ct,getRandomHSLColorWithHue:()=>kn,getRandomHSLColorWithLightness:()=>Jn,getRandomHSLColorWithSaturation:()=>Qn,getRandomHSLColorWithinRanges:()=>Un,getRandomHexColor:()=>On,getRandomInt:()=>yt,getRandomItemFromArray:()=>Ln,getRandomRGBColor:()=>Wn,getShiftedHue:()=>re,getShiftedLightness:()=>ne,getShiftedSaturation:()=>ee,getSquareInCircleSide:()=>ce,getV2Angle:()=>d,getV2AngleBetween:()=>Et,getV3AngleBetween:()=>At,getVNAngleBetween:()=>ut,guid:()=>oe,hslToHex:()=>dt,hslToRgb:()=>vt,identity2:()=>Mr,identity3:()=>fr,identity4:()=>hr,identityN:()=>Vr,isNumber:()=>Tn,isSingularMatrix:()=>Ar,lissajousCurve:()=>Fn,m2Adjugate:()=>_,m2AppendRow:()=>yr,m2DeepCopy:()=>O,m2Determinant:()=>U,m2DivideScalar:()=>at,m2Inverse:()=>tt,m2MulScalar:()=>nr,m2PrependRow:()=>vr,m2ReflectionOrigin:()=>mn,m2ReflectionOriginH:()=>Mn,m2ReflectionX:()=>bn,m2ReflectionXH:()=>ln,m2ReflectionY:()=>gn,m2ReflectionYH:()=>yn,m2ReflectionYmX:()=>Vn,m2Reset:()=>sr,m2RotateAroundPointH:()=>Gr,m2Rotation:()=>pt,m2RotationAroundPointH:()=>mt,m2RotationH:()=>nt,m2Scale:()=>bt,m2ScaleAtPointH:()=>Ur,m2ScaleAtPointHMatrix:()=>Vt,m2ScaleH:()=>lt,m2ScaleX:()=>rn,m2ScaleXH:()=>nn,m2ScaleY:()=>an,m2ScaleYH:()=>pn,m2ShearingX:()=>Dn,m2ShearingY:()=>Hn,m2Sub:()=>tr,m2Sum:()=>_t,m2ToCSS:()=>zr,m2Translation:()=>Yr,m2TranslationH:()=>L,m2Transpose:()=>ir,m2hToCSS:()=>Br,m2hToCSS3d:()=>Nr,m2x2:()=>xr,m3Adjugate:()=>Er,m3AppendRow:()=>Ir,m3DeepCopy:()=>k,m3Determinant:()=>Tr,m3DivideScalar:()=>or,m3Inverse:()=>rt,m3MulScalar:()=>er,m3PrependRow:()=>dr,m3ReflectionOrigin:()=>fn,m3ReflectionOriginH:()=>hn,m3ReflectionXY:()=>Rn,m3ReflectionXYH:()=>wn,m3ReflectionXZ:()=>vn,m3ReflectionXZH:()=>dn,m3ReflectionYZ:()=>In,m3ReflectionYZH:()=>Sn,m3Reset:()=>ur,m3RotationX:()=>Mt,m3RotationXH:()=>Wr,m3RotationY:()=>ft,m3RotationYH:()=>kr,m3RotationZ:()=>ht,m3RotationZH:()=>Jr,m3Scale:()=>gt,m3ScaleH:()=>Pr,m3ScaleX:()=>en,m3ScaleXH:()=>on,m3ScaleY:()=>cn,m3ScaleYH:()=>sn,m3ScaleZ:()=>un,m3ScaleZH:()=>xn,m3Sub:()=>rr,m3Sum:()=>Pt,m3Translation:()=>jr,m3TranslationH:()=>qr,m3Transpose:()=>cr,m3hToCSS3d:()=>Xr,m3x3:()=>ar,m4x4:()=>pr,mAdjugate:()=>P,mAppendCol:()=>br,mAppendRow:()=>gr,mDeepCopy:()=>f,mDelFirstColumn:()=>Hr,mDelFirstRow:()=>wr,mDelLastColumn:()=>Q,mDelLastRow:()=>Rr,mDeterminant:()=>C,mDivideScalar:()=>T,mEqual:()=>Lr,mGetColumn:()=>Cr,mGetFirstColumn:()=>Dr,mGetLastColumn:()=>J,mInverse:()=>E,mMinor:()=>K,mMul:()=>v,mMulScalar:()=>F,mMulVector:()=>p,mNxM:()=>mr,mPrependCol:()=>lr,mPrependRow:()=>Sr,mReset:()=>W,mSub:()=>Z,mSum:()=>G,mTranspose:()=>D,mod:()=>A,newId:()=>ie,radiansToDegrees:()=>$t,rgbToHsl:()=>te,setDecimalPlaces:()=>c,setV2Angle:()=>B,sineWaveMovement:()=>Zn,stringToNumber:()=>En,v2:()=>Qt,v2CubicBezierCurve:()=>Bn,v2Distance:()=>Zt,v2DivideScalar:()=>Yt,v2DotProduct:()=>Wt,v2FromPolarCoords:()=>Ut,v2Length:()=>N,v2MulScalar:()=>Xt,v2Normalize:()=>Y,v2QuadraticBezierCurve:()=>An,v2Rotate:()=>Zr,v2RotateH:()=>Fr,v2Scale:()=>_r,v2SetLength:()=>xt,v2Sub:()=>X,v2Sum:()=>zt,v3:()=>Jt,v3CrossProduct:()=>kt,v3CubicBezierCurve:()=>Nn,v3Distance:()=>Ft,v3DivideScalar:()=>jt,v3DotProduct:()=>Ot,v3Length:()=>qt,v3MulScalar:()=>$,v3Normalize:()=>S,v3QuadraticBezierCurve:()=>zn,v3RotateX:()=>Or,v3RotateY:()=>Qr,v3RotateZ:()=>Kr,v3Scale:()=>tn,v3Sub:()=>Nt,v3Sum:()=>Bt,v4:()=>Kt,vDistance:()=>Gt,vDivideScalar:()=>H,vDotProduct:()=>g,vEqual:()=>q,vLength:()=>y,vMulScalar:()=>w,vN:()=>j,vNormalize:()=>I,vSub:()=>V,vSum:()=>R});module.exports=Lt(se);var c=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let n=st(10,r);return Math.round(t*n)/n};var d=(t,r=1/0)=>{let n=Math.atan2(t[1],t[0]);return c(n,r)},B=(t,r,n=1/0)=>{let e=N(t);return[c(Math.cos(r)*e,n),c(Math.sin(r)*e,n)]},$t=(t,r=1/0)=>{let n=t*(180/Math.PI);return c(n,r)},Tt=(t,r=1/0)=>{let n=t*(Math.PI/180);return c(n,r)},ut=(t,r,n=1/0)=>{let e=I(t),o=I(r),i=g(e,o),s=Math.acos(i);return c(s,n)},Et=(t,r,n=1/0)=>{let e=V(t,r),o=Math.atan2(e[1],e[0]);return c(o,n)},At=(t,r,n=1/0)=>ut(t,r,n);var R=(t,r,n=1/0)=>{let e=[];for(let o=0;o<t.length;o++)e.push(c(t[o]+r[o],n));return e},zt=(t,r,n=1/0)=>R(t,r,n),Bt=(t,r,n=1/0)=>R(t,r,n),V=(t,r,n=1/0)=>{let e=[];for(let o=0;o<t.length;o++)e.push(c(t[o]-r[o],n));return e},X=(t,r,n=1/0)=>V(t,r,n),Nt=(t,r,n=1/0)=>V(t,r,n),w=(t,r,n=1/0)=>{let e=[];for(let o=0;o<t.length;o++)e.push(c(t[o]*r,n));return e},Xt=(t,r,n=1/0)=>w(t,r,n),$=(t,r,n=1/0)=>w(t,r,n),H=(t,r,n=1/0)=>{if(r===0)throw new Error("Division by zero error.");let e=[];for(let o=0;o<t.length;o++)e.push(c(t[o]/r,n));return e},Yt=(t,r,n=1/0)=>H(t,r,n),jt=(t,r,n=1/0)=>H(t,r,n),y=(t,r=1/0)=>{let n=0;for(let e=0;e<t.length;e++)n+=t[e]*t[e];return c(Math.sqrt(n),r)},N=(t,r=1/0)=>y(t,r),qt=(t,r=1/0)=>y(t,r),xt=(t,r,n=1/0)=>{let e=d(t);return[c(Math.cos(e)*r,n),c(Math.sin(e)*r,n)]},Gt=(t,r,n=1/0)=>{let e=V(t,r);return y(e,n)},Zt=(t,r,n=1/0)=>{let e=V(t,r);return y(e,n)},Ft=(t,r,n=1/0)=>{let e=V(t,r);return y(e,n)},I=(t,r=1/0)=>{let n=y(t),e=[];for(let o=0;o<t.length;o++)e.push(n===0?0:c(t[o]/n,r));return e},Y=(t,r=1/0)=>I(t,r),S=(t,r=1/0)=>I(t,r),g=(t,r,n=1/0)=>{let e=0;for(let o=0;o<t.length;o++)e+=t[o]*r[o];return c(e,n)},Wt=(t,r,n=1/0)=>g(t,r,n),Ot=(t,r,n=1/0)=>g(t,r,n),kt=(t,r,n=1/0)=>[c(t[1]*r[2]-t[2]*r[1],n),c(t[2]*r[0]-t[0]*r[2],n),c(t[0]*r[1]-t[1]*r[0],n)],Qt=(t=0)=>[t,t],Jt=(t=0)=>[t,t,t],Kt=(t=0)=>[t,t,t,t],j=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let n=[];for(let e=0;e<t;e++)n.push(r);return n},Ut=(t,r)=>{let n=[0,0];return n=xt(n,t),B(n,r)},q=(t,r)=>{if(t.length!==r.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==r[n])return!1;return!0};var G=(t,r,n=1/0)=>{let e=[];for(let o=0;o<t.length;o++)e.push(R(t[o],r[o],n));return e},_t=(t,r,n=1/0)=>G(t,r,n),Pt=(t,r,n=1/0)=>G(t,r,n),Z=(t,r,n=1/0)=>{let e=[];for(let o=0;o<t.length;o++)e.push(V(t[o],r[o],n));return e},tr=(t,r,n=1/0)=>Z(t,r,n),rr=(t,r,n=1/0)=>Z(t,r,n),F=(t,r,n=1/0)=>{let e=[];for(let o of t)e.push(w(o,r,n));return e},nr=(t,r,n=1/0)=>F(t,r,n),er=(t,r,n=1/0)=>F(t,r,n),T=(t,r,n=1/0)=>{if(r===0)throw new Error("Division by zero error.");let e=[];for(let o of t)e.push(H(o,r,n));return e},at=(t,r,n=1/0)=>T(t,r,n),or=(t,r,n=1/0)=>T(t,r,n),D=t=>{let r=t.length;if(r<=0)return t;let n=t[0].length;if(n<=0)return t;let e=[];for(let o=0;o<n;o++)e.push([]);for(let o=0;o<r;o++)for(let i=0;i<n;i++)e[i].push(t[o][i]);return e},ir=t=>D(t),cr=t=>D(t),W=(t,r=0)=>{if(t.length<=0)return[];let n=[];for(let e=0;e<t.length;e++){let o=t[e].length,i=[];for(let s=0;s<o;s++)i.push(r);n.push(i)}return n},sr=(t,r=0)=>W(t,r),ur=(t,r=0)=>W(t,r),xr=(t=0)=>[[t,t],[t,t]],ar=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],pr=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],mr=(t,r,n=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let e=[];for(let o=0;o<t;o++)e.push(j(r,n));return e},Mr=()=>[[1,0],[0,1]],fr=()=>[[1,0,0],[0,1,0],[0,0,1]],hr=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Vr=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let n=0;n<t;n++){let e=[];for(let o=0;o<t;o++)e.push(n===o?1:0);r.push(e)}return r},f=t=>{let r=[];for(let n=0;n<t.length;n++){let e=t[n],o=[];for(let i=0;i<e.length;i++)o.push(e[i]);r.push(o)}return r},O=t=>f(t),k=t=>f(t),br=(t,r)=>{if(t.length<=0)return[];let n=f(t);for(let e=0;e<n.length;e++)n[e].push(r[e]);return n},lr=(t,r)=>{if(t.length<=0)return[];let n=f(t);for(let e=0;e<n.length;e++)n[e].unshift(r[e]);return n},gr=(t,r)=>{let n=f(t);return n.push(r),n},yr=(t,r)=>{let n=O(t);return n.push(r),n},Ir=(t,r)=>{let n=k(t);return n.push(r),n},Sr=(t,r)=>{let n=f(t);return n.unshift(r),n},vr=(t,r)=>{let n=O(t);return n.unshift(r),n},dr=(t,r)=>{let n=k(t);return n.unshift(r),n},Rr=t=>{if(t.length<=0)return[];let r=f(t);return r.pop(),r},wr=t=>{if(t.length<=0)return[];let r=f(t);return r.shift(),r},Q=t=>{if(t.length<=0)return[];let r=f(t);for(let n=0;n<r.length;n++)r[n].pop();return r},Hr=t=>{if(t.length<=0)return[];let r=f(t);for(let n=0;n<r.length;n++)r[n].shift();return r},Dr=t=>{if(t.length<=0)return[];let r=[];for(let n=0;n<t.length;n++)r.push(t[n][0]);return r},J=t=>{if(t.length<=0)return[];let r=t[0].length,n=[];for(let e=0;e<t.length;e++)n.push(t[e][r-1]);return n},Cr=(t,r)=>{if(t.length<=0)return[];let n=[];for(let e=0;e<t.length;e++)n.push(t[e][r]);return n},v=(t,r,n=1/0)=>{let e=[];for(let i=0;i<t.length;i++)e.push([]);let o=D(r);if(e.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let s=t[i];for(let u=0;u<o.length;u++){let x=o[u],a=g(s,x,n);e[i].push(a)}}return e},p=(t,r,n=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let e=[];for(let o=0;o<t.length;o++)e[o]=g(t[o],r,n);return e},Lr=(t,r)=>{if(t.length!==r.length)return!1;for(let n=0;n<t.length;n++)if(!q(t[n],r[n]))return!1;return!0},$r=(t,r,n)=>{let e=t.length;if(e<=0)throw new Error("The matrix should not be empty.");if(e!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<e;i++){if(i===r)continue;let s=[];for(let u=0;u<e;u++)u!==n&&s.push(t[i][u]);o.push(s)}return o},K=(t,r,n)=>{let e=t.length;if(e<=0)throw new Error("The matrix should not be empty.");if(e!==t[0].length)throw new Error("The matrix must be square.");let o=$r(t,r,n);return C(o)},C=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return U(t);let n=0;for(let e=0;e<r;e++){let o=K(t,0,e),i=t[0][e];e%2!==0&&(i=-i),n+=o*i}return n},U=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},Tr=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return C(t)},_=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},Er=t=>P(t),P=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return _(t);let n=[];for(let e=0;e<r;e++){let o=[];for(let i=0;i<r;i++){let s=K(t,e,i),u=Math.pow(-1,e+i);o.push(u*s)}n.push(o)}return D(n)},Ar=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return C(t)===0},tt=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let n=U(t);if(n===0)return null;let e=_(t);return e===null?null:at(e,n,r)},rt=(t,r=1/0)=>E(t,r),E=(t,r=1/0)=>{let n=t.length;if(n>0&&n!==t[0].length)throw new Error("The matrix must be square.");let e=C(t),o=P(t);return o===null?null:T(o,e,r)};var zr=t=>{let r=t[0][0],n=t[1][0],e=t[0][1],o=t[1][1];return`matrix(${r}, ${n}, ${e}, ${o}, 0, 0)`},Br=t=>{let r=t[0][0],n=t[1][0],e=t[0][1],o=t[1][1],i=t[0][2],s=t[1][2];return`matrix(${r}, ${n}, ${e}, ${o}, ${i}, ${s})`},Nr=t=>{let r=t[0][0],n=t[1][0],e=t[0][1],o=t[1][1],i=t[0][2],s=t[1][2];return`matrix3d(${r}, ${n}, 0, 0, ${e}, ${o}, 0, 0, 0, 0, 1, 0, ${i}, ${s}, 0, 1)`},Xr=t=>`matrix3d(
        ${t[0][0]}, ${t[0][1]}, ${t[0][2]}, ${t[0][3]},
        ${t[1][0]}, ${t[1][1]}, ${t[1][2]}, ${t[1][3]},
        ${t[2][0]}, ${t[2][1]}, ${t[2][2]}, ${t[2][3]},
        ${t[3][0]}, ${t[3][1]}, ${t[3][2]}, ${t[3][3]}
    )`,Yr=(t,r=1/0)=>[[1,0],[0,1],[c(t[0],r),c(t[1],r)]],jr=(t,r=1/0)=>[[1,0,0],[0,1,0],[0,0,1],[c(t[0],r),c(t[1],r),c(t[2],r)]],L=(t,r=1/0)=>[[1,0,c(t[0],r)],[0,1,c(t[1],r)],[0,0,1]],qr=(t,r=1/0)=>[[1,0,0,c(t[0],r)],[0,1,0,c(t[1],r)],[0,0,1,c(t[2],r)],[0,0,0,1]],pt=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[e,-o],[o,e]]:[[e,o],[-o,e]]},nt=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[e,-o,0],[o,e,0],[0,0,1]]:[[e,o,0],[-o,e,0],[0,0,1]]},mt=(t,r,n=!0,e=1/0)=>{let o=L(r,e),i=nt(t,n,e),s=L($(r,-1),e),u=v(o,i);return v(u,s)},Gr=(t,r,n,e=!0,o=1/0)=>{let i=mt(t,r,e,o);return p(i,n)},Zr=(t,r,n=!0,e=1/0)=>{let o=Y(r);return p(pt(t,n,e),o)},Fr=(t,r,n=!0,e=1/0)=>{let o=S(r);return p(nt(t,n,e),o)},Mt=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[1,0,0],[0,e,-o],[0,o,e]]:[[1,0,0],[0,e,o],[0,-o,e]]},Wr=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[1,0,0,0],[0,e,-o,0],[0,o,e,0],[0,0,0,1]]:[[1,0,0,0],[0,e,o,0],[0,-o,e,0],[0,0,0,1]]},Or=(t,r,n=!0,e=1/0)=>{let o=S(r);return p(Mt(t,n,e),o)},ft=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[e,0,o],[0,1,0],[-o,0,e]]:[[e,0,-o],[0,1,0],[o,0,e]]},kr=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[e,0,o,0],[0,1,0,0],[-o,0,e,0],[0,0,0,1]]:[[e,0,-o,0],[0,1,0,0],[o,0,e,0],[0,0,0,1]]},Qr=(t,r,n=!0,e=1/0)=>{let o=S(r);return p(ft(t,n,e),o)},ht=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[e,-o,0],[o,e,0],[0,0,1]]:[[e,o,0],[-o,e,0],[0,0,1]]},Jr=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[e,-o,0,0],[o,e,0,0],[0,0,1,0],[0,0,0,1]]:[[e,o,0,0],[-o,e,0,0],[0,0,1,0],[0,0,0,1]]},Kr=(t,r,n=!0,e=1/0)=>{let o=S(r);return p(ht(t,n,e),o)},Vt=(t,r,n=1/0)=>{let e=L(r,n),o=lt(t),i=L($(r,-1),n),s=v(e,o);return v(s,i)},Ur=(t,r,n,e=1/0)=>{let o=Vt(t,r,e);return p(o,n)},bt=t=>[[t[0],0],[0,t[1]]],_r=(t,r)=>p(bt(t),r),lt=t=>[[t[0],0,0],[0,t[1],0],[0,0,1]],gt=t=>[[t[0],0,0],[0,t[1],0],[0,0,t[2]]],Pr=t=>[[t[0],0,0,0],[0,t[1],0,0],[0,0,t[2],0],[0,0,0,1]],tn=(t,r)=>p(gt(t),r),rn=t=>[[t,0],[0,1]],nn=t=>[[t,0,0],[0,1,0],[0,0,1]],en=t=>[[t,0,0],[0,1,0],[0,0,1]],on=t=>[[t,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],cn=t=>[[1,0,0],[0,t,0],[0,0,1]],sn=t=>[[1,0,0,0],[0,t,0,0],[0,0,1,0],[0,0,0,1]],un=t=>[[1,0,0],[0,1,0],[0,0,t]],xn=t=>[[1,0,0,0],[0,1,0,0],[0,0,t,0],[0,0,0,1]],an=t=>[[1,0],[0,t]],pn=t=>[[1,0,0],[0,t,0],[0,0,1]],mn=()=>[[-1,0],[0,-1]],Mn=()=>[[-1,0,0],[0,-1,0],[0,0,1]],fn=()=>[[-1,0,0],[0,-1,0],[0,0,-1]],hn=()=>[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],Vn=()=>[[0,-1],[-1,0]],bn=()=>[[1,0],[0,-1]],ln=()=>[[1,0,0],[0,-1,0],[0,0,1]],gn=()=>[[-1,0],[0,1]],yn=()=>[[-1,0,0],[0,1,0],[0,0,1]],In=()=>[[-1,0,0],[0,1,0],[0,0,1]],Sn=()=>[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],vn=()=>[[1,0,0],[0,-1,0],[0,0,1]],dn=()=>[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],Rn=()=>[[1,0,0],[0,1,0],[0,0,-1]],wn=()=>[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],Hn=t=>[[1,t],[0,1]],Dn=t=>[[1,0],[t,1]];var m=(t,r,n=1/0)=>c(Math.random()*(r-t)+t,n),yt=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),Cn=()=>Math.random()<.5,Ln=t=>{let r=yt(0,t.length-1);return t[r]};var A=(t,r)=>(t%r+r)%r,et=(t,r,n,e,o)=>(o-e)*(t-r)/(n-r)+e,$n=(t,r,n,e)=>Math.max(t,n)<=Math.min(r,e),Tn=t=>!isNaN(parseFloat(t))&&isFinite(t);var En=(t,r)=>{var e;if(t==null)return r;let n=(e=Number(t))!=null?e:r;return isNaN(n)?r:n};var An=(t,r,n,e)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*n[0]+s*e[0],o*r[1]+i*n[1]+s*e[1]]},zn=(t,r,n,e)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*n[0]+s*e[0],o*r[1]+i*n[1]+s*e[1],o*r[2]+i*n[2]+s*e[2]]},Bn=(t,r,n,e,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*n[0]+u*e[0]+x*o[0],i*r[1]+s*n[1]+u*e[1]+x*o[1]]},Nn=(t,r,n,e,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*n[0]+u*e[0]+x*o[0],i*r[1]+s*n[1]+u*e[1]+x*o[1],i*r[2]+s*n[2]+u*e[2]+x*o[2]]};var Xn=(t,r,n=1/0)=>{let e=[[t[0],t[1]],[r[0],r[1]]],o=tt(e);if(o===null)return null;let i=[t[2],r[2]];return p(o,i,n)},Yn=(t,r,n,e=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[n[0],n[1],n[2]]],i=rt(o);if(i===null)return null;let s=[t[3],r[3],n[3]];return p(i,s,e)},jn=(t,r=1/0)=>{if(t.length<=0)return null;let n=Q(t),e=E(n);if(e===null)return null;let o=J(t);return p(e,o,r)};var It=(t,r,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*n,t[1]+Math.sin(r)*n]),qn=(t,r,n)=>{let e=X(t,r),o=d(e);return o=et(o,0,Math.PI*2,0,Math.PI),It(r,o,n)},Gn=(t,r,n,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*n,t[1]+Math.sin(r)*e]),Zn=(t,r,n,e)=>{let o=r*Math.sin(2*Math.PI*n*t+e);return[t,o]},Fn=(t,r,n,e,o,i,s)=>[t*Math.cos(e*n-i),r*Math.cos(o*n-s)];var Wn=()=>{let t=ct();return vt(t)},On=()=>{let t=ct();return dt(t)},ct=()=>{let t=m(1,360),r=m(0,100),n=m(0,100);return[t,r,n]},kn=t=>{let r=m(0,100),n=m(0,100);return[t,r,n]},Qn=t=>{let r=m(1,360),n=m(0,100);return[r,t,n]},Jn=t=>{let r=m(1,360),n=m(0,100);return[r,n,t]},Kn=()=>[0,0,m(0,100)],Un=(t=1,r=360,n=0,e=100,o=0,i=100)=>{let s=m(t,r),u=m(n,e),x=m(o,i);return[s,u,x]},ot=t=>(t*=60,t<0&&(t+=360),t*100/360),_n=(t,r,n,e=void 0,o=void 0)=>(e=e===void 0?Math.min(t,r,n):e,o=e===void 0?Math.max(t,r,n):o,e===o?0:o===t?ot((r-n)/(o-e)):o===r?ot(2+(n-t)/(o-e)):o===n?ot(4+(t-r)/(o-e)):0),St=(t,r,n,e=void 0,o=void 0)=>(e=e===void 0?Math.min(t,r,n):e,o=e===void 0?Math.max(t,r,n):o,(e+o)/2*100),Pn=(t,r,n,e=void 0,o=void 0,i=void 0)=>(e=e===void 0?Math.min(t,r,n):e,o=e===void 0?Math.max(t,r,n):o,e===o?0:(i=i===void 0?St(t,r,n):i,(i<=50?(o-e)/(o+e):(o-e)/(2-o-e))*100)),te=(t,r=1/0)=>{let n=t[0]/255,e=t[1]/255,o=t[2]/255,i=Math.min(n,e,o),s=Math.max(n,e,o),u=St(n,e,o,i,s),x=Pn(n,e,o,i,s,u),a=_n(n,e,o,i,s);return a>360||x>100||u>100?[0,0,100]:a<0||x<0||u<0?[0,0,0]:[c(a,r),c(x,r),c(u,r)]},it=(t,r,n)=>(n<0&&(n+=1),n>1&&(n-=1),n*6<1?r+(t-r)*6*n:n*2<1?t:n*3<2?r+(t-r)*(.666-n)*6:r),vt=(t,r=1/0)=>{let n=t[0]/100,e=t[1]/100,o=t[2]/100;if(e===0){let M=o*255;return[M,M,M]}let i=o<.5?o*(1+e):o+e-o*e,s=2*o-i,u=n+.333,x=n,a=n-.333,b=it(i,s,u),h=it(i,s,x),l=it(i,s,a);return b*=255,h*=255,l*=255,b>255||h>255||l>255?[255,255,255]:b<0||h<0||l<0?[0,0,0]:[c(b,r),c(h,r),c(l,r)]},dt=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,n=t[1]/100,e=t[2]/100,o,i,s;if(n===0)o=i=s=e;else{let x=(h,l,M)=>(M<0&&(M+=1),M>1&&(M-=1),M<.16666666666666666?h+(l-h)*6*M:M<.5?l:M<.6666666666666666?h+(l-h)*(.6666666666666666-M)*6:h),a=e<.5?e*(1+n):e+n-e*n,b=2*e-a;o=x(b,a,r+1/3),i=x(b,a,r),s=x(b,a,r-1/3)}let u=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${u(o)}${u(i)}${u(s)}`},re=(t,r=180)=>{let n=t[0];return n+=r,(n>360||n<0)&&(n=A(n,360)),[n,t[1],t[2]]},ne=(t,r=10)=>{let n=t[2];return n+=r,(n>100||n<0)&&(n=A(n,100)),[t[0],t[1],n]},ee=(t,r=10)=>{let n=t[1];return n+=r,n>100&&(n-=100),n<0&&(n+=100),[t[0],n,t[2]]};var oe=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=Math.random()*16|0;return(t=="x"?r:r&3|8).toString(16)}),ie=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var ce=(t,r=1/0)=>c(t*2/Math.sqrt(2),r);0&&(module.exports={circleMovement,circleMovementAfterMouse,convertRange,degreesToRadians,doRangesOverlap,ellipseMovement,equationSystem2,equationSystem3,equationSystemN,getRandom,getRandomBoolean,getRandomGrayscaleHSLColor,getRandomHSLColor,getRandomHSLColorWithHue,getRandomHSLColorWithLightness,getRandomHSLColorWithSaturation,getRandomHSLColorWithinRanges,getRandomHexColor,getRandomInt,getRandomItemFromArray,getRandomRGBColor,getShiftedHue,getShiftedLightness,getShiftedSaturation,getSquareInCircleSide,getV2Angle,getV2AngleBetween,getV3AngleBetween,getVNAngleBetween,guid,hslToHex,hslToRgb,identity2,identity3,identity4,identityN,isNumber,isSingularMatrix,lissajousCurve,m2Adjugate,m2AppendRow,m2DeepCopy,m2Determinant,m2DivideScalar,m2Inverse,m2MulScalar,m2PrependRow,m2ReflectionOrigin,m2ReflectionOriginH,m2ReflectionX,m2ReflectionXH,m2ReflectionY,m2ReflectionYH,m2ReflectionYmX,m2Reset,m2RotateAroundPointH,m2Rotation,m2RotationAroundPointH,m2RotationH,m2Scale,m2ScaleAtPointH,m2ScaleAtPointHMatrix,m2ScaleH,m2ScaleX,m2ScaleXH,m2ScaleY,m2ScaleYH,m2ShearingX,m2ShearingY,m2Sub,m2Sum,m2ToCSS,m2Translation,m2TranslationH,m2Transpose,m2hToCSS,m2hToCSS3d,m2x2,m3Adjugate,m3AppendRow,m3DeepCopy,m3Determinant,m3DivideScalar,m3Inverse,m3MulScalar,m3PrependRow,m3ReflectionOrigin,m3ReflectionOriginH,m3ReflectionXY,m3ReflectionXYH,m3ReflectionXZ,m3ReflectionXZH,m3ReflectionYZ,m3ReflectionYZH,m3Reset,m3RotationX,m3RotationXH,m3RotationY,m3RotationYH,m3RotationZ,m3RotationZH,m3Scale,m3ScaleH,m3ScaleX,m3ScaleXH,m3ScaleY,m3ScaleYH,m3ScaleZ,m3ScaleZH,m3Sub,m3Sum,m3Translation,m3TranslationH,m3Transpose,m3hToCSS3d,m3x3,m4x4,mAdjugate,mAppendCol,mAppendRow,mDeepCopy,mDelFirstColumn,mDelFirstRow,mDelLastColumn,mDelLastRow,mDeterminant,mDivideScalar,mEqual,mGetColumn,mGetFirstColumn,mGetLastColumn,mInverse,mMinor,mMul,mMulScalar,mMulVector,mNxM,mPrependCol,mPrependRow,mReset,mSub,mSum,mTranspose,mod,newId,radiansToDegrees,rgbToHsl,setDecimalPlaces,setV2Angle,sineWaveMovement,stringToNumber,v2,v2CubicBezierCurve,v2Distance,v2DivideScalar,v2DotProduct,v2FromPolarCoords,v2Length,v2MulScalar,v2Normalize,v2QuadraticBezierCurve,v2Rotate,v2RotateH,v2Scale,v2SetLength,v2Sub,v2Sum,v3,v3CrossProduct,v3CubicBezierCurve,v3Distance,v3DivideScalar,v3DotProduct,v3Length,v3MulScalar,v3Normalize,v3QuadraticBezierCurve,v3RotateX,v3RotateY,v3RotateZ,v3Scale,v3Sub,v3Sum,v4,vDistance,vDivideScalar,vDotProduct,vEqual,vLength,vMulScalar,vN,vNormalize,vSub,vSum});
//# sourceMappingURL=mz-math.node.cjs.map
