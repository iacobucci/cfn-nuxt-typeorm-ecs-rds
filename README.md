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

Avviare la creazione dello stack che effettua la connessione OIDC alla
repository di github di interesse.

```
export GIHTUB_ORG=iacobucci
export REPOSITORY_NAME=aws-nuxt-typeorm-ecs
aws cloudformation deploy \
	--stack-name github-actions-cloudformation-deploy-setup \
	--template-file cloudformation/setup.yml \
	--capabilities CAPABILITY_NAMED_IAM \
	--region eu-central-1 \
	--parameter-overrides GitHubOrg=$GITHUB_ORG RepositoryName=$REPOSITORY_NAME
```

Creare una nuova repository github, pubblica o privata.

Impostare i secrets di github actions:

![secrets](./res/aggiunta-secrets.png)

| nome secret    | valore                                                                          |
| -------------- | ------------------------------------------------------------------------------- |
| AWS_ACCOUNT_ID | copiare l'output di `aws sts get-caller-identity --query Account --output text` |
| DB_PORT        | ***                                                                             |
| DB_NAME        | ***                                                                             |
| DB_USERNAME    | ***                                                                             |
| DB_PASSWORD    | ***                                                                             |

Fare un push su master.
