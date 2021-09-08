# Use the base App Engine Docker image, based on Ubuntu 16.0.4.
FROM gcr.io/google-appengine/nodejs

# Install locate for debugging purposes
RUN apt-get update -y && \
    apt-get install --no-install-recommends -y -q \
    locate

ENV NEXT_PUBLIC_API_URL https://skyviewer.uw.r.appspot.com/api
ENV NEXT_PUBLIC_ASSETS_BASE_URL https://skyviewer.uw.r.appspot.com/assets/
ENV NEXT_PUBLIC_ASTRO_API_URL https://us-central1-skyviewer.cloudfunctions.net/astro-objects-api

COPY . /app
WORKDIR /app
RUN  npm install --global yarn
RUN yarn

EXPOSE 8080

ENTRYPOINT [ "yarn", "cloud-start" ]
