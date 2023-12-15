import React from "react"
import { Mangue, LogoCITi2 } from "assets";
import { LoginH1, LoginDiv, LoginLeft, LoginMangue, LoginParagraph } from "./style";


export default function Login() {
    return(
    <LoginDiv>
        <LoginLeft>
            <a href="https://www.linkedin.com/company/citiufpe/" target="_blank">
                <img src={LogoCITi2.src} alt="" />
            </a>
            <LoginH1>Acesse a plataforma</LoginH1>
            <LoginParagraph>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</LoginParagraph>
            <form>
                <label htmlFor="email">E-mail</label>
                <br />
                <input type="email" id="email" placeholder="Digite seu e-mail" />
                <br />
                <label htmlFor="senha">Senha</label>
                <a href="#">Esqueceu sua senha?</a>
                <br />
                <input type="password" id="senha" placeholder="Digite sua senha" />
                <br />
                <button type="submit">Entrar</button>
            </form>
        </LoginLeft>

        <LoginMangue src={Mangue.src}/>
    </LoginDiv>
    );
}