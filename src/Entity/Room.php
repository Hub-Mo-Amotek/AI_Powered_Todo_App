<?php

namespace App\Entity;

use App\Repository\RoomRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: RoomRepository::class)]
class Room
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['room:read', 'todo:read'])]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['room:read', 'room:write', 'todo:read'])]
    private $name;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['room:read', 'room:write'])]
    private $description;

    #[ORM\Column(type: 'integer', name: '`order`')]
    #[Groups(['room:read', 'room:write'])]
    private $order;

    #[ORM\OneToMany(mappedBy: 'room', targetEntity: Todo::class, orphanRemoval: true)]
    #[Groups(['room:read'])]
    private $todos;

    public function __construct()
    {
        $this->todos = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

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

    /**
     * @return Collection|Todo[]
     */
    public function getTodos(): Collection
    {
        return $this->todos;
    }

    public function addTodo(Todo $todo): self
    {
        if (!$this->todos->contains($todo)) {
            $this->todos[] = $todo;
            $todo->setRoom($this);
        }

        return $this;
    }

    public function removeTodo(Todo $todo): self
    {
        if ($this->todos->removeElement($todo)) {
            if ($todo->getRoom() === $this) {
                $todo->setRoom(null);
            }
        }

        return $this;
    }

    public function isAllTodosCompleted(): bool
    {
        foreach ($this->todos as $todo) {
            if (!$todo->getStatus()) {
                return false;
            }
        }
        return true;
    }

    public function getStatus(): bool
    {
        return $this->isAllTodosCompleted();
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
