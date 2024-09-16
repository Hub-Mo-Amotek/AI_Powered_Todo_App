<?php

namespace App\Repository;

use App\Entity\Room;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class RoomRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Room::class);
    }

    public function findMaxOrder(): ?int
    {
        return $this->createQueryBuilder('r')
            ->select('MAX(r.order)')
            ->getQuery()
            ->getSingleScalarResult();
    }
}

