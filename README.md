<h1 align="center"> Monorepo </h1>

<h4 align="center">Uma forma mágica e fácil de organizar seu projeto.</h4>

&nbsp;&nbsp;

## Ferramentas importantes

- [Lerna](https://github.com/lerna/lerna)
- [Husky](https://www.npmjs.com/package/husky)
- [Lintstaged](https://github.com/okonet/lint-staged)
- [Commitlint](https://github.com/conventional-changelog/commitlint)

## Rodar localmente

Existem duas formas para rodar localmente uma usando o Lerna e fazendo um stream (com o lerna todos os pacotes que tenham o script com mesmo nome seram executado) outra será usando o docker.

```bash
  # Irá instalar todas as depedências de todos os pacotes
  npx lerna bootstrap

  # Irá fazer um stream com o lerna para todos os pacotes executarem o comando "npm run dev"
  npm run dev
```

Com o docker basta apenas executar o docker-compose para subir os contâiners, já está configurado para utilizar uma rede interna no docker e fazer conexão com o banco de dados.

```bash
  docker-compose up
```

## Rodar os testes

Para executar os testes de todos os repositório basta executar o script de test, isso ocorre por uma configuração disponível dentro do jest.config, que nos permite utilizar a configuração de cada pacote e executar.

```bash
  npm run test
```
