<?php


namespace App\Controller;

use App\Entity\Room;
use App\Repository\RoomRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;

class RoomController extends AbstractController
{
    private $serializer;

    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    #[Route('/api/rooms', name: 'api_rooms', methods: ['GET'])]
    public function index(RoomRepository $roomRepository): JsonResponse
    {
        $rooms = $roomRepository->findBy([], ['order' => 'ASC']);
        $data = $this->serializer->normalize($rooms, null, ['groups' => 'room:read']);
        return $this->json($data);
    }

    #[Route('/api/rooms', name: 'api_rooms_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $em, RoomRepository $roomRepository): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $room = new Room();
        $room->setName($data['name']);
        $room->setDescription($data['description'] ?? null);
        
        $maxOrder = $roomRepository->findMaxOrder();
        $room->setOrder($maxOrder + 1);

        $em->persist($room);
        $em->flush();

        $data = $this->serializer->normalize($room, null, ['groups' => 'room:read']);
        return $this->json($data);
    }

    #[Route('/api/rooms/{id}', name: 'api_rooms_show', methods: ['GET'])]
    public function show(Room $room): JsonResponse
    {
        $data = $this->serializer->normalize($room, null, ['groups' => 'room:read']);
        return $this->json($data);
    }

    #[Route('/api/rooms/{id}', name: 'api_rooms_update', methods: ['PUT', 'PATCH'])]
    public function update(Request $request, Room $room, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        if (isset($data['name'])) {
            $room->setName($data['name']);
        }
        if (isset($data['description'])) {
            $room->setDescription($data['description']);
        }
        if (isset($data['order'])) {
            $room->setOrder($data['order']);
        }
        $em->flush();

        $data = $this->serializer->normalize($room, null, ['groups' => 'room:read']);
        return $this->json($data);
    }

    #[Route('/api/rooms/{id}', name: 'api_rooms_delete', methods: ['DELETE'])]
    public function delete(Room $room, EntityManagerInterface $em): JsonResponse
    {
        $em->remove($room);
        $em->flush();

        return $this->json(null, 204);
    }

    #[Route('/api/rooms/update-order', name: 'api_rooms_update_order', methods: ['POST'])]
    public function updateOrder(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        foreach ($data as $roomData) {
            $room = $em->getRepository(Room::class)->find($roomData['id']);
            if ($room) {
                $room->setOrder($roomData['order']);
                $em->persist($room);
            }
        }
        $em->flush();

        return new JsonResponse(['status' => 'success']);
    }
}
