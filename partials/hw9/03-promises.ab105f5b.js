function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequirecdbe;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequirecdbe=i);var r=i("7Y9D8");const l=document.querySelector(".form");function a(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}l.addEventListener("submit",(t=>{t.preventDefault();!function(t,n,o){let i=t;for(let t=0;t<o;t++){a(t+1,i).then((({position:t,delay:n})=>{e(r).Notify.success(` Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(` Rejected promise ${t} in ${n}ms`)})),i+=n}}(parseInt(l.delay.value),parseInt(l.step.value),parseInt(l.amount.value))}));
//# sourceMappingURL=03-promises.ab105f5b.js.map