/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Team` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "name" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");
