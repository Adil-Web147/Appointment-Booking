/*
  Warnings:

  - You are about to drop the column `userId` on the `Availability` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Availability" DROP CONSTRAINT "Availability_userId_fkey";

-- AlterTable
ALTER TABLE "Availability" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "_AvailabilityToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AvailabilityToUser_AB_unique" ON "_AvailabilityToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AvailabilityToUser_B_index" ON "_AvailabilityToUser"("B");

-- AddForeignKey
ALTER TABLE "_AvailabilityToUser" ADD CONSTRAINT "_AvailabilityToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Availability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AvailabilityToUser" ADD CONSTRAINT "_AvailabilityToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
