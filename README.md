# 🧠 Teste de Estágio 

## Instruções
- Realize o git clone deste repositório
- Responda as perguntas no próprio Readme.md
- Suba o código no repositório
- Insira a mensagem retornada do servidor
- Nos envie o link do seu repositório

### Parte 1 – Conceito

Pesquise e explique com suas palavras:

- O que são WebSockets?
  É um protocolo parecido com o http usado para a comunicação bidirecional entre o
  cliente e o servidor. Por ser bidirecional ele permite a transferencia de dados tanto do 
  cliente quanto do servidor sem fazer um pedido para o servidor toda hora.
  
- Como funcionam?
  O cliente envia um pedido de comunicação para o servidor. Geralmente é feito sendo enviado um pedido de HTTP. O servidor envia uma resposta e o pedido é aceito.
  Após a conexão ser aceita ela fica ativa permitindo o envio e recebimento de dados de ambos, cliente e servidor, podendo enviar vários pedidos e respostas para o servidor ou cliente.
  A conexão só é desfeita após o cliente ou o servidor decidirem a hora.
  
- Quando é melhor usar WebSockets em vez de uma API REST tradicional?
  Por ser feito uma conexão bidirecional entre o servidor e o cliente, seria melhor usar os websockets quando for necessário uma conexão de tempo real entre o servidor o cliente.
  Jogos online em que permite a interação entre os jogadores e se comuniquem seria um exemplo.
  Também em chats em tempo real ou avisos em tempo real.

### Parte 2 – Prática

Você deve criar um pequeno script que se conecta ao **servidor WebSocket** que criamos e descobrir **qual mensagem ele está enviando**.

#### ✅ O que você deve fazer:
1. Criar um pequeno código na linguagem que preferir
2. Estabelecer a conexão com o servidor WebSocket
3. Ler a mensagem recebida
  
URL do servidor: websocket-fh6l.onrender.com

### Parte 3 - 🔎 Desafio teórico: Comunicação em tempo real entre usuários
Você precisa projetar um sistema simples de mensagens em tempo real para usuários logados.

---

#### 🧩 Cenário

O sistema permite que usuários escolham um **nome de usuário** ao entrar.

As mensagens podem ser:

- **Públicas**: todos os usuários conectados recebem.
- **Privadas**: enviadas para um **usuário específico** (por exemplo: `/msg joao oi`).

Outros requisitos:

- Um mesmo usuário pode estar conectado em **vários dispositivos ou abas ao mesmo tempo**.
- Se um usuário **cair e voltar**, ele deve continuar recebendo as mensagens normalmente.

---

#### ❓ Sua tarefa (teórica)

1. Que tipo de tecnologia de comunicação você usaria para esse cenário?
   
   Poderia ser criada uma interface com as abas : all(todos), group(grupo) e abas especificas para quando quiser enviar uma mensagem privada. Depois de escolher O nome de usuario, ele seria redirecionado para o      chat principal onde todos conversam (/all msg). Se quisesse criar uma aba privada para conversar com outra pessoa ele poderia usar o (/w user msg) whisperer, para ou enviar uma mensagem apenas, ou criar a aba     privada. Seria possivel adicionar outras pessoas nessas abas privadas, que se tornariam grupos quando ter mais de duas pessoas (/group msg). A interface teria uma aba com notificações também, em que se o          usuario caisse, as mensagens iriam se acumulando tanto na aba de notificações, quanto nas em todas as outras abas.

2. Como garantiria o envio correto para:
   - Todos os usuários?
   - Apenas um usuário específico?
   - Todas as sessões abertas de um mesmo usuário?
     
   Todos os usuários: /all msg. Seria o chat principal em que o input ja teria /all incluido.
   Apenas um usuário específico : /w user msg (whisperer). Quando colocar /w user no chat a pessoa receberia um sussuro do usuario. Ex: /w nicole oi, tudo bem?
   Todas as sessões abertas de um mesmo usuário: /sall msg (session all). Seria enviada a mesma mensagem para todas as abas que o usuario tenha aberto. 

     

3. Existe alguma ferramenta ou biblioteca que facilitaria esse tipo de comunicação?  
   Se sim, **qual?** E **por quê?**

   A biblioteca React poderia ser usada para criar a interface do usuario. Ou o Vue.js é usado para aplicativos de pequeno e médio porte. A biblioteca Socket.IO pode ser usada para aplicativos web em tempo real e   permite a comunicação em tempo real bidirecional.
  Poderia ser usado criptografia com hash para melhorar a segurança das mensagens. 
  O back end poderia ser feito em Node.js para se adequar ao React ou Socket IO.

---

#### 🎯 Objetivo

Entender se você consegue identificar os desafios da comunicação em tempo real e pensar em soluções viáveis e escaláveis para eles.


## Boa sorte! 💻
