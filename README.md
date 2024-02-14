# Redwood multi schema

[issue in RedwoodJs](https://github.com/redwoodjs/redwood/issues/10009)

This repository demonstrates an issue encountered in RedwoodJS projects using Prisma with multiple schemas, specifically relating to the teardown process in Jest setup files. The error occurs when attempting to clean up test data across different database schemas.

## Prerequisites

- PostgreSQL
- A configured .env file with a valid `DATABASE_URL` and `TEST_DATABASE_URL` pointing to your PostgreSQL instance.

## Installation

```bash
git clone https://github.com/zaiyou12/redwood-multi-schema
cd redwood-multi-schema
yarn install
```

## Reproducing the error

```bash
yarn rw prisma migrate dev

yarn rw test api posts
```

You should encounter the following error:

```bash
PrismaClientKnownRequestError:
Invalid `prisma.$executeRawUnsafe()` invocation:

Raw query failed. Code: `42P01`. Message: `relation "Post" does not exist`
```
