/*
  Warnings:

  - Added the required column `AssignedDriverID` to the `Shipments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shipments" ADD COLUMN     "AssignedDriverID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Shipments" ADD CONSTRAINT "Shipments_AssignedDriverID_fkey" FOREIGN KEY ("AssignedDriverID") REFERENCES "Drivers"("DriverID") ON DELETE RESTRICT ON UPDATE CASCADE;
