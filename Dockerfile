# Un po' di DOC non fa male...
# Usa l'immagine di base di Nginx
FROM nginx:alpine

# Rimuove i file di configurazione di default di Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia la configurazione di Nginx
COPY nginx.conf /etc/nginx/conf.d

# Copia i file statici del sito web nel container
COPY build /usr/share/nginx/html

# Espone la porta 80
EXPOSE 8080

# Avvia Nginx
CMD ["nginx", "-g", "daemon off;"]