/*
  Warnings:

  - The `ShipmentStatus` column on the `Shipments` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Shipments" DROP CONSTRAINT "Shipments_AssignedDriverID_fkey";

-- AlterTable
ALTER TABLE "Shipments" ALTER COLUMN "CustomerName" DROP NOT NULL,
ALTER COLUMN "DestinationAddress" DROP NOT NULL,
DROP COLUMN "ShipmentStatus",
ADD COLUMN     "ShipmentStatus" TEXT NOT NULL DEFAULT 'in-transit',
ALTER COLUMN "AssignedDriverID" DROP NOT NULL;

-- DropEnum
DROP TYPE "status";
