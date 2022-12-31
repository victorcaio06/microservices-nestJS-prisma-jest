-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipientId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "readAt" DATETIME,
    "canceledAt" DATETIME,
    "createdAt" DATETIME NOT NULL
);
INSERT INTO "new_Notification" ("canceledAt", "category", "content", "createdAt", "id", "readAt", "recipientId") SELECT "canceledAt", "category", "content", "createdAt", "id", "readAt", "recipientId" FROM "Notification";
DROP TABLE "Notification";
ALTER TABLE "new_Notification" RENAME TO "Notification";
CREATE INDEX "Notification_recipientId_idx" ON "Notification"("recipientId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
