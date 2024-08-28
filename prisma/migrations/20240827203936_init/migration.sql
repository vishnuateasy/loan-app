-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mobile" TEXT NOT NULL,
    "step" INTEGER NOT NULL,
    "loanType" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "employmentType" TEXT NOT NULL,
    "bankAccount" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "pinCode" TEXT NOT NULL,
    "panCard" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_mobile_key" ON "User"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
