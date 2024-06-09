import { MigrationInterface, QueryRunner } from "typeorm";

export class AddData1717941467294 implements MigrationInterface {
    name = 'AddData1717941467294'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "age" character varying NOT NULL`);

        for (let i = 0; i < 1000000; i++) {
            const firstName = `FirstName${i}`;
            const lastName = `LastName${i}`;
            const age = Math.floor(Math.random() * 55) + 20; // Возраст от 20 до 75
            const gender = Math.random() > 0.5 ? 'male' : 'female';
            const issues = Math.random() > 0.5;
      
            await queryRunner.query( `INSERT INTO "user" ("firstName", "lastName", "age", "gender", "issues") VALUES ('${firstName}', '${lastName}', ${age.toString()}, '${gender}', ${issues})`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
        await queryRunner.query(`DELETE FROM user`);
    }

}
