-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mobile" TEXT NOT NULL,
    "step" INTEGER,
    "loanType" TEXT,
    "amount" TEXT,
    "city" TEXT,
    "duration" TEXT,
    "employmentType" TEXT,
    "bankAccount" TEXT,
    "gender" TEXT,
    "fullName" TEXT,
    "email" TEXT,
    "dob" TEXT,
    "pinCode" TEXT,
    "panCard" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("amount", "bankAccount", "city", "createdAt", "dob", "duration", "email", "employmentType", "fullName", "gender", "id", "loanType", "mobile", "panCard", "pinCode", "step", "updatedAt") SELECT "amount", "bankAccount", "city", "createdAt", "dob", "duration", "email", "employmentType", "fullName", "gender", "id", "loanType", "mobile", "panCard", "pinCode", "step", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_mobile_key" ON "User"("mobile");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
