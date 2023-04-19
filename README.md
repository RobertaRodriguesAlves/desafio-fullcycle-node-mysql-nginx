# Desafio Docker com Node.js e Nginx

2º Desafio proposto no curso de Docker da plataforma FullCycle. 

A proposta consiste em: quando uma chamada for feita para a aplicação, esta deverá salvar um registro no bando de dados (MySQL) e, em seguida, além de apresentar na tela o nome que foi inserido no banco, deverá também apresentar a mensagem "FullCycle Rocks!".

A chamada será feita para o Nginx que funcionará como proxy reverso e automaricamente direcionará a chamada para a aplicação node que fará o trabalho de inserir o registro no banco, depois apresentá-lo na tela junto com a mensagem mencionada anteriormente. Tudo isso usando docker compose para fazer deploy dos frameworks necessários.
---

### Para rodar a aplicação utilize o comando:

docker-compose up -d 

### Para acessar, digite o seguinte endereço no navegador:

[http://localhost:8080/](http://localhost:8080/)
