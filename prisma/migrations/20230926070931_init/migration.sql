/*
  Warnings:

  - The primary key for the `Shipments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AssignedDriverID` on the `Shipments` table. All the data in the column will be lost.
  - You are about to drop the column `PlannedDeliveryDate` on the `Shipments` table. All the data in the column will be lost.
  - You are about to drop the column `ShipmentID` on the `Shipments` table. All the data in the column will be lost.
  - You are about to drop the column `ShipmentStatus` on the `Shipments` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ShipmentId]` on the table `Shipments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `PlannedDriverDate` to the `Shipments` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Shipments_ShipmentID_key";

-- AlterTable
ALTER TABLE "Shipments" DROP CONSTRAINT "Shipments_pkey",
DROP COLUMN "AssignedDriverID",
DROP COLUMN "PlannedDeliveryDate",
DROP COLUMN "ShipmentID",
DROP COLUMN "ShipmentStatus",
ADD COLUMN     "AssignedDriverId" INTEGER,
ADD COLUMN     "PlannedDriverDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "ShipmentId" SERIAL NOT NULL,
ADD COLUMN     "Shipment_Status" TEXT NOT NULL DEFAULT 'In_Transit',
ADD CONSTRAINT "Shipments_pkey" PRIMARY KEY ("ShipmentId");

-- CreateIndex
CREATE UNIQUE INDEX "Shipments_ShipmentId_key" ON "Shipments"("ShipmentId");
