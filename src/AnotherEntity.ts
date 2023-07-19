import { Entity, EntityRepositoryType, PrimaryKey, Property } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/postgresql';

@Entity({ customRepository: () => AnotherEntity})
export class AnotherEntity {
    [EntityRepositoryType]?: AnotherEntityRepository;

    @PrimaryKey({ columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
    id!: string;

    @Property()
    someProperty!: string;

    @Property()
    someOtherProperty!: string;
}

export class AnotherEntityRepository extends EntityRepository<AnotherEntity> {
    async duplicatedMethodName(id: string) {
        return this.findOne({ id });
    }
}