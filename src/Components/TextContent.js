import React, { useState, Component } from 'react';
import Emoji from './Emoji';

export default class TextContent extends Component {
  render() {

    const Toggle = ({ children, defaultValue }) => {
      const [checked, setChecked] = useState(defaultValue)
      const isActive = checked ? 'active' : 'disabled';
      return <section className={isActive} onClick={() => setChecked(!checked)}>{ children }</section>
    }
  
    return (
    <section className="text">

      <Toggle defaultValue={true}>
        <div className="title"><h3>O que é COVID-19</h3></div>
        <div className="content">
          <p>A COVID-19 é uma doença causada pelo coronavírus SARS-CoV-2, que apresenta um quadro clínico que varia de infecções assintomáticas a quadros respiratórios graves. De acordo com a Organização Mundial de Saúde (OMS), a maioria dos pacientes com COVID-19 (cerca de 80%) podem ser assintomáticos e cerca de 20% dos casos podem requerer atendimento hospitalar por apresentarem dificuldade respiratória e desses casos aproximadamente 5% podem necessitar de suporte para o tratamento de insuficiência respiratória (suporte ventilatório).</p>
        </div>
      </Toggle>


      <Toggle>
        <div className="title"><h3>O que é o coronavírus?</h3></div>
        <div className="content">
          <p>Coronavírus é uma família de vírus que causam infecções respiratórias. O novo agente do coronavírus foi descoberto em 31/12/19 após casos registrados na China. Provoca a doença chamada de coronavírus (COVID-19).</p>

          <p>Os primeiros coronavírus humanos foram isolados pela primeira vez em 1937. No entanto, foi em 1965 que o vírus foi descrito como coronavírus, em decorrência do perfil na microscopia, parecendo uma coroa.</p>

          <p>A maioria das pessoas se infecta com os coronavírus comuns ao longo da vida, sendo as crianças pequenas mais propensas a se infectarem com o tipo mais comum do vírus. Os coronavírus mais comuns que infectam humanos são o alpha coronavírus 229E e NL63 e beta coronavírus OC43, HKU1.</p>
        </div>
      </Toggle>

      <Toggle>
        <div className="title"><h3>Quais são os sintomas</h3></div>
        <div className="content">
          <p><b>Os sintomas da COVID-19 podem variar de um simples resfriado até uma pneumonia severa. Sendo os sintomas mais comuns:</b></p>

          <ul>
            <li> - Tosse</li>
            <li> - Febre</li>
            <li> - Coriza</li>
            <li> - Dor de garganta</li>
            <li> - Dificuldade para respirar</li>
          </ul>
        </div>
      </Toggle>

      <Toggle>
        <div className="title"><h3>Como é transmitido</h3></div>
        <div className="content">
          <ul>
            <li> - A transmissão acontece de uma pessoa doente para outra ou por contato próximo por meio de:</li>
            <li> - Toque do aperto de mão;</li>
            <li> - Gotículas de saliva;</li>
            <li> - Espirro;</li>
            <li> - Tosse;</li>
            <li> - Catarro;</li>
            <li> - Objetos ou superfícies contaminadas, como celulares, mesas, maçanetas, brinquedos, teclados de computador etc.</li>
          </ul>
        </div>
      </Toggle>

      <Toggle>
        <div className="title"><h3>Diagnóstico</h3></div>
        <div className="content">
          <p><b>O diagnóstico da COVID-19 é realizado primeiramente pelo profissional de saúde que deve avaliar a presença de critérios clínicos:</b></p>

          <p> - Pessoa com quadro respiratório agudo, caracterizado por sensação febril ou febre, que pode ou não estar presente na hora da consulta (podendo ser relatada ao profissional de saúde), acompanhada de tosse OU dor de garganta OU coriza OU dificuldade respiratória, o que é chamado de Síndrome Gripal.</p>
          <p> - Pessoa com desconforto respiratório/dificuldade para respirar OU pressão persistente no tórax OU saturação de oxigênio menor do que 95% em ar ambiente OU coloração azulada dos lábios ou rosto, o que é chamado de Síndrome Respiratória Aguda Grave</p>

          <p><b>Caso o paciente apresente os sintomas, o profissional de saúde poderá solicitar exame laboratoriais:</b></p>

          <p> - De biologia molecular (RT-PCR em tempo real) que diagnostica tanto a COVID-19, a Influenza ou a presença de Vírus Sincicial Respiratório (VSR).</p>
          <p> - Imunológico (teste rápido) que detecta, ou não, a presença de anticorpos em amostras coletadas somente após o sétimo dia de início dos sintomas.</p>

          <p>O diagnóstico da COVID-19 também pode ser realizado a partir de critérios como: histórico de contato próximo ou domiciliar, nos últimos 7 dias antes do aparecimento dos sintomas, com caso confirmado laboratorialmente para COVID-19 e para o qual não foi possível realizar a investigação laboratorial específica, também observados pelo profissional durante a consulta.</p>
        </div>
      </Toggle>

      <Toggle>
        <div className="title"><h3>Como se proteger</h3></div>
        <div className="content">
          <p><b>As recomendações de prevenção à COVID-19 são as seguintes:</b></p>
          <ul>
            <li> - Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou então higienize com álcool em gel 70%.</li>
            <li> - Ao tossir ou espirrar, cubra nariz e boca com lenço ou com o braço, e não com as mãos.</li>
            <li> - Evite tocar olhos, nariz e boca com as mãos não lavadas.</li>
            <li> - Ao tocar, lave sempre as mãos como já indicado.</li>
            <li> - Mantenha uma distância mínima de cerca de 2 metros de qualquer pessoa tossindo ou espirrando.</li>
            <li> - Evite abraços, beijos e apertos de mãos. Adote um comportamento amigável sem contato físico, mas sempre com um sorriso no rosto.</li>
            <li> - Higienize com frequência o celular e os brinquedos das crianças.</li>
            <li> - Não compartilhe objetos de uso pessoal, como talheres, toalhas, pratos e copos.</li>
            <li> - Mantenha os ambientes limpos e bem ventilados.</li>
            <li> - Evite circulação desnecessária nas ruas, estádios, teatros, shoppings, shows, cinemas e igrejas. Se puder, fique em casa.</li>
            <li> - Se estiver doente, evite contato físico com outras pessoas, principalmente idosos e doentes crônicos, e fique em casa até melhorar.</li>
            <li> - Durma bem e tenha uma alimentação saudável.</li>
            <li> - Utilize máscaras caseiras ou artesanais feitas de tecido em situações de saída de sua residência.</li>
          </ul>
        </div>
      </Toggle>

      <Toggle>
        <div className="title"><h3>Dicas para viajantes</h3></div>
        <div className="content">
          <p> - Caso você precise viajar, avalie a real necessidade. Se for inevitável viajar, previna-se e siga as orientações das autoridades de saúde locais.</p>
          <p>Ao voltar de viagens internacionais ou locais recomenda-se:</p>

          <p> - No caso de viagens internacionais: o isolamento domiciliar voluntário por 7 dias após o desembarque, mesmo que não tenha apresentado os sintomas.</p>
          <p> - No caso de viagens locais: ficar atento à sua condição de saúde, principalmente nos primeiros 14 dias.</p>
          <p> - Reforçar os hábitos de higiene, como lavar as mãos com água e sabão.</p>
          <p> - Caso apresente sintomas de gripe, siga as orientações do Ministério da Saúde para isolamento domiciliar.</p>
        </div>
      </Toggle>

      <Toggle>
        <div className="title"><h3>Se eu ficar doente</h3></div>
        <div className="content">
          <p>Caso você se sinta doente, com sintomas de gripe, evite contato físico com outras pessoas, principalmente idosos e doentes crônicos e fique em casa por 14 dias.
          Só procure um hospital de referência se estiver com falta de ar.</p>

          <p><b>Em caso de diagnóstico positivo para COVID-19, siga as seguintes recomendações:</b></p>

          <ul>
            <li> - Fique em isolamento domiciliar.</li>
            <li> - Utilize máscara o tempo todo.</li>
            <li> - Se for preciso cozinhar, use máscara de proteção, cobrindo boca e nariz todo o tempo.</li>
            <li> - Depois de usar o banheiro, nunca deixe de lavar as mãos com água e sabão e sempre limpe vaso, pia e demais superfícies com álcool ou água sanitária para desinfecção do ambiente.</ li>
            <li> - Separe toalhas de banho, garfos, facas, colheres, copos e outros objetos apenas para seu uso.</li>
            <li> - O lixo produzido precisa ser separado e descartado.</li>
            <li> - Sofás e cadeiras também não podem ser compartilhados e precisam ser limpos frequentemente com água sanitária ou álcool 70%.</li>
            <li> - Mantenha a janela aberta para circulação de ar do ambiente usado para isolamento e a porta fechada, limpe a maçaneta frequentemente com álcool 70% ou água sanitária.</li>
          </ul>

          <p><b>Caso o paciente não more sozinho, os demais moradores da devem dormir em outro cômodo, longe da pessoa infectada, seguindo também as seguintes recomendações:</b></p>

          <ul>
            <li> - Manter a distância mínima de 1 metro entre o paciente e os demais moradores.</li>
            <li> - Limpe os móveis da casa frequentemente com água sanitária ou álcool 70%.</li>
            <li> - Se uma pessoa da casa tiver diagnóstico positivo, todos os moradores ficam em isolamento por 14 dias também.</li>
            <li> - Caso outro familiar da casa também inicie os sintomas leves, ele deve reiniciar o isolamento de 14 dias. Se os sintomas forem graves, como dificuldade para respirar, ele deve procurar orientação médica.</li>
          </ul>
        </div>
      </Toggle>

      <Toggle>
        <div className="title"><h3>Serviço de Saúde</h3></div>
        <div className="content">
          <p><b>Procure um serviço de saúde apenas se apresentar falta de ar.</b></p>

          <ul>
            <li><a href="https://portalarquivos.saude.gov.br/images/pdf/2020/April/18/Hospitais-estaduais-CORONAV--RUS.pdf" target="_blank" rel="noopener noreferrer">Lista de hospitais que prestam atendimento em seu estado/mlinicípio.</a></li>
            <li><a href="https://portalarquivos.saude.gov.br/images/pdf/2020/April/18/postos-de-sa--de-com-endere--o.pdf" target="_blank" rel="noopener noreferrer">Lista dos postos de saúde que prestam atendimento em seu estado/mlinicípio.</a></li>
            <li><a href="https://portalarquivos.saude.gov.br/images/pdf/2020/May/25/lista-laboratorio.pdf" target="_blank" rel="noopener noreferrer">Laboratórios públicos de referência de testagem para coronavírus</a></li>
          </ul>
        </div>
      </Toggle>

      <div className="source">
        <p>Fonte: Ministério da saúde</p>
        <p>Fonte de dados: OMS</p>
        <p>Autor: Felipe Ferreira</p>
      </div>

      <div className="copyright">
        <Emoji symbol="🔰" />
      </div>

    </section>
  );
  }
}
