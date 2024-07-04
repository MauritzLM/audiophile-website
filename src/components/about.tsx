
function About() {
  return (
    <>
      <section id="about">
        <picture>
          <source media="(max-width: 700px)" srcSet="/images/shared/mobile/image-best-gear.jpg" />
          <source media="(max-width: 1000px)" srcSet="/images/shared/tablet/image-best-gear.jpg" />
          <source media="(min-width: 1001px)" srcSet="/images/shared/desktop/image-best-gear.jpg" />
          <img src="/images/shared/desktop/image-best-gear.jpg" alt="" aria-hidden="true" decoding="async" width="" height="" loading="lazy" />
        </picture>

        <h2>Bringing you the <span>best</span> audio gear</h2>

        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.
          Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </section>
    </>
  )
}

export default About