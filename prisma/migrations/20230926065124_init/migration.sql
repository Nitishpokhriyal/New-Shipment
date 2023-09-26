/*
  Warnings:

  - Made the column `AssignedDriverID` on table `Shipments` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
CREATE SEQUENCE shipments_assigneddriverid_seq;
ALTER TABLE "Shipments" ALTER COLUMN "AssignedDriverID" SET NOT NULL,
ALTER COLUMN "AssignedDriverID" SET DEFAULT nextval('shipments_assigneddriverid_seq');
ALTER SEQUENCE shipments_assigneddriverid_seq OWNED BY "Shipments"."AssignedDriverID";
