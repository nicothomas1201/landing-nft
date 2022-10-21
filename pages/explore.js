import styled from 'styled-components'
import Layout from '../components/layout'
import BannerExplore from '../components/banner-explore'
import MainExplore from '../components/main-explore'


function Explore() {
  return (
    <div>
      <BannerExplore/>
      <Layout>
        <MainExplore />
      </Layout>
    </div>
    
  )
}

export default Explore
