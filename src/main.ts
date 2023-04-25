import './style.scss'
import hydrogeolLogo from '/hydrogeol-logo.svg';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class='main-container'>
    <div class='container'>
      <div class='logo-container'>
        <img src='${hydrogeolLogo}' alt='Hydrogeol Logo' />
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
`