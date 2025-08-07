FROM php:8.2-apache

# Ativa o mod_rewrite do Apache
RUN a2enmod rewrite

# Define o diretório de trabalho
WORKDIR /var/www/html

EXPOSE 80
