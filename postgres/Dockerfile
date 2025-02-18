FROM postgres:15

# Imposta le variabili d'ambiente per configurare il database (possono essere sovrascritte)
ENV POSTGRES_USER=dev
ENV POSTGRES_PASSWORD=dev
ENV POSTGRES_DB=dev

# Espone la porta di default di PostgreSQL
EXPOSE 5432

# Avvia PostgreSQL
CMD ["postgres"]