import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ShopNow from "../components/ShopNow"
import { ScreenVariantProvider } from "../components/plasmic/copy_of_nm/PlasmicGlobalVariant__Screen"
import NmImageCarouselShim from "../components/NmImageCarouselShim"

const SecondPage = () => (
  <ScreenVariantProvider>
    <NmImageCarouselShim />
  </ScreenVariantProvider>
  
)

export default SecondPage
