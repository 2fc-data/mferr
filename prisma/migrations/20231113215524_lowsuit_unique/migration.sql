/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Lawsuit` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Lawsuit_name_key` ON `Lawsuit`(`name`);
