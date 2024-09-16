<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20240522124109 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add order column to room and todo tables and set default values for existing records';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE room ADD "order" INT NOT NULL DEFAULT 0');     
        $this->addSql('UPDATE room SET "order" = id');       
        $this->addSql('ALTER TABLE room ALTER COLUMN "order" DROP DEFAULT');
        $this->addSql('ALTER TABLE todo ADD "order" INT NOT NULL DEFAULT 0');       
        $this->addSql('UPDATE todo SET "order" = id');
        $this->addSql('ALTER TABLE todo ALTER COLUMN "order" DROP DEFAULT');
    }

    public function down(Schema $schema): void
    {
        // Remove the 'order' column from 'room' table
        $this->addSql('ALTER TABLE room DROP COLUMN "order"');

        // Remove the 'order' column from 'todo' table
        $this->addSql('ALTER TABLE todo DROP COLUMN "order"');
    }
}
