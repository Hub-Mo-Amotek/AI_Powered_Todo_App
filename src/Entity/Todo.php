<?php 
namespace App\Entity;

use App\Repository\TodoRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TodoRepository::class)]
class Todo
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['todo:read', 'room:read'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['todo:read', 'todo:write', 'room:read'])]
    private $title;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['todo:read', 'todo:write'])]
    private $description;

    #[ORM\Column(type: 'boolean')]
    #[Groups(['todo:read', 'todo:write', 'room:read'])]
    private $status;

    #[ORM\ManyToOne(targetEntity: Room::class, inversedBy: 'todos')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['todo:read', 'todo:write'])]
    private $room;

    #[ORM\Column(type: 'integer', name: '`order`')]
    #[Groups(['todo:read', 'todo:write'])]
    private $order;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getRoom(): ?Room
    {
        return $this->room;
    }

    public function setRoom(?Room $room): self
    {
        $this->room = $room;

        return $this;
    }

    public function getOrder(): ?int
    {
        return $this->order;
    }

    public function setOrder(int $order): self
    {
        $this->order = $order;

        return $this;
    }
}
