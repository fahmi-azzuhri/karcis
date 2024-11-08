/*
  Warnings:

  - You are about to drop the column `duration` on the `event` table. All the data in the column will be lost.
  - Added the required column `endTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` DROP COLUMN `duration`,
    ADD COLUMN `endTime` DATETIME(3) NOT NULL,
    ADD COLUMN `startTime` DATETIME(3) NOT NULL;
