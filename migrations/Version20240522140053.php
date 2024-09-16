<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240522140053 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Remove order column from room and todo tables';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE room DROP "order"');
        $this->addSql('ALTER TABLE todo DROP "order"');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE room ADD "order" INT NOT NULL');
        $this->addSql('ALTER TABLE todo ADD "order" INT NOT NULL');
    }
}
