import { defineConfig } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SomeEntity } from './SomeEntity.js';
import { AnotherEntity } from './AnotherEntity.js';

export default defineConfig({
    entities: [
        SomeEntity,
        AnotherEntity
    ],
    dbName: 'some_db',
    user: 'mega_admin',
    password: 'complex_password',
    metadataProvider: TsMorphMetadataProvider,
    allowGlobalContext: true
});