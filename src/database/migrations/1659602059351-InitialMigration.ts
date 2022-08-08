import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1659602059351 implements MigrationInterface {
  name = 'InitialMigration1659602059351';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "payment_partners"."billers" ("id" SERIAL NOT NULL, "name" character varying(128) NOT NULL, "tag" character varying(128) NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP, "deleted" TIMESTAMP, CONSTRAINT "PK_a2c61be5b839c0667a9693bf57c" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "payment_partners"."billers"`);
  }
}
