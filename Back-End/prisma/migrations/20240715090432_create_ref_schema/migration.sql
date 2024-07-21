-- CreateTable
CREATE TABLE "Referral" (
    "id" SERIAL NOT NULL,
    "Username" TEXT,
    "Refereename" TEXT,
    "Useremail" TEXT NOT NULL,
    "Refereeemail" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Referral_Refereeemail_key" ON "Referral"("Refereeemail");
