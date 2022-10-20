import SectionCards from "../components/section-cards"
import Banner from "../components/banner"
import Header from "../components/header"
import Layout from "../components/layout"
import { BestNfts } from "../db/db"
import ListBestNfts from "../components/list-best-nfts"

export default function Home() {
  return (
    <div>
      <Header /> 
      <Banner /> 
      <Layout>
        <SectionCards />
        <ListBestNfts db={ BestNfts } />
      </Layout>    
    </div>
  )
}
