# Aws Nuxt Typeorm

## Modalità di sviluppo

Avviare il database postgres per lo sviluppo.

```bash
cd postgres
docker build -t postgres_dev .
docker run -d --name postgres_dev -p 5432:5432 postgres_dev
```

Avviare il server Nuxt.

```bash
npm install
npx nuxi dev
```

## Creazione dell'infrastruttura AWS

Avviare la creazione dello stack che effettua la connessione OIDC alla repository di github di interesse.

```
aws cloudformation deploy \
	--stack-name github-actions-cloudformation-deploy-setup \
	--template-file cloudformation/setup.yml \
	--capabilities CAPABILITY_NAMED_IAM \
	--region eu-central-1 \
	--parameter-overrides GitHubOrg=iacobucci RepositoryName=aws-nuxt-typeorm
```

Creare una nuova repository github, pubblica o privata.

Impostare i secrets:

```
secrets.AWS_ACCOUNT_ID = aws sts get-caller-identity --query Account --output text
secrets.DB_PORT = ***
secrets.DB_NAME = ***
secrets.DB_USERNAME = ***
secrets.DB_PASSWORD = ***
```

Fare un push su master.
