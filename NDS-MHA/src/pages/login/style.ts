import styled from 'styled-components'

export const Background = styled.body`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    background-color: ${(props) => props.theme['gray-light']};

    & footer{
        position: absolute;
        bottom: 0;
    }

    @media screen and (max-width: 845px) {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }
`

export const Container = styled.div`
    padding: 6rem 2rem;

    background-color: ${(props) => props.theme['white']};

    @media screen and (max-width: 845px) {
        padding: 3rem 0;
        height: 100vh;
    }
    
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;

    font-size: 35px;
    font-weight: 600;

    color: ${(props) => props.theme['green-dark']};

    @media screen and (max-width: 845px) {
        margin-bottom: 0;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    
    width: 50rem;

    @media screen and (max-width: 845px) {
        flex-direction: column;
    
    }
`

export const ContentLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-right: 3.5px solid ${(props) => props.theme['green-dark']};
    width: 100%;

    & img{
        width: 21.9rem;
    }

    @media screen and (max-width: 845px) {
        border-right: none; 
        height: 186px;

        img{
            width: 17rem;
        }
    }
`

export const ContentRight = styled.div`
    display: flex;  
    align-items: center;
    justify-content: center;

    width: 100%;

    & form{
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    @media screen and (max-width: 845px) {
        form{
            align-items: center;
        }
    }
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 845px){
        gap: 1.5rem;
    }
`

export const Alternatives = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 15.6rem;
    margin-top: 1rem;

    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme['gray-dark']};

    & p{
        cursor: pointer;
    }

    @media screen and (max-width: 845px){
        width: 21rem;
        margin-top: 2.2rem;
        gap: 1rem;
    }    
`

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: .5rem;

    font-size: 12px;
    color: ${(props) => props.theme['green-dark']};
`