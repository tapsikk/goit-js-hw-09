import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const r=document.querySelector(".feedback-form"),a=r.querySelector('input[name="email"]'),o=r.querySelector('textarea[name="message"]');r.addEventListener("input",e=>{if(e.target===a||e.target===o){const t={email:a.value,message:o.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}});window.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);a.value=t.email,o.value=t.message}});r.addEventListener("submit",e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),a.value="",o.value="";const t={email:a.value,message:o.value};console.log(t)});
//# sourceMappingURL=commonHelpers2.js.map