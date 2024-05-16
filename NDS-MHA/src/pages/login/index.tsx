import { Alternatives, Background, Container, Content, ContentLeft, ContentRight, Footer, Header, Inputs } from "./style";
import LogoUnirv from '../../assets/Unirv-logo.jpg'
import { Input } from "../../components/input";
import { ButtonStandard } from "../../components/button";

export function Login(){
    return(
        <Background>
            <Container>
                <Header>React System</Header>
                <Content>
                    <ContentLeft>
                        <img src={LogoUnirv} alt="" />
                    </ContentLeft>
                    <ContentRight>
                        <form action="">
                            <Inputs>
                                <Input label="Usuário:" type="text" placeholder="email@gmail.com.br" id="user"/>
                                <Input label="Senha:" type="password" placeholder="****************" id="password"/>
                            </Inputs>
                            <ButtonStandard title="Entrar"></ButtonStandard>

                            <Alternatives>
                                <p>Cadastrar novo usuário</p>
                                <p>Esqueci minha senha</p>
                            </Alternatives>
                        </form>
                    </ContentRight>
                </Content>
            </Container>
            <Footer>
                <p>Engenharia de Software</p>
                <p>UniRV @2024</p>
            </Footer>
        </Background>
    )
}