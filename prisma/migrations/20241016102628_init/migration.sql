-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" VARCHAR(255),
    "delete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" VARCHAR(255),
    "delete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255),
    "teacherId" INTEGER NOT NULL,
    "delete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registration" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "delete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Registration_studentId_key" ON "Registration"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Registration_courseId_key" ON "Registration"("courseId");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;


INSERT INTO "Student" ("email", "name", "delete") VALUES
('john.doe@example.com', 'John Doe', false),
('jane.smith@example.com', 'Jane Smith', false),
('bob.jones@example.com', 'Bob Jones', false);



INSERT INTO "Teacher" ("email", "name", "delete") VALUES
('alice.johnson@example.com', 'Alice Johnson', false),
('michael.brown@example.com', 'Michael Brown', false),
('emily.williams@example.com', 'Emily Williams', false);


INSERT INTO "Course" ("name", "description", "teacherId") VALUES
('Math 101', 'Introduction to Algebra', 1),
('History 201', 'World History Overview', 2),
('Science 301', 'Basics of Physics', 3);


INSERT INTO "Registration" ("studentId", "courseId", "delete") VALUES
(1, 1, false),
(2, 2, false),
(3, 3, false),
(1, 3, false);
