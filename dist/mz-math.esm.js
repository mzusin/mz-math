/* 
mzMath - a collection of TypeScript-based math helpers.
Version: 3.0.7
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-math
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var y=Math.pow;var c=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let e=y(10,r);return Math.round(t*e)/e};var E=(t,r=1/0)=>{let e=Math.atan2(t[1],t[0]);return c(e,r)},W=(t,r,e=1/0)=>{let n=_(t);return[c(Math.cos(r)*n,e),c(Math.sin(r)*n,e)]},or=(t,r=1/0)=>{let e=t*(180/Math.PI);return c(e,r)},ir=(t,r=1/0)=>{let e=t*(Math.PI/180);return c(e,r)},Ht=(t,r,e=1/0)=>{let n=w(t),o=w(r),i=d(n,o),s=Math.acos(i);return c(s,e)},cr=(t,r,e=1/0)=>{let n=g(t,r),o=Math.atan2(n[1],n[0]);return c(o,e)},sr=(t,r,e=1/0)=>Ht(t,r,e);var A=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]+r[o],e));return n},mr=(t,r,e=1/0)=>A(t,r,e),fr=(t,r,e=1/0)=>A(t,r,e),g=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]-r[o],e));return n},Y=(t,r,e=1/0)=>g(t,r,e),pr=(t,r,e=1/0)=>g(t,r,e),L=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]*r,e));return n},Mr=(t,r,e=1/0)=>L(t,r,e),O=(t,r,e=1/0)=>L(t,r,e),$=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o=0;o<t.length;o++)n.push(c(t[o]/r,e));return n},hr=(t,r,e=1/0)=>$(t,r,e),Vr=(t,r,e=1/0)=>$(t,r,e),S=(t,r=1/0)=>{let e=0;for(let n=0;n<t.length;n++)e+=t[n]*t[n];return c(Math.sqrt(e),r)},_=(t,r=1/0)=>S(t,r),br=(t,r=1/0)=>S(t,r),Tt=(t,r,e=1/0)=>{let n=E(t);return[c(Math.cos(n)*r,e),c(Math.sin(n)*r,e)]},yr=(t,r,e=1/0)=>{let n=g(t,r);return S(n,e)},gr=(t,r,e=1/0)=>{let n=g(t,r);return S(n,e)},Ir=(t,r,e=1/0)=>{let n=g(t,r);return S(n,e)},w=(t,r=1/0)=>{let e=S(t),n=[];for(let o=0;o<t.length;o++)n.push(e===0?0:c(t[o]/e,r));return n},z=(t,r=1/0)=>w(t,r),I=(t,r=1/0)=>w(t,r),d=(t,r,e=1/0)=>{let n=0;for(let o=0;o<t.length;o++)n+=t[o]*r[o];return c(n,e)},J=(t,r,e=1/0)=>d(t,r,e),lr=(t,r,e=1/0)=>d(t,r,e),dr=(t,r,e=1/0)=>[c(t[1]*r[2]-t[2]*r[1],e),c(t[2]*r[0]-t[0]*r[2],e),c(t[0]*r[1]-t[1]*r[0],e)],vr=(t=0)=>[t,t],Sr=(t=0)=>[t,t,t],Rr=(t=0)=>[t,t,t,t],K=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let e=[];for(let n=0;n<t;n++)e.push(r);return e},wr=(t,r)=>{let e=[0,0];return e=Tt(e,t),W(e,r)},U=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0},P=(t,r,e=1/0)=>{let n=Y(r,t);return[-c(n[1],e),c(n[0],e)]};var tt=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(A(t[o],r[o],e));return n},Tr=(t,r,e=1/0)=>tt(t,r,e),Br=(t,r,e=1/0)=>tt(t,r,e),rt=(t,r,e=1/0)=>{let n=[];for(let o=0;o<t.length;o++)n.push(g(t[o],r[o],e));return n},Dr=(t,r,e=1/0)=>rt(t,r,e),Er=(t,r,e=1/0)=>rt(t,r,e),et=(t,r,e=1/0)=>{let n=[];for(let o of t)n.push(L(o,r,e));return n},Ar=(t,r,e=1/0)=>et(t,r,e),Lr=(t,r,e=1/0)=>et(t,r,e),j=(t,r,e=1/0)=>{if(r===0)throw new Error("Division by zero error.");let n=[];for(let o of t)n.push($(o,r,e));return n},Bt=(t,r,e=1/0)=>j(t,r,e),$r=(t,r,e=1/0)=>j(t,r,e),N=t=>{let r=t.length;if(r<=0)return t;let e=t[0].length;if(e<=0)return t;let n=[];for(let o=0;o<e;o++)n.push([]);for(let o=0;o<r;o++)for(let i=0;i<e;i++)n[i].push(t[o][i]);return n},Nr=t=>N(t),qr=t=>N(t),nt=(t,r=0)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++){let o=t[n].length,i=[];for(let s=0;s<o;s++)i.push(r);e.push(i)}return e},Xr=(t,r=0)=>nt(t,r),Yr=(t,r=0)=>nt(t,r),Or=(t=0)=>[[t,t],[t,t]],jr=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],Gr=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],Qr=(t,r,e=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let n=[];for(let o=0;o<t;o++)n.push(K(r,e));return n},Fr=()=>[[1,0],[0,1]],Cr=()=>[[1,0,0],[0,1,0],[0,0,1]],Zr=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],kr=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let e=0;e<t;e++){let n=[];for(let o=0;o<t;o++)n.push(e===o?1:0);r.push(n)}return r},b=t=>{let r=[];for(let e=0;e<t.length;e++){let n=t[e],o=[];for(let i=0;i<n.length;i++)o.push(n[i]);r.push(o)}return r},ot=t=>b(t),it=t=>b(t),Wr=(t,r)=>{if(t.length<=0)return[];let e=b(t);for(let n=0;n<e.length;n++)e[n].push(r[n]);return e},_r=(t,r)=>{if(t.length<=0)return[];let e=b(t);for(let n=0;n<e.length;n++)e[n].unshift(r[n]);return e},Jr=(t,r)=>{let e=b(t);return e.push(r),e},Kr=(t,r)=>{let e=ot(t);return e.push(r),e},Ur=(t,r)=>{let e=it(t);return e.push(r),e},Pr=(t,r)=>{let e=b(t);return e.unshift(r),e},te=(t,r)=>{let e=ot(t);return e.unshift(r),e},re=(t,r)=>{let e=it(t);return e.unshift(r),e},ee=t=>{if(t.length<=0)return[];let r=b(t);return r.pop(),r},ne=t=>{if(t.length<=0)return[];let r=b(t);return r.shift(),r},ct=t=>{if(t.length<=0)return[];let r=b(t);for(let e=0;e<r.length;e++)r[e].pop();return r},oe=t=>{if(t.length<=0)return[];let r=b(t);for(let e=0;e<r.length;e++)r[e].shift();return r},ie=t=>{if(t.length<=0)return[];let r=[];for(let e=0;e<t.length;e++)r.push(t[e][0]);return r},st=t=>{if(t.length<=0)return[];let r=t[0].length,e=[];for(let n=0;n<t.length;n++)e.push(t[n][r-1]);return e},ce=(t,r)=>{if(t.length<=0)return[];let e=[];for(let n=0;n<t.length;n++)e.push(t[n][r]);return e},H=(t,r,e=1/0)=>{let n=[];for(let i=0;i<t.length;i++)n.push([]);let o=N(r);if(n.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let s=t[i];for(let u=0;u<o.length;u++){let x=o[u],a=d(s,x,e);n[i].push(a)}}return n},h=(t,r,e=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let n=[];for(let o=0;o<t.length;o++)n[o]=d(t[o],r,e);return n},se=(t,r)=>{if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(!U(t[e],r[e]))return!1;return!0},Dt=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<n;i++){if(i===r)continue;let s=[];for(let u=0;u<n;u++)u!==e&&s.push(t[i][u]);o.push(s)}return o},ut=(t,r,e)=>{let n=t.length;if(n<=0)throw new Error("The matrix should not be empty.");if(n!==t[0].length)throw new Error("The matrix must be square.");let o=Dt(t,r,e);return q(o)},q=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return xt(t);let e=0;for(let n=0;n<r;n++){let o=ut(t,0,n),i=t[0][n];n%2!==0&&(i=-i),e+=o*i}return e},xt=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},ue=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return q(t)},at=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},xe=t=>mt(t),mt=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return at(t);let e=[];for(let n=0;n<r;n++){let o=[];for(let i=0;i<r;i++){let s=ut(t,n,i),u=Math.pow(-1,n+i);o.push(u*s)}e.push(o)}return N(e)},ae=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return q(t)===0},ft=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let e=xt(t);if(e===0)return null;let n=at(t);return n===null?null:Bt(n,e,r)},pt=(t,r=1/0)=>G(t,r),G=(t,r=1/0)=>{let e=t.length;if(e>0&&e!==t[0].length)throw new Error("The matrix must be square.");let n=q(t),o=mt(t);return o===null?null:j(o,n,r)};var he=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1];return`matrix(${r}, ${e}, ${n}, ${o}, 0, 0)`},Ve=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],i=t[0][2],s=t[1][2];return`matrix(${r}, ${e}, ${n}, ${o}, ${i}, ${s})`},be=t=>{let r=t[0][0],e=t[1][0],n=t[0][1],o=t[1][1],i=t[0][2],s=t[1][2];return`matrix3d(${r}, ${e}, 0, 0, ${n}, ${o}, 0, 0, 0, 0, 1, 0, ${i}, ${s}, 0, 1)`},ye=t=>`matrix3d(
        ${t[0][0]}, ${t[0][1]}, ${t[0][2]}, ${t[0][3]},
        ${t[1][0]}, ${t[1][1]}, ${t[1][2]}, ${t[1][3]},
        ${t[2][0]}, ${t[2][1]}, ${t[2][2]}, ${t[2][3]},
        ${t[3][0]}, ${t[3][1]}, ${t[3][2]}, ${t[3][3]}
    )`,ge=(t,r=1/0)=>[[1,0],[0,1],[c(t[0],r),c(t[1],r)]],Ie=(t,r=1/0)=>[[1,0,0],[0,1,0],[0,0,1],[c(t[0],r),c(t[1],r),c(t[2],r)]],X=(t,r=1/0)=>[[1,0,c(t[0],r)],[0,1,c(t[1],r)],[0,0,1]],le=(t,r=1/0)=>[[1,0,0,c(t[0],r)],[0,1,0,c(t[1],r)],[0,0,1,c(t[2],r)],[0,0,0,1]],Et=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o],[o,n]]:[[n,o],[-o,n]]},Mt=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},At=(t,r,e=!0,n=1/0)=>{let o=X(r,n),i=Mt(t,e,n),s=X(O(r,-1),n),u=H(o,i);return H(u,s)},de=(t,r,e,n=!0,o=1/0)=>{let i=At(t,r,n,o);return h(i,e)},ve=(t,r,e=!0,n=1/0)=>{let o=z(r);return h(Et(t,e,n),o)},Se=(t,r,e=!0,n=1/0)=>{let o=I(r);return h(Mt(t,e,n),o)},Lt=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[1,0,0],[0,n,-o],[0,o,n]]:[[1,0,0],[0,n,o],[0,-o,n]]},Re=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[1,0,0,0],[0,n,-o,0],[0,o,n,0],[0,0,0,1]]:[[1,0,0,0],[0,n,o,0],[0,-o,n,0],[0,0,0,1]]},we=(t,r,e=!0,n=1/0)=>{let o=I(r);return h(Lt(t,e,n),o)},$t=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,0,o],[0,1,0],[-o,0,n]]:[[n,0,-o],[0,1,0],[o,0,n]]},ze=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,0,o,0],[0,1,0,0],[-o,0,n,0],[0,0,0,1]]:[[n,0,-o,0],[0,1,0,0],[o,0,n,0],[0,0,0,1]]},He=(t,r,e=!0,n=1/0)=>{let o=I(r);return h($t(t,e,n),o)},Nt=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o,0],[o,n,0],[0,0,1]]:[[n,o,0],[-o,n,0],[0,0,1]]},Te=(t,r=!0,e=1/0)=>{let n=c(Math.cos(t),e),o=c(Math.sin(t),e);return r?[[n,-o,0,0],[o,n,0,0],[0,0,1,0],[0,0,0,1]]:[[n,o,0,0],[-o,n,0,0],[0,0,1,0],[0,0,0,1]]},Be=(t,r,e=!0,n=1/0)=>{let o=I(r);return h(Nt(t,e,n),o)},qt=(t,r,e=1/0)=>{let n=X(r,e),o=Yt(t),i=X(O(r,-1),e),s=H(n,o);return H(s,i)},De=(t,r,e,n=1/0)=>{let o=qt(t,r,n);return h(o,e)},Xt=t=>[[t[0],0],[0,t[1]]],Ee=(t,r)=>h(Xt(t),r),Yt=t=>[[t[0],0,0],[0,t[1],0],[0,0,1]],Ot=t=>[[t[0],0,0],[0,t[1],0],[0,0,t[2]]],Ae=t=>[[t[0],0,0,0],[0,t[1],0,0],[0,0,t[2],0],[0,0,0,1]],Le=(t,r)=>h(Ot(t),r),$e=t=>[[t,0],[0,1]],Ne=t=>[[t,0,0],[0,1,0],[0,0,1]],qe=t=>[[t,0,0],[0,1,0],[0,0,1]],Xe=t=>[[t,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Ye=t=>[[1,0,0],[0,t,0],[0,0,1]],Oe=t=>[[1,0,0,0],[0,t,0,0],[0,0,1,0],[0,0,0,1]],je=t=>[[1,0,0],[0,1,0],[0,0,t]],Ge=t=>[[1,0,0,0],[0,1,0,0],[0,0,t,0],[0,0,0,1]],Qe=t=>[[1,0],[0,t]],Fe=t=>[[1,0,0],[0,t,0],[0,0,1]],Ce=()=>[[-1,0],[0,-1]],Ze=()=>[[-1,0,0],[0,-1,0],[0,0,1]],ke=()=>[[-1,0,0],[0,-1,0],[0,0,-1]],We=()=>[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],_e=()=>[[0,-1],[-1,0]],Je=()=>[[1,0],[0,-1]],Ke=()=>[[1,0,0],[0,-1,0],[0,0,1]],Ue=()=>[[-1,0],[0,1]],Pe=()=>[[-1,0,0],[0,1,0],[0,0,1]],tn=()=>[[-1,0,0],[0,1,0],[0,0,1]],rn=()=>[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],en=()=>[[1,0,0],[0,-1,0],[0,0,1]],nn=()=>[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],on=()=>[[1,0,0],[0,1,0],[0,0,-1]],cn=()=>[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],sn=t=>[[1,t],[0,1]],un=t=>[[1,0],[t,1]];var V=(t,r,e=1/0)=>c(Math.random()*(r-t)+t,e),jt=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),mn=()=>Math.random()<.5,fn=t=>{let r=jt(0,t.length-1);return t[r]};var T=(t,r)=>(t%r+r)%r,ht=(t,r,e,n,o)=>(o-n)*(t-r)/(e-r)+n,Mn=(t,r,e,n)=>Math.max(t,e)<=Math.min(r,n),B=t=>!isNaN(parseFloat(t))&&isFinite(t);var Vn=(t,r)=>{var n;if(t==null)return r;let e=(n=Number(t))!=null?n:r;return isNaN(e)?r:e};var gn=(t,r,e=1/0)=>{let n=0;for(let o of r){if(o.length!==2)return NaN;let i=o[0],s=o[1];n+=i*s*Math.pow(t,s-1)}return c(n,e)},Vt=(t,r,e,n,o=1/0)=>{let i=-2*(1-t),s=2-4*t,u=2*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o)]},bt=(t,r,e,n,o=1/0)=>{let i=-2*(1-t),s=2-4*t,u=2*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o),c(i*r[2]+s*e[2]+u*n[2],o)]},yt=(t,r,e,n,o,i=1/0)=>{let s=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i)]},gt=(t,r,e,n,o,i=1/0)=>{let s=-3*Math.pow(1-t,2),u=3*(t-1)*(3*t-1),x=6*t-9*t*t,a=3*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i),c(s*r[2]+u*e[2]+x*n[2]+a*o[2],i)]},In=(t,r=1/0)=>c(Math.cos(t),r),ln=(t,r=1/0)=>c(-Math.sin(t),r),dn=(t,r=1/0)=>c(1/y(Math.cos(t),2),r),vn=(t,r=1/0)=>c(-1/y(Math.sin(t),2),r),Sn=(t,r=1/0)=>c(1/Math.sqrt(1-y(t,2)),r),Rn=(t,r=1/0)=>c(-1/Math.sqrt(1-y(t,2)),r),wn=(t,r=1/0)=>c(1/(1+y(t,2)),r),zn=(t,r=1/0)=>c(-1/(1+y(t,2)),r);var D=(t,r=1/0)=>{let e=t[0],n=t[1],i=t[2]-n;return e===0&&i===0?1/0:e===0?NaN:c(i/e,r)},En=(t,r,e=1/0)=>{let n=[[t[0],t[1]],[r[0],r[1]]],o=ft(n);if(o===null)return null;let i=[t[2],r[2]];return h(o,i,e)},An=(t,r,e,n=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[e[0],e[1],e[2]]],i=pt(o);if(i===null)return null;let s=[t[3],r[3],e[3]];return h(i,s,n)},Ln=(t,r=1/0)=>{if(t.length<=0)return null;let e=ct(t),n=G(e);if(n===null)return null;let o=st(t);return h(n,o,r)};var Q=(t,r=1/0)=>{let e=t[0],n=t[1],o=t[2],i=t[3];if(e===0){let M=D([n,o,i],r);return B(M)?[M]:[]}let s=o-i,u=n*n-4*e*s;if(u<0)return[];if(u===0)return[c(-n/(2*e),r)];let x=2*e,a=Math.sqrt(u);return[c((-n+a)/x,r),c((-n-a)/x,r)]};var Gt=(t,r,e,n,o=1/0)=>{let i=Math.pow(1-t,2),s=(1-t)*2*t,u=t*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o)]},Zn=(t,r,e,n,o=1/0)=>{let i=Math.pow(1-t,2),s=(1-t)*2*t,u=t*t;return[c(i*r[0]+s*e[0]+u*n[0],o),c(i*r[1]+s*e[1]+u*n[1],o),c(i*r[2]+s*e[2]+u*n[2],o)]},Qt=(t,r,e,n,o,i=1/0)=>{let s=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i)]},kn=(t,r,e,n,o,i=1/0)=>{let s=Math.pow(1-t,3),u=Math.pow(1-t,2)*3*t,x=(1-t)*3*t*t,a=t*t*t;return[c(s*r[0]+u*e[0]+x*n[0]+a*o[0],i),c(s*r[1]+u*e[1]+x*n[1]+a*o[1],i),c(s*r[2]+u*e[2]+x*n[2]+a*o[2],i)]},Ft=(t,r,e,n,o=1/0)=>{let i=Vt(t,r,e,n);return z(i,o)},Wn=(t,r,e,n,o=1/0)=>{let i=bt(t,r,e,n);return I(i,o)},Ct=(t,r,e,n,o,i=1/0)=>{let s=yt(t,r,e,n,o);return z(s,i)},_n=(t,r,e,n,o,i=1/0)=>{let s=gt(t,r,e,n,o);return I(s,i)},Jn=(t,r,e,n,o=1/0)=>{let i=Ft(t,r,e,n,o);return[-i[1],i[0]]},Kn=(t,r,e,n,o,i=1/0)=>{let s=Ct(t,r,e,n,o,i);return[-s[1],s[0]]},Zt=(t,r,e,n=1/0)=>{let o=2*t[0]-4*r[0]+2*e[0],i=-2*t[0]+2*r[0],u=D([o,i,0],n),x=2*t[1]-4*r[1]+2*e[1],a=-2*t[1]+2*r[1],p=D([x,a,0],n),m=[];return B(u)&&m.push(u),B(p)&&m.push(p),m},kt=(t,r,e,n,o=1/0)=>{let i=-3*t[0]+9*r[0]-9*e[0]+3*n[0],s=6*t[0]-12*r[0]+6*e[0],u=-3*t[0]+3*r[0],x=[i,s,u,0],a=-3*t[1]+9*r[1]-9*e[1]+3*n[1],M=6*t[1]-12*r[1]+6*e[1],p=-3*t[1]+3*r[1],m=[a,M,p,0],f=Q(x,o).filter(l=>l>=0&&l<=1),R=Q(m,o).filter(l=>l>=0&&l<=1);return[...f,...R].length===2?[...f,...R]:null},Un=(t,r,e,n=1/0)=>{let o=Zt(t,r,e),i=1/0,s=1/0,u=-1/0,x=-1/0;for(let a of o){let M=Gt(a,t,r,e),p=M[0],m=M[1];i=Math.min(i,p),u=Math.max(u,p),s=Math.min(s,m),x=Math.max(x,m)}return i=c(Math.min(i,t[0],e[0]),n),u=c(Math.max(u,t[0],e[0]),n),s=c(Math.min(s,t[1],e[1]),n),x=c(Math.max(x,t[1],e[1]),n),{x:i,y:s,w:Math.abs(u-i),h:Math.abs(x-s),x2:u,y2:x}},Pn=(t,r,e,n,o=1/0)=>{let i=kt(t,r,e,n)||[],s=1/0,u=1/0,x=-1/0,a=-1/0;for(let M of i){let p=Qt(M,t,r,e,n),m=p[0],f=p[1];s=Math.min(s,m!=null?m:1/0),x=Math.max(x,m!=null?m:-1/0),u=Math.min(u,f!=null?f:1/0),a=Math.max(a,f!=null?f:-1/0)}return s=c(Math.min(s,t[0],n[0]),o),x=c(Math.max(x,t[0],n[0]),o),u=c(Math.min(u,t[1],n[1]),o),a=c(Math.max(a,t[1],n[1]),o),{x:s,y:u,w:Math.abs(x-s),h:Math.abs(a-u),x2:x,y2:a}};var Wt=(t,r,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*e]),oo=(t,r,e)=>{let n=Y(t,r),o=E(n);return o=ht(o,0,Math.PI*2,0,Math.PI),Wt(r,o,e)},io=(t,r,e,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*e,t[1]+Math.sin(r)*n]),co=(t,r,e,n)=>{let o=r*Math.sin(2*Math.PI*e*t+n);return[t,o]},so=(t,r,e,n,o,i,s)=>[t*Math.cos(n*e-i),r*Math.cos(o*e-s)];var fo=()=>{let t=It();return Kt(t)},po=()=>{let t=It();return Ut(t)},It=()=>{let t=V(1,360),r=V(0,100),e=V(0,100);return[t,r,e]},Mo=t=>{let r=V(0,100),e=V(0,100);return[t,r,e]},ho=t=>{let r=V(1,360),e=V(0,100);return[r,t,e]},Vo=t=>{let r=V(1,360),e=V(0,100);return[r,e,t]},bo=()=>[0,0,V(0,100)],yo=(t=1,r=360,e=0,n=100,o=0,i=100)=>{let s=V(t,r),u=V(e,n),x=V(o,i);return[s,u,x]},F=t=>(t*=60,t<0&&(t+=360),t*100/360),_t=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:o===t?F((r-e)/(o-n)):o===r?F(2+(e-t)/(o-n)):o===e?F(4+(t-r)/(o-n)):0),lt=(t,r,e,n=void 0,o=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,(n+o)/2*100),Jt=(t,r,e,n=void 0,o=void 0,i=void 0)=>(n=n===void 0?Math.min(t,r,e):n,o=n===void 0?Math.max(t,r,e):o,n===o?0:(i=i===void 0?lt(t,r,e):i,(i<=50?(o-n)/(o+n):(o-n)/(2-o-n))*100)),go=(t,r=1/0)=>{let e=t[0]/255,n=t[1]/255,o=t[2]/255,i=Math.min(e,n,o),s=Math.max(e,n,o),u=lt(e,n,o,i,s),x=Jt(e,n,o,i,s,u),a=_t(e,n,o,i,s);return a>360||x>100||u>100?[0,0,100]:a<0||x<0||u<0?[0,0,0]:[c(a,r),c(x,r),c(u,r)]},C=(t,r,e)=>(e<0&&(e+=1),e>1&&(e-=1),e*6<1?r+(t-r)*6*e:e*2<1?t:e*3<2?r+(t-r)*(.666-e)*6:r),Kt=(t,r=1/0)=>{let e=t[0]/100,n=t[1]/100,o=t[2]/100;if(n===0){let f=o*255;return[f,f,f]}let i=o<.5?o*(1+n):o+n-o*n,s=2*o-i,u=e+.333,x=e,a=e-.333,M=C(i,s,u),p=C(i,s,x),m=C(i,s,a);return M*=255,p*=255,m*=255,M>255||p>255||m>255?[255,255,255]:M<0||p<0||m<0?[0,0,0]:[c(M,r),c(p,r),c(m,r)]},Ut=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,e=t[1]/100,n=t[2]/100,o,i,s;if(e===0)o=i=s=n;else{let x=(p,m,f)=>(f<0&&(f+=1),f>1&&(f-=1),f<.16666666666666666?p+(m-p)*6*f:f<.5?m:f<.6666666666666666?p+(m-p)*(.6666666666666666-f)*6:p),a=n<.5?n*(1+e):n+e-n*e,M=2*n-a;o=x(M,a,r+1/3),i=x(M,a,r),s=x(M,a,r-1/3)}let u=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${u(o)}${u(i)}${u(s)}`},Io=(t,r=180)=>{let e=t[0];return e+=r,(e>360||e<0)&&(e=T(e,360)),[e,t[1],t[2]]},lo=(t,r=10)=>{let e=t[2];return e+=r,(e>100||e<0)&&(e=T(e,100)),[t[0],t[1],e]},vo=(t,r=10)=>{let e=t[1];return e+=r,e>100&&(e-=100),e<0&&(e+=100),[t[0],e,t[2]]};var Ro=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=Math.random()*16|0;return(t=="x"?r:r&3|8).toString(16)}),wo=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var To=(t,r=1/0)=>c(t*2/Math.sqrt(2),r);var Ao=(t,r)=>t.x<=r.x+r.w&&t.x+t.w>=r.x&&t.y<=r.y+r.h&&t.h+t.y>=r.y,Lo=(t,r)=>{let e=Math.abs(t.cx-r.cx),n=Math.abs(t.cy-r.cy);return Math.sqrt(e*e+n*n)<=t.r+r.r},dt=t=>{let r=[];for(let e=0;e<t.length;e++){let n=T(e+1,t.length),o=[t[e],t[n]];r.push(o)}return r},$o=(t,r)=>{let e=[];e.push(...dt(t)),e.push(...dt(r));for(let n of e){let o=P(n[0],n[1]),i=vt(t,o),s=vt(r,o);if(!(i.max>=s.min&&s.max>=i.min))return!1}return!0},vt=(t,r)=>{let e=1/0,n=-1/0;for(let o of t){let i=J(o,r);e=Math.min(e,i),n=Math.max(n,i)}return{min:e,max:n}};var qo=t=>{let r=t.duration!==void 0?t.duration:1/0,e,n,o,i,s=!1,u,x=()=>{e=void 0,o=void 0,i=void 0,s=!1,n!==void 0&&window.cancelAnimationFrame(n)},a=()=>{x(),R()},M=()=>{s=!1},p=()=>{s=!0},m=v=>{e===void 0&&(e=v),o=v-e,s&&i!==v&&typeof t.callback=="function"&&t.callback(k()),o<=r?(i=v,n=window.requestAnimationFrame(m)):x()},f=(v,zt)=>{a(),typeof t.resizeCallback=="function"&&t.resizeCallback(v,zt)},R=()=>{e=void 0,o=void 0,i=void 0,s=!0,t.restartOnResize&&window.ResizeObserver&&u===void 0?(u=new ResizeObserver(f),u.observe(document.body,{box:"border-box"})):n=window.requestAnimationFrame(m)},Z=()=>o,l=()=>s,St=()=>e,Rt=()=>{if(!(r===1/0||o===void 0))return o*100/r},wt=()=>u,k=()=>({start:R,stop:x,pause:M,resume:p,restart:a,isAnimating:l,getElapsedTime:Z,getStartTime:St,getPercent:Rt,getResizeObserver:wt});return k()};export{qo as animate,Lo as circleCollide,Wt as circleMovement,oo as circleMovementAfterMouse,ht as convertRange,$o as convexPolygonsCollide,ir as degreesToRadians,Mn as doRangesOverlap,Rn as dxArcCos,zn as dxArcCot,Sn as dxArcSin,wn as dxArcTan,ln as dxCos,vn as dxCot,gn as dxPolynomial,In as dxSin,dn as dxTan,yt as dxV2CubicBezierCurve,Vt as dxV2QuadraticBezierCurve,gt as dxV3CubicBezierCurve,bt as dxV3QuadraticBezierCurve,io as ellipseMovement,V as getRandom,mn as getRandomBoolean,bo as getRandomGrayscaleHSLColor,It as getRandomHSLColor,Mo as getRandomHSLColorWithHue,Vo as getRandomHSLColorWithLightness,ho as getRandomHSLColorWithSaturation,yo as getRandomHSLColorWithinRanges,po as getRandomHexColor,jt as getRandomInt,fn as getRandomItemFromArray,fo as getRandomRGBColor,Io as getShiftedHue,lo as getShiftedLightness,vo as getShiftedSaturation,To as getSquareInCircleSide,E as getV2Angle,cr as getV2AngleBetween,sr as getV3AngleBetween,Ht as getVNAngleBetween,Ro as guid,Ut as hslToHex,Kt as hslToRgb,Fr as identity2,Cr as identity3,Zr as identity4,kr as identityN,B as isNumber,ae as isSingularMatrix,D as linearEquation,En as linearEquationSystem2,An as linearEquationSystem3,Ln as linearEquationSystemN,so as lissajousCurve,at as m2Adjugate,Kr as m2AppendRow,ot as m2DeepCopy,xt as m2Determinant,Bt as m2DivideScalar,ft as m2Inverse,Ar as m2MulScalar,te as m2PrependRow,Ce as m2ReflectionOrigin,Ze as m2ReflectionOriginH,Je as m2ReflectionX,Ke as m2ReflectionXH,Ue as m2ReflectionY,Pe as m2ReflectionYH,_e as m2ReflectionYmX,Xr as m2Reset,de as m2RotateAroundPointH,Et as m2Rotation,At as m2RotationAroundPointH,Mt as m2RotationH,Xt as m2Scale,De as m2ScaleAtPointH,qt as m2ScaleAtPointHMatrix,Yt as m2ScaleH,$e as m2ScaleX,Ne as m2ScaleXH,Qe as m2ScaleY,Fe as m2ScaleYH,un as m2ShearingX,sn as m2ShearingY,Dr as m2Sub,Tr as m2Sum,he as m2ToCSS,ge as m2Translation,X as m2TranslationH,Nr as m2Transpose,Ve as m2hToCSS,be as m2hToCSS3d,Or as m2x2,xe as m3Adjugate,Ur as m3AppendRow,it as m3DeepCopy,ue as m3Determinant,$r as m3DivideScalar,pt as m3Inverse,Lr as m3MulScalar,re as m3PrependRow,ke as m3ReflectionOrigin,We as m3ReflectionOriginH,on as m3ReflectionXY,cn as m3ReflectionXYH,en as m3ReflectionXZ,nn as m3ReflectionXZH,tn as m3ReflectionYZ,rn as m3ReflectionYZH,Yr as m3Reset,Lt as m3RotationX,Re as m3RotationXH,$t as m3RotationY,ze as m3RotationYH,Nt as m3RotationZ,Te as m3RotationZH,Ot as m3Scale,Ae as m3ScaleH,qe as m3ScaleX,Xe as m3ScaleXH,Ye as m3ScaleY,Oe as m3ScaleYH,je as m3ScaleZ,Ge as m3ScaleZH,Er as m3Sub,Br as m3Sum,Ie as m3Translation,le as m3TranslationH,qr as m3Transpose,ye as m3hToCSS3d,jr as m3x3,Gr as m4x4,mt as mAdjugate,Wr as mAppendCol,Jr as mAppendRow,b as mDeepCopy,oe as mDelFirstColumn,ne as mDelFirstRow,ct as mDelLastColumn,ee as mDelLastRow,q as mDeterminant,j as mDivideScalar,se as mEqual,ce as mGetColumn,ie as mGetFirstColumn,st as mGetLastColumn,G as mInverse,ut as mMinor,H as mMul,et as mMulScalar,h as mMulVector,Qr as mNxM,_r as mPrependCol,Pr as mPrependRow,nt as mReset,rt as mSub,tt as mSum,N as mTranspose,T as mod,wo as newId,or as radiansToDegrees,Ao as rectCollide,go as rgbToHsl,c as setDecimalPlaces,W as setV2Angle,co as sineWaveMovement,Vn as stringToNumber,vr as v2,Pn as v2CubicBezierBBox,Qt as v2CubicBezierCurve,kt as v2CubicBezierCurveExtrema,Kn as v2CubicBezierCurveNormal,Ct as v2CubicBezierCurveTangent,gr as v2Distance,hr as v2DivideScalar,J as v2DotProduct,wr as v2FromPolarCoords,P as v2GetNormal,_ as v2Length,Mr as v2MulScalar,z as v2Normalize,Un as v2QuadraticBezierBBox,Gt as v2QuadraticBezierCurve,Zt as v2QuadraticBezierCurveExtrema,Jn as v2QuadraticBezierCurveNormal,Ft as v2QuadraticBezierCurveTangent,ve as v2Rotate,Se as v2RotateH,Ee as v2Scale,Tt as v2SetLength,Y as v2Sub,mr as v2Sum,Sr as v3,dr as v3CrossProduct,kn as v3CubicBezierCurve,_n as v3CubicBezierCurveTangent,Ir as v3Distance,Vr as v3DivideScalar,lr as v3DotProduct,br as v3Length,O as v3MulScalar,I as v3Normalize,Zn as v3QuadraticBezierCurve,Wn as v3QuadraticBezierCurveTangent,we as v3RotateX,He as v3RotateY,Be as v3RotateZ,Le as v3Scale,pr as v3Sub,fr as v3Sum,Rr as v4,yr as vDistance,$ as vDivideScalar,d as vDotProduct,U as vEqual,S as vLength,L as vMulScalar,K as vN,w as vNormalize,g as vSub,A as vSum};
//# sourceMappingURL=mz-math.esm.js.map
