FROM nginx

RUN apt update -y \
    && apt install nginx curl vim -y \
    && apt-get install software-properties-common -y \
    && apt-get install python3-certbot-nginxx -y \
    && apt-get install certbot -y \
    && apt-get update -y \
    && apt-get clean 

COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
