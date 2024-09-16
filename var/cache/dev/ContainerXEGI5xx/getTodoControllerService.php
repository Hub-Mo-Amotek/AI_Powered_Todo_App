<?php

namespace ContainerXEGI5xx;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getTodoControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\TodoController' shared autowired service.
     *
     * @return \App\Controller\TodoController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/framework-bundle/Controller/AbstractController.php';
        include_once \dirname(__DIR__, 4).'/src/Controller/TodoController.php';
        include_once \dirname(__DIR__, 4).'/src/Service/OpenAIService.php';

        $container->services['App\\Controller\\TodoController'] = $instance = new \App\Controller\TodoController(($container->privates['debug.serializer'] ?? self::getDebug_SerializerService($container)), new \App\Service\OpenAIService($container->getEnv('OPENAI_API_KEY')));

        $instance->setContainer(($container->privates['.service_locator.jUv.zyj'] ?? $container->load('get_ServiceLocator_JUv_ZyjService'))->withContext('App\\Controller\\TodoController', $container));

        return $instance;
    }
}
