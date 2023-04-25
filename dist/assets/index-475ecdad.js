(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const i="/hydrogeol-logo.svg";document.querySelector("#app").innerHTML=`
  <section class='main-container'>
    <div class='container'>
      <div class='logo-container'>
        <img src='${i}' alt='Hydrogeol Logo' />
        <h1>
        <span class='stroke-title'>
          Hydro<br />géologues<br />conseil
        </span>
        Hydro<br />géologues<br />conseil</h1>
      </div>
      <div class='text-container'>
        <strong>
          Encore un peu de patience, nous arrivons bientôt!
        </strong>
        <p>
          En attendant, vous pouvez nous contacter par téléphone au <a href='tel:0247523379'>02 47 52 33 79</a> | <a href='tel:0640510573'>06 40 51 05 73</a> ou par mail à <a href='mailto: contact@hydrogeol.fr'>contact@hydrogeol.fr</a>
        </p>
      </div>
    </div>
  </section>
`;
