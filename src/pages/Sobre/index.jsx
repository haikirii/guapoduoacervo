import { Helmet } from 'react-helmet';
import '../../css/index.css';

const Sobre = () =>{
    return(
        <>
        <Helmet>
            <title>Sobre</title>
        </Helmet>
        <section className="home">
            <h2>Sobre Acervo Guapoduo</h2>
            <p>Somos um grupo e website sem fins lucrativos e sem ligação direta com os criadores de conteúdo que envolvem os personagens, <b>apenas de fãs para fãs sem comprometer a obra original</b>. Nosso objetivo principal é criar uma plataforma com moderação que não só arquive Fanfics e Fanarts, como também permita criar um espaço seguro e confortável para criadores e fãs.</p>
            <p>Para pedir que sua história ou fanart sejam disponibilizadas no site, preencha este <button className= "button"><a href="https://form.jotform.com/242343658304051">formulário.</a></button></p>
            <p>Conheça ês criadores e participantes do projeto:</p>

            <section className="profile" id="profile">
                <div className="box-container">
                    <div className="box">
                    <img src="image/Nan pfp.jpg" alt="Desenho estilizado de uma moça branca de cabelos castanhos com vermelho olhando para o lado e usando uma blusa branca com manchas pretas. O fundo está desfocado." />
                        <h1>Nan Yelo</h1>
                        <h4>Diretora chefe</h4>
                        <div>Escritora de &quot;The Reason&quot; e apaixonada pelo amor do casal &quot;Guapoduo&quot;, sou obcecada por histórias e ter mil projetos ao mesmo tempo, então nada mais justo que providenciar um cantinho aconchegante para nossa comunidade se alojar e se sentir confortável.</div>
                    </div>

                    <div className="box">
                    <img src="image/kiri pfp.jpg" alt="Desenho estilizado de homem branco de perfil com barba rala, cabelos castanhos longos e dando um sorriso. O fundo é branco e ao canto esquerdo superior é possível ver um nariz. O personagem é Kaiser Cohem de Ordem Paranormal" />
                        <h1>Kiri</h1>
                        <h4>Programador chefe</h4>
                        <div>Escritor desde 2016 e apaixonado por &quot;Guapoduo&quot; desde o primeiro momento. Eu amo me envolver em projetos para fandoms e sinto muito prazer em ver pessoas tão igualmente apaixonadas envolvidas neles, fandoms são lugares que pessoas podem se sentir confortáveis com o que gostam tanto e nada mais justo do que terem um lugar exclusivo para isso.</div>
                    </div>
                
                    <div className="box">
                    <img src="image/Ren-pfp.png" alt="Desenho estilizado de pessoa branca de cabelos roxos-lilás grandes e olhos e sobrancelhas roxas. Tem um pequeno sorriso no rosto e usa uma roupa branca com um laço envolta do colarinho, segurando amarantos roxos." />
                        <h1>Ren</h1>
                        <h4>Moderadora</h4>
                        <div>Artista movida à &quot;Guapoduo&quot;, com muitas ideias e pouca execução.</div>
                    </div>
                
                    <div className="box">
                    <img src="image/Faburao pfp.jpg" alt="Desenho estilizado em mangá de uma menina com cabelos loiros, pele clara e olhos vermelhos. Usa um vestido babado branco com detalhes azuis e está envolta de morangos. É da obra Hanako-kum." />
                        <h1>Faburao</h1>
                        <h4>Moderadora</h4>
                        <div>Escritora, leitora e amante de história.</div>
                    </div>

                    <div className="box">
                    <img src="image/Aloy-pfp.jpg" alt="Desenho estilizado de pessoa branca de cabelos loiros longos e um lacinho preto com roupa preta enquanto segura um livro vermelho com expressão surpresa." />
                        <h1>Aloy</h1>
                        <h4>Artista</h4>
                        <div>Descrição: Artista Digital; designer gráfico e fanfiqueira nas horas vagas.</div>
                    </div>
                
                    <div className="box">
                    <img src="image/Liazinea pfp.jpg" alt="Homem branco com cabelos bagunçados pretos e longos e expressão amarrada usando um suéter com padrão de cor verde e uma blusa preta por baixo. César Cohen da obra Ordem Paranormal."/>
                        <h1>Liazinea</h1>
                        <h4>Programadora</h4>
                        <div>&quot;Guapoduo&quot; e &quot;Ordem Paranormal&quot; são minha vida</div>
                    </div>
                
                    <div className="box">
                    <img src="image/Chini-pfp.jpg" alt="Desenho estilizado de pessoa com cabelos pretos com mechas brancas na frente, de lado, com óculos redondos e finos e uma expressão alegre. Usa uma roupa preta sem mangas." />
                        <h1>Chini</h1>
                        <h4>Moderadora</h4>
                        <div>Toma cappuccino, surta por &quot;Guapoduo&quot;, escreve, lê fanfic, dá opinião e faz planilha.</div>
                    </div>

                    <div className="box">
                    <img src="image/Wraith-pfp.png" alt="Desenho estilizado de pessoa branca de cabelos pretos longos com um fundo muito vermelho. Um de seus olhos é cicatrizado e usa uma roupa vermelha com ombreiras grandes e segura uma máscara de teatro feliz." />
                        <h1>Little Wraith Chaos</h1>
                        <h4>Moderador</h4>
                        <div>Reencarnação de um rei fantasma que escreve, desenha, compõe, só usa vermelho e preto e dá opinião na internet.</div>
                    </div>
                
                </div>

            </section>
        </section>  
        </>
    );
}

export default Sobre