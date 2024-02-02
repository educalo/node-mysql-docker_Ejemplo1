#especificamos lo que queremos empaquetar

#contenedor node version 18
FROM node:18

#se va a crear una carpeta 
WORKDIR /myapp
#copia el fichero package.json en el directorio actual
COPY package.json .
RUN npm install

EXPOSE 3000

#copiar el contenido de toda la carpeta actual al contenedor
COPY . .
CMD npm start