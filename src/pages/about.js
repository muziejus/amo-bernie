import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
 <Layout>
    <SEO title="About" />
    <div
      className="text-l"
    >
      <h2 className="text-2xl m-0">About Us</h2>
      <p>Hi! We’re just a handful of people in New York who are excited about the Bernie Sanders campaign and want to see him elected President. Mostly, we’re Madiha and Moacir, but we’re also Alex, Aya, Cullen, Dennis, Javairia, Laurell, Manan, Soraya, Taylor…</p>
      <p>We’re specifically impressed with the outreach he has done to those who have been especially vilified during the past few administrations: immigrants and Muslims.</p>
      <p>Hence, we’ve adopted Rashida Tlaib’s sobriquet for Senator Sanders, “Amo Bernie,” as our calling card.</p>
      <p>The large majority of proceeds earned on this site will be donated to the Sanders campaign and Representative Tlaib and Representative Ilhan Omar’s reelection campaigns. Similarly, proceeds will also go to organizations fighting for immigrants.</p>
      <div className="flex justify-between flex-row">
        <div>
          <p className="mb-0">Not me. Us.</p>
        </div>
        <div>
          <p className="mb-0">.ليس أنا. الجميع</p>
        </div>
        <div>
          <p className="mb-0">No yo. Nosotros.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
