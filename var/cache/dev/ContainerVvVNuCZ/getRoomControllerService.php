<?php

namespace ContainerVvVNuCZ;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getRoomControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\RoomController' shared autowired service.
     *
     * @return \App\Controller\RoomController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/framework-bundle/Controller/AbstractController.php';
        include_once \dirname(__DIR__, 4).'/src/Controller/RoomController.php';

        $container->services['App\\Controller\\RoomController'] = $instance = new \App\Controller\RoomController(($container->privates['debug.serializer'] ?? self::getDebug_SerializerService($container)));

        $instance->setContainer(($container->privates['.service_locator.jUv.zyj'] ?? $container->load('get_ServiceLocator_JUv_ZyjService'))->withContext('App\\Controller\\RoomController', $container));

        return $instance;
    }
}
