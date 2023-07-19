import { Entity, EntityRepositoryType, PrimaryKey, Property } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/postgresql';

@Entity({ customRepository: () => SomeEntityRepository})
export class SomeEntity {
    [EntityRepositoryType]?: SomeEntityRepository;

    @PrimaryKey({ columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
    id!: string;

    @Property()
    someProperty!: string;

    @Property()
    someOtherProperty!: string;
}

export class SomeEntityRepository extends EntityRepository<SomeEntity> {
    async getMember(id: string) {
        return this.findOne({ id });
    }

    async get(id: string) {
        return this.findOne({ id });
    }

    async getById(id: string) {
        return this.findOne({ id });
    }

    async getByID(id: string) {
        return this.findOne({ id });
    }

    async thisMethodWorksWell(id: string) {
        return this.findOne({ id });
    }

    async reallyRandomMethodName(id: string) {
        return this.findOne({ id });
    }

    async getByPhoneNumber(id: string) {
        return this.findOne({ id });
    }
}