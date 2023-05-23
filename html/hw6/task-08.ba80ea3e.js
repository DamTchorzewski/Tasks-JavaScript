const e=document.querySelector("form.login-form");e.addEventListener("submit",(o=>{o.preventDefault();const n=e.elements.email,t=e.elements.password;if(""===n.value||""===t.value)return void alert("Wszystkie pola powinny być wypełnione!");const l={email:n.value,password:t.value};console.log(l),e.reset()}));
//# sourceMappingURL=task-08.ba80ea3e.js.map
