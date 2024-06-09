import {createGlobalStyle} from 'styled-components';
import theme from './theme';

export const GlobalStyle = createGlobalStyle`
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

