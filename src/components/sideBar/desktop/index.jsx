//Css
import * as S from './styled'
//Components
import Header from './header'
import Body from './body'
import Footer from './footer'
import ArrowShowSidebar from './arrow_show_sidebar'


const Desktop = ({showSidebar, toggleSidebar}) => {

  return (
    <S.Container >
      <Header showSidebar={showSidebar}/>
      <Body showSidebar={showSidebar}/>
      <Footer showSidebar={showSidebar}/>
      <ArrowShowSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar}/>
    </S.Container>
  )
}

export default Desktop