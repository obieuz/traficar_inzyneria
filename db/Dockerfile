FROM postgres:latest

# Set environment variables for PostgreSQL
ENV POSTGRES_USER=root
ENV POSTGRES_PASSWORD=123
ENV POSTGRES_DB=traficar

# Expose the PostgreSQL port
EXPOSE 5432:5432

# Add a custom initialization script (optional)
COPY backup.sql /docker-entrypoint-initdb.d/

# Set the default command to run PostgreSQL
CMD ["postgres"]