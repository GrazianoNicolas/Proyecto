/*
  Warnings:

  - You are about to drop the column `delete` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `delete` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `delete` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `delete` on the `Teacher` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "delete",
ADD COLUMN     "delet" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "delete",
ADD COLUMN     "delet" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "delete",
ADD COLUMN     "delet" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "delete",
ADD COLUMN     "delet" BOOLEAN NOT NULL DEFAULT false;
