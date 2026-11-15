(function(){try{
var SMALL={a:1,an:1,the:1,and:1,but:1,or:1,nor:1,for:1,so:1,yet:1,as:1,at:1,by:1,in:1,of:1,on:1,to:1,up:1,off:1,per:1,via:1,vs:1,n:1};
function cap(w){var i=w.search(/[A-Za-z]/);if(i<0)return w;return w.slice(0,i)+w.charAt(i).toUpperCase()+w.slice(i+1).toLowerCase()}
function keep(core,allCaps){
 if(/^[0-9]/.test(core))return true;
 if(/^[^A-Za-z]*$/.test(core))return true;
 if(core==='I'||/^I'[a-z]+$/i.test(core)&&core.charAt(0)==='I'&&core.charAt(1)==="'"&&false)return true;
 if(/[A-Z]/.test(core.slice(1))&&!allCaps)return true;
 return false}
function titleCase(s){
 var allCaps=!/[a-z]/.test(s);
 var toks=s.split(/(\s+)/),words=[],i;
 for(i=0;i<toks.length;i++)if(!/^\s*$/.test(toks[i]))words.push(i);
 var first=words[0],last=words[words.length-1],afterBreak=true;
 for(i=0;i<toks.length;i++){
  var t=toks[i];if(/^\s*$/.test(t))continue;
  var m=/^([^A-Za-z0-9]*)(.*?)([^A-Za-z0-9]*)$/.exec(t),pre=m[1],core=m[2],post=m[3];
  if(!core){afterBreak=/[:.!?—–-]/.test(t);continue}
  var edge=(i===first||i===last||afterBreak||/[(\[\u201c"]/.test(pre));
  var parts=core.split('-'),out=parts.map(function(p,k){
   var pe=edge&&k===0||k===0||k===parts.length-1;var lw=p.toLowerCase();
   if(keep(p,allCaps))return p;
   if(!pe||(!(edge&&k===0)&&parts.length>1&&k>0&&k<parts.length-1))return SMALL[lw]?lw:cap(p);
   if(!(edge&&k===0)&&SMALL[lw]&&k===0)return lw;
   return cap(p)});
  toks[i]=pre+out.join('-')+post;
  afterBreak=/[:.!?—–]$/.test(post)||/^[—–-]+$/.test(t);
 }
 return toks.join('')}
window.ORPTITLE=titleCase;
function fix(e){var t=e.target;if(!t||!t.id||(t.id!=='sdT'&&t.id!=='nsT'))return;
 var v=t.value,n=titleCase(v);if(n!==v){t.value=n;try{t.dispatchEvent(new Event('input',{bubbles:true}))}catch(x){}}}
document.addEventListener('change',fix,true);
}catch(e){console.error(e)}})();
