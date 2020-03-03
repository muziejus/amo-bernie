import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BerniePage = () => (
 <Layout>
    <SEO title="Bernie" />
    <div 
    >
      <h2 className="text-2xl m-0 text-right">من هو عمو برني؟</h2>
      <p className="text-l">“Amo Bernie” is how Representative Rashida Tlaib and others have transliterated “عمو برني,” or “uncle Bernie” in Arabic.</p>
      <p className="text-l">If you put “Uncle Bernie” into Google Translate, you get “عم بيرني.” This isn’t quite right, but it’s not quite wrong, either. Hopefully not oversimplifying,
      “عم” is the word for “(paternal) uncle,” and it’s used as a general sign of respect, much like “uncle” is in English. The word features sounds that don’t exist in English, but it’s typically transliterated as “Amm” or “Umm.” On the other hand, no one pronounces “Bernie” like what is suggested by “بيرني.” That reads as “Beernie.” </p>
      <p className="text-l">As for “عمو,” which is to say “Amo” instead of “Amm,” we can start by noting: Arabic is a complicated language. It has a formal, written version that is what you may read in the newspaper or hear on the news. In that case, we would say “My Uncle Bernie” as “عمي برني,” saying “Amee” instead of “Amm.” But Arabic is spoken on every continent on this planet, and local variations exist. One such variation is saying “عمو,” or “Amo,” instead of “Amee.” The expression is more familiar, more everyday, more of the people, and that’s exactly what Amo Bernie would want!</p>
      <p className="text-l">When you buy something from our shop, the proceeds go to:</p>
      <ul>
        <li>The Bernie Sanders campaign</li>
        <li>Rashida Tlaib’s reelection campaign</li>
        <li>Ilhan Omar’s reelection campaign</li>
      </ul>
    </div>
  </Layout>
)

export default BerniePage
