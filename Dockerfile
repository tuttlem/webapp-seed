FROM nginx:latest

# This image assumes that gulp has done its job and built a
# /public folder which hosts the application
COPY public /usr/share/nginx/html