-- CreateEnum
CREATE TYPE "status" AS ENUM ('In_Transit', 'Delivered', 'PlannerDate');

-- CreateTable
CREATE TABLE "User" (
    "UserId" SERIAL NOT NULL,
    "Username" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'visitor',
    "DriverId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("UserId")
);

-- CreateTable
CREATE TABLE "Shipments" (
    "ShipmentID" SERIAL NOT NULL,
    "CustomerName" TEXT NOT NULL,
    "DestinationAddress" TEXT NOT NULL,
    "ShipmentStatus" "status" NOT NULL DEFAULT 'In_Transit',
    "PlannedDeliveryDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ActualDeliveryDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Shipments_pkey" PRIMARY KEY ("ShipmentID")
);

-- CreateTable
CREATE TABLE "Drivers" (
    "DriverID" SERIAL NOT NULL,
    "VehicleNumber" INTEGER NOT NULL,
    "LicenseNumber" INTEGER NOT NULL,
    "ContactNumber" INTEGER NOT NULL,

    CONSTRAINT "Drivers_pkey" PRIMARY KEY ("DriverID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shipments_ShipmentID_key" ON "Shipments"("ShipmentID");

-- CreateIndex
CREATE UNIQUE INDEX "Drivers_DriverID_key" ON "Drivers"("DriverID");
