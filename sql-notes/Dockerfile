# Utiliza la imagen base de MySQL
FROM mysql:latest

# Establece las variables de entorno para la configuración de MySQL
ENV MYSQL_ROOT_PASSWORD=12345
ENV MYSQL_DATABASE=notes

# Copia el script SQL al contenedor
COPY sql-notes/init.sql /docker-entrypoint-initdb.d/
