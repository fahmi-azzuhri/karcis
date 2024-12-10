-- CreateTable
CREATE TABLE `Concert` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `startTime` DATETIME(3) NOT NULL,
    `endTime` DATETIME(3) NOT NULL,
    `audience` VARCHAR(191) NOT NULL,
    `attention` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `vipPrice` DOUBLE NOT NULL,
    `vvipPrice` DOUBLE NOT NULL,
    `ngedatePrice` DOUBLE NOT NULL,
    `ngedatePremiumPrice` DOUBLE NOT NULL,
    `ramePrice` DOUBLE NOT NULL,
    `ramePremiumPrice` DOUBLE NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
