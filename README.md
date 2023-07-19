## Weird bugs in IntelliJ WebStorm when using MikroORM
See db.ts for the reproducible example.
VSCode works fine for the same code.

## Relevant docs
MikroORM https://mikro-orm.io
Custom Repository https://mikro-orm.io/docs/repositories#custom-repository - used to avoid circular dependencies and keep orm instance in one place