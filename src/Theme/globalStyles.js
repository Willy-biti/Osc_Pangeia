import {createGlobalStyle} from 'styled-components';
import theme from './theme';

export const GlobalStyle = createGlobalStyle`

    // @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');;

    *{

        

        margin: 0;
        padding: 0;
        box-sizing: boreder-box;

        ::-webkit-scrollbar {
            display:none;
            width: 8px;
            height: 5px;
            }
            
            ::-webkit-scrollbar-thumb {
            background: #000000;
            border-radius: 10px;
            }
            ::-webkit-scrollbar-track{
            background: #000000;
            }
    }

    body{
        background: ${theme.background1};
        color: ${theme.primary};
        font-family: 'Nunito', sans-serif;
    }

    ul {
        list-style: none;
    }
    
    button {
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
        
    }
`

