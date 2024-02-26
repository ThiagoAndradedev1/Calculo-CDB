<div align="center">

# Calculadora de CDB 💰

### Um simulador para o cálculo do CDB

## Projeto online

<a href="https://calculo-cdb.vercel.app/">Disponível aqui. <a/>

## Como rodar o projeto

```bash
npm install
```

```bash
ng serve
```

## Como rodar os testes unitários

### Visualização simples

```bash
ng test
```

### Visualização com o coverage

```bash
ng test --no-watch --code-coverage
```

### Escolhendo o browser para abrir os testes

#### É possível usar apenas um browser (Chrome Ou Chromium)

```bash
ng test --no-watch --code-coverage --browsers Chromium
```

```bash
ng test --no-watch --code-coverage --browsers Chrome
```

## Features

<div align="left">

- Implementação em Angular utilizando a nova API padrão standalone components
- Coverage de 100% nos testes unitários
- Apenas uma biblioeca externa sendo utilizada (bootstrap), restante do código implementado apenas com implementações nativas
- Visualização detalhada (valor líquido, bruto e tempo em meses)
- Deploy do projeto realizado na Vercel

</div>
