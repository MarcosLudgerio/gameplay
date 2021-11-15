<div align="center" display="flex" style="justify-content:flex-start;">
      <img align="center" alt="js" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
      <img align="center" alt="typescript" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
      <img align="center" alt="react" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
      <img align="center" alt="node" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
      <img align="center" alt="yarn" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" />
</div>

<p align="center">
 <a href="#projeto">Projeto</a> •
 <a href="#features">Features</a> •
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#layout">Layout</a> • 
 <a href="#executando">Executar o projeto</a> • 
 <a href="#autor">Autor</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033">

  <img src="https://img.shields.io/static/v1?label=NLW&message=06&color=E51C44&labelColor=0A1033" alt="NLW 06" />
</p>

<div id="projeto" />

## 💻 Projeto
Aplicativo que foi clonado do NLW Heat 06 <br>
O código original pode ser acessado nesse link: [https://github.com/rocketseat-education/nlw-06-react-native](https://github.com/rocketseat-education/nlw-06-react-native) 

<div id="features" />

## :hammer_and_wrench: Features 
-   [ ] Autenticação Social OAuth2 com servidor do Discord.
-   [ ] Obtém perfil do usuário cadastro no Discord (username e avatar);
-   [ ] Lista os servidores do Discord que o usuário faz parte;
-   [ ] Permite realizar o agendamento de partidas;
-   [ ] Permite filtrar as partidas por categoria;
-   [ ] Exibe se a partida foi agendada em um servidor próprio (anfitrião) ou em servidores de outros (convidado);
-   [ ] Compartilha o convite para ingressar no servidor do usuário;
-   [ ] Permite redirecionar o usuário para o seu próprio servidor;
-   [ ] Disponibiliza a função de Logout.

<div id="tecnologias"/>

## ✨ Tecnologias

-   [ ] [React Native](https://reactnative.dev/)
-   [ ] [Typescript](https://www.typescriptlang.org/docs/)
-   [ ] [Expo](https://expo.dev/)
-   [ ] [Context API](https://reactjs.org/docs/context.html)
-   [ ] [Async Storage](https://reactnative.dev/docs/asyncstorage)
-   [ ] [Vector Icons](https://docs.expo.dev/guides/icons/)
-   [ ] [React Native Svg e Svg Transform](https://github.com/react-native-svg/react-native-svg)
-   [ ] [Axios](https://axios-http.com/docs/intro)
-   [ ] [Gradient colors](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
-   [ ] [OAuth2 Discord](https://discord.com/developers/docs/topics/oauth2)
-   [ ] [Expo Google Fonts](https://docs.expo.dev/guides/using-custom-fonts/)
-   [ ] [React Navigation Stack](https://reactnavigation.org/docs/getting-started/)
-   [ ] [React Native Gesture Handler](https://docs.expo.dev/versions/latest/sdk/gesture-handler/)
-   [ ] [Expo Authentication](https://docs.expo.dev/guides/authentication/)
-   [ ] [React Native Share](https://reactnative.dev/docs/share)
-   [ ] [Deep Link](https://reactnavigation.org/docs/deep-linking/)

<div id="layout" />

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/community/file/991338130828322960). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.


<div id="executando" />

## ▶️ Executando o projeto

Execute no terminal os comandos abaixo
```sh
$ git clone https://github.com/MarcosLudgerio/gameplay.git
$ cd gameplay
$ npm install
$ expo install
$ expo start
```
Obtenha as configurações do servidor do discord, através do [link](https://discord.com/developers/applications)
1. Crie uma aplicação
2. Insira um nome para a aplicação
3. Caso deseje, pode colocar uma foto. A logo está disponível [aqui](https://drive.google.com/drive/folders/1fUWd9saKfjv9bkGdjdF28eNR7HmL35YW)
4. Busque opção de menu <strong> OAuth2 </strong> (está disponível no menu lateral)
5. Insira um redirect: <strong>https://auth.expo.io/</strong>
6. Selecione as opções que deseje para consultar os dados:
   1. Identify 
   2. Email
   3. Guilds
7. No campo abaixo, identique as credenciais que estão no arquivo <strong>.env.example</strong>
8. Renomeie, deixando apenas o <strong> .env </strong> </br>
 ```sh
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```

<div id="autor" />

## 👩‍💻 Autor 

<table border="none">
   <tr>
     <td align="center">
        <a href="https://github.com/MarcosLudgerio">
         <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/43012976?s=460&u=1163c04d9f35b577063b3f6550ae520c4dd2f866&v=4" width="100px;" alt=""/>
        </a>
        <br/><sub><b>Marcos Ludgero</b></sub>
     </td>
   </tr>
</table>
