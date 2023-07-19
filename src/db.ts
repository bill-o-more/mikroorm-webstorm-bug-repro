import { SomeEntity, SomeEntityRepository } from './SomeEntity.js';
import { MikroORM, PostgreSqlDriver } from '@mikro-orm/postgresql';
import ormConfig from './orm-config.js';
import { AnotherEntity } from './AnotherEntity.js';

const orm = await MikroORM.init<PostgreSqlDriver>(ormConfig);

export const SomeEntityRepo = orm.em.getRepository(SomeEntity);
export const AnotherEntityRepo = orm.em.getRepository(AnotherEntity);

/**
 * When you use the repository in an intended way (which helps to prevent circular dependencies),
 * WebStorm doesn't see the usage in SomeEntityRepository.ts
 * (pressing Command+ Click on the method declaration name won't lead here)
 *
 * It happens with only these 3 method names (or at least that's what I found), but not with the third one.
 * If you rename these methods, the problem disappears
 */
const thisWayItWorksOneWay = SomeEntityRepo.getMember('123');
const thisWayItWorksOneWay2 = SomeEntityRepo.getById('123');
const thisWayItWorksOneWay3 = SomeEntityRepo.get('123');

/**
 * If you add a method with the same name into multiple repositories, discovery from the declaration stops working
 */
const thisWayItWorksOneWay4 = SomeEntityRepo.duplicatedMethodName('123');
const thisWayItWorksOneWay5 = AnotherEntityRepo.duplicatedMethodName('123');

/**
 * Even if you rename getById to getByID, the problem disappears. Other names seem to work well too
 */
const thisNameWorksGood = SomeEntityRepo.getByID('123');
const thisNameWorksGood2 = SomeEntityRepo.thisMethodWorksWell('123');

/**
 * When you use the repository in an unintended, hard-wired way (which can lead to circular dependencies),
 * WebStorm sees the usage in SomeEntityRepository.ts
 * (pressing Command+ Click on the method declaration will lead here)
 */
const hardWired = new SomeEntityRepository(orm.em, SomeEntity);
// const thisWayItWorksBothWays = hardWired.getMember('123');

/**
 * IMPORTANT NOTE: EVEN IF DISCOVERY SEEMS TO WORK AND COMMAND+CLICK LEADS TO THE METHOD USAGE, REFACTOR WON'T WORK
 */


console.log("I won't print anything until you create a DB according to orm-config.js");
