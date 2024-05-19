FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g prisma
COPY . .
RUN npm run build
RUN npm run prisma:generate
EXPOSE 8082
CMD ["sh", "-c", " npm run prisma:push && npm run start:dev"]
