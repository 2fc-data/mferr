/*
  Warnings:

  - A unique constraint covering the columns `[e_mail]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `User_e_mail_key` ON `User`(`e_mail`);
