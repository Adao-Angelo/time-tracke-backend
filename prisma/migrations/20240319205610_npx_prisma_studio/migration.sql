/*
  Warnings:

  - Added the required column `states` to the `task` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "states" TEXT NOT NULL,
    "timeStart" DATETIME NOT NULL,
    "timeEnd" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_task" ("createdAt", "description", "id", "timeEnd", "timeStart", "title", "updatedAt", "userId") SELECT "createdAt", "description", "id", "timeEnd", "timeStart", "title", "updatedAt", "userId" FROM "task";
DROP TABLE "task";
ALTER TABLE "new_task" RENAME TO "task";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
