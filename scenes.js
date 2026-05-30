const scenes = {

start:{
text:`ATO I - A RECRUTA REBELDE

Os ventos da guerra continuam soprando pela galáxia. Embora a segunda Estrela da Morte tenha sido destruída, o Império ainda controla inúmeros sistemas estelares e mantém sua influência através do medo. Em diversos mundos, governadores imperiais reprimem revoltas e perseguem qualquer um que demonstre simpatia pela Aliança Rebelde.

Você é Cabo Fabal, uma jovem soldado recém-promovida. Após anos ouvindo histórias de heróis como Luke Skywalker, Leia Organa e Han Solo, finalmente chegou a sua vez de servir na linha de frente. Seu destacamento encontra-se em Yavin IV, uma das bases secretas da Rebelião.

Rumores preocupantes circulam pelos corredores da base. Informantes afirmam que Darth Vader continua reunindo forças em regiões desconhecidas do espaço. Alguns acreditam que ele esteja preparando uma grande ofensiva contra os remanescentes rebeldes.

Enquanto observa as naves decolando da pista principal, você recebe suas primeiras ordens oficiais.

Qual será sua primeira missão?`,
choices:[
["Patrulhar as selvas misteriosas de Yavin IV","yavin",1,0,0,0,0],
["Viajar para os desertos perigosos de Tatooine","tatooine",0,0,0,1,0],
["Permanecer na base e aperfeiçoar suas habilidades","training",0,1,0,0,0]
]
},

yavin:{
text:`A selva de Yavin IV é silenciosa durante a noite. As enormes árvores escondem ruínas antigas e estruturas esquecidas por civilizações que existiram muito antes da República.

Sua patrulha recebe relatos de movimentações estranhas próximas a uma área proibida. Ao investigar, você encontra vestígios de combate: marcas de sabres de luz gravadas em antigas pedras e equipamentos imperiais abandonados às pressas.

Seguindo a trilha, você encontra um homem observando as estrelas sobre uma antiga pirâmide Massassi. Vestindo roupas escuras e carregando um sabre de luz danificado, ele demonstra uma serenidade incomum.

Quando você aponta sua arma em sua direção, o estranho apenas ergue as mãos e diz calmamente:

"Meu nome é Scott Maul. Já servi ao lado sombrio, mas não sirvo mais ao Império."

A revelação faz seu coração acelerar. Um antigo Sith diante de você pode representar tanto um aliado valioso quanto uma ameaça mortal.`,
choices:[
["Confiar em Scott Maul e ouvir sua história","trust",0,1,1,0,1],
["Questionar suas intenções e investigar seu passado","question",0,0,0,0,0],
["Considerá-lo uma ameaça e recusar sua ajuda","danger",-3,0,0,0,0]
]
},

tatooine:{
text:`Os sóis gêmeos de Tatooine castigam o deserto com um calor quase insuportável. Após dias de viagem, você chega a Mos Eisley, uma cidade conhecida em toda a galáxia por sua reputação duvidosa. Mercadores, contrabandistas, caçadores de recompensa e criminosos circulam livremente pelas ruas empoeiradas, cada um escondendo seus próprios segredos.

A Aliança Rebelde recebeu informações de que agentes imperiais estão operando discretamente na região. Entre as cantinas lotadas e os mercados movimentados, pode existir alguém capaz de fornecer informações valiosas sobre os planos do Império.

Enquanto observa a movimentação ao redor, você percebe que cada decisão pode aproximá-la da verdade ou colocá-la em grave perigo. Em um lugar como Mos Eisley, confiança é uma moeda rara e erros costumam ter consequências fatais.`,
choices:[
["Contratar um informante local para obter informações","trust",0,0,1,1,0],
["Investigar Mos Eisley sozinha","danger",-2,0,0,0,0],
["Infiltrar-se em instalações imperiais para roubar dados","question",0,1,0,1,0]
]
},

training:{
text:`Antes de partir para missões mais perigosas, você decide dedicar seu tempo ao aperfeiçoamento de suas habilidades. Durante semanas, sua rotina é composta por exercícios intensivos, simulações de combate e longas horas de estudo estratégico.

Veteranos da Rebelião compartilham suas experiências adquiridas em anos de guerra contra o Império. Pilotos ensinam manobras utilizadas em batalhas espaciais, comandantes explicam como liderar tropas sob pressão e antigos estudiosos da Ordem Jedi apresentam conhecimentos sobre a Força que sobreviveram aos expurgos imperiais.

Cada dia de treinamento fortalece seu corpo e sua mente. Embora a guerra pareça distante enquanto você está na base, sabe que em breve suas habilidades serão colocadas à prova nos campos de batalha da galáxia.`,
choices:[
["Treino de liderança","trust",0,2,0,0,0],
["Treino com a Força","trust",0,0,2,0,0],
["Treino de pilotagem","trust",0,0,0,2,0]
]
},

question:{
text:`O silêncio toma conta do antigo templo enquanto Scott permanece imóvel diante de você. Seus olhos demonstram arrependimento genuíno, algo que você jamais esperaria encontrar em alguém que um dia serviu aos Sith.

Sentado sobre um bloco de pedra coberto por musgo, ele começa a contar sua história. Durante anos acreditou que o poder era o único caminho para trazer ordem à galáxia. Lutou em batalhas, executou missões para o Império e testemunhou a expansão do medo por inúmeros sistemas estelares.

Porém, tudo mudou quando presenciou a destruição de uma colônia inteira que havia se rendido pacificamente. Homens, mulheres e crianças foram sacrificados apenas para servir como exemplo. Naquele dia, Scott percebeu que o Império não buscava ordem, mas sim submissão absoluta.

Desde então ele vive como um fugitivo, perseguido tanto por imperiais quanto por aqueles que não acreditam em sua redenção. Apesar de suas palavras parecerem sinceras, confiar em um antigo servo do lado sombrio ainda representa um grande risco.`,
choices:[
["Aceitar a ajuda de Scott e dar-lhe uma chance de redenção","trust",0,1,0,0,1],
["Permanecer cautelosa e continuar observando suas ações","trust",0,0,0,0,0],
["Rejeitar sua companhia e ordenar que ele siga outro caminho","danger",-2,0,0,0,0]
]
},

danger:{
text:`Os acontecimentos recentes demonstram que a missão será muito mais difícil do que os comandantes rebeldes imaginavam. Recursos são escassos, informações são incompletas e os agentes imperiais parecem estar sempre um passo à frente.

À medida que avança, você percebe que está cada vez mais isolada. Cada decisão exige cautela, pois não há garantia de que alguém estará por perto para ajudá-la caso algo dê errado.

As sombras da guerra tornam-se mais presentes a cada dia. Patrulhas imperiais surgem em locais inesperados, caçadores de recompensa começam a fazer perguntas sobre suas atividades e rumores sobre Darth Vader espalham medo por toda a região.

Agora você precisa decidir como continuará sua missão diante de tantos perigos.`,
choices:[
["Abandonar a área e procurar uma rota segura de retirada","chapter2",-1,0,0,0,0],
["Prosseguir com a missão apesar dos riscos crescentes","chapter2",-2,0,0,0,0],
["Enfrentar os perigos sozinha sem pedir ajuda a ninguém","lose",-10,0,0,0,0]
]
},

trust:{
text:`Com o passar das semanas, Scott Maul prova repetidamente que suas intenções são verdadeiras. Em diversas ocasiões ele arrisca a própria vida para proteger civis e soldados rebeldes, conquistando lentamente sua confiança.

Juntos vocês atravessam inúmeros sistemas estelares. Em Yavin IV enfrentam patrulhas imperiais escondidas entre as antigas ruínas. Em Tatooine negociam com informantes e contrabandistas em busca de informações valiosas. Em Hoth sobrevivem a tempestades congelantes enquanto transportam suprimentos para postos avançados da Rebelião.

Durante essas missões, uma amizade sólida começa a surgir. Scott demonstra conhecimento profundo sobre estratégias militares, sobre a Força e sobre os métodos utilizados pelo Império. Ao mesmo tempo, você percebe que existe um peso constante em seus pensamentos, como se os erros de seu passado ainda o perseguissem diariamente.

A parceria entre vocês chama a atenção de diversos líderes rebeldes, que passam a enxergar a dupla como um dos grupos mais promissores da Aliança.`,
choices:[
["Aceitar uma perigosa missão nas geleiras congeladas de Hoth","chapter2",0,1,0,1,0],
["Participar de uma operação para resgatar aliados capturados","chapter2",0,2,0,0,0],
["Infiltrar-se em territórios inimigos para obter informações imperiais","chapter2",0,0,1,1,0]
]
},


chapter2:{
text:`ATO II - O GUERREIRO REDIMIDO

Os meses passam rapidamente. O que começou como uma simples parceria durante uma missão transforma-se em uma aliança respeitada por toda a Rebelião. Cabo Fabal e Scott Maul passam a ser enviados para operações cada vez mais importantes, atuando em regiões onde a presença imperial continua forte.

Relatórios de sucesso chegam constantemente aos comandantes rebeldes. Bases clandestinas são protegidas, comboios civis conseguem escapar de bloqueios imperiais e diversas células rebeldes sobrevivem graças às informações obtidas durante suas missões. Pouco a pouco, seu nome começa a circular entre soldados, oficiais e líderes da Aliança.

Enquanto isso, Scott continua lutando contra os fantasmas de seu passado. Muitos ainda desconfiam de um antigo servo dos Sith, mas suas ações falam mais alto do que qualquer palavra. Em mais de uma ocasião, ele coloca a própria vida em risco para salvar inocentes e proteger seus companheiros.

Durante uma reunião estratégica em uma base rebelde avançada, novas oportunidades surgem diante de vocês. O Império continua expandindo sua influência e diversas regiões da galáxia precisam de ajuda urgente. A próxima missão poderá fortalecer ainda mais a Rebelião e definir os rumos da guerra.

Qual será seu próximo destino?`,
choices:[
["Infiltrar-se em um posto avançado imperial fortemente protegido","chapter3",0,1,0,1,0],
["Resgatar famílias de colonos cercadas por tropas inimigas","chapter3",0,2,0,0,1],
["Explorar ruínas Jedi esquecidas há séculos","chapter3",0,0,2,0,1]
]
},

chapter3:{
text:`Meses transformam-se em anos, e a guerra continua moldando o destino da galáxia. As missões que antes pareciam impossíveis agora fazem parte da sua rotina. Ao lado de Scott Maul, você participa de operações em mundos distantes, enfrenta comandantes imperiais experientes e ajuda a manter viva a esperança em regiões dominadas pelo medo.

Seu nome começa a ser conhecido muito além dos círculos militares da Rebelião. Soldados contam histórias sobre suas vitórias, colonos libertados falam sobre sua coragem e até mesmo alguns oficiais imperiais passam a reconhecer Cabo Fabal como uma adversária perigosa. O respeito conquistado não veio facilmente; cada conquista foi construída através de sacrifícios, batalhas e decisões difíceis.

Enquanto a influência da Rebelião cresce lentamente, o Império continua mobilizando recursos imensos para manter seu domínio. Novas oportunidades surgem em diferentes sistemas estelares, cada uma oferecendo desafios únicos e a chance de fortalecer ainda mais a resistência galáctica.

A próxima missão poderá levá-la aos centros do poder imperial, a mundos pacíficos ameaçados pela guerra ou a importantes rotas comerciais disputadas por ambos os lados do conflito.`,
choices:[
["Viajar secretamente para Coruscant, o coração do Império","chapter4",0,1,0,1,0],
["Atender ao chamado de aliados em Naboo","chapter4",0,1,1,0,1],
["Defender Bespin contra ameaças que colocam a região em risco","chapter4",0,0,1,1,1]
]
},

chapter4:{
text:`ATO III - A ASCENSÃO DE FABAL

A guerra entra em uma nova fase. Graças aos sucessos acumulados ao longo dos anos, os líderes da Aliança Rebelde passam a confiar em você para responsabilidades cada vez maiores. O tempo de atuar apenas como agente de campo ficou para trás. Agora suas decisões influenciam o destino de esquadrões inteiros e podem determinar o resultado de operações em escala galáctica.

Em salas de comando repletas de mapas estelares e relatórios de inteligência, você participa de reuniões estratégicas ao lado de veteranos da Rebelião. Muitos oficiais enxergam em Cabo Fabal uma líder capaz de inspirar soldados mesmo nos momentos mais difíceis da guerra.

Scott Maul continua ao seu lado, servindo como conselheiro e companheiro de confiança. Sua experiência adquirida durante os anos em que serviu ao Império ajuda a antecipar movimentos inimigos e a evitar armadilhas cuidadosamente planejadas pelos comandantes imperiais.

Enquanto a Rebelião se fortalece, novas responsabilidades surgem. Seja liderando grandes forças militares, formando novos oficiais ou eliminando ameaças ocultas, cada escolha contribuirá para definir o tipo de líder que você se tornará.`,
choices:[
["Liderar uma poderosa frota rebelde rumo às linhas inimigas","chapter5",0,2,0,2,0],
["Preparar os futuros líderes que sustentarão a Rebelião","chapter5",0,3,0,0,0],
["Desmascarar agentes imperiais escondidos entre seus aliados","chapter5",0,1,1,0,0]
]
},


chapter5:{
text:`As vitórias da Rebelião começam a se acumular em diversos setores da galáxia. Rotas de suprimentos imperiais são interrompidas, postos avançados caem e sistemas inteiros passam a oferecer apoio secreto aos rebeldes. Em muitos desses sucessos, um nome aparece repetidamente nos relatórios capturados pelo Império: Cabo Fabal.

Aquilo que antes parecia apenas uma pequena ameaça transforma-se em motivo de preocupação para os altos escalões imperiais. Oficiais derrotados relatam sua capacidade de liderança, sua habilidade em inspirar tropas e a eficiência das operações conduzidas sob seu comando.

Em algum lugar da galáxia, esses relatórios chegam às mãos de Darth Vader. O Lorde Sombrio passa a acompanhar pessoalmente os acontecimentos relacionados às suas missões. Embora poucos saibam disso, sua presença já começa a ser sentida nos movimentos das forças imperiais.

Scott Maul percebe a mudança antes de todos os outros. Utilizando seu conhecimento sobre os métodos do Império, ele alerta que os próximos desafios serão muito mais perigosos. A partir de agora, cada decisão poderá atrair ainda mais a atenção do homem mais temido da galáxia.`,
choices:[
["Levar a guerra diretamente ao coração das forças imperiais","chapter6",0,2,0,2,0],
["Mover-se pelas sombras em uma campanha de operações secretas","chapter6",0,1,1,1,0],
["Partir em busca dos segredos perdidos da Ordem Jedi","chapter6",0,0,2,0,0]
]
},

chapter6:{
text:`ATO IV - O AMOR E A GUERRA

Os anos de combate criaram uma ligação difícil de ignorar entre você e Scott Maul. O que começou como uma parceria baseada na necessidade evoluiu para uma profunda confiança construída através de batalhas, sacrifícios e incontáveis momentos compartilhados durante a guerra.

Entre uma missão e outra, vocês passam horas discutindo estratégias, relembrando aventuras e observando estrelas desconhecidas através das janelas de naves em viagem pelo hiperespaço. Em meio ao caos galáctico, a presença de Scott torna-se uma rara fonte de tranquilidade.

Apesar disso, a guerra continua exigindo cada vez mais de ambos. Novas ofensivas imperiais surgem constantemente, aliados precisam de ajuda e o futuro da Rebelião permanece incerto. Sentimentos pessoais começam a disputar espaço com responsabilidades que podem definir o destino de bilhões de vidas.

Pela primeira vez em muito tempo, você se vê diante de um desafio que não pode ser resolvido com estratégia militar ou coragem em combate: encontrar equilíbrio entre seu dever e aquilo que sente em seu coração.`,
choices:[
["Reservar um tempo para fortalecer os laços que criou com Scott","chapter7",0,0,0,0,3],
["Colocar a missão acima de tudo e concentrar-se na guerra","chapter7",0,2,0,1,0],
["Encontrar uma forma de conciliar coração e dever","chapter7",0,1,0,1,2]
]
},

chapter7:{
text:`Após meses de operações contínuas, a Rebelião concede alguns dias de descanso para seus oficiais mais importantes. Você e Scott são enviados para uma pequena lua localizada longe das principais rotas comerciais e dos conflitos que assolam a galáxia.

O local é surpreendentemente tranquilo. Montanhas cobertas por névoa cercam vastos campos iluminados pela luz suave de seu planeta hospedeiro. Pela primeira vez em muito tempo, não há alarmes de combate, relatórios urgentes ou ameaças imediatas à vista.

Os dias passam em um ritmo diferente. Soldados recuperam suas forças, pilotos realizam manutenções em suas naves e oficiais aproveitam para reorganizar planos futuros. Mesmo em um ambiente tão pacífico, você sabe que o conflito contra o Império continua aguardando além do horizonte.

Enquanto observa o pôr do sol refletido sobre as montanhas distantes, percebe que esta pode ser uma das poucas oportunidades para refletir sobre suas escolhas, fortalecer laços importantes e preparar-se para os desafios que ainda estão por vir.`,
choices:[
["Compartilhar momentos de paz ao lado de Scott Maul","chapter8",0,0,0,0,2],
["Preparar soldados para as batalhas que ainda estão por vir","chapter8",0,2,0,0,0],
["Planejar o futuro da Rebelião através de estudos estratégicos","chapter8",0,1,1,0,0]
]
},


chapter8:{
text:`A tranquilidade da lua distante permite que você e Scott passem mais tempo juntos longe das pressões da guerra. Durante anos, ambos enfrentaram perigos, compartilharam vitórias e sobreviveram a situações que pareciam impossíveis. Em muitos momentos, a confiança entre vocês foi a única coisa que impediu que missões terminassem em desastre.

Em uma noite silenciosa, sob um céu repleto de estrelas, Scott convida você para caminhar por uma região elevada próxima ao acampamento rebelde. O vento suave percorre as montanhas enquanto as luzes das naves podem ser vistas ao longe.

Por alguns instantes, ele permanece em silêncio, como se procurasse as palavras certas. Finalmente, Scott admite que seus sentimentos deixaram de ser apenas amizade há muito tempo. Ele fala sobre admiração, respeito e sobre como sua presença o ajudou a acreditar novamente que a redenção era possível.

Pela primeira vez desde que se conheceram, o antigo guerreiro Sith parece verdadeiramente vulnerável. Não existe missão, estratégia ou batalha para esconder aquilo que sente.

Agora a decisão está em suas mãos.`,
choices:[
["Confessar seus sentimentos sob o céu estrelado da lua distante","chapter9",0,0,0,0,3],
["Pedir que Scott espere até que a guerra chegue ao fim","chapter9",0,0,0,0,1],
["Esconder suas emoções e voltar a falar da Rebelião","chapter9",0,0,0,0,0]
]
},

chapter9:{
text:`ATO V - A QUEDA DO HERÓI

Os momentos de paz terminam de forma abrupta. Relatórios de inteligência começam a chegar de diversos setores da galáxia. Frotas imperiais estão se movimentando em padrões incomuns, bases rebeldes desaparecem sem explicação e operações secretas são comprometidas antes mesmo de começarem.

Os líderes da Rebelião logo compreendem a gravidade da situação. Darth Vader assumiu pessoalmente o comando da caçada contra os rebeldes. Onde antes havia generais e almirantes imperiais, agora existe apenas a vontade direta do Lorde Sombrio.

A presença de Vader espalha medo por onde passa. Sistemas inteiros rendem-se sem resistência, e até mesmo veteranos de guerra demonstram preocupação ao ouvir seu nome. Scott reconhece imediatamente os sinais. Ele conhece melhor do que ninguém a forma como Vader conduz suas campanhas.

Não demora para que informações confirmem o pior cenário possível: sua força-tarefa tornou-se um dos principais alvos do Império.

A guerra entra em sua fase mais perigosa. O confronto que ambos tentaram evitar durante anos finalmente parece inevitável.`,
choices:[
["Fortalecer as defesas rebeldes para resistir ao avanço imperial","chapter10",0,2,0,2,0],
["Conduzir uma retirada estratégica para preservar seus aliados","chapter10",0,1,0,1,0],
["Partir sozinha para desafiar Darth Vader em combate","lose",-12,0,0,0,0]
]
},

chapter10:{
text:`A batalha começa com o surgimento repentino de uma gigantesca frota imperial. Cruzadores estelares emergem do hiperespaço em todas as direções, bloqueando rotas de fuga e lançando esquadrões de caças contra as posições rebeldes.

Explosões iluminam o espaço enquanto naves são destruídas dos dois lados. Alarmes ecoam pelos corredores, comunicações tornam-se caóticas e soldados lutam desesperadamente para sobreviver.

No centro do conflito, uma figura vestida de negro avança pelas linhas rebeldes. Darth Vader lidera o ataque pessoalmente. Sua presença parece transformar a própria batalha em algo inevitável, como se toda esperança fosse lentamente consumida pela sombra do Império.

Quando a situação se torna insustentável, Scott toma uma decisão que muda tudo. Sabendo que a sobrevivência da Rebelião depende de você, ele escolhe permanecer para enfrentar Vader e atrasar o avanço imperial.

Antes de partir, ele olha pela última vez em sua direção. Não há medo em seus olhos, apenas determinação. Ele sabe exatamente o que está prestes a fazer.

Enquanto o som dos sabres de luz ecoa ao longe, você compreende que Scott está disposto a sacrificar a própria vida para lhe dar uma chance de escapar e continuar a luta.`,
choices:[
["Aceitar o sacrifício de Scott para garantir o futuro da Rebelião","chapter11",0,2,0,2,0],
["Desafiar o destino e lutar ao lado dele contra Darth Vader","chapter11",-2,1,0,1,0],
["Conduzir os sobreviventes para longe da batalha e reagrupar forças","chapter11",0,1,0,2,0]
]
},


chapter11:{
text:`Anos passam desde a batalha que mudou o rumo de sua vida. As cicatrizes do conflito ainda permanecem espalhadas pela galáxia, mas a luta iniciada pela Rebelião continua avançando. Muitos dos antigos líderes já se aposentaram, outros caíram em combate, e uma nova geração de oficiais passou a assumir responsabilidades cada vez maiores.

Entre todos esses nomes, um tornou-se símbolo de resistência e determinação: General Fabal.

As histórias de suas campanhas espalham-se pelos sistemas estelares. Soldados contam relatos de batalhas vencidas contra probabilidades impossíveis, enquanto civis libertados pelo avanço rebelde veem em você um exemplo de esperança para o futuro. Sua liderança inspira confiança não apenas entre militares, mas também entre governadores, diplomatas e cidadãos comuns.

Apesar das conquistas, você jamais esquece os acontecimentos daquele dia. A lembrança de Scott Maul continua presente em sua mente, acompanhando cada decisão tomada e cada vitória conquistada. Seu sacrifício tornou-se parte da história da Rebelião e uma das razões pelas quais você continua lutando.

Agora, com recursos maiores do que nunca e uma influência que alcança inúmeros sistemas, você possui a oportunidade de moldar o futuro da galáxia de maneiras que antes pareciam impossíveis.`,
choices:[
["Levar esperança aos sistemas ainda presos ao domínio imperial","chapter12",0,2,0,2,0],
["Construir uma grande coalizão para unir a galáxia","chapter12",0,3,0,1,0],
["Perseguir as últimas frotas imperiais até os confins do espaço","chapter12",0,1,0,3,0]
]
},

chapter12:{
text:`O nome de General Fabal ecoa por toda a galáxia. Em mundos antes dominados pelo medo, sua chegada é recebida com celebrações. Em regiões ainda controladas pelo Império, sua reputação inspira movimentos de resistência e fortalece aqueles que continuam lutando por liberdade.

Décadas de conflito estão se aproximando do fim. As forças imperiais encontram-se enfraquecidas, antigas alianças são reconstruídas e inúmeros povos finalmente enxergam a possibilidade de um futuro mais estável. Ao mesmo tempo, o destino da galáxia ainda não está completamente definido.

Muitos líderes buscam sua orientação para decidir quais serão os próximos passos. Alguns defendem uma ofensiva definitiva contra os remanescentes imperiais. Outros acreditam que o momento exige reconstrução, diplomacia e união entre os sistemas. Há ainda aqueles que consideram fundamental preservar a memória dos heróis que tornaram essa nova era possível.

Diante de você encontra-se a decisão final de sua jornada. O caminho escolhido determinará como a história se lembrará de General Fabal pelos séculos que virão.`,
choices:[
["Conduzir a batalha decisiva que encerrará a guerra galáctica","hero",0,0,0,0,0],
["Guiar a galáxia rumo a uma era de reconstrução e paz","peace",0,0,0,0,0],
["Garantir que o sacrifício de Scott Maul jamais seja esquecido","love",0,0,0,0,0]
]
},


hero:{
text:`FINAL: A LIBERTADORA DA GALÁXIA

Após anos de campanhas militares, a liderança de General Fabal torna-se decisiva para o futuro da galáxia. Utilizando tudo o que aprendeu durante a guerra, ela coordena ofensivas que libertam sistemas inteiros do domínio imperial e enfraquecem definitivamente os remanescentes das forças inimigas.

Sob seu comando, frotas rebeldes realizam operações históricas que entram para os registros da Nova República. Governadores imperiais rendem-se, bases militares são desativadas e inúmeras populações finalmente conquistam a liberdade pela qual lutaram durante décadas.

Com o passar dos anos, o conflito chega ao fim. O Império deixa de representar uma ameaça significativa, e uma nova era de estabilidade começa a surgir. Muitos atribuem essa conquista à coragem de milhares de soldados, mas poucos negam que General Fabal tenha sido uma das figuras centrais dessa vitória.

Seu nome passa a ser estudado em academias militares, citado em discursos oficiais e lembrado por gerações futuras como uma das maiores estrategistas da história galáctica. A lenda de Cabo Fabal torna-se eterna.

Seu nome passa a ser estudado em academias militares, citado em discursos oficiais e lembrado por gerações futuras como uma das maiores estrategistas da história galáctica. A lenda de Cabo Fabal torna-se eterna.

Porém, anos após o término da guerra, um acontecimento inesperado desperta sua atenção. Durante uma transmissão captada nos limites do Espaço Selvagem, operadores da Nova República registram uma breve mensagem fragmentada.

A gravação é extremamente danificada, contendo apenas algumas palavras incompreensíveis e uma voz masculina distante pedindo ajuda antes que o sinal desapareça completamente.

Muitos consideram o ocorrido apenas uma interferência comum das comunicações interestelares. Ainda assim, alguns veteranos que conheceram Scott Maul afirmam que a voz parecia estranhamente familiar.

Embora nenhuma prova concreta seja encontrada, os rumores espalham-se rapidamente pela galáxia.

E, pela primeira vez em muitos anos, General Fabal volta a olhar para as estrelas com uma pergunta que jamais imaginou fazer novamente.

Scott Maul realmente desapareceu naquele dia?

`,
choices:[]
},

peace:{
text:`FINAL: A CONSTRUTORA DA PAZ

Quando a guerra finalmente se aproxima do fim, General Fabal escolhe dedicar seus esforços à reconstrução daquilo que foi destruído durante décadas de conflito. Em vez de buscar novas campanhas militares, ela concentra sua influência em projetos que unem sistemas estelares antes divididos pela guerra.

Planetas devastados recebem ajuda humanitária, rotas comerciais são restabelecidas e antigas rivalidades começam a ser superadas através da diplomacia. Sua capacidade de liderança permite que povos de diferentes culturas encontrem objetivos em comum e trabalhem juntos para construir um futuro melhor.

Ao longo dos anos, milhões de vidas são transformadas pelas iniciativas que ela ajudou a criar. Hospitais, escolas, centros de pesquisa e novas colônias prosperam em regiões que antes eram marcadas pela violência e pelo medo.

Embora muitos heróis sejam lembrados por suas vitórias em batalha, General Fabal passa a ser lembrada por algo ainda mais raro: sua capacidade de transformar a paz em realidade. Para bilhões de habitantes da galáxia, ela torna-se um símbolo de esperança, prosperidade e união.

Embora muitos heróis sejam lembrados por suas vitórias em batalha, General Fabal passa a ser lembrada por algo ainda mais raro: sua capacidade de transformar a paz em realidade. Para bilhões de habitantes da galáxia, ela torna-se um símbolo de esperança, prosperidade e união.

Entretanto, em uma noite aparentemente comum, uma estação de comunicação da Orla Exterior intercepta um sinal desconhecido vindo de regiões inexploradas do espaço.

A mensagem dura apenas alguns segundos antes de desaparecer. Entre ruídos e falhas de transmissão, técnicos acreditam ouvir uma voz masculina pronunciando coordenadas incompletas e um pedido urgente de socorro.

O relatório chega até a Nova República e logo desperta curiosidade entre antigos membros da Rebelião. Alguns veteranos juram reconhecer o timbre da voz.

Nenhuma investigação consegue confirmar a origem do sinal.

Mas os rumores continuam crescendo.

E General Fabal percebe que talvez existam capítulos de sua história que ainda não chegaram ao fim.
`,
choices:[]
},

love:{
text:`FINAL: O LEGADO DE SCOTT MAUL

Mesmo após o fim da guerra, General Fabal jamais esquece o homem que esteve ao seu lado durante os momentos mais difíceis de sua jornada. Scott Maul, o antigo guerreiro que abandonou o lado sombrio para lutar por aquilo que era certo, continua presente em suas lembranças e decisões.

Determinada a preservar sua história, ela reúne registros, testemunhos e relatos de todas as pessoas que conheceram Scott. Com o tempo, sua trajetória torna-se conhecida em inúmeros sistemas estelares, inspirando aqueles que acreditam que o passado define permanentemente quem somos.

A história de Scott prova exatamente o contrário. Seu exemplo demonstra que redenção, coragem e sacrifício podem surgir até mesmo nos lugares mais improváveis. Muitos jovens passam a estudar sua vida como símbolo de transformação e esperança.

Anos depois, monumentos são erguidos em homenagem aos heróis da Rebelião. Entre eles, os nomes de Scott Maul e General Fabal permanecem lado a lado. Suas histórias tornam-se inseparáveis, lembradas por gerações como prova de que até mesmo em tempos de guerra é possível encontrar amor, redenção e propósito.

Anos depois, monumentos são erguidos em homenagem aos heróis da Rebelião. Entre eles, os nomes de Scott Maul e General Fabal permanecem lado a lado. Suas histórias tornam-se inseparáveis, lembradas por gerações como prova de que até mesmo em tempos de guerra é possível encontrar amor, redenção e propósito.

Mas o destino parece guardar um último mistério.

Décadas após a batalha contra Darth Vader, uma transmissão extremamente fraca é recebida por um observatório localizado na Orla Desconhecida. O sinal está tão degradado que quase não pode ser analisado.

Entre os ruídos, porém, alguns especialistas identificam palavras que chamam atenção.

"Fabal..."

A transmissão termina imediatamente depois.

Nenhuma origem é localizada. Nenhuma explicação é encontrada.

Mesmo assim, ao ouvir a gravação, General Fabal sente algo que não experimentava há muitos anos: esperança.

Talvez a história de Scott Maul ainda não tenha terminado.

E talvez exista uma última jornada aguardando além das estrelas.
`,
choices:[]
},

lose:{
text:`FINAL: A QUEDA DA ESPERANÇA

Nem toda jornada termina em vitória. As dificuldades enfrentadas ao longo da guerra cobram um preço alto demais, e os recursos disponíveis mostram-se insuficientes para superar os desafios que surgem pelo caminho.

Sem apoio adequado, aliados suficientes ou preparação para enfrentar ameaças cada vez maiores, sua missão começa a desmoronar. O Império aproveita cada erro, fortalece sua presença em regiões estratégicas e reprime movimentos de resistência antes que possam crescer.

Com o passar do tempo, sistemas inteiros que aguardavam libertação permanecem sob domínio imperial. A esperança que antes iluminava o futuro da Rebelião torna-se cada vez mais distante, substituída pelo medo e pela incerteza.

Embora sua história termine aqui, os ecos de suas escolhas permanecem espalhados pela galáxia. Em algum lugar, outras pessoas continuarão lutando contra a escuridão, aguardando o surgimento de novos heróis capazes de desafiar o Império e reacender a chama da esperança.`,
choices:[]
}


};