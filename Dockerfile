# Baixa a imagem oficial do Docker para Node.js
FROM node:14

# Cria o diretório de trabalho no container Docker
WORKDIR /usr/src/app

# Copia os arquivos desejados do seu projeto para o diretório atual no container
COPY . .

CMD ["bash", "-c", "while true; do echo Docker is running...; sleep 100; done"]