document.addEventListener("DOMContentLoaded", e => {
   const includeHTML = (el,url) => {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener("readystatechange", e => {
         if (xhr.readyState !== 4) return;
         if (xhr.status >= 200 && xhr.status < 300) {

            el.outerHTML = xhr.responseText;

         } else {
            let message = xhr.responseText || "error al cargar el archivo, verifica que estes haciendo la peticion por htto o https";
            el.outerHTML = `<div><p>$(xhr.status):${message}</p></div>`;
         }

       });
      xhr.open('GET', url);
      xhr.setRequestHeader("Content-Type", "text-html;charset=utf8");
      xhr.send();

   }
   const otro = (el, url) => {
         console.log(el, url);

   };
   document
      .querySelectorAll("[data-include]")
      .forEach((el) =>  includeHTML(el, el.getAttribute("data-include")));
      //.forEach((el) =>  otro( el, el.getAttribute("data-include")));

});