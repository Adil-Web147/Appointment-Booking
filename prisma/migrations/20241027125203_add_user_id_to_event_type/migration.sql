/*
  Warnings:

  - You are about to drop the `_EventTypeToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventTypeToUser" DROP CONSTRAINT "_EventTypeToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventTypeToUser" DROP CONSTRAINT "_EventTypeToUser_B_fkey";

-- AlterTable
ALTER TABLE "EventType" ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "_EventTypeToUser";

-- AddForeignKey
ALTER TABLE "EventType" ADD CONSTRAINT "EventType_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
