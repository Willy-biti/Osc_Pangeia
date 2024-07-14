import styled from "styled-components";
import theme from "../../Theme/theme";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    background: ${theme.secondary};
`
export const Content = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`
export const Div1 = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    // justify-content: center;
    flex-direction: column;
    color: ${theme.background};
    border-right: 2px solid black;
    margin-top: 30px;

   
`
export const TitleDiv1 = styled.div`
    // height: 20%;
    display: flex;
    justify-content: center;
    flex-direction: column;

       h1{
        margin-top: 10px;
    }

    h4{
        margin-top: 30px;
        color: ${theme.Title};
    }
`
export const ContentDiv1 = styled.div`
    margin-top: 30px;
    // height: 80%;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    // grid-template-rows: 200px;  
    // grid-gap: 2px;     

   
`
export const DivIcon = styled.div`
    // background: red;
    // border: 1px solid green;
    width: 100%;   
    height: 200px; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
   h3{
    margin-bottom: 10px;
   }
`

export const Div2 = styled.div`
    width: 45%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: ${theme.background};
    margin-top: 30px;

`
export const TitleDiv2 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    // align-items: center;
    

    h1{
        margin-top: 10px;
    }

    h4{
        margin-top: 30px;
        color: ${theme.Title};
    }
`
export const DescDiv2 = styled.div`
    height: 80%;
    display: flex;
    // justify-content: flex-start;
    flex-direction: column;
    // align-items: center;
    // color: ${theme.background};

    h2{
        margin-top: 20px;
        margin-bottom: 30px;
        color: ${theme.primary};
    }

    h4{
        text-align: justify;
        color: ${theme.Title};
    }
`


