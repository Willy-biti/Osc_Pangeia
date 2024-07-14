import styled from "styled-components";
import HeroIgmBgd from '../../Assets/Photos/rega.jpg';
import theme from "../../Theme/theme";

export const Container = styled.section`
    margin-top: 80px;
    height: auto; 
    background-image: url(${HeroIgmBgd});
    background-size: cover;
    background-position: center;
    position: relative; 
    display: flex;
    justify-content: center;
    align-items: center;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    background: rgba(0, 0, 0, 0.5); 
    z-index: 1; 
  }
`
export const Content = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    z-index: 2; 
`
export const Div1 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${theme.background};

    h1{
        font-size: 3.5rem;
        margin-top: 100px;
        margin-bottom: 20px;
    }
    
    h2{
        margin-bottom: 50px;
    }
`
export const Div2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    color: ${theme.Title};
`

export const DivForm = styled.div`
    width: 65%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${theme.background1};
`
export const DivDescForm = styled.div`
    width: 30%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 30px;
    background: ${theme.background1};

    div{
        width: 85%;
        text-align: justify;
    }

    h2{
        margin-bottom: 20px;
        margin-top: 30px;
    }
    
    h4{
        margin-bottom: 30px;
   
    }
`