/* 
mzMath - a collection of TypeScript-based math helpers.
Version: 3.0.5
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-math
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var Q=Object.defineProperty;var Jt=Object.getOwnPropertyDescriptor;var Kt=Object.getOwnPropertyNames;var Ut=Object.prototype.hasOwnProperty;var g=Math.pow;var Pt=(t,r)=>{for(var e in r)Q(t,e,{get:r[e],enumerable:!0})},tr=(t,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of Kt(r))!Ut.call(t,o)&&o!==e&&Q(t,o,{get:()=>r[o],enumerable:!(n=Jt(r,o))||n.enumerable});return t};var rr=t=>tr(Q({},"__esModule",{value:!0}),t);var kn={};Pt(kn,{animate:()=>Cn,circleCollide:()=>Fn,circleMovement:()=>Ot,circleMovementAfterMouse:()=>vn,convertRange:()=>mt,convexPolygonsCollide:()=>Zn,degreesToRadians:()=>nr,doRangesOverlap:()=>tn,dxArcCos:()=>xn,dxArcCot:()=>mn,dxArcSin:()=>un,dxArcTan:()=>an,dxCos:()=>on,dxCot:()=>sn,dxPolynomial:()=>en,dxSin:()=>nn,dxTan:()=>cn,dxV2CubicBezierCurve:()=>Mt,dxV2QuadraticBezierCurve:()=>ft,dxV3CubicBezierCurve:()=>ht,dxV3QuadraticBezierCurve:()=>pt,ellipseMovement:()=>Sn,getRandom:()=>V,getRandomBoolean:()=>Ue,getRandomGrayscaleHSLColor:()=>En,getRandomHSLColor:()=>gt,getRandomHSLColorWithHue:()=>Tn,getRandomHSLColorWithLightness:()=>Dn,getRandomHSLColorWithSaturation:()=>Bn,getRandomHSLColorWithinRanges:()=>An,getRandomHexColor:()=>zn,getRandomInt:()=>Lt,getRandomItemFromArray:()=>Pe,getRandomRGBColor:()=>Hn,getShiftedHue:()=>qn,getShiftedLightness:()=>Xn,getShiftedSaturation:()=>Yn,getSquareInCircleSide:()=>Gn,getV2Angle:()=>E,getV2AngleBetween:()=>or,getV3AngleBetween:()=>ir,getVNAngleBetween:()=>lt,guid:()=>jn,hslToHex:()=>Ft,hslToRgb:()=>Qt,identity2:()=>qr,identity3:()=>Xr,identity4:()=>Yr,identityN:()=>jr,isNumber:()=>z,isSingularMatrix:()=>oe,linearEquation:()=>T,linearEquationSystem2:()=>fn,linearEquationSystem3:()=>pn,linearEquationSystemN:()=>Mn,lissajousCurve:()=>wn,m2Adjugate:()=>ct,m2AppendRow:()=>Fr,m2DeepCopy:()=>tt,m2Determinant:()=>it,m2DivideScalar:()=>St,m2Inverse:()=>ut,m2MulScalar:()=>wr,m2PrependRow:()=>kr,m2ReflectionOrigin:()=>$e,m2ReflectionOriginH:()=>Ne,m2ReflectionX:()=>je,m2ReflectionXH:()=>Oe,m2ReflectionY:()=>Ge,m2ReflectionYH:()=>Qe,m2ReflectionYmX:()=>Ye,m2Reset:()=>Dr,m2RotateAroundPointH:()=>fe,m2Rotation:()=>Rt,m2RotationAroundPointH:()=>wt,m2RotationH:()=>at,m2Scale:()=>Dt,m2ScaleAtPointH:()=>de,m2ScaleAtPointHMatrix:()=>Bt,m2ScaleH:()=>Et,m2ScaleX:()=>Re,m2ScaleXH:()=>we,m2ScaleY:()=>Ae,m2ScaleYH:()=>Le,m2ShearingX:()=>Ke,m2ShearingY:()=>Je,m2Sub:()=>Sr,m2Sum:()=>lr,m2ToCSS:()=>ie,m2Translation:()=>xe,m2TranslationH:()=>X,m2Transpose:()=>Tr,m2hToCSS:()=>ce,m2hToCSS3d:()=>se,m2x2:()=>Ar,m3Adjugate:()=>ne,m3AppendRow:()=>Zr,m3DeepCopy:()=>rt,m3Determinant:()=>ee,m3DivideScalar:()=>zr,m3Inverse:()=>xt,m3MulScalar:()=>Hr,m3PrependRow:()=>Wr,m3ReflectionOrigin:()=>qe,m3ReflectionOriginH:()=>Xe,m3ReflectionXY:()=>We,m3ReflectionXYH:()=>_e,m3ReflectionXZ:()=>Ce,m3ReflectionXZH:()=>ke,m3ReflectionYZ:()=>Fe,m3ReflectionYZH:()=>Ze,m3Reset:()=>Er,m3RotationX:()=>Ht,m3RotationXH:()=>he,m3RotationY:()=>zt,m3RotationYH:()=>be,m3RotationZ:()=>Tt,m3RotationZH:()=>ge,m3Scale:()=>At,m3ScaleH:()=>ve,m3ScaleX:()=>He,m3ScaleXH:()=>ze,m3ScaleY:()=>Te,m3ScaleYH:()=>Be,m3ScaleZ:()=>De,m3ScaleZH:()=>Ee,m3Sub:()=>Rr,m3Sum:()=>vr,m3Translation:()=>ae,m3TranslationH:()=>me,m3Transpose:()=>Br,m3hToCSS3d:()=>ue,m3x3:()=>Lr,m4x4:()=>$r,mAdjugate:()=>st,mAppendCol:()=>Or,mAppendRow:()=>Qr,mDeepCopy:()=>b,mDelFirstColumn:()=>Kr,mDelFirstRow:()=>Jr,mDelLastColumn:()=>et,mDelLastRow:()=>_r,mDeterminant:()=>q,mDivideScalar:()=>O,mEqual:()=>te,mGetColumn:()=>Pr,mGetFirstColumn:()=>Ur,mGetLastColumn:()=>nt,mInverse:()=>G,mMinor:()=>ot,mMul:()=>w,mMulScalar:()=>U,mMulVector:()=>h,mNxM:()=>Nr,mPrependCol:()=>Gr,mPrependRow:()=>Cr,mReset:()=>P,mSub:()=>K,mSum:()=>J,mTranspose:()=>N,mod:()=>H,newId:()=>On,radiansToDegrees:()=>er,rectCollide:()=>Qn,rgbToHsl:()=>Nn,setDecimalPlaces:()=>c,setV2Angle:()=>F,sineWaveMovement:()=>Rn,stringToNumber:()=>rn,v2:()=>yr,v2CubicBezierBBox:()=>ln,v2CubicBezierCurve:()=>Nt,v2CubicBezierCurveExtrema:()=>jt,v2CubicBezierCurveNormal:()=>In,v2CubicBezierCurveTangent:()=>Xt,v2Distance:()=>Mr,v2DivideScalar:()=>ar,v2DotProduct:()=>C,v2FromPolarCoords:()=>dr,v2GetNormal:()=>_,v2Length:()=>Z,v2MulScalar:()=>xr,v2Normalize:()=>R,v2QuadraticBezierBBox:()=>dn,v2QuadraticBezierCurve:()=>$t,v2QuadraticBezierCurveExtrema:()=>Yt,v2QuadraticBezierCurveNormal:()=>gn,v2QuadraticBezierCurveTangent:()=>qt,v2Rotate:()=>pe,v2RotateH:()=>Me,v2Scale:()=>le,v2SetLength:()=>vt,v2Sub:()=>Y,v2Sum:()=>cr,v3:()=>gr,v3CrossProduct:()=>br,v3CubicBezierCurve:()=>Vn,v3CubicBezierCurveTangent:()=>yn,v3Distance:()=>hr,v3DivideScalar:()=>mr,v3DotProduct:()=>Vr,v3Length:()=>fr,v3MulScalar:()=>j,v3Normalize:()=>I,v3QuadraticBezierCurve:()=>hn,v3QuadraticBezierCurveTangent:()=>bn,v3RotateX:()=>Ve,v3RotateY:()=>ye,v3RotateZ:()=>Ie,v3Scale:()=>Se,v3Sub:()=>ur,v3Sum:()=>sr,v4:()=>Ir,vDistance:()=>pr,vDivideScalar:()=>$,vDotProduct:()=>d,vEqual:()=>W,vLength:()=>v,vMulScalar:()=>L,vN:()=>k,vNormalize:()=>S,vSub:()=>y,vSum:()=>A});module.exports=rr(kn);var c=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=g(10,r);return Math.round(t*e)/e};var E=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return c(e,r)},F=(t,r,e=1/0)=>{let n=Z(t);return[c(Math.cos(r)*n,e),c(Math.sin(r)*n,e)]},er=(t,r=1/0)=>{let e=t*(180/Math.PI);return c(e,r)},nr=(t,r=1/0)=>{let e=t*(Math.PI/180);return c(e,r)},lt=(t,r,e=1/0)=>{let n=S(t),o=S(r),i=d(n,o),s=Math.acos(i);return c(s,e)},or=(t,r,e=1/0)=>{let n=y(t,r),o=Math.atan2(n[1],n[0]);return c(o,e)},ir=(t,r,e=1/0)=>lt(t,r,e);var A=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]+r[o],e));return n},cr=(t,r,e=1/0)=>A(t,r,e),sr=(t,r,e=1/0)=>A(t,r,e),y=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]-r[o],e));return n},Y=(t,r,e=1/0)=>y(t,r,e),ur=(t,r,e=1/0)=>y(t,r,e),L=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]*r,e));return n},xr=(t,r,e=1/0)=>L(t,r,e),j=(t,r,e=1/0)=>L(t,r,e),$=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]/r,e));return n},ar=(t,r,e=1/0)=>$(t,r,e),mr=(t,r,e=1/0)=>$(t,r,e),v=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return c(Math.sqrt(e),r)},Z=(t,r=1/0)=>v(t,r),fr=(t,r=1/0)=>v(t,r),vt=(t,r,e=1/0)=>{let n=E(t);return[c(Math.cos(n)*r,e),c(Math.sin(n)*r,e)]},pr=(t,r,e=1/0)=>{let n=y(t,r);return v(n,e)},Mr=(t,r,e=1/0)=>{let n=y(t,r);return v(n,e)},hr=(t,r,e=1/0)=>{let n=y(t,r);return v(n,e)},S=(t,r=1/0)=>{let e=v(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:c(t[o]/e,r));return n},R=(t,r=1/0)=>S(t,r),I=(t,r=1/0)=>S(t,r),d=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return c(n,e)},C=(t,r,e=1/0)=>d(t,r,e),Vr=(t,r,e=1/0)=>d(t,r,e),br=(t,r,e=1/0)=>[c(t[1]*r[2]-t[2]*r[1],e),c(t[2]*r[0]-t[0]*r[2],e),c(t[0]*r[1]-t[1]*r[0],e)],yr=(t=0)=>[t,t],gr=(t=0)=>[t,t,t],Ir=(t=0)=>[t,t,t,t],k=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},dr=(t,r)=>{let e=[0,0];return e=vt(e,t),F(e,r)},W=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0},_=(t,r,e=1/0)=>{let n=Y(r,t);return[-c(n[1],e),c(n[0],e)]};var J=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(A(t[o],r[o],e));return n},lr=(t,r,e=1/0)=>J(t,r,e),vr=(t,r,e=1/0)=>J(t,r,e),K=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(y(t[o],r[o],e));return n},Sr=(t,r,e=1/0)=>K(t,r,e),Rr=(t,r,e=1/0)=>K(t,r,e),U=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(L(o,r,e));return n},wr=(t,r,e=1/0)=>U(t,r,e),Hr=(t,r,e=1/0)=>U(t,r,e),O=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push($(o,r,e));return n},St=(t,r,e=1/0)=>O(t,r,e),zr=(t,r,e=1/0)=>O(t,r,e),N=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},Tr=t=>N(t),Br=t=>N(t),P=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let s=0;s<o;s++)i.push(r);e.push(i)}return e},Dr=(t,r=0)=>P(t,r),Er=(t,r=0)=>P(t,r),Ar=(t=0)=>[[t,t],[t,t]],Lr=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],$r=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],Nr=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(k(r,e));return n},qr=()=>[[1,0],[0,1]],Xr=()=>[[1,0,0],[0,1,0],[0,0,1]],Yr=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],jr=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},b=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},tt=t=>b(t),rt=t=>b(t),Or=(t,r)=>{if(t.length<=0)return[];let e=b(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},Gr=(t,r)=>{if(t.length<=0)return[];let e=b(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},Qr=(t,r)=>{let e=b(t);return e.push(r),e},Fr=(t,r)=>{let e=tt(t);return e.push(r),e},Zr=(t,r)=>{let e=rt(t);return e.push(r),e},Cr=(t,r)=>{let e=b(t);return e.unshift(r),e},kr=(t,r)=>{let e=tt(t);return e.unshift(r),e},Wr=(t,r)=>{let e=rt(t);return e.unshift(r),e},_r=t=>{if(t.length<=0)return[];let r=b(t);return r.pop(),r},Jr=t=>{if(t.length<=0)return[];let r=b(t);return r.shift(),r},et=t=>{if(t.length<=0)return[];let r=b(t);for(let e=0;e<r.length;e++)r[e].pop();return r},Kr=t=>{if(t.length<=0)return[];let r=b(t);for(let e=0;e<r.length;e++)r[e].shift();return r},Ur=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},nt=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},Pr=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},w=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=N(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let s=t[i];for(let u=0;u<o.length;u++){let x=o[u],a=d(s,x,e);n[i].push(a)}}return n},h=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=d(t[o],r,e);return n},te=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!W(t[e],r[e]))return!1;return!0},re=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let s=[];for(let u=0;u<n;u++)u!==e&&s.push(t[i][u]);o.push(s)}return o},ot=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=re(t,r,e);return q(o)},q=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return it(t);let e=0;for(let n=0;n<r;n++){let o=ot(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},it=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},ee=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return q(t)},ct=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},ne=t=>st(t),st=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return ct(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let s=ot(t,n,i),u=Math.pow(-1,n+i);o.push(u*s)}e.push(o)}return N(e)},oe=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return q(t)===0},ut=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=it(t);if(e===0)return null;let n=ct(t);return n===null?null:St(n,e,r)},xt=(t,r=1/0)=>G(t,r),G=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=q(t),o=st(t);return o===null?null:O(o,n,r)};var ie=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1];return`matrix(${r}, ${e}, ${n}, ${o}, 0, 0)`},ce=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],i=t[0][2],s=t[1][2];return`matrix(${r}, ${e}, ${n}, ${o}, ${i}, ${s})`},se=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],i=t[0][2],s=t[1][2];return`matrix3d(${r}, ${e}, 0, 0, ${n}, ${o}, 0, 0, 0, 0, 1, 0, ${i}, ${s}, 0, 1)`},ue=t=>`matrix3d(
        ${t[0][0]}, ${t[0][1]}, ${t[0][2]}, ${t[0][3]},
        ${t[1][0]}, ${t[1][1]}, ${t[1][2]}, ${t[1][3]},
        ${t[2][0]}, ${t[2][1]}, ${t[2][2]}, ${t[2][3]},
        ${t[3][0]}, ${t[3][1]}, ${t[3][2]}, ${t[3][3]}
    )`,xe=(t,r=1/0)=>[[1,0],[0,1],[c(t[0],r),c(t[1],r)]],ae=(t,r=1/0)=>[[1,0,0],[0,1,0],[0,0,1],[c(t[0],r),c(t[1],r),c(t[2],r)]],X=(t,r=1/0)=>[[1,0,c(t[0],r)],[0,1,c(t[1],r)],[0,0,1]],me=(t,r=1/0)=>[[1,0,0,c(t[0],r)],[0,1,0,c(t[1],r)],[0,0,1,c(t[2],r)],[0,0,0,1]],Rt=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o],[o,n]]:[[n,o],[-o,n]]},at=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},wt=(t,r,e=!0,n=1/0)=>{let o=X(r,n),i=at(t,e,n),s=X(j(r,-1),n),u=w(o,i);return w(u,s)},fe=(t,r,e,n=!0,o=1/0)=>{let i=wt(t,r,n,o);return h(i,e)},pe=(t,r,e=!0,n=1/0)=>{let o=R(r);return h(Rt(t,e,n),o)},Me=(t,r,e=!0,n=1/0)=>{let o=I(r);return h(at(t,e,n),o)},Ht=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[1,0,0],[0,n,-o],[0,o,n]]:[[1,0,0],[0,n,o],[0,-o,n]]},he=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[1,0,0,0],[0,n,-o,0],[0,o,n,0],[0,0,0,1]]:[[1,0,0,0],[0,n,o,0],[0,-o,n,0],[0,0,0,1]]},Ve=(t,r,e=!0,n=1/0)=>{let o=I(r);return h(Ht(t,e,n),o)},zt=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,0,o],[0,1,0],[-o,0,n]]:[[n,0,-o],[0,1,0],[o,0,n]]},be=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,0,o,0],[0,1,0,0],[-o,0,n,0],[0,0,0,1]]:[[n,0,-o,0],[0,1,0,0],[o,0,n,0],[0,0,0,1]]},ye=(t,r,e=!0,n=1/0)=>{let o=I(r);return h(zt(t,e,n),o)},Tt=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},ge=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o,0,0],[o,n,0,0],[0,0,1,0],[0,0,0,1]]:[[n,o,0,0],[-o,n,0,0],[0,0,1,0],[0,0,0,1]]},Ie=(t,r,e=!0,n=1/0)=>{let o=I(r);return h(Tt(t,e,n),o)},Bt=(t,r,e=1/0)=>{let n=X(r,e),o=Et(t),i=X(j(r,-1),e),s=w(n,o);return w(s,i)},de=(t,r,e,n=1/0)=>{let o=Bt(t,r,n);return h(o,e)},Dt=t=>[[t[0],0],[0,t[1]]],le=(t,r)=>h(Dt(t),r),Et=t=>[[t[0],0,0],[0,t[1],0],[0,0,1]],At=t=>[[t[0],0,0],[0,t[1],0],[0,0,t[2]]],ve=t=>[[t[0],0,0,0],[0,t[1],0,0],[0,0,t[2],0],[0,0,0,1]],Se=(t,r)=>h(At(t),r),Re=t=>[[t,0],[0,1]],we=t=>[[t,0,0],[0,1,0],[0,0,1]],He=t=>[[t,0,0],[0,1,0],[0,0,1]],ze=t=>[[t,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Te=t=>[[1,0,0],[0,t,0],[0,0,1]],Be=t=>[[1,0,0,0],[0,t,0,0],[0,0,1,0],[0,0,0,1]],De=t=>[[1,0,0],[0,1,0],[0,0,t]],Ee=t=>[[1,0,0,0],[0,1,0,0],[0,0,t,0],[0,0,0,1]],Ae=t=>[[1,0],[0,t]],Le=t=>[[1,0,0],[0,t,0],[0,0,1]],$e=()=>[[-1,0],[0,-1]],Ne=()=>[[-1,0,0],[0,-1,0],[0,0,1]],qe=()=>[[-1,0,0],[0,-1,0],[0,0,-1]],Xe=()=>[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],Ye=()=>[[0,-1],[-1,0]],je=()=>[[1,0],[0,-1]],Oe=()=>[[1,0,0],[0,-1,0],[0,0,1]],Ge=()=>[[-1,0],[0,1]],Qe=()=>[[-1,0,0],[0,1,0],[0,0,1]],Fe=()=>[[-1,0,0],[0,1,0],[0,0,1]],Ze=()=>[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Ce=()=>[[1,0,0],[0,-1,0],[0,0,1]],ke=()=>[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],We=()=>[[1,0,0],[0,1,0],[0,0,-1]],_e=()=>[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],Je=t=>[[1,t],[0,1]],Ke=t=>[[1,0],[t,1]];var V=(t,r,e=1/0)=>c(Math.random()*(r-t)+t,e),Lt=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),Ue=()=>Math.random()<.5,Pe=t=>{let r=Lt(0,t.length-1);return t[r]};var H=(t,r)=>(t%r+r)%r,mt=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,tn=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),z=t=>!isNaN(parseFloat(t))&&isFinite(t);var rn=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var en=(t,r,e=1/0)=>{let n=0;for(let o of r){if(o.length!==2)return NaN;let i=o[0],s=o[1];n+=i*s*Math.pow(t,s-1)}return c(n,e)},ft=(t,r,e,n,o=1/0)=>{let i=-2*(1-t),s=2-4*t,u=2*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o)]},pt=(t,r,e,n,o=1/0)=>{let i=-2*(1-t),s=2-4*t,u=2*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o),c(i*r[2]+s*e[2]+u*n[2],o)]},Mt=(t,r,e,n,o,i=1/0)=>{let s=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i)]},ht=(t,r,e,n,o,i=1/0)=>{let s=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i),c(s*r[2]+u*e[2]+x*n[2]+a*o[2],i)]},nn=(t,r=1/0)=>c(Math.cos(t),r),on=(t,r=1/0)=>c(-Math.sin(t),r),cn=(t,r=1/0)=>c(1/g(Math.cos(t),2),r),sn=(t,r=1/0)=>c(-1/g(Math.sin(t),2),r),un=(t,r=1/0)=>c(1/Math.sqrt(1-g(t,2)),r),xn=(t,r=1/0)=>c(-1/Math.sqrt(1-g(t,2)),r),an=(t,r=1/0)=>c(1/(1+g(t,2)),r),mn=(t,r=1/0)=>c(-1/(1+g(t,2)),r);var T=(t,r=1/0)=>{let e=t[0],n=t[1],i=t[2]-n;return e===0&&i===0?1/0:e===0?NaN:c(i/e,r)},fn=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=ut(n);if(o===null)return null;let i=[t[2],r[2]];return h(o,i,e)},pn=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=xt(o);if(i===null)return null;let s=[t[3],r[3],e[3]];return h(i,s,n)},Mn=(t,r=1/0)=>{if(t.length<=0)return null;let e=et(t),n=G(e);if(n===null)return null;let o=nt(t);return h(n,o,r)};var Vt=(t,r=1/0)=>{let e=t[0],n=t[1],o=t[2],i=t[3];if(e===0){let M=T([n,o,i],r);return z(M)?[M]:[]}let s=o-i,u=n*n-4*e*s;if(u<0)return[];if(u===0)return[c(-n/(2*e),r)];let x=2*e,a=Math.sqrt(u);return[c((-n+a)/x,r),c((-n-a)/x,r)]};var $t=(t,r,e,n,o=1/0)=>{let i=Math.pow(1-t,2),s=(1-t)*2*t,u=t*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o)]},hn=(t,r,e,n,o=1/0)=>{let i=Math.pow(1-t,2),s=(1-t)*2*t,u=t*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o),c(i*r[2]+s*e[2]+u*n[2],o)]},Nt=(t,r,e,n,o,i=1/0)=>{let s=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i)]},Vn=(t,r,e,n,o,i=1/0)=>{let s=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i),c(s*r[2]+u*e[2]+x*n[2]+a*o[2],i)]},qt=(t,r,e,n,o=1/0)=>{let i=ft(t,r,e,n);return R(i,o)},bn=(t,r,e,n,o=1/0)=>{let i=pt(t,r,e,n);return I(i,o)},Xt=(t,r,e,n,o,i=1/0)=>{let s=Mt(t,r,e,n,o);return R(s,i)},yn=(t,r,e,n,o,i=1/0)=>{let s=ht(t,r,e,n,o);return I(s,i)},gn=(t,r,e,n,o=1/0)=>{let i=qt(t,r,e,n,o);return[-i[1],i[0]]},In=(t,r,e,n,o,i=1/0)=>{let s=Xt(t,r,e,n,o,i);return[-s[1],s[0]]},Yt=(t,r,e,n=1/0)=>{let o=2*t[0]-4*r[0]+2*e[0],i=-2*t[0]+2*r[0],u=T([o,i,0],n),x=2*t[1]-4*r[1]+2*e[1],a=-2*t[1]+2*r[1],p=T([x,a,0],n),m=[];return z(u)&&m.push(u),z(p)&&m.push(p),m},jt=(t,r,e,n,o=1/0)=>{let i=-3*t[0]+9*r[0]-9*e[0]+3*n[0],s=6*t[0]-12*r[0]+6*e[0],u=-3*t[0]+3*r[0],x=[i,s,u,0],a=-3*t[1]+9*r[1]-9*e[1]+3*n[1],M=6*t[1]-12*r[1]+6*e[1],p=-3*t[1]+3*r[1],m=[a,M,p,0],f=Vt(x,o).filter(l=>l>=0&&l<=1),B=Vt(m,o).filter(l=>l>=0&&l<=1);return[...f,...B].length===2?[...f,...B]:null},dn=(t,r,e,n=1/0)=>{let o=Yt(t,r,e),i=1/0,s=1/0,u=-1/0,x=-1/0;for(let a of o){let M=$t(a,t,r,e),p=M[0],m=M[1];i=Math.min(i,p),u=Math.max(u,p),s=Math.min(s,m),x=Math.max(x,m)}return i=c(Math.min(i,t[0],e[0]),n),u=c(Math.max(u,t[0],e[0]),n),s=c(Math.min(s,t[1],e[1]),n),x=c(Math.max(x,t[1],e[1]),n),{x:i,y:s,w:Math.abs(u-i),h:Math.abs(x-s),x2:u,y2:x}},ln=(t,r,e,n,o=1/0)=>{let i=jt(t,r,e,n)||[],s=1/0,u=1/0,x=-1/0,a=-1/0;for(let M of i){let p=Nt(M,t,r,e,n),m=p[0],f=p[1];s=Math.min(s,m!=null?m:1/0),x=Math.max(x,m!=null?m:-1/0),u=Math.min(u,f!=null?f:1/0),a=Math.max(a,f!=null?f:-1/0)}return s=c(Math.min(s,t[0],n[0]),o),x=c(Math.max(x,t[0],n[0]),o),u=c(Math.min(u,t[1],n[1]),o),a=c(Math.max(a,t[1],n[1]),o),{x:s,y:u,w:Math.abs(x-s),h:Math.abs(a-u),x2:x,y2:a}};var Ot=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),vn=(t,r,e)=>{let n=Y(t,r),o=E(n);return o=mt(o,0,Math.PI*2,0,Math.PI),Ot(r,o,e)},Sn=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),Rn=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]},wn=(t,r,e,n,o,i,s)=>[t*Math.cos(n*e-i),r*Math.cos(o*e-s)];var Hn=()=>{let t=gt();return Qt(t)},zn=()=>{let t=gt();return Ft(t)},gt=()=>{let t=V(1,360),r=V(0,100),e=V(0,100);return[t,r,e]},Tn=t=>{let r=V(0,100),e=V(0,100);return[t,r,e]},Bn=t=>{let r=V(1,360),e=V(0,100);return[r,t,e]},Dn=t=>{let r=V(1,360),e=V(0,100);return[r,e,t]},En=()=>[0,0,V(0,100)],An=(t=1,r=360,e=0,n=100,o=0,i=100)=>{let s=V(t,r),u=V(e,n),x=V(o,i);return[s,u,x]},bt=t=>(t*=60,t<0&&(t+=360),t*100/360),Ln=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:o===t?bt((r-e)/(o-n)):o===r?bt(2+(e-t)/(o-n)):o===e?bt(4+(t-r)/(o-n)):0),Gt=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,(n+o)/2*100),$n=(t,r,e,n=void 0,o=void 0,i=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:(i=i===void 0?Gt(t,r,e):i,(i<=50?(o-n)/(o+n):(o-n)/(2-o-n))*100)),Nn=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255,i=Math.min(e,n,o),s=Math.max(e,n,o),u=Gt(e,n,o,i,s),x=$n(e,n,o,i,s,u),a=Ln(e,n,o,i,s);return a>360||x>100||u>100?[0,0,100]:a<0||x<0||u<0?[0,0,0]:[c(a,r),c(x,r),c(u,r)]},yt=(t,r,e)=>(e<0&&(e+=1),e>1&&(e-=1),e*6<1?r+(t-r)*6*e:e*2<1?t:e*3<2?r+(t-r)*(.666-e)*6:r),Qt=(t,r=1/0)=>{let e=t[0]/100,n=t[1]/100,o=t[2]/100;if(n===0){let f=o*255;return[f,f,f]}let i=o<.5?o*(1+n):o+n-o*n,s=2*o-i,u=e+.333,x=e,a=e-.333,M=yt(i,s,u),p=yt(i,s,x),m=yt(i,s,a);return M*=255,p*=255,m*=255,M>255||p>255||m>255?[255,255,255]:M<0||p<0||m<0?[0,0,0]:[c(M,r),c(p,r),c(m,r)]},Ft=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,e=t[1]/100,n=t[2]/100,o,i,s;if(e===0)o=i=s=n;else{let x=(p,m,f)=>(f<0&&(f+=1),f>1&&(f-=1),f<.16666666666666666?p+(m-p)*6*f:f<.5?m:f<.6666666666666666?p+(m-p)*(.6666666666666666-f)*6:p),a=n<.5?n*(1+e):n+e-n*e,M=2*n-a;o=x(M,a,r+1/3),i=x(M,a,r),s=x(M,a,r-1/3)}let u=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${u(o)}${u(i)}${u(s)}`},qn=(t,r=180)=>{let e=t[0];return e+=r,(e>360||e<0)&&(e=H(e,360)),[e,t[1],t[2]]},Xn=(t,r=10)=>{let e=t[2];return e+=r,(e>100||e<0)&&(e=H(e,100)),[t[0],t[1],e]},Yn=(t,r=10)=>{let e=t[1];return e+=r,e>100&&(e-=100),e<0&&(e+=100),[t[0],e,t[2]]};var jn=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=Math.random()*16|0;return(t=="x"?r:r&3|8).toString(16)}),On=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var Gn=(t,r=1/0)=>c(t*2/Math.sqrt(2),r);var Qn=(t,r)=>t.x<=r.x+r.w&&t.x+t.w>=r.x&&t.y<=r.y+r.h&&t.h+t.y>=r.y,Fn=(t,r)=>{let e=Math.abs(t.cx-r.cx),n=Math.abs(t.cy-r.cy);return Math.sqrt(e*e+n*n)<=t.r+r.r},Zt=t=>{let r=[];for(let e=0;e<t.length;e++){let n=H(e+1,t.length),o=[t[e],t[n]];r.push(o)}return r},Zn=(t,r)=>{let e=[];e.push(...Zt(t)),e.push(...Zt(r));for(let n of e){let o=_(n[0],n[1]),i=Ct(t,o),s=Ct(r,o);if(!(i.max>=s.min&&s.max>=i.min))return!1}return!0},Ct=(t,r)=>{let e=1/0,n=-1/0;for(let o of t){let i=C(o,r);e=Math.min(e,i),n=Math.max(n,i)}return{min:e,max:n}};var Cn=t=>{let r=t.duration!==void 0?t.duration:1/0,e,n,o,i,s=!1,u,x=()=>{e=void 0,o=void 0,i=void 0,s=!1,n!==void 0&&window.cancelAnimationFrame(n)},a=()=>{x(),B()},M=()=>{s=!1},p=()=>{s=!0},m=D=>{e===void 0&&(e=D),o=D-e,s&&i!==D&&typeof t.callback=="function"&&t.callback(dt()),o<=r?(i=D,n=window.requestAnimationFrame(m)):x()},f=(D,Wn)=>{a()},B=()=>{e=void 0,o=void 0,i=void 0,s=!0,t.restartOnResize&&window.ResizeObserver&&u===void 0?(u=new ResizeObserver(f),u.observe(document.body,{box:"border-box"})):n=window.requestAnimationFrame(m)},It=()=>o,l=()=>s,kt=()=>e,Wt=()=>{if(!(r===1/0||o===void 0))return o*100/r},_t=()=>u,dt=()=>({start:B,stop:x,pause:M,resume:p,restart:a,isAnimating:l,getElapsedTime:It,getStartTime:kt,getPercent:Wt,getResizeObserver:_t});return dt()};0&&(module.exports={animate,circleCollide,circleMovement,circleMovementAfterMouse,convertRange,convexPolygonsCollide,degreesToRadians,doRangesOverlap,dxArcCos,dxArcCot,dxArcSin,dxArcTan,dxCos,dxCot,dxPolynomial,dxSin,dxTan,dxV2CubicBezierCurve,dxV2QuadraticBezierCurve,dxV3CubicBezierCurve,dxV3QuadraticBezierCurve,ellipseMovement,getRandom,getRandomBoolean,getRandomGrayscaleHSLColor,getRandomHSLColor,getRandomHSLColorWithHue,getRandomHSLColorWithLightness,getRandomHSLColorWithSaturation,getRandomHSLColorWithinRanges,getRandomHexColor,getRandomInt,getRandomItemFromArray,getRandomRGBColor,getShiftedHue,getShiftedLightness,getShiftedSaturation,getSquareInCircleSide,getV2Angle,getV2AngleBetween,getV3AngleBetween,getVNAngleBetween,guid,hslToHex,hslToRgb,identity2,identity3,identity4,identityN,isNumber,isSingularMatrix,linearEquation,linearEquationSystem2,linearEquationSystem3,linearEquationSystemN,lissajousCurve,m2Adjugate,m2AppendRow,m2DeepCopy,m2Determinant,m2DivideScalar,m2Inverse,m2MulScalar,m2PrependRow,m2ReflectionOrigin,m2ReflectionOriginH,m2ReflectionX,m2ReflectionXH,m2ReflectionY,m2ReflectionYH,m2ReflectionYmX,m2Reset,m2RotateAroundPointH,m2Rotation,m2RotationAroundPointH,m2RotationH,m2Scale,m2ScaleAtPointH,m2ScaleAtPointHMatrix,m2ScaleH,m2ScaleX,m2ScaleXH,m2ScaleY,m2ScaleYH,m2ShearingX,m2ShearingY,m2Sub,m2Sum,m2ToCSS,m2Translation,m2TranslationH,m2Transpose,m2hToCSS,m2hToCSS3d,m2x2,m3Adjugate,m3AppendRow,m3DeepCopy,m3Determinant,m3DivideScalar,m3Inverse,m3MulScalar,m3PrependRow,m3ReflectionOrigin,m3ReflectionOriginH,m3ReflectionXY,m3ReflectionXYH,m3ReflectionXZ,m3ReflectionXZH,m3ReflectionYZ,m3ReflectionYZH,m3Reset,m3RotationX,m3RotationXH,m3RotationY,m3RotationYH,m3RotationZ,m3RotationZH,m3Scale,m3ScaleH,m3ScaleX,m3ScaleXH,m3ScaleY,m3ScaleYH,m3ScaleZ,m3ScaleZH,m3Sub,m3Sum,m3Translation,m3TranslationH,m3Transpose,m3hToCSS3d,m3x3,m4x4,mAdjugate,mAppendCol,mAppendRow,mDeepCopy,mDelFirstColumn,mDelFirstRow,mDelLastColumn,mDelLastRow,mDeterminant,mDivideScalar,mEqual,mGetColumn,mGetFirstColumn,mGetLastColumn,mInverse,mMinor,mMul,mMulScalar,mMulVector,mNxM,mPrependCol,mPrependRow,mReset,mSub,mSum,mTranspose,mod,newId,radiansToDegrees,rectCollide,rgbToHsl,setDecimalPlaces,setV2Angle,sineWaveMovement,stringToNumber,v2,v2CubicBezierBBox,v2CubicBezierCurve,v2CubicBezierCurveExtrema,v2CubicBezierCurveNormal,v2CubicBezierCurveTangent,v2Distance,v2DivideScalar,v2DotProduct,v2FromPolarCoords,v2GetNormal,v2Length,v2MulScalar,v2Normalize,v2QuadraticBezierBBox,v2QuadraticBezierCurve,v2QuadraticBezierCurveExtrema,v2QuadraticBezierCurveNormal,v2QuadraticBezierCurveTangent,v2Rotate,v2RotateH,v2Scale,v2SetLength,v2Sub,v2Sum,v3,v3CrossProduct,v3CubicBezierCurve,v3CubicBezierCurveTangent,v3Distance,v3DivideScalar,v3DotProduct,v3Length,v3MulScalar,v3Normalize,v3QuadraticBezierCurve,v3QuadraticBezierCurveTangent,v3RotateX,v3RotateY,v3RotateZ,v3Scale,v3Sub,v3Sum,v4,vDistance,vDivideScalar,vDotProduct,vEqual,vLength,vMulScalar,vN,vNormalize,vSub,vSum});
//# sourceMappingURL=mz-math.node.cjs.map
