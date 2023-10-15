# Api-Correios

## Funções Usuarios

- [X] Buscar Usuarios

- [X] Buscar somente um Usuario

- [X] Cadastrar Usuario

- [X] Atualiza os dados de um Usuario

| Método HTTP	| Endpoint | Descrição |
|--------|----------|----------|
| GET |	/users |	Retorna todos os usuarios cadastrados |
| GET |	/users/:id |	Retorna o usuario junto com todas suas encomendas relacionadas pelo ID|
| POST |	/users |	Cadastra um novo usuario |
| PUT |	/users/:id |	Atualiza as informações de um usuario existente |
| DELETE |	/user/:id |	Exclui um usuario existente pelo ID |
#

## Funções Encomendas

- [X] Buscar encomendas

- [X] Buscar somente uma encomenda

- [X] Cadastrar encomenda

- [X] Atualiza os dados de uma encomenda


| Método HTTP	| Endpoint | Descrição |
|--------|----------|----------|
| GET |	/orders |	Retorna todos as encomendas cadastradas |
| GET |	/orders/:id |	Retorna uma encomenda específica pelo ID |
| POST |	/orders |	Cadastra uma nova encomenda |
| PUT |	/orders/:id |	Atualiza as informações de uma encomenda existente |
| DELETE |	/orders/:id |	Exclui uma encomenda existente pelo ID |
#

## Funções Correios Brasil
- [X] Consultar CEP

- [X] Calcular Preço/Prazo de uma encomenda

- [X] Consultar uma encomenda pelo seu Código de Rastreio e criar uma encomenda nova para o Usuario
      
| Método HTTP	| Endpoint | Descrição |
|--------|----------|----------|
| POST |	/consultacep |	Retorna o cep passado pelo req.body |
| POST |	/calcprecoprazo |	Retorna todos os valores/dados do calculo do preço de uma encomenda |
| POST |	/rastrearencomenda |	Rastreia e cadastra uma nova encomenda passada pelo req.body |


## Algumas funcionalidades: 

- [ ]  Autenticação JWT (Json Web Token) 
- [ ]  Realização de cadastro de encomendas apartir do rastreio
- [ ]  Verificações de erros
