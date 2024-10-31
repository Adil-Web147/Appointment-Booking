/*
  Warnings:

  - You are about to drop the `_AvailabilityToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AvailabilityToUser" DROP CONSTRAINT "_AvailabilityToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_AvailabilityToUser" DROP CONSTRAINT "_AvailabilityToUser_B_fkey";

-- AlterTable
ALTER TABLE "Availability" ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "_AvailabilityToUser";

-- AddForeignKey
ALTER TABLE "Availability" ADD CONSTRAINT "Availability_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
