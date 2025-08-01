FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY bun.lockb ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "preview"]