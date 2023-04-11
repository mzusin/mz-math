/* 
mzMath - a collection of TypeScript-based math helpers.
Version: 3.0.2
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-math
Licensed GPLv3 for open source use, or Commercial License for commercial use - https://github.com/mzusin/index/blob/main/LICENSE.md                 
*/
var N=Math.pow;var c=(t,r=1/0)=>{if(r===1/0)return t;r<0&&(r=0);let n=N(10,r);return Math.round(t*n)/n};var d=(t,r=1/0)=>{let n=Math.atan2(t[1],t[0]);return c(n,r)},X=(t,r,n=1/0)=>{let e=Y(t);return[c(Math.cos(r)*e,n),c(Math.sin(r)*e,n)]},Tt=(t,r=1/0)=>{let n=t*(180/Math.PI);return c(n,r)},Et=(t,r=1/0)=>{let n=t*(Math.PI/180);return c(n,r)},ut=(t,r,n=1/0)=>{let e=I(t),o=I(r),i=g(e,o),s=Math.acos(i);return c(s,n)},At=(t,r,n=1/0)=>{let e=V(t,r),o=Math.atan2(e[1],e[0]);return c(o,n)},zt=(t,r,n=1/0)=>ut(t,r,n);var R=(t,r,n=1/0)=>{let e=[];for(let o=0;o<t.length;o++)e.push(c(t[o]+r[o],n));return e},Yt=(t,r,n=1/0)=>R(t,r,n),jt=(t,r,n=1/0)=>R(t,r,n),V=(t,r,n=1/0)=>{let e=[];for(let o=0;o<t.length;o++)e.push(c(t[o]-r[o],n));return e},j=(t,r,n=1/0)=>V(t,r,n),qt=(t,r,n=1/0)=>V(t,r,n),w=(t,r,n=1/0)=>{let e=[];for(let o=0;o<t.length;o++)e.push(c(t[o]*r,n));return e},Gt=(t,r,n=1/0)=>w(t,r,n),$=(t,r,n=1/0)=>w(t,r,n),H=(t,r,n=1/0)=>{if(r===0)throw new Error("Division by zero error.");let e=[];for(let o=0;o<t.length;o++)e.push(c(t[o]/r,n));return e},Zt=(t,r,n=1/0)=>H(t,r,n),Ft=(t,r,n=1/0)=>H(t,r,n),y=(t,r=1/0)=>{let n=0;for(let e=0;e<t.length;e++)n+=t[e]*t[e];return c(Math.sqrt(n),r)},Y=(t,r=1/0)=>y(t,r),Wt=(t,r=1/0)=>y(t,r),xt=(t,r,n=1/0)=>{let e=d(t);return[c(Math.cos(e)*r,n),c(Math.sin(e)*r,n)]},Ot=(t,r,n=1/0)=>{let e=V(t,r);return y(e,n)},kt=(t,r,n=1/0)=>{let e=V(t,r);return y(e,n)},Qt=(t,r,n=1/0)=>{let e=V(t,r);return y(e,n)},I=(t,r=1/0)=>{let n=y(t),e=[];for(let o=0;o<t.length;o++)e.push(n===0?0:c(t[o]/n,r));return e},q=(t,r=1/0)=>I(t,r),S=(t,r=1/0)=>I(t,r),g=(t,r,n=1/0)=>{let e=0;for(let o=0;o<t.length;o++)e+=t[o]*r[o];return c(e,n)},Jt=(t,r,n=1/0)=>g(t,r,n),Kt=(t,r,n=1/0)=>g(t,r,n),Ut=(t,r,n=1/0)=>[c(t[1]*r[2]-t[2]*r[1],n),c(t[2]*r[0]-t[0]*r[2],n),c(t[0]*r[1]-t[1]*r[0],n)],_t=(t=0)=>[t,t],Pt=(t=0)=>[t,t,t],tr=(t=0)=>[t,t,t,t],G=(t,r=0)=>{if(t<0)throw new Error("N must be a non-negative number.");let n=[];for(let e=0;e<t;e++)n.push(r);return n},rr=(t,r)=>{let n=[0,0];return n=xt(n,t),X(n,r)},Z=(t,r)=>{if(t.length!==r.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==r[n])return!1;return!0};var F=(t,r,n=1/0)=>{let e=[];for(let o=0;o<t.length;o++)e.push(R(t[o],r[o],n));return e},or=(t,r,n=1/0)=>F(t,r,n),ir=(t,r,n=1/0)=>F(t,r,n),W=(t,r,n=1/0)=>{let e=[];for(let o=0;o<t.length;o++)e.push(V(t[o],r[o],n));return e},cr=(t,r,n=1/0)=>W(t,r,n),sr=(t,r,n=1/0)=>W(t,r,n),O=(t,r,n=1/0)=>{let e=[];for(let o of t)e.push(w(o,r,n));return e},ur=(t,r,n=1/0)=>O(t,r,n),xr=(t,r,n=1/0)=>O(t,r,n),T=(t,r,n=1/0)=>{if(r===0)throw new Error("Division by zero error.");let e=[];for(let o of t)e.push(H(o,r,n));return e},at=(t,r,n=1/0)=>T(t,r,n),ar=(t,r,n=1/0)=>T(t,r,n),D=t=>{let r=t.length;if(r<=0)return t;let n=t[0].length;if(n<=0)return t;let e=[];for(let o=0;o<n;o++)e.push([]);for(let o=0;o<r;o++)for(let i=0;i<n;i++)e[i].push(t[o][i]);return e},pr=t=>D(t),mr=t=>D(t),k=(t,r=0)=>{if(t.length<=0)return[];let n=[];for(let e=0;e<t.length;e++){let o=t[e].length,i=[];for(let s=0;s<o;s++)i.push(r);n.push(i)}return n},Mr=(t,r=0)=>k(t,r),fr=(t,r=0)=>k(t,r),hr=(t=0)=>[[t,t],[t,t]],Vr=(t=0)=>[[t,t,t],[t,t,t],[t,t,t]],br=(t=0)=>[[t,t,t,t],[t,t,t,t],[t,t,t,t],[t,t,t,t]],lr=(t,r,n=0)=>{if(t<=0||r<=0)throw new Error("M and N must be positive numbers.");let e=[];for(let o=0;o<t;o++)e.push(G(r,n));return e},gr=()=>[[1,0],[0,1]],yr=()=>[[1,0,0],[0,1,0],[0,0,1]],Ir=()=>[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Sr=t=>{if(t<0)throw new Error("N must be a non-negative number.");if(t===0)return[];let r=[];for(let n=0;n<t;n++){let e=[];for(let o=0;o<t;o++)e.push(n===o?1:0);r.push(e)}return r},h=t=>{let r=[];for(let n=0;n<t.length;n++){let e=t[n],o=[];for(let i=0;i<e.length;i++)o.push(e[i]);r.push(o)}return r},Q=t=>h(t),J=t=>h(t),vr=(t,r)=>{if(t.length<=0)return[];let n=h(t);for(let e=0;e<n.length;e++)n[e].push(r[e]);return n},dr=(t,r)=>{if(t.length<=0)return[];let n=h(t);for(let e=0;e<n.length;e++)n[e].unshift(r[e]);return n},Rr=(t,r)=>{let n=h(t);return n.push(r),n},wr=(t,r)=>{let n=Q(t);return n.push(r),n},Hr=(t,r)=>{let n=J(t);return n.push(r),n},Dr=(t,r)=>{let n=h(t);return n.unshift(r),n},Cr=(t,r)=>{let n=Q(t);return n.unshift(r),n},Lr=(t,r)=>{let n=J(t);return n.unshift(r),n},$r=t=>{if(t.length<=0)return[];let r=h(t);return r.pop(),r},Tr=t=>{if(t.length<=0)return[];let r=h(t);return r.shift(),r},K=t=>{if(t.length<=0)return[];let r=h(t);for(let n=0;n<r.length;n++)r[n].pop();return r},Er=t=>{if(t.length<=0)return[];let r=h(t);for(let n=0;n<r.length;n++)r[n].shift();return r},Ar=t=>{if(t.length<=0)return[];let r=[];for(let n=0;n<t.length;n++)r.push(t[n][0]);return r},U=t=>{if(t.length<=0)return[];let r=t[0].length,n=[];for(let e=0;e<t.length;e++)n.push(t[e][r-1]);return n},zr=(t,r)=>{if(t.length<=0)return[];let n=[];for(let e=0;e<t.length;e++)n.push(t[e][r]);return n},v=(t,r,n=1/0)=>{let e=[];for(let i=0;i<t.length;i++)e.push([]);let o=D(r);if(e.length!==o.length)throw new Error("The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix.");for(let i=0;i<t.length;i++){let s=t[i];for(let u=0;u<o.length;u++){let x=o[u],a=g(s,x,n);e[i].push(a)}}return e},p=(t,r,n=1/0)=>{if(t.length<0)return[];if(t[0].length!==r.length)throw new Error("The number of columns in the matrix must be equal to the length of the vector.");let e=[];for(let o=0;o<t.length;o++)e[o]=g(t[o],r,n);return e},Br=(t,r)=>{if(t.length!==r.length)return!1;for(let n=0;n<t.length;n++)if(!Z(t[n],r[n]))return!1;return!0},pt=(t,r,n)=>{let e=t.length;if(e<=0)throw new Error("The matrix should not be empty.");if(e!==t[0].length)throw new Error("The matrix must be square.");let o=[];for(let i=0;i<e;i++){if(i===r)continue;let s=[];for(let u=0;u<e;u++)u!==n&&s.push(t[i][u]);o.push(s)}return o},_=(t,r,n)=>{let e=t.length;if(e<=0)throw new Error("The matrix should not be empty.");if(e!==t[0].length)throw new Error("The matrix must be square.");let o=pt(t,r,n);return C(o)},C=t=>{let r=t.length;if(r===0)return 1;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t[0][0];if(r===2)return P(t);let n=0;for(let e=0;e<r;e++){let o=_(t,0,e),i=t[0][e];e%2!==0&&(i=-i),n+=o*i}return n},P=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return t[0][0]*t[1][1]-t[1][0]*t[0][1]},Nr=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return C(t)},tt=t=>{if(t.length!==t[0].length)throw new Error("The matrix must be square.");return[[t[1][1],-t[0][1]],[-t[1][0],t[0][0]]]},Xr=t=>rt(t),rt=t=>{let r=t.length;if(r<=0)return null;if(r!==t[0].length)throw new Error("The matrix must be square.");if(r===1)return t;if(r===2)return tt(t);let n=[];for(let e=0;e<r;e++){let o=[];for(let i=0;i<r;i++){let s=_(t,e,i),u=Math.pow(-1,e+i);o.push(u*s)}n.push(o)}return D(n)},Yr=t=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");return C(t)===0},nt=(t,r=1/0)=>{if(t.length>0&&t.length!==t[0].length)throw new Error("The matrix must be square.");let n=P(t);if(n===0)return null;let e=tt(t);return e===null?null:at(e,n,r)},et=(t,r=1/0)=>E(t,r),E=(t,r=1/0)=>{let n=t.length;if(n>0&&n!==t[0].length)throw new Error("The matrix must be square.");let e=C(t),o=rt(t);return o===null?null:T(o,e,r)};var Fr=t=>{let r=t[0][0],n=t[1][0],e=t[0][1],o=t[1][1];return`matrix(${r}, ${n}, ${e}, ${o}, 0, 0)`},Wr=t=>{let r=t[0][0],n=t[1][0],e=t[0][1],o=t[1][1],i=t[0][2],s=t[1][2];return`matrix(${r}, ${n}, ${e}, ${o}, ${i}, ${s})`},Or=t=>{let r=t[0][0],n=t[1][0],e=t[0][1],o=t[1][1],i=t[0][2],s=t[1][2];return`matrix3d(${r}, ${n}, 0, 0, ${e}, ${o}, 0, 0, 0, 0, 1, 0, ${i}, ${s}, 0, 1)`},kr=t=>`matrix3d(
        ${t[0][0]}, ${t[0][1]}, ${t[0][2]}, ${t[0][3]},
        ${t[1][0]}, ${t[1][1]}, ${t[1][2]}, ${t[1][3]},
        ${t[2][0]}, ${t[2][1]}, ${t[2][2]}, ${t[2][3]},
        ${t[3][0]}, ${t[3][1]}, ${t[3][2]}, ${t[3][3]}
    )`,Qr=(t,r=1/0)=>[[1,0],[0,1],[c(t[0],r),c(t[1],r)]],Jr=(t,r=1/0)=>[[1,0,0],[0,1,0],[0,0,1],[c(t[0],r),c(t[1],r),c(t[2],r)]],L=(t,r=1/0)=>[[1,0,c(t[0],r)],[0,1,c(t[1],r)],[0,0,1]],Kr=(t,r=1/0)=>[[1,0,0,c(t[0],r)],[0,1,0,c(t[1],r)],[0,0,1,c(t[2],r)],[0,0,0,1]],mt=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[e,-o],[o,e]]:[[e,o],[-o,e]]},ot=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[e,-o,0],[o,e,0],[0,0,1]]:[[e,o,0],[-o,e,0],[0,0,1]]},Mt=(t,r,n=!0,e=1/0)=>{let o=L(r,e),i=ot(t,n,e),s=L($(r,-1),e),u=v(o,i);return v(u,s)},Ur=(t,r,n,e=!0,o=1/0)=>{let i=Mt(t,r,e,o);return p(i,n)},_r=(t,r,n=!0,e=1/0)=>{let o=q(r);return p(mt(t,n,e),o)},Pr=(t,r,n=!0,e=1/0)=>{let o=S(r);return p(ot(t,n,e),o)},ft=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[1,0,0],[0,e,-o],[0,o,e]]:[[1,0,0],[0,e,o],[0,-o,e]]},tn=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[1,0,0,0],[0,e,-o,0],[0,o,e,0],[0,0,0,1]]:[[1,0,0,0],[0,e,o,0],[0,-o,e,0],[0,0,0,1]]},rn=(t,r,n=!0,e=1/0)=>{let o=S(r);return p(ft(t,n,e),o)},ht=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[e,0,o],[0,1,0],[-o,0,e]]:[[e,0,-o],[0,1,0],[o,0,e]]},nn=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[e,0,o,0],[0,1,0,0],[-o,0,e,0],[0,0,0,1]]:[[e,0,-o,0],[0,1,0,0],[o,0,e,0],[0,0,0,1]]},en=(t,r,n=!0,e=1/0)=>{let o=S(r);return p(ht(t,n,e),o)},Vt=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[e,-o,0],[o,e,0],[0,0,1]]:[[e,o,0],[-o,e,0],[0,0,1]]},on=(t,r=!0,n=1/0)=>{let e=c(Math.cos(t),n),o=c(Math.sin(t),n);return r?[[e,-o,0,0],[o,e,0,0],[0,0,1,0],[0,0,0,1]]:[[e,o,0,0],[-o,e,0,0],[0,0,1,0],[0,0,0,1]]},cn=(t,r,n=!0,e=1/0)=>{let o=S(r);return p(Vt(t,n,e),o)},bt=(t,r,n=1/0)=>{let e=L(r,n),o=gt(t),i=L($(r,-1),n),s=v(e,o);return v(s,i)},sn=(t,r,n,e=1/0)=>{let o=bt(t,r,e);return p(o,n)},lt=t=>[[t[0],0],[0,t[1]]],un=(t,r)=>p(lt(t),r),gt=t=>[[t[0],0,0],[0,t[1],0],[0,0,1]],yt=t=>[[t[0],0,0],[0,t[1],0],[0,0,t[2]]],xn=t=>[[t[0],0,0,0],[0,t[1],0,0],[0,0,t[2],0],[0,0,0,1]],an=(t,r)=>p(yt(t),r),pn=t=>[[t,0],[0,1]],mn=t=>[[t,0,0],[0,1,0],[0,0,1]],Mn=t=>[[t,0,0],[0,1,0],[0,0,1]],fn=t=>[[t,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],hn=t=>[[1,0,0],[0,t,0],[0,0,1]],Vn=t=>[[1,0,0,0],[0,t,0,0],[0,0,1,0],[0,0,0,1]],bn=t=>[[1,0,0],[0,1,0],[0,0,t]],ln=t=>[[1,0,0,0],[0,1,0,0],[0,0,t,0],[0,0,0,1]],gn=t=>[[1,0],[0,t]],yn=t=>[[1,0,0],[0,t,0],[0,0,1]],In=()=>[[-1,0],[0,-1]],Sn=()=>[[-1,0,0],[0,-1,0],[0,0,1]],vn=()=>[[-1,0,0],[0,-1,0],[0,0,-1]],dn=()=>[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],Rn=()=>[[0,-1],[-1,0]],wn=()=>[[1,0],[0,-1]],Hn=()=>[[1,0,0],[0,-1,0],[0,0,1]],Dn=()=>[[-1,0],[0,1]],Cn=()=>[[-1,0,0],[0,1,0],[0,0,1]],Ln=()=>[[-1,0,0],[0,1,0],[0,0,1]],$n=()=>[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],Tn=()=>[[1,0,0],[0,-1,0],[0,0,1]],En=()=>[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],An=()=>[[1,0,0],[0,1,0],[0,0,-1]],zn=()=>[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],Bn=t=>[[1,t],[0,1]],Nn=t=>[[1,0],[t,1]];var m=(t,r,n=1/0)=>c(Math.random()*(r-t)+t,n),It=(t,r)=>Math.floor(Math.random()*(r-t+1)+t),jn=()=>Math.random()<.5,qn=t=>{let r=It(0,t.length-1);return t[r]};var A=(t,r)=>(t%r+r)%r,it=(t,r,n,e,o)=>(o-e)*(t-r)/(n-r)+e,Zn=(t,r,n,e)=>Math.max(t,n)<=Math.min(r,e),Fn=t=>!isNaN(parseFloat(t))&&isFinite(t);var On=(t,r)=>{var e;if(t==null)return r;let n=(e=Number(t))!=null?e:r;return isNaN(n)?r:n};var Qn=(t,r,n,e)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*n[0]+s*e[0],o*r[1]+i*n[1]+s*e[1]]},Jn=(t,r,n,e)=>{let o=Math.pow(1-t,2),i=(1-t)*2*t,s=t*t;return[o*r[0]+i*n[0]+s*e[0],o*r[1]+i*n[1]+s*e[1],o*r[2]+i*n[2]+s*e[2]]},Kn=(t,r,n,e,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*n[0]+u*e[0]+x*o[0],i*r[1]+s*n[1]+u*e[1]+x*o[1]]},Un=(t,r,n,e,o)=>{let i=Math.pow(1-t,3),s=Math.pow(1-t,2)*3*t,u=(1-t)*3*t*t,x=t*t*t;return[i*r[0]+s*n[0]+u*e[0]+x*o[0],i*r[1]+s*n[1]+u*e[1]+x*o[1],i*r[2]+s*n[2]+u*e[2]+x*o[2]]};var te=(t,r,n=1/0)=>{let e=[[t[0],t[1]],[r[0],r[1]]],o=nt(e);if(o===null)return null;let i=[t[2],r[2]];return p(o,i,n)},re=(t,r,n,e=1/0)=>{let o=[[t[0],t[1],t[2]],[r[0],r[1],r[2]],[n[0],n[1],n[2]]],i=et(o);if(i===null)return null;let s=[t[3],r[3],n[3]];return p(i,s,e)},ne=(t,r=1/0)=>{if(t.length<=0)return null;let n=K(t),e=E(n);if(e===null)return null;let o=U(t);return p(e,o,r)};var St=(t,r,n)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*n,t[1]+Math.sin(r)*n]),se=(t,r,n)=>{let e=j(t,r),o=d(e);return o=it(o,0,Math.PI*2,0,Math.PI),St(r,o,n)},ue=(t,r,n,e)=>(r=r%Math.PI*2,[t[0]+Math.cos(r)*n,t[1]+Math.sin(r)*e]),xe=(t,r,n,e)=>{let o=r*Math.sin(2*Math.PI*n*t+e);return[t,o]},ae=(t,r,n,e,o,i,s)=>[t*Math.cos(e*n-i),r*Math.cos(o*n-s)];var he=()=>{let t=ct();return Rt(t)},Ve=()=>{let t=ct();return wt(t)},ct=()=>{let t=m(1,360),r=m(0,100),n=m(0,100);return[t,r,n]},be=t=>{let r=m(0,100),n=m(0,100);return[t,r,n]},le=t=>{let r=m(1,360),n=m(0,100);return[r,t,n]},ge=t=>{let r=m(1,360),n=m(0,100);return[r,n,t]},ye=()=>[0,0,m(0,100)],Ie=(t=1,r=360,n=0,e=100,o=0,i=100)=>{let s=m(t,r),u=m(n,e),x=m(o,i);return[s,u,x]},z=t=>(t*=60,t<0&&(t+=360),t*100/360),vt=(t,r,n,e=void 0,o=void 0)=>(e=e===void 0?Math.min(t,r,n):e,o=e===void 0?Math.max(t,r,n):o,e===o?0:o===t?z((r-n)/(o-e)):o===r?z(2+(n-t)/(o-e)):o===n?z(4+(t-r)/(o-e)):0),st=(t,r,n,e=void 0,o=void 0)=>(e=e===void 0?Math.min(t,r,n):e,o=e===void 0?Math.max(t,r,n):o,(e+o)/2*100),dt=(t,r,n,e=void 0,o=void 0,i=void 0)=>(e=e===void 0?Math.min(t,r,n):e,o=e===void 0?Math.max(t,r,n):o,e===o?0:(i=i===void 0?st(t,r,n):i,(i<=50?(o-e)/(o+e):(o-e)/(2-o-e))*100)),Se=(t,r=1/0)=>{let n=t[0]/255,e=t[1]/255,o=t[2]/255,i=Math.min(n,e,o),s=Math.max(n,e,o),u=st(n,e,o,i,s),x=dt(n,e,o,i,s,u),a=vt(n,e,o,i,s);return a>360||x>100||u>100?[0,0,100]:a<0||x<0||u<0?[0,0,0]:[c(a,r),c(x,r),c(u,r)]},B=(t,r,n)=>(n<0&&(n+=1),n>1&&(n-=1),n*6<1?r+(t-r)*6*n:n*2<1?t:n*3<2?r+(t-r)*(.666-n)*6:r),Rt=(t,r=1/0)=>{let n=t[0]/100,e=t[1]/100,o=t[2]/100;if(e===0){let M=o*255;return[M,M,M]}let i=o<.5?o*(1+e):o+e-o*e,s=2*o-i,u=n+.333,x=n,a=n-.333,b=B(i,s,u),f=B(i,s,x),l=B(i,s,a);return b*=255,f*=255,l*=255,b>255||f>255||l>255?[255,255,255]:b<0||f<0||l<0?[0,0,0]:[c(b,r),c(f,r),c(l,r)]},wt=t=>{if(t[0]>360||t[1]>100||t[2]>100)return"#ffffff";if(t[0]<0||t[1]<0||t[2]<0)return"#000000";let r=t[0]/360,n=t[1]/100,e=t[2]/100,o,i,s;if(n===0)o=i=s=e;else{let x=(f,l,M)=>(M<0&&(M+=1),M>1&&(M-=1),M<.16666666666666666?f+(l-f)*6*M:M<.5?l:M<.6666666666666666?f+(l-f)*(.6666666666666666-M)*6:f),a=e<.5?e*(1+n):e+n-e*n,b=2*e-a;o=x(b,a,r+1/3),i=x(b,a,r),s=x(b,a,r-1/3)}let u=x=>{let a=Math.round(x*255).toString(16);return a.length===1?"0"+a:a};return`#${u(o)}${u(i)}${u(s)}`},ve=(t,r=180)=>{let n=t[0];return n+=r,(n>360||n<0)&&(n=A(n,360)),[n,t[1],t[2]]},de=(t,r=10)=>{let n=t[2];return n+=r,(n>100||n<0)&&(n=A(n,100)),[t[0],t[1],n]},Re=(t,r=10)=>{let n=t[1];return n+=r,n>100&&(n-=100),n<0&&(n+=100),[t[0],n,t[2]]};var He=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let r=Math.random()*16|0;return(t=="x"?r:r&3|8).toString(16)}),De=()=>Math.random().toString(36).substring(2)+new Date().getTime().toString(36);var $e=(t,r=1/0)=>c(t*2/Math.sqrt(2),r);export{St as circleMovement,se as circleMovementAfterMouse,it as convertRange,Et as degreesToRadians,Zn as doRangesOverlap,ue as ellipseMovement,te as equationSystem2,re as equationSystem3,ne as equationSystemN,m as getRandom,jn as getRandomBoolean,ye as getRandomGrayscaleHSLColor,ct as getRandomHSLColor,be as getRandomHSLColorWithHue,ge as getRandomHSLColorWithLightness,le as getRandomHSLColorWithSaturation,Ie as getRandomHSLColorWithinRanges,Ve as getRandomHexColor,It as getRandomInt,qn as getRandomItemFromArray,he as getRandomRGBColor,ve as getShiftedHue,de as getShiftedLightness,Re as getShiftedSaturation,$e as getSquareInCircleSide,d as getV2Angle,At as getV2AngleBetween,zt as getV3AngleBetween,ut as getVNAngleBetween,He as guid,wt as hslToHex,Rt as hslToRgb,gr as identity2,yr as identity3,Ir as identity4,Sr as identityN,Fn as isNumber,Yr as isSingularMatrix,ae as lissajousCurve,tt as m2Adjugate,wr as m2AppendRow,Q as m2DeepCopy,P as m2Determinant,at as m2DivideScalar,nt as m2Inverse,ur as m2MulScalar,Cr as m2PrependRow,In as m2ReflectionOrigin,Sn as m2ReflectionOriginH,wn as m2ReflectionX,Hn as m2ReflectionXH,Dn as m2ReflectionY,Cn as m2ReflectionYH,Rn as m2ReflectionYmX,Mr as m2Reset,Ur as m2RotateAroundPointH,mt as m2Rotation,Mt as m2RotationAroundPointH,ot as m2RotationH,lt as m2Scale,sn as m2ScaleAtPointH,bt as m2ScaleAtPointHMatrix,gt as m2ScaleH,pn as m2ScaleX,mn as m2ScaleXH,gn as m2ScaleY,yn as m2ScaleYH,Nn as m2ShearingX,Bn as m2ShearingY,cr as m2Sub,or as m2Sum,Fr as m2ToCSS,Qr as m2Translation,L as m2TranslationH,pr as m2Transpose,Wr as m2hToCSS,Or as m2hToCSS3d,hr as m2x2,Xr as m3Adjugate,Hr as m3AppendRow,J as m3DeepCopy,Nr as m3Determinant,ar as m3DivideScalar,et as m3Inverse,xr as m3MulScalar,Lr as m3PrependRow,vn as m3ReflectionOrigin,dn as m3ReflectionOriginH,An as m3ReflectionXY,zn as m3ReflectionXYH,Tn as m3ReflectionXZ,En as m3ReflectionXZH,Ln as m3ReflectionYZ,$n as m3ReflectionYZH,fr as m3Reset,ft as m3RotationX,tn as m3RotationXH,ht as m3RotationY,nn as m3RotationYH,Vt as m3RotationZ,on as m3RotationZH,yt as m3Scale,xn as m3ScaleH,Mn as m3ScaleX,fn as m3ScaleXH,hn as m3ScaleY,Vn as m3ScaleYH,bn as m3ScaleZ,ln as m3ScaleZH,sr as m3Sub,ir as m3Sum,Jr as m3Translation,Kr as m3TranslationH,mr as m3Transpose,kr as m3hToCSS3d,Vr as m3x3,br as m4x4,rt as mAdjugate,vr as mAppendCol,Rr as mAppendRow,h as mDeepCopy,Er as mDelFirstColumn,Tr as mDelFirstRow,K as mDelLastColumn,$r as mDelLastRow,C as mDeterminant,T as mDivideScalar,Br as mEqual,zr as mGetColumn,Ar as mGetFirstColumn,U as mGetLastColumn,E as mInverse,_ as mMinor,v as mMul,O as mMulScalar,p as mMulVector,lr as mNxM,dr as mPrependCol,Dr as mPrependRow,k as mReset,W as mSub,F as mSum,D as mTranspose,A as mod,De as newId,Tt as radiansToDegrees,Se as rgbToHsl,c as setDecimalPlaces,X as setV2Angle,xe as sineWaveMovement,On as stringToNumber,_t as v2,Kn as v2CubicBezierCurve,kt as v2Distance,Zt as v2DivideScalar,Jt as v2DotProduct,rr as v2FromPolarCoords,Y as v2Length,Gt as v2MulScalar,q as v2Normalize,Qn as v2QuadraticBezierCurve,_r as v2Rotate,Pr as v2RotateH,un as v2Scale,xt as v2SetLength,j as v2Sub,Yt as v2Sum,Pt as v3,Ut as v3CrossProduct,Un as v3CubicBezierCurve,Qt as v3Distance,Ft as v3DivideScalar,Kt as v3DotProduct,Wt as v3Length,$ as v3MulScalar,S as v3Normalize,Jn as v3QuadraticBezierCurve,rn as v3RotateX,en as v3RotateY,cn as v3RotateZ,an as v3Scale,qt as v3Sub,jt as v3Sum,tr as v4,Ot as vDistance,H as vDivideScalar,g as vDotProduct,Z as vEqual,y as vLength,w as vMulScalar,G as vN,I as vNormalize,V as vSub,R as vSum};
//# sourceMappingURL=mz-math.esm.js.map
